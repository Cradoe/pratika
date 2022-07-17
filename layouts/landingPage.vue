<template>
    <LayoutWrapper>
        <LazyNavbar bg-color="bg-[#F8FAFC]">
            <template #nav-items>
                <NavbarItemsDefaultItems />
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

