<template>
    <LayoutWrapper>
        <LazyNavbar>
            <template #nav-items>
                <NavbarItemsDefaultItems />
            </template>
            <template #cta-button>
                <NavbarItemsCtaButton to="/login" text="Login" />
            </template>

        </LazyNavbar>
        <Nuxt />
        <Footer />
    </LayoutWrapper>
</template>
<script>

export default {
    name: "RegisterPage"
};
</script>

