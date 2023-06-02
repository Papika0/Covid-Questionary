import api from '@/config/axios/index.js';

export async function createFormData(formData) {
    try {
      const response = await api.post('/create', JSON.stringify(formData));
      if (response.status === 201) {
        return response.data;
      } else {
        throw new Error('API request was not successful');
      }
    } catch (error) {
      throw error;
    }
  }