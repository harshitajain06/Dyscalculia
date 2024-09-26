import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

export default function FeelingsPage() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>How do you feel today?</Text>
      
      {/* Calendar and Goals Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.topButton}>
          <Text style={styles.buttonText}>Calendar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.topButton}>
          <Text style={styles.buttonText}>Goals</Text>
        </TouchableOpacity>
      </View>
      
      {/* Add New Entry Button */}
      <TouchableOpacity style={styles.addButton}>
        <Text style={styles.addButtonText}>Add a new entry...</Text>
      </TouchableOpacity>
      
      {/* Entries */}
      <ScrollView>
        <View style={styles.entry}>
          <View style={styles.box} />
          <View style={styles.entryContent}>
            <Text style={styles.entryTitle}>X/Y/Z</Text>
            <Text style={styles.entryDescription}>
              illo inventore veritatis et quasi architecto beatae vitae dicta.
            </Text>
            <Text style={styles.linkText}>Click for more</Text>
          </View>
          <View style={styles.icons}>
            <Text style={styles.icon}>❤️</Text>
            <Text style={styles.icon}>🔖</Text>
          </View>
        </View>

        {/* Duplicate for multiple entries */}
        <View style={styles.entry}>
          <View style={styles.box} />
          <View style={styles.entryContent}>
            <Text style={styles.entryTitle}>X/Y/Z</Text>
            <Text style={styles.entryDescription}>
              illo inventore veritatis et quasi architecto beatae vitae dicta.
            </Text>
            <Text style={styles.linkText}>Click for more</Text>
          </View>
          <View style={styles.icons}>
            <Text style={styles.icon}>❤️</Text>
            <Text style={styles.icon}>🔖</Text>
          </View>
        </View>
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
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginBottom: 20,
  },
  topButton: {
    backgroundColor: '#2E8B57',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginLeft: 10,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '600',
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
    flexDirection: 'row',
    backgroundColor: '#F8F8F8',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    alignItems: 'center',
  },
  box: {
    width: 80,
    height: 60,
    backgroundColor: '#CCC',
    borderRadius: 10,
    marginRight: 20,
  },
  entryContent: {
    flex: 1,
  },
  entryTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  entryDescription: {
    color: '#555',
    marginBottom: 5,
  },
  linkText: {
    color: '#FF6347',
  },
  icons: {
    flexDirection: 'row',
  },
  icon: {
    fontSize: 24,
    marginHorizontal: 5,
  },
});