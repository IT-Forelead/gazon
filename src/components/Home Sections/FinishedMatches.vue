<script setup>
import { Vue3Marquee } from "vue3-marquee"
import LocationIcon from "@/assets/icons/LocationIcon.vue"
import { ref } from "vue"

const today = new Date()
const daysOfWeek = ["Yakshanba", "Dushanba", "Seshanba", "Chorshanba", "Payshanba", "Juma", "Shanba"]
const dayOfWeek = daysOfWeek[today.getDay()]


const todaysMatches = ref([
  {
    day: dayOfWeek,
    score: "1-0",
    blueTeam: "Blue Team",
    redTeam: "Red Team",
    location: "Xorazm Palace, Urganch shahar",
  },
  {
    day: dayOfWeek,
    score: "3-0",
    blueTeam: "Urganch",
    redTeam: "Xonqa",
    location: "Milliy gazon, Urganch tuman",
  },
  {
    day: dayOfWeek,
    score: "1-2",
    blueTeam: "Yangiariq",
    redTeam: "Gurlan",
    location: "Xorazm Palace, Urganch shahar",
  },
  {
    day: dayOfWeek,
    score: "4-5",
    blueTeam: "Xorazm",
    redTeam: "Nukus",
    location: "Milliy gazon, Urganch shahar",
  },
  {
    day: dayOfWeek,
    score: "4-4",
    blueTeam: "Xiva",
    redTeam: "Xazarasp",
    location: "Xorazm Palace, Urganch shahar",
  },
]);
</script>
<template>
  <div class="flex justify-between max-w-lg items-center md:mx-auto text-teal-600 font-bold px-2 mt-4">
    <h1 class="text-xl">Yakunlangan o'yinlar</h1>
    <a href="" class="text-xs">Barchasi</a>
  </div>
  <Vue3Marquee :space="50" :duration="30" :direction="'normal'" class="max-w-lg mt-2 md:mx-auto">
    <div class="flex items-center ml-6 space-x-4">
      <div v-for="(matches, index) in todaysMatches" :key="index"
        class="mx-4 w-80 h-[190px] pb-1 bg-white rounded-lg shadow-md mb-3">
        <div class="text-center mt-2">
          <p class="text-sm">{{ matches.day }}</p>
          <p class="text-sm">{{ today.toLocaleDateString("uz-UZ") }}</p>
        </div>
        <div class="flex mt-2 mx-4">
          <div
            class="flex items-center font-bold justify-center text-sm w-full bg-teal-400 text-white rounded-l-full p-1.5">
            {{ matches.blueTeam }}
          </div>
          <div class="flex items-center w-full justify-center font-bold text-teal-600 p-1.5 border-y text-xl">
            {{ matches.score }}
          </div>
          <div
            class="flex items-center font-bold justify-center text-sm w-full bg-red-500 text-white rounded-r-full p-1.5">
            {{ matches.redTeam }}
          </div>
        </div>
        <div class="flex justify-center items-center text-red-600 my-2 text-sm">
          Tugadi
        </div>
        <div class="flex justify-center items-center text-teal-600 my-2 text-sm">
          <LocationIcon class="w-4 h-4 mx-1" />
          {{ matches.location }}
        </div>
      </div>
    </div>
  </Vue3Marquee>
</template>