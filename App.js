import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function App() {
  const [greeting, setGreeting] = useState('Happy Birthday!');
  const [message, setMessage] = useState('');

  const handleGreetingChange = (text) => {
    setGreeting(text);
  };

  const handleAddToCard = () => {
    if (message) {
      setGreeting(`${greeting}\n\n${message}`);
      setMessage('');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Digital Birthday Card</Text>
     
      <View style={styles.card}>
        <Text style={styles.greeting}>{greeting}</Text>
      </View>
      <TextInput
        style={styles.input}
        placeholder="Enter  birthday wish message"
        value={message}
        onChangeText={setMessage}
      />
      <Button title="Add to Card" onPress={handleAddToCard} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    borderWidth: 1,
    padding: 10,
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 150,
    width: '100%',
    marginBottom: 20,
  },
  greeting: {
    fontSize: 18,
    textAlign: 'center',
  },
});
