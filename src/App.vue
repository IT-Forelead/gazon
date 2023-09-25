<script setup>
import { computed } from "vue"
import { useRouter } from "vue-router"
import NavbarBottom from "@/components/NavbarBottom.vue"

const defaultLayout = "login"
const { currentRoute } = useRouter();
const layout = computed(
  () => `${currentRoute.value.meta.layout || defaultLayout}-layout`
);
</script>

<template>
  <component :is="layout" class="pb-16">
    <router-view />
  </component>
  <NavbarBottom />
</template>