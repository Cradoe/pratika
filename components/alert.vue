<template>
    <div v-if=" visible && alert.message "
        class="fixed right-0 w-[80vw] lg:w-[35vw] ml-auto border rounded  px-4 py-3 shadow-md z-10 "
        :class=" alert.type " role="alert">
        <div class="relative flex justify-between">
            <span class="block sm:inline">{{ alert.message }}</span>
            <span class="w-auto cursor-pointer" @click=" closeAlert() ">
                <svg class="fill-current h-6 w-6 text-red-500" role="button" xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20">
                    <title>Close</title>
                    <path
                        d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
                </svg>
            </span>
        </div>
    </div>
</template>

<script>
export default {
    name: "NuxtAlert",
    props: {
        alert: {
            type: Object,
            required: true
        }
    },
    data () {
        return {
            visible: true
        }
    },
    methods: {
        closeAlert () {
            this.visible = false;
            this.$emit( 'close' )
        }
    }
};
</script>