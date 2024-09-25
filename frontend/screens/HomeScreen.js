import React from 'react';
import { View, Button, StyleSheet, SafeAreaView } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button title="Chat with Bot" onPress={() => navigation.navigate('Chat')} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Image Analysis" onPress={() => navigation.navigate('ImageAnalysis')} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f9f9f9', // Light background color
  },
  buttonContainer: {
    marginVertical: 10, 
    width: '40%', 
  },
});
