<template>
    <div>
        <div class="hidden md:block">
            <PageHeroSection hero-image="/login-image.png">
                Let's get back your <br class="hidden lg:block" />
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

                        <div class="mt-5">
                            <Button class="mx-auto" :disabled=" status.submitting ">
                                <span class="absolute left-0 inset-y-0 flex items-center pl-3">
                                    <fa :icon=" [ 'fas', 'lock' ] "
                                        class="h-5 w-5 text-primary/80 group-hover:text-secondary/50"
                                        aria-hidden="true" />
                                </span>
                                Continue
                            </Button>
                        </div>
                        <div class="text-sm mt-5 text-center">
                            <NuxtLink to="/login"
                                class="font-medium text-secondary hover:text-secondary/70 dark:text-white/80"> Click
                                here to back to login page
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
    name: "RetrievePassword",
    data () {
        return {
            formControl,
            form: {
                email: ''
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
        ...mapActions( 'account', [ 'retrievePassword' ] ),
        handleSubmit () {
            this.submitted = true;
            if ( this.$v.form.$invalid ) {
                this.$v.form.$touch();
            } else {
                this.retrievePassword( this.form )
            }

        }
    },
    validations () {
        return {
            form: {
                email: {
                    required,
                    email
                }
            },
        }
    }
} )
</script>
