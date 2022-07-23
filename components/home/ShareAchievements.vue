<template>
    <section class="dark:bg-dark-900 pb-16 mb-4">
        <HomeNumberedSectionHeading number=" 2 " heading="Share your Achievements"
            description="Accomplishment stories, a way to learn in public can provide that critical information, proving that you're credible and good at what you do." />

        <Container>
            <div
                class="grid md:grid-cols-2 xl:grid-cols-3 gap-y-16 md:gap-x-20 xl:gap-x-40 mx-6 md:mx-16 xl:mx-20 mt-12 xl:mt-16">
                <div v-for="(           feature, index           ) in            features           " :key=" index "
                    class="rounded-md xl:rounded-3xl feature py-8 md:py-16 px-4 md:px-8 xl:px-16 text-center hover:shadow-2xl transition-all duration-200 dark:bg-dark-700">
                    
                    <nuxt-img :src=" feature.image " class="w-24 mx-auto " :class="feature.imageDark ? 'block dark:hidden' : 'block'" />

                    <nuxt-img v-if="feature.imageDark" :src=" feature.imageDark" class="w-24 mx-auto hidden dark:block" />
                    <p class="text-secondary dark:text-white/90 text-sm mt-3">{{ feature.caption }} </p>
                </div>
            </div>
        </Container>
    </section>
</template>

<script>

import { projectInfo } from '@/contents/';

export default {
    data () {
        return {
            features: [
                {
                    image: '/selection-icon.png',
                    imageDark: '/selection-icon-white.png',
                    caption: 'Pick a project, and see how you can improve your skills.'
                },
                {
                    image: '/twitter.png',
                    caption: 'Come back to click the Tweet button and share your accomplishments with the whole world.'
                },
                {
                    image: '/happy-face.png',
                    caption: `Tag our Twitter handle (@${projectInfo?.PUBLIC_LINKS?.twitter?.handle}) and we'll be happy to retweet your achievement story.`
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
