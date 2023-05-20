function getValueFromLocalStorage(key, defaultValue = '') {
  const value = localStorage.getItem(key);
  return value !== null ? value : defaultValue;
}

export default {
  namespaced: true,
  state: {
    formData: {
      name: getValueFromLocalStorage('name'),
      surname: getValueFromLocalStorage('surname'),
      email: getValueFromLocalStorage('email'),
      had_covid: getValueFromLocalStorage('had_covid'),
      had_antibody_test: getValueFromLocalStorage('had_antibody_test'),
      antibodies_test_date: getValueFromLocalStorage('antibodies_test_date'),
      antibodies_number: getValueFromLocalStorage('antibodies_number'),
      covid_sickness_date: getValueFromLocalStorage('covid_sickness_date'),
    },
  },
  mutations: {
    updateFormData(state, payload) {
      state.formData[payload.field] = payload.value;
      localStorage.setItem(payload.field, payload.value);
    },
  },
  getters: {
    getAllFormData: (state) => state.formData
  },
};