<template>
<div>
    
<Button mode="secondary" class="rounded w-[80vw] mx-auto sm:w-auto px-10 py-2 md:py-2" @click="toggle()">{{ actionText }}</Button>

    <div class="transition-all fixed transform duration-500  top-0 left-0 bg-white dark:bg-dark-900 w-[100vw] h-[50vh] md:h-[20vh] flex flex-col md:flex-row justify-center items-center z-30 dark:border-b-[#C4C4C4] dark:border-b-2"
        :class=" show ? 'translate-y-0' : '-translate-y-[100vh]' ">

          <PreferenceForm :selected-level="currentLevel" :selected-niche="currentMajor.slug" />

               <div>
                <button type="submit" class="md:bg-secondary md:hover:bg-secondary/80 md:outline-0 md:shadow-md md:py-3 lg:py-4 w-[55vw] mx-auto sm:w-auto md:px-10 md:ml-4 text-red-500 md:text-white md:rounded mt-4 md:mt-9 lg:mt-12" @click="toggle()">Cancel</button>
               </div>
    </div>
</div>
</template>
<script>

export default {
    props: {
        currentMajor: {
            type: Object,
            required: true
        },
        currentLevel: {
            type: String,
            required: true
        },
    },
    data(){
        return {
            show: false,
            actionText: 'Change filter',
        }
    },
     methods: {
        toggle() {
            this.show = !this.show;
            this.actionText = this.show ? 'Cancel' : 'Change filter';
        },
    }
}
</script>
