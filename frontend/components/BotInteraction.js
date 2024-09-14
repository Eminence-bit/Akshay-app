import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import { sendTextToBot } from '../api/api';

export default function BotInteraction() {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');

  const handleSubmit = async () => {
    const res = await sendTextToBot(input);
    setResponse(res.data.response);
  };

  return (
    <View>
      <TextInput placeholder="Type here..." onChangeText={setInput} />
      <Button title="Send" onPress={handleSubmit} />
      {response && <Text>{response}</Text>}
    </View>
  );
}
