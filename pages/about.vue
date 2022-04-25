<template>
    <div>
        <div class="hidden md:block">
            <PageHeroSection hero-image="/login-image.png">
                About <HighlightedHeroWord>Us</HighlightedHeroWord>
            </PageHeroSection>
        </div>
        <Container>
            <div class="text-justify text-dark-900 dark:text-white/80 mt-10 mb-24">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae ex distinctio amet? Architecto mollitia
                    eos accusamus aspernatur vero inventore id aperiam? Harum a quam consequuntur in deserunt dolorem
                    hic
                    nostrum.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae ex distinctio amet? Architecto
                    mollitia
                    eos accusamus aspernatur vero inventore id aperiam? Harum a quam consequuntur in deserunt dolorem
                    hic
                    nostrum.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae ex distinctio amet? Architecto
                    mollitia
                    eos accusamus aspernatur vero inventore id aperiam? Harum a quam consequuntur in deserunt dolorem
                    hic
                    nostrum.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae ex distinctio amet? Architecto
                    mollitia
                    eos accusamus aspernatur vero inventore id aperiam? Harum a quam consequuntur in deserunt dolorem
                    hic
                    nostrum.</p>


                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae ex distinctio amet? Architecto mollitia
                    eos accusamus aspernatur vero inventore id aperiam? Harum a quam consequuntur in deserunt dolorem
                    hic
                    nostrum.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae ex distinctio amet? Architecto
                    mollitia
                    eos accusamus aspernatur vero inventore id aperiam? Harum a quam consequuntur in deserunt dolorem
                    hic
                    nostrum.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae ex distinctio amet? Architecto
                    mollitia
                    eos accusamus aspernatur vero inventore id aperiam? Harum a quam consequuntur in deserunt dolorem
                    hic
                    nostrum.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae ex distinctio amet? Architecto
                    mollitia
                    eos accusamus aspernatur vero inventore id aperiam? Harum a quam consequuntur in deserunt dolorem
                    hic
                    nostrum.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae ex distinctio amet? Architecto mollitia
                    eos accusamus aspernatur vero inventore id aperiam? Harum a quam consequuntur in deserunt dolorem
                    hic
                    nostrum.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae ex distinctio amet? Architecto
                    mollitia
                    eos accusamus aspernatur vero inventore id aperiam? Harum a quam consequuntur in deserunt dolorem
                    hic
                    nostrum.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae ex distinctio amet? Architecto
                    mollitia
                    eos accusamus aspernatur vero inventore id aperiam? Harum a quam consequuntur in deserunt dolorem
                    hic
                    nostrum.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae ex distinctio amet? Architecto
                    mollitia
                    eos accusamus aspernatur vero inventore id aperiam? Harum a quam consequuntur in deserunt dolorem
                    hic
                    nostrum.</p>

            </div>
        </Container>

    </div>
</template>

<script setup>
    import Vue from 'vue';
    import { required, email } from 'vuelidate/lib/validators'
    import { mapActions } from 'vuex';
    import { formControl, projectInfo } from '@/constants/';


    export default Vue.extend( {
        name: "AboutUs",
        head () {
            return {
                title: `About Us | ${projectInfo.PROJECT_NAME}`
            };
        },
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
