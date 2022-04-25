<template>
    <div>
        <PageHeroSection hero-image="/login-image.png">
            <div class="text-center">
                Register for a <br class="hidden lg:block" /> Free
                <HighlightedHeroWord>Account</HighlightedHeroWord>
            </div>
        </PageHeroSection>

        <Container>
            <div class="mt-20 md:mt-0 flex items-center justify-center  ">
                <div
                    class="md:max-w-md lg:max-w-xl w-full px-4 py-12 mx-4 sm:mx-16 md:mx-20  sm:px-6 lg:px-24 pb-0 lg:pb-0 border border-[#E5E5E5] mb-24">
                    <div class="text-sm pb-12 text-center hidden md:block">
                        <NuxtLink to="/login"
                            class="font-medium text-secondary dark:text-white/80 hover:text-secondary/70 "> Already
                            a
                            member? Click here to login into your account
                        </NuxtLink>
                    </div>

                    <form action="#" method="POST" @submit.prevent=" handleSubmit ">
                        <div class="py-3">
                            <label for="firstname" class="text-sm text-[#AEB1B5] dark:text-white/80">Firstname</label>
                            <input id="firstname" v-model=" $v.form.firstName.$model " name="firstName" type="text"
                                autocomplete="firstName" :class=" formControl " placeholder="Firstname" />

                            <div v-if=" submitted && !$v.form.firstName.required " class="text-red-400 text-xs">
                                Firstname is
                                required
                            </div>
                            <div v-if=" submitted && !$v.form.firstName.minLength " class="text-red-400 text-xs">
                                Firstname
                                must have at least
                                {{ $v.form.firstName.$params.minLength.min }} letters.
                            </div>
                        </div>
                        <div class="py-3">
                            <label for="email" class="text-sm text-[#AEB1B5] dark:text-white/80">Email address</label>
                            <input id="email" v-model=" $v.form.email.$model " name="email" type="email"
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
                            <label for="major" class="text-sm text-[#AEB1B5] dark:text-white/80">Major</label>
                            <select id="major" v-model=" $v.form.major.$model " name="major" :class=" formControl ">
                                <option selected value="">Choose your major</option>
                                <option
                                    v-for="(                                                                                                                                         major, index                                                                                                                                         ) in                                                                                                                                          majors                                                                                                                                        "
                                    :key=" index " :value=" major.slug ">
                                    {{ major.name }}
                                </option>
                            </select>
                            <div v-if=" submitted && !$v.form.major.required " class="text-red-400 text-xs">Major is
                                required
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
                            <div v-if=" submitted && !$v.form.password.minLength " class="text-red-400 text-xs">Password
                                must have at least
                                {{ $v.form.password.$params.minLength.min }} letters.
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

                        <p
                            class="text-xs text-gray-900 dark:text-white/70 flex items-center gap-1 justify-center pt-12 lg:pt-16 pb-4 flex-wrap">
                            <span class="text-red-500 text-[0.5rem]">X</span> By
                            registering, you
                            agree to our
                            <NuxtLink to="/terms-and-condition" class="text-primary hover:text-primary/70">terms and
                                condition
                            </NuxtLink>

                        </p>
                    </form>
                </div>
            </div>
        </Container>

    </div>
</template>

<script setup>
import Vue from 'vue';
import { required, email, minLength } from 'vuelidate/lib/validators'

import { mapActions } from 'vuex';


import { availableMajors, formControl } from '@/constants/'


export default Vue.extend( {
    name: "RegisterPage",
    layout: 'registerPage',
    data () {
        return {
            formControl,
            form: {
                firstName: '',
                email: '',
                major: '',
                password: 'Ed_4@7dA'
            },
            majors: availableMajors,
            submitted: false
        }
    },
    head () {
        return {
            title: `Welcome, register a free account`
        };
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
            if ( this.$v.form.$invalid ) {
                this.$v.form.$touch();
            } else {
                this.register( this.form )
            }

        }
    },
    validations () {
        return {
            form: {
                firstName: {
                    required,
                    minLength: minLength( 3 )
                },
                email: {
                    required,
                    email
                },
                major: {
                    required
                },
                password: {
                    required,
                    minLength: minLength( 6 )
                }
            },
        }
    }
} )
</script>
