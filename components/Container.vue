<template>

    <div class="px-4 lg:px-16">
        <div class="container" :class="className">
            <slot></slot>
        </div>
    </div>
</template>

<script lang="ts">

export default {
    name: 'NuxtContainer',
    props: {
        className: {
            type: String,
            default: ""
        }
    }

};
</script>