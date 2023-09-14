<script setup>
import SearchMatchListModal from "../components/Modals/SearchMatchListModal.vue";
import { useModalStore } from "../stores/modal.store";
</script>

<template>
  <h1 class="text-2xl font-bold px-5 text-teal-500">
    Assalomu alaykum Siz Stadium.vue dasiz.
  </h1>

  <button @click="useModalStore().openSearchMatchListModal()">open</button>

  <SearchMatchListModal>
    <h1>Azizbekdan salom</h1>
  </SearchMatchListModal>
</template>

<style scoped></style>
