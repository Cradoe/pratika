<template>
    <form class="mt-16 md:mt-9 lg:mt-12 flex gap-x-10 gap-y-3 justify-center flex-col md:flex-row" method="get" @submit.prevent="handleFormSubmit">
        <select
            v-model="form.niche"
            class="border border-primary outline-0 px-6 lg:px-10 py-3 lg:py-4 text-[#475569] bg-[#C4C4C4]/5 text-left"
            required
            >
            <option value="" disabled :selected="form.niche ? false: 'selected'">Choose your major</option>
            <option
                v-for="(                        major, index                        ) in                         majors                       "
                :key=" index " :value="major.slug.toLowerCase()">
                {{ major.name }}
            </option>
        </select>
        <select
            v-model="form.level"
            class="border border-primary outline-0 px-6 lg:px-10 py-3 lg:py-4 text-[#475569] bg-[#C4C4C4]/5 text-left"
            required
            >
            <option value="" disabled :selected="form.level ? false: 'selected'">Level</option>
            <option 
                v-for="(                        level, index                        ) in                         levels                       "
                :key=" index "
                :value="level.toLowerCase()">
                {{ level }}
            </option>
        </select>
        <button type="submit" class="bg-primary hover:bg-primary/80 outline-0 shadow-md py-3 px-8 text-white rounded">{{ ctaButton }}</button>
    </form>
</template>
<script>
import { availableMajors, experienceLevels } from '@/contents/'

export default {
    props: {
        ctaButton: {
            type: String,
            default: "Continue",
        },
        selectedNiche: {
            type: String,
            default: "",
        },
        selectedLevel: {
            type: String,
            default: "",
        },
    },
    data () {
        return {
            majors: availableMajors,
            levels: experienceLevels,
            form:{
                niche:this.selectedNiche.toLowerCase(),
                level: this.selectedLevel.toLowerCase(),
            }
        }
    },
    methods:{
        handleFormSubmit(e){
            e.preventDefault();
            // convert niche and level to lowercase and replace spaces with hyphens
            const niche = this.form.niche.toLowerCase().replace(/\s/g, '-');
            const level = this.form.level.toLowerCase().replace(/\s/g, '-');
            
            // change route to project page with the selected major and level
            this.$router.push(`/projects/${niche}/${level}`);
        }
    }
}
</script>
