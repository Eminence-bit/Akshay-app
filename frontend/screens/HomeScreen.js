import React from 'react';
import { View, Button } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View>
      <Button title="Chat with Bot" onPress={() => navigation.navigate('Chat')} />
      <Button title="Image Analysis" onPress={() => navigation.navigate('ImageAnalysis')} />
    </View>
  );
}
