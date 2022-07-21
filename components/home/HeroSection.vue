<template>
    <section
        class="bg-[#F8FAFC] dark:bg-dark-900 py-16 md:py-32 xl:py-0  xl:h-[75vh] flex items-center justify-center flex-col">
        <div class="w-11/12 lg:w-9/12 mx-auto  text-center">
            <h1 class="text-2xl md:text-4xl lg:text-7xl font-black dark:text-white">
                Enhance your competencies with  
                <br class="hidden xl:block" /> <span
                    class="text-primary border-primary border-b-2 lg:border-b-8">projects</span> that matters
            </h1>
            <p
                class="text-[#475569] dark:text-white/80 text-sm lg:text-base w-11/12 lg:w-9/12 mx-auto mt-4 md:mt-9 lg:mt-12 ">
                The basic tenet of learning by doing is that as we perform an action, we can learn more about it. We have gathered a number of language and framework-specific listings of practical projects.</p>
            <div class="px-[5vw]">
                <PreferenceForm cta-button="Get Started" />
            </div>
        </div>
    </section>
</template>
<script>

export default {
    name: "HeroSection",
}
</script>
