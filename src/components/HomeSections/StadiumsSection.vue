<script setup>
import { Vue3Marquee } from "vue3-marquee";
import StadiumCard from "./StadiumCard.vue";
import stadiumList from "@/assets/data/stadiumList.json";

</script>

<template>
  <section>
    <div class="flex justify-between items-center text-teal-600 font-bold px-2">
      <h2 class="text-2xl">Stadionlar ro'yhati</h2>
      <router-link to="/stadium">Barchasi</router-link>
    </div>
    <Vue3Marquee
      :duration="100"
      :pauseOnHover="true"
      :direction="'normal'"
      class="overflow-hidden"
    >
      <ul
        class="flex items-center cursor-pointer"
        v-for="(stadium, index) in stadiumList"
        :key="index"
      >
        <li class="w-72 md:w-96 ml-4 group">
          <StadiumCard :stadium="stadium" />
        </li>
      </ul>
    </Vue3Marquee>
  </section>
</template>