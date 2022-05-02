<template>
    <div>
        <PageHeroSection>
            Recommended <HighlightedHeroWord>Projects</HighlightedHeroWord>
        </PageHeroSection>
        <Container>
            <div class="flex flex-col gap-y-3 md:flex-row justify-between text-sm mt-5 mb-16">
                <div class="flex justify-between md:justify-start md:gap-12 text-secondary">
                    <div>
                        Major: <span class="font-semibold"> {{ currentMajor }}</span>
                    </div>
                    <div>
                        Level: <span class="font-semibold">{{ currentLevel }}</span>
                    </div>
                </div>
                <Button mode="secondary" class="rounded px-10 py-2 md:py-2">Change
                    preference</Button>
            </div>
            <DashboardProjects />
        </Container>

    </div>
</template>

<script>
import Vue from 'vue';
import { projectInfo } from '@/constants/';


export default Vue.extend( {
    name: "DashboardPage",
    data () {
        return {
            currentMajor: "Front-end Development",
            currentLevel: "Easy"
        }
    },
    head () {
        return {
            title: `Dashboard | ${projectInfo.PROJECT_NAME}`
        };
    }
} )
</script>
