<template>
    <div class="bg-white dark:bg-dark-900" :class=" theme.dark ? 'dark' : 'light' ">
        <div class="bg-white dark:bg-dark-900">
            <GlobalAlert />
            <slot />
        </div>
    </div>
</template>

<script>

export default {
    computed: {
        theme () {
            return this.$store.state.theme
        }
    },
};
</script>

<style>
html {
    font-family: Roboto, sans-serif;
}
</style>
