<template>
  <section class="">
    
    
     <div class="bg-[#F8FAFC] dark:bg-dark-700  min-h-[70vh] flex justify-center items-center dark:border-b dark:border-b-[#F8FAFC]">
        <Container
            :class-name="'h-[20vh] md:h-[30vh] lg:h-[45vh] flex flex-col gap-y-12 md:flex-row justify-center md:justify-between items-center'">

            <div class="text-2xl md:leading-tight md:text-[2.41rem] lg:text-[3.01rem] dark:text-white font-black">
                <h1 v-if="error.statusCode === 404">Page not found</h1>
                <h1 v-else>An error occurred</h1>
                
            <NuxtLink to="/" class="block text-base font-normal text-center text-primary">Return to home page</NuxtLink>
            </div>
        </Container>
    </div>

    
  </section>
</template>

<script>
  export default {
    name: "NuxtError",
    scrollToTop: true,
    props: {
      error: {
        type: Object,
        required: true
      }
    }
  }
</script>