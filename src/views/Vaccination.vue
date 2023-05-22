<template>
    <FormLayout :page=3>
        <Form @submit="onSubmit">
            <div class="flex flex-row justify-between">
                <div class="flex flex-col mt-10 gap-12 ">
                    <div class="flex flex-col gap-2 ">
                        <HeadingParagraph>უკვე აცრილი ხარ?*</HeadingParagraph>
                        <RadioButton name="had_vaccine" value="yes" label="კი" rules="isChecked"
                            :oldValue="this.getAllFormData.had_vaccine" />
                        <RadioButton name="had_vaccine" value="no" label="არა" />
                    </div>
                    <div class="flex flex-col gap-2" v-if="checkIfHadVacine()">
                        <HeadingParagraph>აირჩიე რა ეტაპზე ხარ*</HeadingParagraph>
                        <RadioButton name="vaccination_stage" value="first_dosage_and_registered_on_the_second"
                            label="პირველი დოზა და დარეგისტრირებული ვარ მეორეზე" rules="isChecked"
                            :oldValue="this.getAllFormData.vaccination_stage" />
                        <RadioButton name="vaccination_stage" value="fully_vaccinated" label="სრულად აცრილი ვარ" />
                        <RadioButton name="vaccination_stage" value="first_dosage_and_not_registered_yet"
                            label="პირველი დოზა და არ დავრეგისტრირებულვარ მეორეზე" />
                    </div>
                    <div class="flex flex-col gap-2 " v-else>
                        <HeadingParagraph>რას ელოდები?*</HeadingParagraph>
                        <RadioButton name="i_am_waiting" value="registered_and_waiting"
                            label="დარეგისტრირებული ვარ და ველოდები რიცხვს" rules="isChecked"
                            :oldValue="this.getAllFormData.i_am_waiting" />
                        <RadioButton name="i_am_waiting" value="not_planning" label="არ ვგეგმავ" />
                        <RadioButton name="i_am_waiting" value="had_covid_and_planning_to_be_vaccinated"
                            label="გადატანილი მაქვს და ვგეგმავ აცრას" />
                    </div>

                    <TextSuggestion
                        v-if="this.getAllFormData.vaccination_stage === 'first_dosage_and_not_registered_yet' && checkIfHadVacine()">
                        რომ არ გადადო, <br>
                        ბარემ ახლავე დარეგისტრირდი <br>
                    </TextSuggestion>

                    <TextSuggestion v-if="this.getAllFormData.i_am_waiting === 'not_planning' && !checkIfHadVacine()">👉
                    </TextSuggestion>

                    <TextSuggestion
                        v-if="this.getAllFormData.i_am_waiting === 'had_covid_and_planning_to_be_vaccinated' && !checkIfHadVacine()">
                        ახალი პროტოკოლით კოვიდის გადატანიდან 1 <br>
                        თვის შემდეგ შეგიძლიათ ვაქცინის გაკეთება. <br> <br>

                        👉 რეგისტრაციის ბმული <br>
                    </TextSuggestion>

                </div>
                <FourthPagePhoto />
            </div>
            <div class="flex flex-row gap-28 justify-center">
                <BackArrow @click="PreviosPage" />
                <button>
                    <NextArrow />
                </button>
            </div>
        </Form>
    </FormLayout>
</template>

<script>
import { mapGetters } from 'vuex';
import FormLayout from '@/components/layouts/FormLayout.vue';
import FourthPagePhoto from '@/components/icons/FourthPagePhoto.vue';
import RadioButton from '@/components/form/RadioButton.vue';
import HeadingParagraph from '@/components/form/HeadingParagraph.vue';
import NextArrow from '@/components/icons/NextArrow.vue';
import BackArrow from '@/components/icons/BackArrow.vue';
import TextSuggestion from '@/components/ui/TextSuggestion.vue';
import { Form } from 'vee-validate';

export default {
    components: {
        FormLayout,
        FourthPagePhoto,
        RadioButton,
        HeadingParagraph,
        TextSuggestion,
        NextArrow,
        BackArrow,
        Form
    },
    computed: {
        ...mapGetters('form', ['getAllFormData']),
    },
    methods: {
        PreviosPage() {
            this.$router.push('/covid-questions');
        },
        onSubmit() {
            this.$router.push('/suggestions');
        },
        checkIfHadVacine() {
            return this.getAllFormData.had_vaccine === 'yes';
        },
    },

};
</script>