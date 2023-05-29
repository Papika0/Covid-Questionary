<template>
    <div class="container mx-auto">
        <div class="flex flex-col gap-24 text-center justify-center mt-80">
            <MainLogo class="animate-shrink mx-auto" />
            <div class="relative overflow-hidden h-24 mr-48">
                <router-link id="text" to="/identification"
                    class="font-bold group text-3xl whitespace-pre-line font-contractica absolute animate-slide-in invisible hover:drop-shadow-my-shadow">კითხვარის
                    <br> დაწყება
                    <div
                        class="absolute -z-10 top-[1px] left-[2px] transition-all text-white drop-shadow-my-shadow opacity-0 group-hover:opacity-100">
                        კითხვარის <br> დაწყება
                    </div>
                </router-link>
            </div>
        </div>
    </div>
</template>
  
<script setup>
import MainLogo from '@/components/icons/MainLogo.vue';
</script>

