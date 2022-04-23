<template>
    <section class="dark:bg-dark-900 py-16">
        <HomeNumberedSectionHeading number=" 3 " heading="Track your Achievements"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since" />


        <Container>
            <div
                class="grid md:grid-cols-2 xl:grid-cols-3 gap-y-16 md:gap-x-20 xl:gap-x-40 mx-6 md:mx-16 xl:mx-20 mt-12 xl:mt-16">
                <div v-for="(         feature, index         ) in          features         " :key=" index "
                    class="rounded-3xl feature py-8 md:py-16 px-4 md:px-8 xl:px-16 text-center hover:shadow-2xl transition-all duration-200 dark:bg-dark-700">
                    <nuxt-img :src=" feature.image " class="w-24 mx-auto" />
                    <p class="text-secondary dark:text-white/90 text-sm mt-3">{{ feature.caption }} </p>
                </div>
            </div>
        </Container>
    </section>
</template>

<script>
export default {
    data () {
        return {
            features: [
                {
                    image: '/feature-image-01.png',
                    caption: 'Accelerate your skills by recreating real and carefully chosen websites.'
                },
                {
                    image: '/feature-image-01.png',
                    caption: 'Accelerate your skills by recreating real and carefully chosen websites.'
                },
                {
                    image: '/feature-image-01.png',
                    caption: 'Accelerate your skills by recreating real and carefully chosen websites.'
                }
            ]
        }
    }
}
</script>
<style>
.feature {
    box-shadow: 0 4px 10px rgb(0 0 0 / 20%);
}
</style>
