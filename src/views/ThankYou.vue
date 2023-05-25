<template>
    <div class="bg-my-black h-screen">
        <div class="flex flex-col justify-center h-full max-w-md mx-auto">
            <IconStarBig class="mb-8 ml-8" />
            <p class="text-white text-6xl font-bold tracking-my-wide leading-main font-contractica mx-auto">მადლობა</p>
            <IconStarSmall class="mx-auto ml-370" />
        </div>
    </div>
</template>

<script>
import IconStarBig from '@/components/icons/IconStarBig.vue';
import IconStarSmall from '@/components/icons/IconStarSmall.vue';

export default {
    components: {
        IconStarBig,
        IconStarSmall
    }
}
</script>