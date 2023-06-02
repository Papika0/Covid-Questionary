export default {
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
      }
}