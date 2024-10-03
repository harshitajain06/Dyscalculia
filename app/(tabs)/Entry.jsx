import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, ScrollView } from 'react-native';

const Entry = () => {
  const [text, setText] = useState('');

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Write how you feel!</Text>
      </View>
      <TextInput
        style={styles.textArea}
        placeholder="Begin here..."
        placeholderTextColor="#888"
        multiline={true}
        numberOfLines={10}
        value={text}
        onChangeText={setText}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#fff',
    marginTop: 50,
  },
  headerContainer: {
    backgroundColor: '#F66',
    padding: 20,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    alignItems: 'center',
  },
  headerText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  textArea: {
    marginTop: 20,
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    height: 400, // Adjust to desired height
    textAlignVertical: 'top',
    fontSize: 16,
    lineHeight: 24,
    backgroundColor: '#f9f9f9',
  },
});

export default Entry;