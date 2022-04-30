<template>
    <div class="fixed top-0 left-0 bg-black w-[100vw] h-[100vh] z-30 flex justify-end">
        <div class="bg-white h-full w-[50vw] overflow-y-auto">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam quo ducimus nihil iusto iste sapiente nobis
            deleniti corporis in, omnis ullam harum quam mollitia eligendi a eaque laborum perferendis? Facere.
        </div>
    </div>
</template>
<script>
    export default {
        props: {
            project: {
                type: Object,
                required: true
            }
        }
    }
</script>
