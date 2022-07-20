<template>
    <div>
        <PageHeroSection>
            Recommended <HighlightedHeroWord>Projects</HighlightedHeroWord>
        </PageHeroSection>
        <Container>
            <div class="flex flex-col gap-y-3 md:flex-row justify-between text-sm mt-5 mb-16">
                <div class="flex justify-between md:justify-start md:gap-12 text-secondary dark:text-[#C4C4C4]">
                    <div>
                        Major: <span class="font-semibold capitalize"> {{ currentMajor.name }}</span>
                    </div>
                    <div>
                        Level: <span class="font-semibold capitalize">{{ currentLevel }}</span>
                    </div>
                </div>
                <RecommendationPreference :current-major="currentMajor" :current-level="currentLevel" />
            </div>
            <ProjectsList :niche="currentMajor.slug" :level="currentLevel" />
        </Container>

    </div>
</template>

<script>
import Vue from 'vue';
import { projectInfo, availableMajors,experienceLevels} from '@/contents/';

export default Vue.extend( {
    name: "RecommendedProjectsPage",
    asyncData({ redirect,params }) {
        const { niche, level} = params;

        // find major that matches the paramter 
        const matchedMajor = availableMajors.find(major => major.slug === niche);
        const matchedLevel = experienceLevels.find(l =>l.toLowerCase() === level.toLowerCase());

        // redirect to 404 page if no match found
        if (!matchedMajor || !matchedLevel) {
            redirect('/404');
        }

        return {
            currentMajor: matchedMajor,
            currentLevel: matchedLevel.toLowerCase()
        };
    },   
    head () {
        return {
            title: `${ this.currentMajor?.name} Projects | ${projectInfo.PROJECT_NAME}`
        };
    }
} )
</script>
