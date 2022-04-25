<template>
    <div class="bg-secondary dark:bg-dark-700 pt-16">
        <div class="grid md:grid-cols-3 gap-y-10 px-4 lg:px-16  4xl:px-56  pb-32">
            <div>
                <NuxtLink to="/">
                    <nuxt-img src="/logo-white.png" class="w-32" />
                </NuxtLink>
                <ul class="text-[1.008rem] text-[#E5E5E5] mt-4">
                    <li class="hover:text-slate-500">
                        <NuxtLink to="/about">About Us</NuxtLink>
                    </li>
                    <li class="hover:text-slate-500">
                        <NuxtLink to="/about">Sponsor Project</NuxtLink>
                    </li>
                    <li v-for="(        publicLink, index        ) in         projectInfo.PUBLIC_LINKS        "
                        :key=" index " class="hover:text-slate-500">
                        <a :href=" publicLink.url " target="_blank" rel="nofollow">{{ publicLink.name }}</a>
                    </li>
                </ul>
            </div>

            <div>
                <h3 class="text-primary font-bold text-xl">Majors</h3>
                <ul class="text-[1.008rem] text-[#E5E5E5] mt-4 list-disc list-inside">
                    <li v-for="(        major, index        ) of         majors        " :key=" index "
                        class="hover:text-slate-500">
                        {{ major.name }}
                    </li>
                </ul>
            </div>
            <div>
                <h3 class="text-primary font-bold text-xl">Contributors</h3>
                <div class="flex flex-wrap gap-3 mt-4">
                    <a v-for="(        contributor, index        ) of         contributors        " :key=" index "
                        :href=" contributor.html_url "
                        :title=" `${contributor.login} with ${contributor.contributions} contributions` "
                        target="_blank" rel="nofollow">
                        <img :src=" contributor.avatar_url " class="w-10 h-10 rounded-full" />
                    </a>
                </div>
            </div>
        </div>
        <div class="border-t border-primary py-10 ">
            <p class="text-center text-[#C4C4C4] text-sm">
                &copy; {{ new Date().getFullYear() }} {{ projectInfo.PROJECT_NAME }} <br />
                with
                <fa :icon=" [ 'fas', 'heart' ] " class="text-red-500" /> from Ismail Obadimu and Contributors
            </p>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { availableMajors, projectInfo } from '@/constants/'

export default {
    name: 'NuxtFooter',
    data () {
        return {
            majors: availableMajors,
            contributors: [],
            projectInfo
        }
    },
    async fetch () {
        try {
            this.contributors = await fetch(
                'https://api.github.com/repos/cradoe/nextproject/contributors'
            ).then( res => res.json() );
        } catch ( error ) {

        }
    },
    computed: {
        ...mapGetters( [ 'dark' ] )
    },

};
</script>