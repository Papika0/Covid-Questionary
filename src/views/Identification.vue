<template>
    <FormLayout :page=1>
        <div class="flex flex-row justify-between">
            <div class="flex flex-col mt-10 gap-12">
                <InputField label="სახელი*" placeholder="იოსებ" name="name" ref="nameField" :oldValue="formData.name"
                    @input="updateFormData({ field: 'name', value: $event.target.value })" />
                <InputField label="გვარი*" placeholder="ჯუღაშვილი" name="surname" ref="surnameField"
                    @input="updateFormData({ field: 'surname', value: $event.target.value })"
                    :oldValue="formData.surname" />
                <InputField label="მეილი*" placeholder="fbi@redberry.ge" name="email" type="email" ref="emailField"
                    @input="updateFormData({ field: 'email', value: $event.target.value })" :oldValue="formData.email" />
                <div class="mt-16">
                    <hr class="border-0.8 border-black w-5/12 mb-5">
                    <p class="text-my-grey">*-ით მონიშნული ველების შევსება <br> სავალდებულოა</p>
                </div>
            </div>
            <SecondPagePhoto />
        </div>
        <NextArrow class="mx-auto" @click="submitAndNext" />
    </FormLayout>
</template>
  
<script>
import { mapState, mapMutations } from 'vuex';
import FormLayout from '@/components/layouts/FormLayout.vue';
import SecondPagePhoto from '@/components/icons/SecondPagePhoto.vue';
import InputField from '@/components/form/InputField.vue';
import NextArrow from '@/components/icons/NextArrow.vue';

export default {
    components: {
        FormLayout,
        SecondPagePhoto,
        InputField,
        NextArrow
    },
    methods: {
        ...mapMutations('form', ['updateFormData', 'getDataFromLocalStorage']),
        submitAndNext() {
            this.$refs.nameField.validate();
            this.$refs.surnameField.validate();
            this.$refs.emailField.validate();

            if (!this.$refs.nameField.error && !this.$refs.surnameField.error && !this.$refs.emailField.error) {
                this.$router.push('/covid-questions');
            }
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
  