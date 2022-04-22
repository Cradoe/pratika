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

export default Vue.extend({
  name: "IndexPage",
  layout: "landingPage"
})
</script>
