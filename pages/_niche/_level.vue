<template>
    <div>
        <PageHeroSection>
            Recommended <HighlightedHeroWord>Projects</HighlightedHeroWord>
        </PageHeroSection>
        <Container>
            <div class="flex flex-col gap-y-3 md:flex-row justify-between text-sm mt-5 mb-16">
                <div class="flex justify-between md:justify-start md:gap-12 text-secondary">
                    <div>
                        Major: <span class="font-semibold"> {{ currentMajor.name  }}</span>
                    </div>
                    <div>
                        Level: <span class="font-semibold">{{ currentLevel }}</span>
                    </div>
                </div>
                <Button mode="secondary" class="rounded px-10 py-2 md:py-2">Change
                    preference</Button>
            </div>
            <ProjectsList :niche="currentMajor.slug" :level="currentLevel" />
        </Container>

    </div>
</template>

<script>
import Vue from 'vue';
import { projectInfo, availableMajors} from '@/contents/';

// const { data } =  await this.$axios.get(`/api/projects/${major}/${level}`);
// Front-end Development
export default Vue.extend( {
    name: "RecommendedProjectsPage",
    asyncData({ params }) {
        const { niche, level = "Easy"} = params;

        // find major that matches the paramter 
        const matchedMajor = availableMajors.find(major => major.slug === niche);
        return {
            currentMajor: matchedMajor || { name: "All", slug: "all" },
            currentLevel: level,
            projects: []
        };
    },    
    head () {
        return {
            title: `${ this.currentMajor?.name || "All"} Projects | ${projectInfo.PROJECT_NAME}`
        };
    }
} )
</script>
