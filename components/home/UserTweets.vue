<template>
    <section class="px-4 lg:px-0 lg:pl-16 pb-16 dark:bg-secondary/95 ">
        <div
            class="bg-secondary dark:bg-[#1E293B] dark:shadow-2xl p-10 lg:pl-16  xl:rounded-bl-3xl flex flex-col lg:flex-row gap-x-28 gap-y-10">

            <div class="flex justify-center items-start flex-col gap-y-4 gap-x-10 lg:w-5/12 lg:order-2">
                <p class="text-[#F8FAFC] lg:text-2xl">
                    Professionals across the globe won't be talking about us if we aren't the the best lorem ipsum
                </p>
                <router-link to="/about" class="text-sm lg:text-base text-primary hover:text-primary/80">
                    <svg width="128" height="23" class="inline mr-3 w-12 lg:w-auto" viewBox="0 0 128 23" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M127.061 12.2647C127.646 11.6789 127.646 10.7292 127.061 10.1434L117.515 0.597439C116.929 0.011652 115.979 0.011652 115.393 0.597439C114.808 1.18323 114.808 2.13297 115.393 2.71876L123.879 11.204L115.393 19.6893C114.808 20.2751 114.808 21.2249 115.393 21.8106C115.979 22.3964 116.929 22.3964 117.515 21.8106L127.061 12.2647ZM0 12.704H126V9.70404H0V12.704Z"
                            fill="url(#paint0_linear_5_14)" />
                        <defs>
                            <linearGradient id="paint0_linear_5_14" x1="0" y1="11.204" x2="126" y2="11.204"
                                gradientUnits="userSpaceOnUse">
                                <stop stop-color="white" />
                                <stop offset="1" stop-color="#03C978" />
                            </linearGradient>
                        </defs>
                    </svg>

                    Learn More
                </router-link>
            </div>

            <div class="lg:w-7/12 items-start grid md:grid-cols-2 md:gap-4 xl:gap-10">
                <!--  divided four tweets into two subsections for proper UI alignment  -->
                <div v-for="(                                                                                subTweetsId, index                                                                                ) in                                                                                testimonialTweetsId                                                                                "
                    :key=" index " class="grid  gap-4">
                    <Tweet
                        v-for="(                                                                              tweetId, j                                                                              ) in                                                                              subTweetsId                                                                             "
                        :id=" tweetId " :key=" j " error-message="This tweet could not be loaded">
                        <div class="h-64 border border-[#eee]"></div>
                    </Tweet>

                </div>
            </div>

        </div>

    </section>
</template>

<script>
import { Tweet } from 'vue-tweet-embed';
export default {
    components: {
        Tweet
    },
    data () {
        return {
            // divided four tweets into two subsections for proper UI alignment  
            testimonialTweetsId: [ [ '1513253057949278215', '1509405942697406469' ], [ '1512914241619214343', '1509405942697406469' ] ]
        }
    },
}
</script>
