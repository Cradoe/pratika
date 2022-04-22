<template>
    <div class="bg-white dark:bg-black" :class=" dark ? 'dark' : 'light' ">
        <LazyNavbar bg-color="bg-[#F8FAFC]">
            <template #cta-button>
                <router-link to="/login"
                    class="ml-6  bg-gradient-to-r from-primary hover:from-primary/75 to-primary/80 hover:to-primary text-white px-6 py-2 rounded-md">
                    Login
                </router-link>
            </template>

        </LazyNavbar>
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
