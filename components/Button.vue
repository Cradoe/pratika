<template>
    <button :type=" type "
        class="group relative px-12 flex justify-center py-3  border border-transparent text-sm font-medium rounded-md text-white  focus:outline-none focus:ring-2 focus:ring-offset-2"
        :class=" bgType " :disabled=" disabled ">
        <slot />
    </button>
</template>
<script>
export default {
    name: "NuxtButton",
    props: {
        type: {
            type: String,
            default: 'submit'
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
        bgType () {

            switch ( this.mode ) {
                case "primary":
                    return "bg-primary hover:bg-primary/80 focus:ring-primary/80"
                case "secondary":
                    return "bg-secondary hover:bg-secondary/80 focus:ring-secondary/80"

                default:
                    return "bg-primary hover:bg-primary/80 focus:ring-primary/80";
            }

        }
    }
}
</script>
