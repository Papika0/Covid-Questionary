<template>
    <FormLayout :page=1>
        <Form @submit="onSubmit">
            <div class="flex flex-row justify-between">
                <div class="flex flex-col mt-10 gap-12">
                    <InputField label="სახელი*" placeholder="იოსებ" name="first_name"
                        :oldValue="this.getAllFormData.first_name" />
                    <InputField label="გვარი*" placeholder="ჯუღაშვილი" name="last_name"
                        :oldValue="this.getAllFormData.last_name" />
                    <InputField label="მეილი*" placeholder="fbi@redberry.ge" name="email" type="email"
                        rules="required|email|redberry_ge" :oldValue="this.getAllFormData.email" />
                    <div class="mt-16">
                        <hr class="border-0.8 border-black w-5/12 mb-5">
                        <p class="text-my-grey">*-ით მონიშნული ველების შევსება <br> სავალდებულოა</p>
                    </div>
                </div>
                <div class="max-h-781">
                    <IconIdentificationRectangle class="absolute mt-56 -z-10 ml-40 animate-slide" />
                    <IconIdentification />
                </div>
            </div>
            <div class="mx-auto flex justify-center">
                <button @click="submitAndNext" class="ml-32">
                    <NextArrow />
                </button>
            </div>
        </Form>
    </FormLayout>
</template>
  
<script>
import { mapGetters } from 'vuex';
import FormLayout from '@/components/layouts/FormLayout.vue';
import IconIdentification from '@/components/icons/identification/IconIdentification.vue';
import IconIdentificationRectangle from '@/components/icons/identification/IconIdentificationRectangle.vue';
import InputField from '@/components/ui/InputField.vue';
import NextArrow from '@/components/icons/IconNextArrow.vue';
import { Form } from 'vee-validate';

export default {
    components: {
        FormLayout,
        IconIdentification,
        IconIdentificationRectangle,
        InputField,
        NextArrow,
        Form
    },
    methods: {
        onSubmit() {
            this.$router.push('/covid-questions');
        }
    },
    computed: {
        ...mapGetters('form', ['getAllFormData']),
    },
};
</script>
  