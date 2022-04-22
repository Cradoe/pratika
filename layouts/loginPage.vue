<template>
    <LayoutWrapper>
        <LazyNavbar>
            <template #nav-items>
                <NavbarDefaultItems />
            </template>
            <template #cta-button>
                <NavbarCtaButton to="/register" text="Register" />
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

