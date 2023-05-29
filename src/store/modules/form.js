function getValueFromLocalStorage(key, defaultValue = '') {
  const value = localStorage.getItem(key);
  return value !== null ? value : defaultValue;
}

export default {
  namespaced: true,
  state: {
    formData: {
      first_name: getValueFromLocalStorage('first_name'),
      last_name: getValueFromLocalStorage('last_name'),
      email: getValueFromLocalStorage('email'),
      had_covid: getValueFromLocalStorage('had_covid'),
      had_antibody_test: getValueFromLocalStorage('had_antibody_test'),
      antibodies_test_date: getValueFromLocalStorage('antibodies_test_date'),
      antibodies_number: getValueFromLocalStorage('antibodies_number'),
      covid_sickness_date: getValueFromLocalStorage('covid_sickness_date'),
      had_vaccine: getValueFromLocalStorage('had_vaccine'),
      vaccination_stage: getValueFromLocalStorage('vaccination_stage'),
      i_am_waiting: getValueFromLocalStorage('i_am_waiting'),
      number_of_days_from_office: getValueFromLocalStorage('number_of_days_from_office'),
      non_formal_meetings: getValueFromLocalStorage('non_formal_meetings'),
      what_about_meetings_in_live: getValueFromLocalStorage('what_about_meetings_in_live'),
      tell_us_your_opinion_about_us: getValueFromLocalStorage('tell_us_your_opinion_about_us'),
    },
  },
  mutations: {
    updateFormData(state, payload) {
      state.formData[payload.field] = payload.value;
      localStorage.setItem(payload.field, payload.value);
    },
    clearFormData(state, payload) {
      payload.forEach((field) => {
        state.formData[field] = ''; 
        localStorage.removeItem(field); 
      });
    },
    transformAndSetFormData(state) {
      const {
        antibodies_test_date,
        antibodies_number,
        had_vaccine,
        ...formData
      } = state.formData;

      const updatedFormData = {
        ...formData,
        had_vaccine: had_vaccine === 'yes',
      };

      if (antibodies_number !== '') {
        updatedFormData.antibodies = {
          test_date: antibodies_test_date,
          number: antibodies_number,
        };
      }
      
      state.formData = updatedFormData;
    },
  },
  getters: {
    getAllFormData: (state) => state.formData
  },
  
};