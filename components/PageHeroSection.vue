<template>
    <div :class="sectionHeight" class="bg-[#F8FAFC] dark:bg-dark-700">
        <Container
            :class-name="sectionHeight + ' flex flex-col gap-y-12 md:flex-row justify-center md:justify-between items-center'">
            <div class="text-2xl md:leading-tight md:text-[2.41rem] lg:text-[3.01rem] dark:text-white font-black">
                <slot />
            </div>
            <div v-if="heroImage" class="relative h-auto lg:h-[45vh] md:w-[24rem] 4xl:w-auto flex justify-center">
                <nuxt-img :src="heroImage"
                    class="w-[10rem] md:w-[12rem] lg:w-[18rem] 4xl:w-[40rem]  lg:absolute 4xl:relative lg:-bottom-16" />
            </div>
        </Container>
    </div>
</template>
<script lang="ts" setup>
export default {
    props: {
        heroImage: {
            type: String || null,
            default: null
        }
    },
    data() {
        return {
            sectionHeight: "h-[20vh] md:h-[30vh] lg:h-[45vh]"
        }
    }

}
</script>
