<template>
    <LayoutWrapper>
        <LazyNavbar>
            <template #nav-items>
                <NavbarItemsDefaultItems />
            </template>
            <template #cta-button>
                <NavbarItemsCtaButton to="/register" text="Register" />
            </template>

        </LazyNavbar>
        <Nuxt />
        <Footer />
    </LayoutWrapper>
</template>
<script>

export default {
    name: "LoginPage"
};
</script>

