<script setup>
import {Vue3Marquee} from "vue3-marquee"
import LocationIcon from "@/assets/icons/LocationIcon.vue"
import {ref} from "vue"

const todaysMatches = ref([
  {
    day: "Juma",
    date: "15 Avgust",
    time: "18:00",
    blueTeam: "Blue Team",
    redTeam: "Red Team",
    location: "Xorazm Palace, Urganch shahar",
  },
  {
    day: "Juma",
    date: "15 Avgust",
    time: "19:00",
    blueTeam: "Urganch",
    redTeam: "Xonqa",
    location: "Milliy gazon, Urganch tuman",
  },
  {
    day: "Juma",
    date: "15 Avgust",
    time: "20:00",
    blueTeam: "Yangiariq",
    redTeam: "Gurlan",
    location: "Xorazm Palace, Urganch shahar",
  },
  {
    day: "Juma",
    date: "15 Avgust",
    time: "21:00",
    blueTeam: "Xorazm",
    redTeam: "Nukus",
    location: "Milliy gazon, Urganch shahar",
  },
  {
    day: "Juma",
    date: "15 Avgust",
    time: "22:00",
    blueTeam: "Xiva",
    redTeam: "Xazarasp",
    location: "Xorazm Palace, Urganch shahar",
  },
]);
</script>
<template>
  <div class="flex justify-between max-w-lg items-center ml-3 md:mx-auto text-teal-600 font-bold">
    <div class="ml-3">
      <h1 class="flex items-center text-sm">Bugungi o'yinlar</h1>
    </div>
    <div class="mr-3">
      <a href="" class="flex items-center text-xs">Barchasi</a>
    </div>
  </div>
  <Vue3Marquee :space="50" :duration="30" :direction="'normal'" class="max-w-lg mt-2 md:mx-auto">
    <div class="flex items-center ml-6 space-x-4">
      <div
          v-for="(matches, index) in todaysMatches"
          :key="index"
          class="mx-4 w-80 h-36 pb-1 bg-white rounded-lg shadow-md mb-3">
        <div class="text-center mt-2">
          <p class="text-sm">{{ matches.day }}</p>
          <p class="text-sm">{{ matches.date }}</p>
        </div>
        <div class="flex mt-2 mx-4">
          <div class="flex items-center font-bold justify-center text-sm w-full bg-blue-800 text-white rounded-l-full p-1.5">
            {{ matches.blueTeam }}
          </div>
          <div class="flex items-center w-full font-bold justify-center text-teal-600 p-1.5 border-y text-xl">
            {{ matches.time }}
          </div>
          <div class="flex items-center font-bold justify-center text-sm w-full bg-red-800 text-white rounded-r-full p-1.5">
            {{ matches.redTeam }}
          </div>
        </div>
        <div class="flex justify-center items-center text-teal-600 my-2 text-sm">
          <LocationIcon class="w-4 h-4 mx-1"/>
          {{ matches.location }}
        </div>
      </div>
    </div>
  </Vue3Marquee>
</template>
<style scoped>
/* Bu yerga stil qo'shishingiz mumkin */
</style>
