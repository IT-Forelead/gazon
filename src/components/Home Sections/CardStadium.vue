<script setup>
import stadiumListJson from "@/assets/data/stadiumList.json";
import Stadium from "@/views/Stadium.vue";


</script>

<template>
<div>
  <Stadium
      v-for="(stadium, index) in stadiumListJson"
      :key="index"
      :stadium="stadium"
  />h
</div>
</template>

<style scoped>
</style>