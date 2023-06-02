import { defineRule } from 'vee-validate';

defineRule('required', (value, _, context) => {
  let label = context.label.replace(/[*:]$/, '').slice(0, -1);
  if (!value) {
    return `გთხოვთ შეავსოთ ${label}ის ველი`;
  }
  return true;
});

defineRule('isChecked', (value) => {
  if (!value) {
    return false;
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

defineRule('date', (value) => {
  const datePattern = /^\d{4}[-/]\d{2}[-/]\d{2}$/;
  if (value && !datePattern.test(value)) {
    return 'თქვენ მიერ შეყვანილი თარიღი არასწორია (მაგ. 2021-10-30)';
  }
  return true;
});

defineRule('number', (value) => {
  const numberPattern = /^\d+$/;
  if (value && !numberPattern.test(value)) {
    return 'თქვენ მიერ შეყვანილი რიცხვი არასწორია';
  }
  else if (!value) {
    return true;
  }
  return true;
});