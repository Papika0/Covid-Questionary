import mutations from "@/store/modules/form/mutations";
import actions from "@/store/modules/form/actions";
import getters from "@/store/modules/form/getters";

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
    mutations,
    getters,
    actions,
}