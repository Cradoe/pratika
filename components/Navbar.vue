<template>
    <nav :class=" bgColor "
        class="dark:bg-dark-900 px-2 md:px-6 lg:px-16 4xl:px-56 py-6  lg:flex lg:justify-between lg:items-center ">
        <div class="flex items-center justify-between">
            <NuxtLink to="/">
                <nuxt-img :src=" theme.dark ? '/logo-white.png' : '/logo.png' " class="w-32" />
            </NuxtLink>

          
            <div class="lg:hidden flex items-center gap-4">
                <AppDarkModeToggle />
                <a :href="gitHubRepoUrl"
                    class="text-slate-400 hover:text-slate-500 dark:hover:text-slate-300"><span
                        class="sr-only">Next Project on GitHub</span>

                    <svg viewBox="0 0 16 16" class="w-5 h-5" fill="currentColor" aria-hidden="true">

                        <path
                            d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z">
                        </path>
                    </svg>
                </a>
            </div>
        </div>

        <!-- Hidden on mobile -->
        <div class="relative hidden lg:flex items-center ml-auto">
            <nav class="text-sm leading-6 font-semibold text-secondary dark:text-slate-200">
                <ul class="flex space-x-8">
                    <slot name="nav-items"></slot>
                </ul>
            </nav>

            <div class="flex items-center ml-6 pl-6 dark:border-slate-800">
                <label class="sr-only">Theme</label>
                <AppDarkModeToggle />
                <a :href="gitHubRepoUrl"
                    target="_blank" rel="nofollow"
                    class="ml-6 block text-slate-400 hover:text-slate-500 dark:hover:text-slate-300"><span
                        class="sr-only">Next Project on GitHub</span>

                    <svg viewBox="0 0 16 16" class="w-5 h-5" fill="currentColor" aria-hidden="true">

                        <path
                            d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z">
                        </path>
                    </svg>
                </a>
            </div>
        </div>
    </nav>
</template>

<script>

import { projectInfo} from '@/contents/'
export default {
    name: 'NuxtNavbar',
    props: {
        'bgColor': {
            type: String,
            default: "bg-white"
        }
    },
    data: () => {
        return {
            gitHubRepoUrl: projectInfo?.PUBLIC_LINKS?.gitHub?.url,
        }
    },
    computed: {
        theme () {
            return this.$store.state.theme
        }
    }
};
</script>