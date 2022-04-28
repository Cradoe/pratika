<template>
    <section class="py-8 lg:py-16 text-dark-900">
        <div class="flex flex-col xl:flex-row gap-y-2 gap-x-10 relative">
            <div class="relative">
                <div
                    class="absolute left-0 z-10 top-0 h-full w-11/12 rounded-3xl border border-primary border-r-0 lg:border-r">
                </div>
                <nuxt-img class="w-[100vw]  rounded-3xl" :src="project.image" provider="NextProject"
                    :alt="project.title" />
            </div>
            <div>
                <h1 class="hidden xl:block font-black text-[#C4C4C4] text-8xl text-center italic">#{{ number }}</h1>
                <ul class="border border-t-0 xl:border-t  border-primary  h-auto text-sm mt-5">
                    <li class="px-4 py-4 border-t-0 xl:border-t border border-b-primary">
                        <span class="font-semibold">Project Name: </span> {{ project.title }}
                    </li>
                    <li v-for="(feature, index) in project.features" :key="index"
                        class="px-4 py-4 border border-b-primary">
                        <span class="font-semibold">{{ feature.title}}:</span>
                        <span v-if="Array.isArray(feature.value)">
                            {{ feature.value.join(" , ")}}
                        </span>
                        <span v-else>
                            {{ feature.value }}
                        </span>
                    </li>

                    <li class="px-4 py-4">
                        <span class="font-semibold">Description</span>
                        <p>{{ project.description }}</p>
                    </li>
                    <li class="px-4 py-7 flex flex-col md:flex-row justify-between gap-y-4 gap-x-10">
                        <slot name="cta-button"></slot>
                    </li>
                </ul>
            </div>

        </div>
    </section>
</template>
<script>
    export default {
        props: {
            number: {
                type: Number || String,
                required: true
            },
            project: {
                type: Object,
                required: true
            }
        }
    }
</script>
