import axios from 'axios';

const API_URL = 'http://localhost:8000'; // Update with your backend URL

export const analyzeECG = async (formData: FormData) => {
  const response = await axios.post(`${API_URL}/predict`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return response;
};