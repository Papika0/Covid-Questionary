<template>
    <div class="flex flex-col">
        <label :for="name" class=" font-bold text-header text-primary mb-3">{{ label }}</label>
        <Field :type="textType" :placeholder="placeholder" :name="name" :value="oldValue" :rules="rules"
            :label="label || placeholder"
            class="h-12 bg-primary border-0.8 border-primary pl-5 placeholder:text-primary text-lg w-500"
            @input="updateFormData({ field: name, value: $event.target.value })" />
        <ErrorMessage :name="name" class="text-red-500 mt-2 pl-5 text-sm" />
    </div>
</template>

<script>
import { Field, ErrorMessage } from 'vee-validate';
import { mapMutations } from 'vuex';

export default {
    components: {
        Field,
        ErrorMessage
    },
    props: {
        label: {
            type: String,
            required: true
        },
        placeholder: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true,
        },
        oldValue: {
            type: String,
            required: true,
        },
        textType: {
            type: String,
            required: false,
            default: "text"
        },
        rules: {
            type: String,
            required: false,
            default: "required|min:2"
        }
    },
    methods: {
        ...mapMutations('form', ['updateFormData']),
    },
};
</script>

