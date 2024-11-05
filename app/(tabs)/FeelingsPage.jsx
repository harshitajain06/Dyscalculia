import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { collection, query, orderBy, onSnapshot, doc, updateDoc, arrayUnion, arrayRemove } from 'firebase/firestore';
import { db } from '../../config/firebase';
import { useNavigation } from '@react-navigation/native';
import { getAuth } from 'firebase/auth';

export default function FeelingsPage() {
  const [entries, setEntries] = useState([]);
  const navigation = useNavigation();
  const auth = getAuth();
  const userId = auth.currentUser?.uid; // Get current user's ID

  useEffect(() => {
    const q = query(collection(db, 'entries'), orderBy('timestamp', 'desc'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const fetchedEntries = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setEntries(fetchedEntries);
    });
    return () => unsubscribe();
  }, []);

  const handleHeart = async (entryId, likedBy) => {
    const entryRef = doc(db, 'entries', entryId);

    if (likedBy.includes(userId)) {
      // If user has already hearted it, remove heart
      await updateDoc(entryRef, {
        hearts: likedBy.length - 1, // Decrease the heart count
        likedBy: arrayRemove(userId), // Remove user ID from likedBy array
      });
    } else {
      // If user hasn't hearted it yet, add heart
      await updateDoc(entryRef, {
        hearts: likedBy.length + 1, // Increase the heart count
        likedBy: arrayUnion(userId), // Add user ID to likedBy array
      });
    }
  };

  const handleBookmark = async (entryId, bookmarked) => {
    const entryRef = doc(db, 'entries', entryId);
    await updateDoc(entryRef, {
      bookmarked: !bookmarked, // Toggle bookmark status
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>How do you feel today?</Text>

      {/* Add New Entry Button */}
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => navigation.navigate('Entry')} // Navigate to Entry page
      >
        <Text style={styles.addButtonText}>Add a new entry...</Text>
      </TouchableOpacity>

      {/* Display Entries */}
      <ScrollView>
        {entries.map((entry) => (
          <View key={entry.id} style={styles.entry}>
            <View style={styles.entryContent}>
              <Text style={styles.entryText}>{entry.text}</Text>
              <Text style={styles.entryDate}>{entry.timestamp.toDate().toDateString()}</Text>
            </View>

            {/* Heart and Bookmark Buttons */}
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.heartButton}
                onPress={() => handleHeart(entry.id, entry.likedBy || [])}
              >
                {/* Display Heart Icon */}
                {entry.likedBy?.includes(userId) ? (
                  <Text style={styles.heartIcon}>❤️</Text> // Filled heart if liked
                ) : (
                  <Text style={styles.heartIcon}>🤍</Text> // Outline heart if not liked
                )}
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.bookmarkButton}
                onPress={() => handleBookmark(entry.id, entry.bookmarked)}
              >
                {/* Display Bookmark Icon */}
                <Text style={styles.bookmarkIcon}>
                  {entry.bookmarked ? '🔖' : '📌'}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFF',
    marginTop: 50,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  addButton: {
    backgroundColor: '#FF6347',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  addButtonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: '600',
  },
  entry: {
    backgroundColor: '#F8F8F8',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    flexDirection: 'row', // Align items in a row
    justifyContent: 'space-between', // Space out items
    alignItems: 'center', // Center vertically
  },
  entryContent: {
    flex: 1, // Take remaining space for text
    marginRight: 10, // Add some space between text and buttons
  },
  entryText: {
    fontSize: 16,
    marginBottom: 5,
  },
  entryDate: {
    fontSize: 12,
    color: '#555',
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  heartButton: {
    padding: 10,
  },
  heartIcon: {
    fontSize: 24, // Adjust size as needed
  },
  bookmarkButton: {
    padding: 10,
  },
  bookmarkIcon: {
    fontSize: 24, // Adjust size as needed
  },
});
