<template>
    <section class="lg:py-8">
        <ProjectsListItem
            v-for="(                                                 project, index                                                 ) in                                                  projects                                                 "
            :key=" index " :number=" index + 1 " :project=" project " :cta=" ctaButtons " />

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
            this.projects  = this.niche !== 'all' ? recommendedProjects[this.niche][this.level] : recommendedProjects.all[this.level] 
        }
    }
};

</script>
