<template>
    <section class="lg:py-8">
        <div v-if="projects && projects.length > 0 ">

        <ProjectsListItem  
            v-for="(                                                 project, index                                                 ) in                                                  projects                                                 "
            :key=" index " :number=" index + 1 " :project=" project " :cta=" ctaButtons " />
        </div>
        <div v-else>
            <div class="text-2xl min-h-[30vh] md:leading-tight md:text-[2.41rem] lg:text-[3.01rem] dark:text-white flex justify-center items-center font-black text-center">
               No project is available for this search filter.
            </div>
        </div>
    </section>
</template>
<script>

import { ctaLabels } from "@/constants/"
import { recommendedProjects } from "~/contents";

export default {
    name: "NuxtList",
    props: {
        niche: {
            type: String,
            required: true
        },
        level: {
            type: String,
            required: true
        }
    },
    data () {
        return {
            projects: [],
            ctaButtons: [ ctaLabels.TWEET_PROJECT, ctaLabels.VIEW_DETAILS ]
        }
    },
    mounted () {
        this.getRecommendedProjects()
    },
    methods:{
        getRecommendedProjects () {
            this.projects  = this.niche !== 'all' ? recommendedProjects[this.niche][this.level] : recommendedProjects.all[this.level];
        }
    }
};

</script>
