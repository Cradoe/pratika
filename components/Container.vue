<template>

    <div class="px-4 md:px-6 lg:px-16  4xl:px-56">
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