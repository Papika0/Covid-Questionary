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
        name: {
            type: String,
            required: true
        },
        value: {
            type: String,
            required: true
        },
        label: {
            type: String,
            required: true
        },
        rules: {
            type: String,
            required: false,
            default: ""
        },
        oldValue: {
            type: String,
            required: true
        }
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
