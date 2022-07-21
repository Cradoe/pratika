<template>
    <div v-if=" alert.message ">
        <Alert :alert=" alert " @close=" clearAlert " />
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
    computed: {
        ...mapState( {
            alert: state => state.alert
        } )
    },
    watch: {
        $route () {
            // clear alert on location change
            this.clearAlert();
        }
    },
    methods: {
        ...mapActions( {
            clearAlert: 'alert/clear'
        } )
    },
};
</script>