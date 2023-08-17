<script setup>
import NavbarBottom from "@/components/NavbarBottom.vue";
import Navbar2 from "@/components/Navbar2.vue";


</script>
<template>
  <router-view v-slot="{ Component }">
    <component :is="Component"/>
  </router-view>
  <NavbarBottom/>
<!--  <Navbar2/>-->
</template>
