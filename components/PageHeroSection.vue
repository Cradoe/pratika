<template>
    <div :class="sectionHeight" class="bg-[#F8FAFC] mb-32">
        <Container
            :class-name="sectionHeight + ' flex flex-col lg:flex-row justify-center lg:justify-between lg:items-center'">
            <div class="text-2xl lg:text-[3.41rem] font-black">
                <slot />
            </div>
            <div :class="sectionHeight" class="relative lg:w-[24rem] ">
                <nuxt-img :src="heroImage"
                    class="w-[10rem] lg:w-[24rem] left-[20%] absolute -bottom-16 lg:-bottom-16" />
            </div>
        </Container>
    </div>
</template>

<script lang="ts" setup>
    export default {
        props: {
            heroImage: {
                type: String,
                default: ''
            }
        },
        data () {
            return {
                sectionHeight: "h-[50vh]"
            }
        }

    }
</script>
