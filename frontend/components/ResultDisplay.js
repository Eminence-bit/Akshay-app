import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ResultsDisplay({ result }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Analysis Results</Text>
      <Text style={styles.resultText}>{result?.result || 'No results to display.'}</Text>
      <Text style={styles.precautionsTitle}>Precautions</Text>
      <Text style={styles.precautionsText}>{result?.precautions || 'No precautions available.'}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    marginVertical: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  resultText: {
    fontSize: 16,
    marginBottom: 10,
  },
  precautionsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  precautionsText: {
    fontSize: 16,
    color: 'darkred',
  },
});
