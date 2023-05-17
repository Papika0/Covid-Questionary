<template>
    <div class="container mx-auto">
        <div class="flex flex-col gap-24 text-center justify-center mt-80">
            <MainLogo class="w-28 mx-auto" />
            <router-link to="/identification" class="font-bold text-3xl whitespace-pre-line">კითხვარის <br>
                დაწყება</router-link>
        </div>
    </div>
</template>

<script setup>
import MainLogo from '@/components/icons/MainLogo.vue';
</script>