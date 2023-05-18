<template>
    <FormLayout :page=1>
        <Form @submit="onSubmit">
            <div class="flex flex-row justify-between">
                <div class="flex flex-col mt-10 gap-12">
                    <InputField label="სახელი*" placeholder="იოსებ" name="name" :oldValue="formData.name" />
                    <InputField label="გვარი*" placeholder="ჯუღაშვილი" name="surname" :oldValue="formData.surname" />
                    <InputField label="მეილი*" placeholder="fbi@redberry.ge" name="email" type="email"
                        rules="required|email|redberry_ge" :oldValue="formData.email" />
                    <div class="mt-16">
                        <hr class="border-0.8 border-black w-5/12 mb-5">
                        <p class="text-my-grey">*-ით მონიშნული ველების შევსება <br> სავალდებულოა</p>
                    </div>
                </div>
                <SecondPagePhoto />
            </div>
            <button @click="submitAndNext" class="mx-auto flex pl-32">
                <NextArrow />
            </button>
        </Form>
    </FormLayout>
</template>
  
<script>
import { mapState, mapMutations } from 'vuex';
import FormLayout from '@/components/layouts/FormLayout.vue';
import SecondPagePhoto from '@/components/icons/SecondPagePhoto.vue';
import InputField from '@/components/form/InputField.vue';
import NextArrow from '@/components/icons/NextArrow.vue';
import { Form } from 'vee-validate';

export default {
    components: {
        FormLayout,
        SecondPagePhoto,
        InputField,
        NextArrow,
        Form
    },
    methods: {
        ...mapMutations('form', ['updateFormData', 'getDataFromLocalStorage']),
        onSubmit() {
            this.$router.push('/covid-questions');
        }
    },
    computed: {
        ...mapState('form', ['formData'])
    },
    beforeMount() {
        this.getDataFromLocalStorage();
    }
};
</script>
  