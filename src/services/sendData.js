import api from '@/plugins/axios/index.js';

export async function sendFormData(formData) {
  return await api.post('/create', JSON.stringify(formData));
}