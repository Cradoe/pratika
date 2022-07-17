<template>
  <LayoutWrapper>
    <LazyNavbar>
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
  name: "NuxtDefault"
};
</script>

