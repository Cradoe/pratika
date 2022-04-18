<template>
  <div class="bg-white dark:bg-black" :class=" dark ? 'dark' : 'light' ">
    <LazyNavbar />
    <Nuxt />
    <Footer />
  </div>
</template>
<script>
import { mapGetters } from 'vuex';

export default {
  name: "NuxtDefault",
  computed: {
    ...mapGetters( [ 'dark' ] ),
  },
};
</script>

<style>
html {
  font-family: Roboto, sans-serif;
}
</style>
