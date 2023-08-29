<script setup>
import { onMounted, ref } from "vue";
import CupIcon from "../assets/icons/CupIcon.vue";
import BallIcon from "../assets/icons/BallIcon.vue";
import FootIcon from "../assets/icons/FootIcon.vue";
import ShoesIcon from "../assets/icons/ShoesIcon.vue";
import ShapeIcon from "../assets/icons/ShapeIcon.vue";
import playersList from "@/assets/data/playerLists.json";
import LightingIcon from "../assets/icons/LightingIcon.vue";

const player = ref({});

onMounted(() => {
  const randomNumber = Math.floor(Math.random() * 18 + 1);
  player.value = playersList[randomNumber];
});
</script>

<template>
  <section class="overflow-hidden max-w-lg mx-auto">
    <ShapeIcon />
    <div
      class="bg-top bg-cover w-32 h-32 bg-no-repeat rounded-full mx-auto -mt-16 shadow-2xl"
      :style="{ backgroundImage: `url('/images/${player.firstName}.jpg')` }"
    ></div>
    <h2 class="text-2xl text-center font-semibold capitalize">
      {{ `${player.firstName} ${player.lastName}` }}
    </h2>
    <router-link
      to="/edit-profile"
      class="mx-auto text-center mt-2 mb-4 block py-2 w-32 rounded-3xl bg-teal-500 text-white font-semibold"
      >Edit</router-link
    >
    <hr />
    <div class="px-2">
      <div class="flex justify-between my-4">
        <h4 class="font-semibold">Statistika</h4>
        <select class="rounded-3xl border-[#999]">
          <option value="0">Daily</option>
          <option value="1">Weekly</option>
          <option value="2">Monthly</option>
        </select>
      </div>
      <div class="grid grid-cols-2 gap-4">
        <div
          class="flex items-center gap-x-4 bg-white py-2 px-4 rounded shadow"
        >
          <FootIcon
            :class="[
              player.foot == 'Chap'
                ? 'rotate-y-180 text-teal-400'
                : 'text-teal-500',
              'w-9 h-9',
            ]"
          />
          <div>
            <h4 class="font-bold">{{ player.foot }}</h4>
            <p class="text-[#666]">oyoq</p>
          </div>
        </div>
        <div
          class="flex items-center gap-x-5 bg-white py-2 px-4 rounded shadow"
        >
          <ShoesIcon class="w-8 h-8 text-teal-400" />
          <div>
            <h4 class="font-bold">{{ `${player.wins * 3}` }}</h4>
            <p class="text-[#666]">Points</p>
          </div>
        </div>
        <div
          class="flex items-center gap-x-5 bg-white py-2 px-4 rounded shadow"
        >
          <BallIcon class="w-8 h-8 text-teal-400" />
          <div>
            <h4 class="font-bold">{{ `${player.wins + player.loses}` }}</h4>
            <p class="text-[#666] whitespace-nowrap">Total match</p>
          </div>
        </div>
        <div
          class="flex items-center gap-x-5 bg-white py-2 px-4 rounded shadow"
        >
          <CupIcon class="w-8 h-8 text-yellow-400" />
          <div>
            <h4 class="font-bold">{{ player.loses }}</h4>
            <p class="text-[#666]">Wins</p>
          </div>
        </div>
        <div
          class="flex items-center gap-x-5 bg-white py-2 px-4 rounded shadow"
        >
          <div class="relative">
            <CupIcon class="w-8 h-8 text-red-500" />
            <LightingIcon class="absolute top-0 text-white right-2" />
          </div>
          <div>
            <h4 class="font-bold text-xl">40</h4>
            <p class="text-[#666]">Loses</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>