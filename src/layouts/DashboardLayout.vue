<script setup>
import NavbarBottom from "@/components/NavbarBottom.vue";

</script>
<template>
  <router-view v-slot="{ Component }">
    <component :is="Component"/>
  </router-view>
  <NavbarBottom/>
</template>
