<template>
    <div class="vue-password-container">
        <input ref="input" :class=" classes " :value=" value " v-bind=" $attrs " v-on=" listeners " />
        <button v-if=" !disableToggle " class="toggle-button" :title=" toggleMessage " type="button"
            @click=" togglePassword ">
            <div v-if=" type === 'text' " name="password-hide">
                <svg class="toggle-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path
                        d="M12.81 4.36l-1.77 1.78a4 4 0 0 0-4.9 4.9l-2.76 2.75C2.06 12.79.96 11.49.2 10a11 11 0 0 1 12.6-5.64zm3.8 1.85c1.33 1 2.43 2.3 3.2 3.79a11 11 0 0 1-12.62 5.64l1.77-1.78a4 4 0 0 0 4.9-4.9l2.76-2.75zm-.25-3.99l1.42 1.42L3.64 17.78l-1.42-1.42L16.36 2.22z" />
                </svg>
            </div>
            <div v-else name="password-show">
                <svg class="toggle-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path
                        d="M.2 10a11 11 0 0 1 19.6 0A11 11 0 0 1 .2 10zm9.8 4a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm0-2a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" />
                </svg>
            </div>
        </button>
    </div>
</template>

<script>
export default {
    inheritAttrs: false,
    props: {
        classes: {
            type: [ Object, Array, String ],
            default: ''
        },
        disableToggle: Boolean,
        // eslint-disable-next-line vue/require-default-prop
        value: String
    },
    data () {
        return {
            type: this.$attrs.type
        };
    },
    computed: {
        inputElement () {
            if ( this.$refs.input ) {
                return this.$refs.input;
            }
            if ( this.$el ) {
                return this.$el.querySelector( ".vue-password-container input" );
            }
            return null;
        },
        listeners () {
            return Object.assign(
                {},
                this.$listeners,
                { input: this.updatePassword }
            );
        },
        model: {
            get () {
                return this.value;
            },
            set ( value ) {
                this.$emit( "input", value );
            }
        },

        toggleMessage () {
            return this.type === "password" ? "Show Password" : "Hide Password";
        }
    },
    mounted () {
        if ( !this.$attrs.type ) {
            this.togglePassword( false );
        }
    },
    methods: {

        /**
         * Toggle the visibilty of the password.
         */
        togglePassword ( focus = true ) {
            this.type = this.type === "password" ? "text" : "password";
            this.inputElement.setAttribute( "type", this.type );

            if ( focus ) {
                this.inputElement.focus();
            }
        },
        /**
         * Update the password input.
         *
         * @param  {String} password
         */
        updatePassword ( event ) {
            this.model = event.target.value;
        }
    }
};
</script>
<style scoped>
.vue-password-container {
    position: relative
}

.toggle-button {
    position: absolute;
    right: 3%;
    top: 25%;
    z-index: 10
}

.toggle-icon {
    height: 1.2rem;
    width: 1.2rem
}
</style>
