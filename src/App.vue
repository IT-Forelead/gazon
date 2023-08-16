<script setup>
import { useRouter } from 'vue-router'
import { computed } from 'vue'
import NavbarTop from "@/components/NavbarTop.vue";

const defaultLayout = 'login'
const { currentRoute } = useRouter()
const layout = computed(() => `${currentRoute.value.meta.layout || defaultLayout}-layout`)
</script>

<template>
  <div class="bg-gray-50 min-h-screen">
    <NavbarTop />
    <component :is="layout">
      <router-view />
    </component>
  </div>
</template>
