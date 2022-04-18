<template>
    <div class="bg-secondary px-16 py-16 grid md:grid-cols-3 gap-y-10">
        <div>
            <router-link to="/">
                <nuxt-img src="/logo-white.png" class="w-32" />
            </router-link>
            <ul class="text-[1.008rem] text-[#E5E5E5] mt-4">
                <li class="hover:text-slate-500">
                    <router-link to="/about">About Us</router-link>
                </li>
                <li class="hover:text-slate-500">
                    <router-link to="/about">Sponsor Project</router-link>
                </li>
                <li class="hover:text-slate-500">
                    <a href="/about">GitHub</a>
                </li>
                <li class="hover:text-slate-500">
                    <a href="/about">Twitter</a>
                </li>
                <li class="hover:text-slate-500">
                    <a href="/about">Discord</a>
                </li>
            </ul>
        </div>

        <div>
            <h3 class="text-primary font-bold text-xl">Majors</h3>
            <ul class="text-[1.008rem] text-[#E5E5E5] mt-4 list-disc">
                <li v-for="(major, index) of majors" :key="index" class="hover:text-slate-500">
                    {{ major }}
                </li>
            </ul>
        </div>
        <div>
            <h3 class="text-primary font-bold text-xl">Contributors</h3>
            <div class="flex flex-wrap gap-3">
                <a v-for="(contributor, index) of contributors" :key="index" :href="contributor.html_url"
                    :title="`${contributor.login} with ${contributor.contributions} contributions`" target="_blank"
                    rel="nofollow">
                    <img :src="contributor.avatar_url" class="w-10 h-10 rounded-full" />
                </a>
            </div>
        </div>

        <div></div>
    </div>
</template>

<script lang="ts">
import { mapGetters } from 'vuex';
import { availableMajors } from '@/constants/'

export default {
    name: 'NuxtFooter',
    data() {
        return {
            majors: availableMajors,
            contributors: [],
        }
    },
    async fetch() {
        this.contributors = await fetch(
            'https://api.github.com/repos/cradoe/nextproject/contributors'
        ).then(res => res.json());
    },
    computed: {
        ...mapGetters(['dark'])
    },

};
</script>