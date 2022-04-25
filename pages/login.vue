<template>
    <div>
        <div class="hidden md:block">
            <PageHeroSection hero-image="/login-image.png">
                Login to Your <br class="hidden lg:block" />
                <HighlightedHeroWord>Account</HighlightedHeroWord>
            </PageHeroSection>
        </div>
        <Container>
            <div class="mt-20 md:mt-0 flex items-center justify-center ">
                <div
                    class="md:max-w-md lg:max-w-xl w-full px-4 py-12 mx-4 sm:mx-16 md:mx-20  sm:px-6 lg:p-24 border border-[#E5E5E5] mb-24">

                    <form action="#" method="POST" @submit.prevent=" handleSubmit ">
                        <div class="py-3">
                            <label for="email-address" class="text-sm text-[#AEB1B5] dark:text-white/80">Email
                                address</label>
                            <input id="email-address" v-model=" $v.form.email.$model " name="email" type="email"
                                autocomplete="email" :class=" formControl " placeholder="Email address" />

                            <div v-if=" submitted && !$v.form.email.required " class="text-red-400 text-xs">Email is
                                required
                            </div>
                            <div v-if=" submitted && !$v.form " class="text-red-400 text-xs">Please enter a valid email
                                address
                                {{ $v.form.email.$params.minLength.min }} letters.
                            </div>

                        </div>
                        <div class="py-3">
                            <label for="password" class="text-sm text-[#AEB1B5] dark:text-white/80">Password</label>
                            <PasswordReveal id="password" v-model=" $v.form.password.$model " type="password"
                                name="password" autocomplete="current-password" :classes=" formControl "
                                placeholder="Password" />

                            <div v-if=" submitted && !$v.form.password.required " class="text-red-400 text-xs">Password
                                is
                                required
                            </div>
                        </div>

                        <div class="flex items-center justify-between">
                            <div class="flex items-center">
                                <input id="remember-me" name="remember-me" type="checkbox"
                                    class="h-4 w-4 text-primary focus:ring-primary/70 border-primary rounded" />
                                <label for="remember-me" class="ml-2 block text-sm text-gray-900 dark:text-white/80">
                                    Remember me </label>
                            </div>

                            <div class="text-sm">
                                <a href="#"
                                    class="font-medium text-secondary hover:text-secondary/70 dark:text-white/80">
                                    Forgot your
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
                            <NuxtLink to="/register"
                                class="font-medium text-secondary hover:text-secondary/70 dark:text-white/80"> New
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

<script setup>
import Vue from 'vue';
import { required, email } from 'vuelidate/lib/validators'
import { mapActions } from 'vuex';
import { formControl } from '@/constants/';


export default Vue.extend( {
    name: "LoginPage",
    layout: 'loginPage',
    data () {
        return {
            formControl,
            form: {
                email: '',
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
        ...mapActions( 'account', [ 'login' ] ),
        handleSubmit () {
            this.submitted = true;
            if ( this.$v.form.$invalid ) {
                this.$v.form.$touch();
            } else {
                this.login( this.form )
            }

        }
    },
    validations () {
        return {
            form: {
                email: {
                    required,
                    email
                },
                password: {
                    required
                }
            },
        }
    }
} )
</script>
