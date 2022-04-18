<template>
  <div class="bg-white dark:bg-black" :class=" dark ? 'dark' : 'light' ">
    <Navbar />
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
