<template>
<!-- if prop type is anchor tag  -->
    <a v-if="type === 'link'" :href="href" class="group relative px-8 md:px-12 flex justify-center py-2 md:py-3  border border-transparent text-sm font-medium rounded-md text-white  focus:outline-none focus:ring-2 focus:ring-offset-2"
        :class=" bgClass ">
        <slot />
    </a>
    <button v-else :type=" type " v-bind=" $attrs "
        class="group relative px-8 md:px-12 flex justify-center py-2 md:py-3  border border-transparent text-sm font-medium rounded-md text-white  focus:outline-none focus:ring-2 focus:ring-offset-2"
        :class=" bgClass " :disabled=" disabled " @click=" $emit( 'click' ) ">
        <slot />
    </button>
</template>
<script>
export default {
    name: "NuxtButton",
    props: {
        type: {
            type: String,
            default: 'button'
        },
        href: {
            type: String,
            default:"#"
        },
        disabled: {
            type: Boolean,
            default: false
        },
        mode: {
            type: String,
            default: 'primary'
        }
    },
    computed: {
        
        bgClass () {
            switch ( this.mode ) {
                case "primary":
                    return "bg-primary hover:bg-primary/80 focus:ring-primary/80"
                case "secondary":
                    return "bg-secondary hover:bg-secondary/80 focus:ring-secondary/80"
                case "twitter":
                    return "bg-[#1DA1F2] dark:bg-[#1DA1F2]/70 hover:bg-[#1DA1F2]/80 dark:hover:bg-[#1DA1F2]/50 focus:ring-[#1DA1F2]/80"

                default:
                    return "bg-primary hover:bg-primary/80 focus:ring-primary/80";
            }

        }
    }
}
</script>
