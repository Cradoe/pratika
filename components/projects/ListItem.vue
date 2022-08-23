<template>
    <section class="py-8 lg:py-16 text-dark-900 dark:text-[#C4C4C4]">
        <div class="flex flex-col xl:flex-row gap-y-2 gap-x-20 relative">
            <div class="relative xl:w-[65vw]">
                <div
                    class="hidden md:block absolute left-0 z-10 top-0 h-full w-11/12 rounded-3xl border border-dotted border-primary border-r-0 lg:border-r">
                </div>
                <nuxt-img class="w-full rounded-sm md:rounded-3xl" :src=" project.image " provider="NextProject"
                    :alt=" project.title " />
            </div>
            <div class="xl:w-[35vw]">
                <h1 class="hidden xl:block font-black text-[#C4C4C4]  text-8xl text-center italic">#{{ number }}</h1>
                <ul class="border border-dotted border-t-0 xl:border-t  border-primary  h-auto text-sm xl:mt-5">
                    <li class="px-4 py-4 border-dotted border-t-0 xl:border-t border border-b-primary">
                        <span class="font-semibold">Project Name: </span> {{ project.title }}
                    </li>

                    <li v-if="project.credits"  class="px-4 py-4 border border-dotted border-b-primary">
                        <span class="font-semibold">Credits:</span>
                        <span v-if=" Array.isArray( project.credits ) ">
                            <a v-for="(                                                                credit, index                                                                ) in                                                                 project.credits                                                                "
                        :key=" index " :href="credit.url" target="_blank" rel="noopener noreferrer">{{ credit.title }}</a>
                        </span>
                    </li>

                    <li v-for="(                                                                feature, index                                                                ) in                                                                 project.features                                                                "
                        :key=" index " class="px-4 py-4 border border-dotted border-b-primary">
                        <span class="font-semibold">{{ feature.title }}:</span>
                        <span v-if=" Array.isArray( feature.value ) ">
                            {{ feature.value.join( " , " ) }}
                        </span>
                        <span v-else>
                            {{ feature.value }}
                        </span>
                    </li>

                    <li class="px-4 py-4">
                        <span class="font-semibold">Description</span>
                        <p>{{ project.description }}</p>
                    </li>
                    <li class="px-4 py-7 flex flex-col md:flex-row justify-between gap-y-4 gap-x-10">
                        <Button v-if=" viewDetailsButton " mode="secondary" class="md:w-6/12"
                            @click=" showDetailsSlide() ">View Details</Button>
                            
                        <Button v-if=" tweetProjectButton " type="link" target="_blank" rel="nofollow" :href="'https://twitter.com/intent/tweet?text='+tweetMessage" mode="twitter" class="md:w-6/12">Tweet</Button>
                    </li>
                </ul>
            </div>

        </div>

        <ProjectDetailsSlide :project=" project " :show=" detailsVisibility ">

            <template #cta-buttons>
                <Button v-if=" tweetProjectButton " type="link" target="_blank" rel="nofollow" :href="'https://twitter.com/intent/tweet?text='+tweetMessage" mode="twitter" class="md:w-6/12">Tweet</Button>

                <Button mode="secondary" class="md:w-6/12" @click=" closeDetails() ">Close&nbsp;Details</Button>
            </template>
        </ProjectDetailsSlide>


    </section>
</template>
<script>
import { ctaLabels } from "@/constants/"
export default {
    props: {
        number: {
            type: Number || String,
            required: true
        },
        cta: {
            type: Array || String,
            default: ''
        },
        project: {
            type: Object,
            required: true
        }
    },
    data () {
        return {
            detailsSlide: false
        }
    },
    computed: {
        viewDetailsButton () {
            if ( this.cta.includes( ctaLabels.VIEW_DETAILS ) ) {
                return true;
            } else {
                return false
            }
        },
        tweetProjectButton () {
            if ( this.cta.includes( ctaLabels.TWEET_PROJECT ) ) {
                return true;
            } else {
                return false
            }
        },
        tweetMessage () {
            return `Check out this project I made: ${this.project.title}`
        },
        detailsVisibility () {
            return this.detailsSlide;
        }
    },
    methods: {
        showDetailsSlide () {
            this.detailsSlide = true;
        },
        closeDetails () {
            this.detailsSlide = false;
        }
    }
}
</script>
