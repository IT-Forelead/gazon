<script setup>
import Upload from "./Upload.vue";
const shorts = [
  {
    id: 1,
    thumbnail: "",
  },
];
</script>

<template>
  <MyTeleport>
    <div class="max-w-3xl mx-auto">
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <div
          v-for="short in shorts"
          :key="short.id"
          class="bg-white p-4 rounded shadow"
        >
          <!-- <img src="./preview.png" alt="Thumbnail" class="w-full h-full" /> -->

          <Upload />
        </div>
      </div>
    </div>
  </MyTeleport>
</template>
