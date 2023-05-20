<template>
    <div class="flex gap-5">
        <Field type="radio" :name="name" :value="value" class="w-6 h-6 checked:accent-primary" :rules='rules'
            v-model="radioValue" @click="updateFormData({ field: name, value: $event.target.value })" />
        <label :for="name" class=" text-primary text-xl"> {{ label }}</label>
    </div>
</template>

<script>
import { Field, ErrorMessage } from 'vee-validate';
import { mapMutations, mapGetters } from 'vuex';
export default {
    components: {
        Field,
        ErrorMessage
    },
    props: {
        name: String,
        value: String,
        label: String,
        rules: {
            type: String,
            default: ""
        },
        oldValue: String
    },
    data() {
        return {
            radioValue: null
        };
    },
    computed: {
        ...mapGetters('form', ['getAllFormData']),
    },
    methods: {
        ...mapMutations('form', ['updateFormData']),
        handleRadioButtonChange() {
            this.updateFormData({ [this.name]: this.radioValue });
        }
    },
    mounted() {
        this.radioValue = this.oldValue;
        this.handleRadioButtonChange();
    }
}
</script>
