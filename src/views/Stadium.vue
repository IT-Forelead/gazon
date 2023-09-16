<script setup>
import MyTeleport from "../MyTeleport.vue";
import { useModalStore } from "../stores/modal.store";
</script>

<template>
  <h1 class="text-2xl font-bold px-5 text-teal-500">
    Assalomu alaykum Siz Stadium.vue dasiz.
  </h1>

  <button @click="useModalStore().openTeleport()">open</button>

  <MyTeleport>
    <h1>Azizbekdan salom</h1>
  </MyTeleport>
</template>

<style scoped></style>
