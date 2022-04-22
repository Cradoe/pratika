<template>
    <div>
        <PageHeroSection hero-image="/login-image.png">
            Login to Your <br class="hidden lg:block" />
            <HighlightedHeroWord>Account</HighlightedHeroWord>
        </PageHeroSection>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    name: "LoginPage",
    layout: 'loginPage'
})
</script>
