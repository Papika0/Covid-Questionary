import api from '@/plugins/axios/index.js';

export async function sendFormData(formData) {
  const response = await api.post('/create', JSON.stringify(formData));
  return response.status === 201;
}