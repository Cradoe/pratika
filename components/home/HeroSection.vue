<template>
    <section
        class="bg-[#F8FAFC] dark:bg-dark-900 py-16 md:py-32 xl:py-0  xl:h-[75vh] flex items-center justify-center flex-col">
        <div class="w-11/12 lg:w-9/12 mx-auto  text-center">
            <h1 class="text-2xl md:text-4xl lg:text-7xl font-black dark:text-white">
                The first open source platform <br class="hidden xl:block" /> to accelate your <span
                    class="text-primary border-primary border-b-2 lg:border-b-8">developer</span> skills
            </h1>
            <p
                class="text-[#475569] dark:text-white/80 text-sm lg:text-base w-11/12 lg:w-9/12 mx-auto mt-4 md:mt-9 lg:mt-12 ">
                Lorem
                Ipsum is
                simply
                dummy text
                of the
                printing
                and typesetting
                industry.
                Lorem
                Ipsum has been the
                industry's standard dummy text ever sincez</p>
            <form class="mt-16 md:mt-9 lg:mt-12 flex gap-x-10 gap-y-3 justify-center flex-col md:flex-row" method="get" @submit.prevent="handleFormSubmit">
                <select
                    v-model="form.niche"
                    class="border border-primary outline-0 px-6 lg:px-10 py-3 lg:py-4 text-[#475569] bg-[#C4C4C4]/5 text-left"
                    required
                    >
                    <option value="" disabled selected="selected">Choose your major</option>
                    <option
                        v-for="(                        major, index                        ) in                         majors                       "
                        :key=" index " :value="major.slug">
                        {{ major.name }}
                    </option>
                </select>
                <select
                    v-model="form.level"
                    class="border border-primary outline-0 px-6 lg:px-10 py-3 lg:py-4 text-[#475569] bg-[#C4C4C4]/5 text-left"
                    required
                    >
                    <option value="" disabled selected="selected">Level</option>
                    <option
                        v-for="(                        level, index                        ) in                         levels                       "
                        :key=" index " 
                        :value="level">
                        {{ level }}
                    </option>
                </select>
                <button type="submit" class="bg-primary hover:bg-primary/80 outline-0 shadow-md py-3 px-8 text-white rounded">Get
                    Started</button>
            </form>
        </div>
    </section>
</template>
<script>
import { availableMajors, experienceLevels } from '@/contents/'

export default {
    data () {
        return {
            majors: availableMajors,
            levels: experienceLevels,
            form:{
                niche:"",
                level: ""
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
            this.$router.push(`/${niche}/${level}`);
        }
    }
}
</script>
