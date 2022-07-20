<template>
    <section
        class="bg-[#F8FAFC] dark:bg-dark-900 py-16 md:py-32 xl:py-0  xl:h-[75vh] flex items-center justify-center flex-col">
        <div class="w-11/12 lg:w-9/12 mx-auto  text-center">
            <h1 class="text-2xl md:text-4xl lg:text-7xl font-black dark:text-white">
                The first open source platform <br class="hidden xl:block" /> to accelate your <span
                    class="text-primary border-primary border-b-2 lg:border-b-8">developer</span> skills
            </h1>
            <p
                class="text-[#475569] dark:text-white/80 text-sm lg:text-base w-11/12 lg:w-9/12 mx-auto mt-4 md:mt-9 lg:mt-12 ">
                Lorem
                Ipsum is
                simply
                dummy text
                of the
                printing
                and typesetting
                industry.
                Lorem
                Ipsum has been the
                industry's standard dummy text ever sincez</p>
            <PreferenceForm />
        </div>
    </section>
</template>
<script>

export default {
    name: "HeroSection",
}
</script>
