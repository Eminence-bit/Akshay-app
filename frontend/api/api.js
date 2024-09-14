import axios from 'axios';

const API_URL = 'http://localhost:5000';

export const sendTextToBot = async (text) => {
  return await axios.post(`${API_URL}/chat`, { text });
};

export const uploadImage = async (imageUri) => {
  const formData = new FormData();
  formData.append('image', {
    uri: imageUri,
    type: 'image/jpeg',
    name: 'photo.jpg',
  });
  return await axios.post(`${API_URL}/upload-image`, formData);
};
