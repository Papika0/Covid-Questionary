<template>
    <textarea :name="name" rows="5" class="border border-primary bg-primary text-primary outline-none text-xl p-5"
        :value="oldValue" @input="updateFormData({ field: name, value: $event.target.value })"></textarea>
</template>

<script>
import { mapMutations } from 'vuex';
export default {
    props: {
        name: {
            type: String,
            required: true,
        },
        oldValue: {
            type: String,
            required: true,
        }
    },

    methods: {
        ...mapMutations('form', ['updateFormData']),
    },
}

</script>