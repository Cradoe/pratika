<template>
    <LayoutWrapper>
        <LazyNavbar bg-color="bg-[#F8FAFC]">
            <template #nav-items>
                <NavbarDefaultItems />
            </template>
            <template #cta-button>
                <NavbarCtaButton to="/login" text="Login" />
            </template>

        </LazyNavbar>
        <Nuxt />
        <Footer />
    </LayoutWrapper>
</template>
<script>

export default {
    name: "LandingPage"
};
</script>

