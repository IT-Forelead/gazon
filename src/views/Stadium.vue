<script setup>
import stadiumList from "@/assets/data/stadiumList.json";
import StadiumCard from "../components/HomeSections/StadiumCard.vue";
</script>

<template>
  <section class="px-2">
    <h2 class="text-center text-3xl text-teal-500 font-bold p-10">Barcha stadionlar</h2>
    <ul class="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      <li v-for="stadium in stadiumList" :key="stadium.id" class="group">
        <StadiumCard :stadium="stadium" />
      </li>
    </ul>
  </section>
</template>