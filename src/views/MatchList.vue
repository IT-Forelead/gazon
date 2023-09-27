<script setup>
import { ref } from "vue";
import router from "@/router";
import { useModalStore } from "@/stores/modal.store";
import SearchIcon from "@/assets/icons/SearchIcon.vue";
import FilterIcon from "@/assets/icons/FilterIcon.vue";
import LeftBackIcon from "@/assets/icons/LeftBackIcon.vue";
import LocationIcon from "@/assets/icons/LocationIcon.vue";
import FilterMatchListModal from "@/components/Modals/FilterMatchListModal.vue";
import SearchMatchListModal from "@/components/Modals/SearchMatchListModal.vue";

const tab = ref("todays");
const currentTab = (tabName) => (tab.value = tabName);

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
const finishedMatches = ref([
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
  <div class="max-w-lg md:mx-auto mt-10">
    <div class="flex items-center justify-around">
      <button @click="router.back()">
        <LeftBackIcon class="w-7 h-7 text-teal-600 hover:text-teal-500 cursor-pointer mx-2"/>
      </button>

      <h1 class="font-bold text-teal-600 text-lg flex-grow text-center pl-7">
        Match list
      </h1>

      <button @click="useModalStore().openTeleport('SEARCH')" type="button">
        <SearchIcon
          class="w-7 h-7 text-teal-600 hover:text-teal-500 cursor-pointer mx-2"
        />
      </button>
      <div v-if="useModalStore().modal == 'SEARCH'">
        <SearchMatchListModal />
      </div>
      <button @click="useModalStore().openTeleport('FILTER')" type="button">
        <FilterIcon
          class="w-7 h-7 text-teal-600 hover:text-teal-500 cursor-pointer mx-2"
        />
      </button>
      <div v-if="useModalStore().modal == 'FILTER'">
        <FilterMatchListModal />
      </div>
    </div>
    <div>
      <ul class="flex justify-center text-white bg-gray-50 mx-2 py-2 mt-4 rounded-lg">
        <li>
          <button
              @click="currentTab('todays')"
              class="inline-block md:px-12 px-6 py-2 focus:outline-none rounded-lg mx-1"
              :class="{'bg-teal-500 text-white': tab === 'todays', 'bg-white text-teal-500': tab !== 'todays'}"
          >
            Today's Matches
          </button>
        </li>
        <li>
          <button
              @click="currentTab('finished')"
              class="inline-block md:px-12 px-6 py-2 focus:outline-none rounded-lg mx-1"
              :class="{'bg-teal-500 text-white': tab === 'finished', 'bg-white text-teal-500': tab !== 'finished'}"
          >
            Finished Matches
          </button>
        </li>
      </ul>
      <div class="p-3 mt-4 mb-14 flex justify-center">
          <div v-if="tab === 'todays'">
            <div v-for="(match, index) in todaysMatches" :key="index"
                 class="w-[380px] px-4 h-[180px] pb-1 bg-white rounded-lg shadow-lg border mb-3">
              <p class="text-sm text-center pt-4">{{ match.day }}</p>
              <p class="text-sm text-center">{{ today.toLocaleDateString("uz-UZ") }}</p>
              <div class="flex mt-3">
                <div
                    class="flex items-center font-bold justify-center text-sm w-full bg-teal-400 text-white rounded-l-full p-1.5">
                  {{ match.blueTeam }}
                </div>
                <div class="flex items-center w-full font-bold justify-center text-teal-600 p-1.5 border-y text-xl">
                  {{ match.time }}
                </div>
                <div
                    class="flex items-center font-bold justify-center text-sm w-full bg-red-500 text-white rounded-r-full p-1.5">
                  {{ match.redTeam }}
                </div>
              </div>
              <div class="flex justify-center items-center text-teal-600 my-4 text-sm">
                <LocationIcon class="w-4 h-4 mx-1"/>
                {{ match.location }}
              </div>
            </div>
          </div>
          <div v-if="tab === 'finished'">
            <div v-for="(matches, index) in finishedMatches" :key="index"
                 class="w-[380px] px-4  h-[180px] pb-1 bg-white rounded-lg shadow-lg border mb-3">
              <p class="text-sm text-center pt-4">{{ matches.day }}</p>
              <p class="text-sm text-center">{{ today.toLocaleDateString("uz-UZ") }}</p>

              <div class="flex mt-2">
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
              <div class="flex justify-center items-center text-red-600 my-1 text-sm">
                Tugadi
              </div>
              <div class="flex justify-center items-center text-teal-600 text-sm">
                <LocationIcon class="w-4 h-4 mx-1" />
                {{ matches.location }}
              </div>
            </div>
          </div>
      </div>
    </div>
  </div>
</template>
<style scoped>

</style>