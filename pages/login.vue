<template>
    <div>
        <PageHeroSection hero-image="/login-image.png">
            Login to Your <br class="hidden lg:block" />
            <HighlightedHeroWord>Account</HighlightedHeroWord>
        </PageHeroSection>

        <Container>
            <div class="flex items-center justify-center  ">
                <div
                    class="md:max-w-md lg:max-w-xl w-full px-4 py-12 mx-4 sm:mx-16 md:mx-20  sm:px-6 lg:p-24 border border-[#E5E5E5] mb-24">

                    <form action="#" method="POST" @submit.prevent=" handleSubmit ">
                        <div class="pb-5">
                            <label for="email-address" class="text-[#AEB1B5]">Email address</label>
                            <input id="email-address" v-model=" email " name="email" type="email" autocomplete="email"
                                class="appearance-none rounded relative block w-full px-3 py-2 border border-primary placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-primary/80 focus:border-primary/80 focus:z-10 sm:text-sm"
                                placeholder="Email address" required />
                            <div v-show=" submitted && !email " class="text-red-400 text-xs">Email address is required
                            </div>
                        </div>
                        <div class="py-4">
                            <label for="password" class="text-[#AEB1B5]">Password</label>
                            <input id="password" v-model=" password " name="password" type="password"
                                autocomplete="current-password" required=""
                                class="appearance-none rounded relative block w-full px-3 py-2 border border-primary placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-primary/80 focus:border-primary/80 focus:z-10 sm:text-sm"
                                placeholder="Password" />

                            <div v-show=" submitted && !password " class="text-red-400 text-xs">Password is required
                            </div>
                        </div>

                        <div class="flex items-center justify-between">
                            <div class="flex items-center">
                                <input id="remember-me" name="remember-me" type="checkbox"
                                    class="h-4 w-4 text-primary focus:ring-primary/70 border-primary rounded" />
                                <label for="remember-me" class="ml-2 block text-sm text-gray-900"> Remember me </label>
                            </div>

                            <div class="text-sm">
                                <a href="#" class="font-medium text-secondary hover:text-secondary/70"> Forgot your
                                    password?
                                </a>
                            </div>
                        </div>

                        <div class="mt-10">
                            <Button class="mx-auto" :disabled=" status.loggingIn ">
                                <span class="absolute left-0 inset-y-0 flex items-center pl-3">
                                    <fa :icon=" [ 'fas', 'lock' ] "
                                        class="h-5 w-5 text-primary/80 group-hover:text-secondary/50"
                                        aria-hidden="true" />
                                </span>
                                Sign in
                            </Button>
                        </div>
                        <div class="text-sm mt-5">
                            <NuxtLink to="/register" class="font-medium text-secondary hover:text-secondary/70 "> New
                                user? Register
                                now for a life-time free access
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

export default Vue.extend( {
    name: "LoginPage",
    layout: 'loginPage',
    data () {
        return {
            email: '',
            password: '',
            submitted: false
        }
    },
    computed: {
        account () {
            return this.$store.state.account.user
        },
        status () {
            return this.$store.state.account.status
        }
    },
    created () {
        // reset login status
    },
    methods: {
        ...mapActions( 'alert', [ 'error' ] ),
        ...mapActions( 'account', [ 'login' ] ),
        handleSubmit () {
            this.submitted = true;
            const { email, password } = this;
            if ( email && password ) {
                this.login( { email, password } )
            }
        }
    }
} )
</script>
