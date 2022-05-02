<template>
    <div class="transition-all fixed transform duration-500  top-0 left-0 bg-black/30 w-[100vw] h-[100vh] z-30 flex justify-center lg:justify-end"
        :class=" show ? 'translate-x-0' : '-translate-x-[100vw]' ">

        <div class="bg-white h-full w-[90vw] lg:w-[50vw] overflow-y-auto">

            <ul class="border  border-t-0 xl:border-t border-dotted border-primary w-10/12 mx-auto h-auto text-sm mt-5">

                <li class="px-4 py-4 border-t-0 xl:border-t border border-dotted border-b-primary">
                    <span class="font-semibold">Project Name: </span> {{ project.title }}
                </li>
                <li v-for="(                                                                                          feature, index                                                                                          ) in                                                                                           project.features                                                                                          "
                    :key=" 'feature' + index " class="px-4 py-4 border border-dotted border-b-primary">
                    <span class="font-semibold">{{ feature.title }}:</span>
                    <span v-if=" Array.isArray( feature.value ) ">
                        {{ feature.value.join( " , " ) }}
                    </span>
                    <span v-else>
                        {{ feature.value }}
                    </span>
                </li>
                <li v-for="(                                                                                          info, index                                                                                          ) in                                                                                           project.additionalInfo                                                                                          "
                    :key=" 'info' + index " class="px-4 py-4 border border-dotted border-b-primary">
                    <span class="font-semibold">{{ info.title }}:</span>
                    <span v-if=" Array.isArray( info.value ) ">
                        {{ info.value.join( " , " ) }}
                    </span>
                    <span v-else>
                        {{ info.value }}
                    </span>
                </li>

                <li class="px-4 py-4 border border-dotted border-b-primary">
                    <span class="font-semibold">Relevant Resources</span>

                    <div v-for="(                                                                                          resource, index                                                                                          ) in                                                                                           project.resources                                                                                          "
                        :key=" 'resource' + index ">
                        <span>( {{ index + 1 }} )</span>
                        <a :href=" resource.link " class="text-primary font-bold">{{ resource.title }} </a>
                    </div>

                </li>
                <li class="px-4 py-4">
                    <span class="font-semibold">Description</span>
                    <p>{{ project.description }}</p>
                </li>
                <li class="px-4 py-7 flex flex-col md:flex-row justify-between gap-y-4 gap-x-10">
                    <slot name="cta-buttons"></slot>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>

export default {
    props: {
        show: {
            type: Boolean,
            default: false
        },
        project: {
            type: Object,
            required: true
        },
    }
}
</script>
