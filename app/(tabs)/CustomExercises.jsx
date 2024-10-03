import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const data = [
  { id: '1', name: 'Lorem Ipsum' },
  { id: '2', name: 'Lorem Ipsum' },
  { id: '3', name: 'Lorem Ipsum' },
  { id: '4', name: 'Lorem Ipsum' },
];

const CustomExercises = () => {
    const navigation = useNavigation();
  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <View style={styles.placeholderImage} />
      <Text style={styles.text}>{item.name}</Text>
      <TouchableOpacity>
        <Text style={styles.heart}>❤️</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Custom exercises just for you!</Text>
      <View style={styles.header}>
        <TouchableOpacity style={styles.filterButton}>
          <Text style={styles.filterText}>Filter</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.searchButton}>
          <Text style={styles.searchText}>🔍</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={2}
        contentContainerStyle={styles.grid}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    marginTop: 50,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  filterButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#4CAF50',
    borderRadius: 8,
  },
  filterText: {
    color: '#fff',
  },
  searchButton: {
    backgroundColor: '#FF6347',
    padding: 10,
    borderRadius: 50,
  },
  searchText: {
    fontSize: 18,
    color: '#fff',
  },
  grid: {
    justifyContent: 'space-between',
  },
  card: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    margin: 8,
    padding: 16,
    borderRadius: 10,
    alignItems: 'center',
  },
  placeholderImage: {
    width: 80,
    height: 80,
    backgroundColor: '#d3d3d3',
    borderRadius: 10,
  },
  text: {
    marginTop: 8,
    fontSize: 16,
  },
  heart: {
    marginTop: 8,
    fontSize: 20,
    color: 'red',
  },
});

export default CustomExercises;