<template>
  <div>
    <HomeHeroSection />
    <HomeUserTweets />
    <HomeMajors />
    <HomeEnrollSection />
    <HomeTrackAchievements />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { projectInfo } from '@/constants/';

export default Vue.extend({
  name: "IndexPage",
  layout: "landingPage",
  head() {
    return {
      title: `${projectInfo.PROJECT_NAME} - The first open source platform to accelate your skills`
    };
  },
})
</script>
