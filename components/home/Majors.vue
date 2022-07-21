<template>
    <section class="dark:bg-dark-900 py-3">
        <HomeNumberedSectionHeading number=" 1 " heading=" Pick your major"
            description="Focus your energy on getting really good at what you do. Market yourself that way, too. Don't confuse yourself by saying you'd master them all at once." />
        <div class="py-10">
            <div class="container mx-auto">
                
                <div class=" sm:block px-4">
                    <ul class="flex justify-center flex-wrap">
                        <li v-for="(                                                 major, index                                                 ) in                                                  majors                                                                                                                                   "
                            :key=" index " class="tab-item">
                            <NuxtLink to="/#majors">
                                <div class="flex justify-center items-center rounded-3xl item-tab-heading hover:shadow-2xl border border-[#E5E5E5] px-4 py-2 text-sm mb-3 mr-5">
                                <span class="ml-1 font-normal text-gray-600 dark:text-white">{{ major.name }}</span>
                            </div>
                            </NuxtLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
</template>
<script>

import { availableMajors } from '@/contents/'

export default {
    name: "NuxtMajors",
    data () {
        return {
            majors: availableMajors
        }
    }
}
</script>

<style>
.item-tab-heading {
    box-shadow: 0 4px 10px rgb(0 0 0 / 6%);
}
</style>