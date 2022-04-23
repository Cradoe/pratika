<template>
    <router-link :to="to"
        class="lg:ml-6  bg-gradient-to-r from-primary hover:from-primary/75 to-primary/80 hover:to-primary text-white px-4 py-2 lg:px-6 rounded lg:rounded-md text-xs lg:text-sm">
        {{ text }}
    </router-link>
</template>
<script lang="ts" setup>

export default {
    props: {
        to: {
            type: String,
            required: true
        },
        text: {
            type: String,
            required: true
        }
    }
}
</script>

