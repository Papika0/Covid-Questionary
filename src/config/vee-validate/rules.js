import { defineRule } from 'vee-validate';

defineRule('required', (value, _ , context) => {
    if (!value) {
      return `გთხოვთ შეავსოთ ${context.label.slice(0, -1)}ს ველი`;
    }
    return true;
  });
  
defineRule('min', (value, length, context) => {
    if (value && value.length < length) {
      return `${context.label.slice(0, -1)}ს ველი უნდა შედგებოდეს მინიმუმ ${length} სიმბოლოსგან`;
    }
    return true;
  });
  
  defineRule('email', (value) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (value && !emailPattern.test(value)) {
      return 'თქვენ მიერ შეყვანილი მეილი არასწორია';
    }
    return true;
  });
  
  defineRule('redberry_ge', (value) => {
    const redberryPattern = /@redberry\.ge$/;
    if (value && !redberryPattern.test(value)) {
      return 'გთხოვთ დარეგისტრირდეთ Redberry-ს მეილით (youremail@redberry.ge)';
    }
    return true;
  });