<template>
    <FormLayout :page=2>
        <Form @submit="onSubmit">
            <div class="flex flex-row justify-between">
                <div class="flex flex-col mt-10 gap-12 max-w-xl">
                    <div class="flex flex-col gap-2 ">
                        <HeadingParagraph>გაქვს გადატანილი Covid-19?*</HeadingParagraph>
                        <InputRadio name="had_covid" value="yes" label="კი" rules="isChecked"
                            :oldValue="this.getAllFormData.had_covid" />
                        <InputRadio name="had_covid" value="no" label="არა"
                            @click="clearFormData(['had_antibody_test', 'covid_sickness_date', 'antibodies_test_date', 'antibodies_number'])" />
                        <InputRadio name="had_covid" value="have_right_now" label="ახლა მაქვს"
                            @click="clearFormData(['had_antibody_test', 'covid_sickness_date', 'antibodies_test_date', 'antibodies_number'])" />
                    </div>
                    <div class="flex flex-col gap-2 " v-if="checkIfHadCovid()">
                        <HeadingParagraph>ანტისხეულების ტესტი გაქვს გაკეთებული?*</HeadingParagraph>
                        <InputRadio name="had_antibody_test" value="yes" label="კი" rules="isChecked"
                            @click="clearFormData(['covid_sickness_date'])"
                            :oldValue="this.getAllFormData.had_antibody_test" />
                        <InputRadio name="had_antibody_test" value="no" label="არა"
                            @click="clearFormData(['antibodies_test_date', 'antibodies_number'])" />
                    </div>
                    <div class="flex flex-col gap-2" v-if="checkIfHadAntibodyTest('yes')">
                        <HeadingParagraph>თუ გახსოვს, გთხოვ მიუთითე ტესტის მიახლოებითი რიცხვი და ანტისხეულების რაოდენობა*
                        </HeadingParagraph>
                        <InputField placeholder="რიცხვი" name="antibodies_test_date" type="date" rules="date|required"
                            class="px-5" :oldValue="this.getAllFormData.antibodies_test_date" />
                        <InputField placeholder="ანტისხეულების რაოდენობა" name="antibodies_number" rules="number|required"
                            class="px-5" :oldValue="this.getAllFormData.antibodies_number" />
                    </div>
                    <div class="flex flex-col gap-2" v-if="checkIfHadAntibodyTest('no')">
                        <HeadingParagraph>მიუთითე მიახლოებითი პერიოდი (დღე/თვე/წელი) როდის გქონდა Covid-19*
                        </HeadingParagraph>
                        <InputField placeholder="დდ/თთ/წწ" name="covid_sickness_date" type="date" rules="date" class="px-5"
                            :oldValue="this.getAllFormData.covid_sickness_date" />
                    </div>
                </div>
                <div class="max-h-781">
                    <IconQuestionsCircle class="absolute mt-60 ml-20 -z-10 animate-slide" />
                    <IconQuestions />
                </div>
            </div>
            <div class="flex flex-row gap-28 justify-center">
                <BackArrow @click="PreviosPage" class="cursor-pointer" />
                <button>
                    <NextArrow />
                </button>
            </div>
        </Form>
    </FormLayout>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
import FormLayout from '@/components/layouts/FormLayout.vue';
import IconQuestions from '@/components/icons/questions/IconQuestions.vue';
import InputRadio from '@/components/ui/InputRadio.vue';
import IconQuestionsCircle from '@/components/icons/questions/IconQuestionsCircle.vue';
import InputField from '@/components/ui/InputField.vue';
import HeadingParagraph from '@/components/shared/HeadingParagraph.vue';
import NextArrow from '@/components/icons/IconNextArrow.vue';
import BackArrow from '@/components/icons/IconBackArrow.vue';
import { Form } from 'vee-validate';

export default {
    components: {
        FormLayout,
        IconQuestions,
        InputField,
        InputRadio,
        HeadingParagraph,
        IconQuestionsCircle,
        NextArrow,
        BackArrow,
        Form
    },
    computed: {
        ...mapGetters('form', ['getAllFormData']),
    },
    methods: {
        ...mapMutations('form', ['clearFormData']),
        checkIfHadCovid() {
            return this.getAllFormData.had_covid === 'yes';
        },
        checkIfHadAntibodyTest(value) {
            return this.getAllFormData.had_antibody_test == value && this.getAllFormData.had_covid === 'yes';
        },
        PreviosPage() {
            this.$router.push('/identification');
        },
        onSubmit() {
            this.$router.push('/vaccination');
        }
    },

};
</script>