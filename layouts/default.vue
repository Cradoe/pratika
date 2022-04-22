<template>
  <LayoutWrapper>
    <LazyNavbar>
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
  name: "NuxtDefault"
};
</script>

