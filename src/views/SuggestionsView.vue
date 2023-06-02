<template>
    <FormLayout :page=4>
        <Form @submit="onSubmit">
            <div class="flex flex-row justify-between">
                <div class="flex flex-col mt-10 gap-12 max-w-630">
                    <div>
                        <p class="text-header text-primary leading-header">რედბერის მთავარი ღირებულება ჩვენი გუნდის თითოეული
                            წევრია. გარემო, რომელსაც ჩვენი თანამშრომლები ქმნით, ბევრისთვის არის და ყოფილა წლების
                            განმავლობაში მიზნებისთვის ერთად ბრძოლის
                            მიზეზი, ბევრისთვის კი — ჩვენთან გადმოსვლის.
                            <br>
                            <br>
                            პანდემიის პერიოდში ერთმანეთსაც იშვიათად ვნახულობთ პირისპირ და ყოველდღიური კომუნიკაციაც
                            გაიშვიათდა.
                        </p>
                    </div>
                    <div class="flex flex-col gap-2 ">
                        <HeadingParagraph>რა სიხშირით შეიძლება გვქონდეს საერთო არაფორმალური ონლაინ შეხვედრები, სადაც ყველა
                            სურვილისამებრ ჩაერთვება?*</HeadingParagraph>
                        <InputRadio name="non_formal_meetings" value="twice_a_week" label="კვირაში ორჯერ" rules="isChecked"
                            :oldValue="this.getAllFormData.non_formal_meetings" />
                        <InputRadio name="non_formal_meetings" value="once_a_week" label="კვირაში ერთხელ" />
                        <InputRadio name="non_formal_meetings" value="once_in_a_two_weeks" label="ორ კვირაში ერთხელ" />
                        <InputRadio name="non_formal_meetings" value="once_in_a_month " label="თვეში ერთხელ" />
                    </div>
                    <div class="flex flex-col gap-2">
                        <HeadingParagraph>კვირაში რამდენი დღე ისურვებდი ოფისიდან მუშაობას?*</HeadingParagraph>
                        <InputRadio name="number_of_days_from_office" value="0" label="0" rules="isChecked"
                            :oldValue="this.getAllFormData.number_of_days_from_office" />
                        <InputRadio name="number_of_days_from_office" value="1" label="1" />
                        <InputRadio name="number_of_days_from_office" value="2" label="2" />
                        <InputRadio name="number_of_days_from_office" value="3" label="3" />
                        <InputRadio name="number_of_days_from_office" value="4" label="4" />
                        <InputRadio name="number_of_days_from_office" value="5" label="5" />
                    </div>
                    <div class="flex flex-col gap-5">
                        <HeadingParagraph>რას ფიქრობ ფიზიკურ შეკრებებზე?</HeadingParagraph>
                        <InputTextarea name="what_about_meetings_in_live"
                            :oldValue="this.getAllFormData.what_about_meetings_in_live" />
                    </div>
                    <div class="flex flex-col gap-5">
                        <HeadingParagraph>რას ფიქრობ არსებულ გარემოზე:
                            რა მოგწონს, რას დაამატებდი, რას შეცვლიდი?</HeadingParagraph>
                        <InputTextarea name="tell_us_your_opinion_about_us"
                            :oldValue="this.getAllFormData.tell_us_your_opinion_about_us" />
                    </div>
                    <div><button
                            class=" float-right bg-my-button py-4 px-7 text-white rounded-full hover:bg-slate-500">დასრულება</button>
                    </div>

                </div>
                <div class="max-h-781 ">
                    <IconSuggestionsHeart class="absolute mt-32 -z-10 ml-24 animate-shrink-little" />
                    <IconSuggestions />
                </div>

            </div>
            <div class="flex flex-row gap-28 justify-center mt-20 mb-24">
                <BackArrow @click="PreviosPage" class="cursor-pointer" />
            </div>
        </Form>
    </FormLayout>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
import FormLayout from '@/components/layouts/FormLayout.vue';
import IconSuggestions from '@/components/icons/suggestions/IconSuggestions.vue';
import IconSuggestionsHeart from '@/components/icons/suggestions/IconSuggestionsHeart.vue';
import InputRadio from '@/components/ui/InputRadio.vue';
import HeadingParagraph from '@/components/shared/HeadingParagraph.vue';
import NextArrow from '@/components/icons/IconNextArrow.vue';
import BackArrow from '@/components/icons/IconBackArrow.vue';
import TextSuggestion from '@/components/shared/TextSuggestion.vue';
import InputTextarea from '@/components/ui/InputTextarea.vue';
import { createFormData } from '@/services/sendData.js';
import { Form } from 'vee-validate';

export default {
    components: {
        FormLayout,
        IconSuggestions,
        IconSuggestionsHeart,
        InputRadio,
        HeadingParagraph,
        TextSuggestion,
        InputTextarea,
        NextArrow,
        BackArrow,
        Form
    },
    computed: {
        ...mapGetters('form', ['getAllFormData']),
    },
    methods: {
        ...mapMutations('form', ['transformAndSetFormData']),
        PreviosPage() {
            this.$router.push('/vaccination');
        },
        async onSubmit() {
            this.transformAndSetFormData();
            const filteredPairs = Object.entries(this.getAllFormData).filter(([key, value]) => value !== '');
            const filteredObject = Object.fromEntries(filteredPairs);
            try {
                await createFormData(filteredObject);
                this.$router.push('/thank-you');
                localStorage.clear();
            } catch (error) {
                console.log(error);
            }
        },
    },

};
</script>