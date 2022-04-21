<template>
    <div class="text-center">
        <div
            class="rounded-full h-8 w-8 flex justify-center items-center mx-auto bg-gradient-to-tr from-[#EA5A09] to-[#EA5A09]/70 text-white">
            {{ number }}
        </div>
        <div class="h-8 w-[0.163rem] mx-auto bg-gradient-to-b from-[#EA5A09] to-secondary text-white"></div>

        <h1 class="text-2xl md:text-4xl lg:text-3xl font-black text-secondary dark:text-white">
            {{ heading }}
        </h1>
        <p class="text-[#475569] dark:text-white/80 text-sm lg:text-base w-11/12 lg:w-5/12 mx-auto mt-3">
            {{ description }}
        </p>

    </div>
</template>
<script>

export default {
    props: {
        'number': {
            type: String,
            required: true
        },
        'heading': {
            type: String,
            required: true
        },
        'description': {
            type: String,
            required: true
        }
    }
}
</script>
