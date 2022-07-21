<template>
  <div>
    <HomeHeroSection />
    <HomeUserTweets />
    <HomeMajors />
    <HomeShareAchievements />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { projectInfo } from '@/contents/';

export default Vue.extend({
  name: "IndexPage",
  layout: "landingPage",
  head() {
    return {
      title: `${projectInfo.PROJECT_NAME} - ${projectInfo.TAG_LINE}`
    };
  },
})
</script>
