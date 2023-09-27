<script setup>

import Sidebar from "@/views/admin/Sidebar.vue";
</script>

<template>
  <div class="min-h-screen w-full">
    <Sidebar/>
    <div class="mt-16 md:ml-64 m-0 px-4">
      <router-view />
    </div>
  </div>
</template>
<style scoped>

</style>