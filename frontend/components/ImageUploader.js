import React, { useState } from 'react';
import { View, Button, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { uploadImage } from '../api/api';

export default function ImageUploader() {
  const [image, setImage] = useState(null);
  const [result, setResult] = useState('');

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
    });

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  const handleUpload = async () => {
    const res = await uploadImage(image);
    setResult(res.data.result);
  };

  return (
    <View>
      <Button title="Pick an image from gallery" onPress={pickImage} />
      {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
      <Button title="Upload" onPress={handleUpload} />
      {result && <Text>{result}</Text>}
    </View>
  );
}
