<template>
    <div class="container mx-auto">
        <div class="mt-24 flex flex-row justify-between border-b-2 border-black pb-4">
            <Redberry @click='toHomePage' />
            <h1 class=" font-bold text-4xl font-fontFamily">{{ page }} / 4</h1>
        </div>
        <slot></slot>
    </div>
</template>

<script>
import Redberry from '@/components/icons/Redberry.vue';
export default {
    props: {
        page: Number
    },
    components: {
        Redberry
    },
    methods: {
        toHomePage() {
            this.$router.push('/');
        }
    }
};
</script>