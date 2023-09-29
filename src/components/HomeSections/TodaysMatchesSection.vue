<script setup>
import { ref } from "vue";
import { Vue3Marquee } from "vue3-marquee";
import LocationIcon from "@/assets/icons/LocationIcon.vue";

const today = new Date();
const daysOfWeek = [
  "Yakshanba",
  "Dushanba",
  "Seshanba",
  "Chorshanba",
  "Payshanba",
  "Juma",
  "Shanba",
];
const dayOfWeek = daysOfWeek[today.getDay()];

const todaysMatches = ref([
  {
    day: dayOfWeek,
    time: "18:00",
    blueTeam: "Blue Team",
    redTeam: "Red Team",
    location: "Xorazm Palace, Urganch shahar",
  },
  {
    day: dayOfWeek,
    time: "19:00",
    blueTeam: "Urganch",
    redTeam: "Xonqa",
    location: "Milliy gazon, Urganch tuman",
  },
  {
    day: dayOfWeek,
    time: "20:00",
    blueTeam: "Yangiariq",
    redTeam: "Gurlan",
    location: "Xorazm Palace, Urganch shahar",
  },
  {
    day: dayOfWeek,
    time: "21:00",
    blueTeam: "Xorazm",
    redTeam: "Nukus",
    location: "Milliy gazon, Urganch shahar",
  },
  {
    day: dayOfWeek,
    time: "22:00",
    blueTeam: "Xiva",
    redTeam: "Xazarasp",
    location: "Xorazm Palace, Urganch shahar",
  },
]);
</script>
<template>
  <div
    class="flex justify-between items-center text-teal-600 font-bold px-2 mt-4 mb-2"
  >
    <h1 class="text-xl">Bugungi o'yinlar</h1>
    <router-link to="/match-list" class="text-xs hover:text-teal-500"
      >Barchasi</router-link
    >
  </div>
  <Vue3Marquee
    :space="50"
    :duration="30"
    :direction="'normal'"
  >
    <div class="flex items-center ml-6 space-x-4">
      <div
        v-for="(match, index) in todaysMatches"
        :key="index"
        class="mx-4 w-80 h-36 pb-1 bg-white rounded-lg shadow-md mb-3"
      >
        <div class="text-center mt-2">
          <p class="text-sm">{{ match.day }}</p>
          <p class="text-sm">{{ today.toLocaleDateString("uz-UZ") }}</p>
        </div>
        <div class="flex mt-2 mx-4">
          <div
            class="flex items-center font-bold justify-center text-sm w-full bg-teal-400 text-white rounded-l-full p-1.5"
          >
            {{ match.blueTeam }}
          </div>
          <div
            class="flex items-center w-full font-bold justify-center text-teal-600 p-1.5 border-y text-xl"
          >
            {{ match.time }}
          </div>
          <div
            class="flex items-center font-bold justify-center text-sm w-full bg-red-500 text-white rounded-r-full p-1.5"
          >
            {{ match.redTeam }}
          </div>
        </div>
        <div
          class="flex justify-center items-center text-teal-600 my-2 text-sm"
        >
          <LocationIcon class="w-4 h-4 mx-1" />
          {{ match.location }}
        </div>
      </div>
    </div>
  </Vue3Marquee>
</template>