<template>
    <section class="dark:bg-secondary/95 py-16">
        <HomeNumberedSectionHeading number=" 1 " heading=" Pick your major"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since" />

        <div class="py-10">
            <div class="container mx-auto">
                <!-- <div class="sm:hidden relative w-11/12 mx-auto bg-white rounded">
                    <div class="absolute inset-0 m-auto mr-4 z-0 w-6 h-6">
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-selector" width="24"
                            height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#A0AEC0" fill="none"
                            stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <polyline points="8 9 12 5 16 9" />
                            <polyline points="16 15 12 19 8 15" />
                        </svg>
                    </div>
                    <select aria-label="Selected tab"
                        class="form-select block w-full p-3 border border-gray-300 rounded text-gray-600 appearance-none bg-transparent relative z-10">
                        <option class="text-sm text-gray-600">inactive</option>
                        <option class="text-sm text-gray-600">inactive</option>
                        <option selected class="text-sm text-gray-600">Active</option>
                        <option class="text-sm text-gray-600">inactive</option>
                        <option class="text-sm text-gray-600">inactive</option>
                    </select>
                </div> -->
                <div class="hidden sm:block">
                    <ul class="flex">
                        <li v-for="(                                              major, index                                              ) in                                               majors                                              "
                            :key=" index " class="tab-item">
                            <div class="flex justify-center items-center rounded-3xl item-tab-heading hover:shadow-2xl border border-[#E5E5E5] px-4 py-2 text-sm mb-3 cursor-pointer mr-5"
                                @click=" activeTab( $event ) ">
                                <span class="ml-1 font-normal">{{ major.name }}</span>
                            </div>
                            <div class="w-full h-1 text-gray-600 rounded-t-md hidden mt-10">
                                {{ major.slug }}
                            </div>
                        </li>


                    </ul>
                </div>
            </div>
        </div>
    </section>
</template>
<script>

import { availableMajors } from '@/constants/'

export default {
    name: "NuxtMajors",
    data () {
        return {
            majors: availableMajors
        }
    },
    mounted () {
        const firstTabItem = document.querySelectorAll( ".tab-item" )[ 0 ];
        this.setTabAsActive( firstTabItem )
    },
    methods: {
        activeTab ( event ) {
            const siblings = event.currentTarget.parentNode.querySelectorAll( ".tab-item" );
            for ( const item of siblings ) {
                item.children[ 1 ].classList.add( "hidden" );
                item.classList.add( "text-gray-600" );
                item.classList.remove( "text-indigo-700" );
            }
            this.setTabAsActive( event.currentTarget )
        },
        setTabAsActive ( tab ) {
            tab.children[ 1 ].classList.remove( "hidden" );
            tab.classList.remove( "text-gray-600" );
            tab.classList.add( "text-indigo-700" );
        }
    },
}
</script>

<style>
.item-tab-heading {
    box-shadow: 0 4px 10px rgb(0 0 0 / 25%);
}
</style>