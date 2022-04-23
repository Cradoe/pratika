<template>
    <div>
        <PageHeroSection hero-image="/login-image.png">
            Register for a <br class="hidden lg:block" /> Free
            <HighlightedHeroWord>Account</HighlightedHeroWord>
        </PageHeroSection>

        <Container>
            <div class="flex items-center justify-center  ">
                <div
                    class="md:max-w-md lg:max-w-xl w-full px-4 py-12 mx-4 sm:mx-16 md:mx-20  sm:px-6 lg:p-24 border border-[#E5E5E5] mb-24">

                    <form action="#" method="POST" @submit.prevent=" handleSubmit ">
                        <div class="pb-5">
                            <label for="email-address" class="text-[#AEB1B5]">Email address</label>
                            <input id="email-address" v-model=" user.email " name="email" type="email"
                                autocomplete="email"
                                class="appearance-none rounded relative block w-full px-3 py-2 border border-primary placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-primary/80 focus:border-primary/80 focus:z-10 sm:text-sm"
                                placeholder="Email address" required />
                            <div v-show=" submitted && !user.email " class="text-red-400 text-xs">Email address is
                                required
                            </div>
                        </div>
                        <div class="py-4">
                            <label for="major" class="text-[#AEB1B5]">Major</label>
                            <select id="major" v-model=" user.major " name="major" required=""
                                class="appearance-none rounded relative block w-full px-3 py-2 border border-primary placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-primary/80 focus:border-primary/80 focus:z-10 sm:text-sm">
                                <option selected value="">Choose your major</option>
                                <option
                                    v-for="(                                   major, index                                   ) in                                    majors                                  "
                                    :key=" index " :value=" major.slug ">
                                    {{ major.name }}
                                </option>
                            </select>

                            <div v-show=" submitted && !user.major " class="text-red-400 text-xs">Major is required
                            </div>
                        </div>
                        <div class="py-4">
                            <label for="password" class="text-[#AEB1B5]">Password</label>
                            <input id="password" v-model=" user.password " name="password" type="password"
                                autocomplete="current-password" required=""
                                class="appearance-none rounded relative block w-full px-3 py-2 border border-primary placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-primary/80 focus:border-primary/80 focus:z-10 sm:text-sm"
                                placeholder="Password" />

                            <div v-show=" submitted && !user.password " class="text-red-400 text-xs">Password is
                                required
                            </div>
                        </div>

                        <div class="mt-10">
                            <Button class="mx-auto" :disabled=" status.registering ">
                                <span class="absolute left-0 inset-y-0 flex items-center pl-3">
                                    <fa :icon=" [ 'fas', 'lock' ] "
                                        class="h-5 w-5 text-primary/80 group-hover:text-secondary/50"
                                        aria-hidden="true" />
                                </span>
                                Register
                            </Button>
                        </div>
                        <div class="text-sm mt-5">
                            <NuxtLink to="/login" class="font-medium text-secondary hover:text-secondary/70 "> Already a
                                member? Login to your account
                            </NuxtLink>
                        </div>
                    </form>
                </div>
            </div>
        </Container>

    </div>
</template>

<script>
import Vue from 'vue';
import { mapActions } from 'vuex'

import { availableMajors } from '@/constants/'

export default Vue.extend( {
    name: "RegisterPage",
    layout: 'registerPage',
    data () {
        return {
            majors: availableMajors,
            user: {
                email: '',
                major: '',
                password: ''
            },
            submitted: false
        }
    },
    computed: {
        status () {
            return this.$store.state.account.status
        }
    },
    methods: {
        ...mapActions( 'account', [ 'register' ] ),
        handleSubmit () {
            this.submitted = true;
            this.$validator.validate().then( valid => {
                if ( valid ) {
                    this.register( this.user );
                }
            } );
        }
    }
} )
</script>
