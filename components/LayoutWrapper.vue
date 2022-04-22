<template>
    <div class="bg-white dark:bg-black" :class=" dark ? 'dark' : 'light' ">
        <slot />
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
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
