export default {
  namespaced: true,
  state: {
    formData: {
      name: '',
      surname: '',
      email: '',
    },
  },
  mutations: {
    updateFormData(state, payload) {
      state.formData[payload.field] = payload.value;
      localStorage.setItem(payload.field, payload.value);
    },
    getDataFromLocalStorage(state) {
      state.formData.name = localStorage.getItem('name');
      state.formData.surname = localStorage.getItem('surname');
      state.formData.email = localStorage.getItem('email');
    }
  }
};