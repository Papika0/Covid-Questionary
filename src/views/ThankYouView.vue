<template>
    <div class="bg-my-black h-screen">
        <div class="flex flex-col justify-center h-full max-w-md mx-auto">
            <IconStarBig class="mb-8 ml-8 animate-pop-up invisible" />
            <p
                class="text-white text-6xl font-bold tracking-my-wide leading-main font-contractica mx-auto animate-opacity ">
                მადლობა</p>
            <IconStarSmall class="mx-auto ml-370 invisible animate-pop-up-down" />
        </div>
    </div>
</template>

<script>
import IconStarBig from '@/components/icons/thank-you/IconStarBig.vue';
import IconStarSmall from '@/components/icons/thank-you/IconStarSmall.vue';

export default {
    components: {
        IconStarBig,
        IconStarSmall
    }
};
</script>