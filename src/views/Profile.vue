<script setup>
import { onMounted, ref } from "vue"
import CupIcon from "../assets/icons/CupIcon.vue"
import BallIcon from "../assets/icons/BallIcon.vue"
import FootIcon from "../assets/icons/FootIcon.vue"
import ShoesIcon from "../assets/icons/ShoesIcon.vue"
import ShapeIcon from "../assets/icons/ShapeIcon.vue"
import playersList from "@/assets/data/playerLists.json"
import LightingIcon from "../assets/icons/LightingIcon.vue"
import { useEditProfile } from "../stores/editProfile.store"

const player = ref({});

onMounted(() => {
  const randomNumber = Math.floor(Math.random() * 18 + 1);
  player.value = playersList[randomNumber];
  useEditProfile().setEditProfile(player.value);
});
</script>

<template>
  <section class="overflow-hidden">
    <ShapeIcon />
    <div
      class="bg-top bg-cover w-32 h-32 md:w-40 md:h-40 xl:w-60 xl:h-60 bg-no-repeat rounded-full mx-auto md:-mt-[18%] -mt-[15%] shadow-2xl"
      :style="{ backgroundImage: `url('/images/${player.firstName}.jpg')` }"
    ></div>
    <h2 class="text-2xl font-semibold text-center capitalize">
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
        <select
          class="py-[1px] px-2 text-teal-600 rounded border-teal-500 shadow-[0_0_1em_0_rgba(0,128,128,0.2)] focus:border-teal-400"
        >
          <option value="0">Daily</option>
          <option value="1">Weekly</option>
          <option value="2">Monthly</option>
        </select>
      </div>
      <div
        class="grid grid-cols-2 max-[375px]:grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-5"
      >
        <div class="flex items-center bg-white p-2 md:px-4 rounded shadow">
          <FootIcon
            :class="[
              'w-7 h-7 -rotate-[30deg]',
              player.foot == 'Chap' ? 'text-teal-400' : '',
            ]"
          />
          <FootIcon
            :class="[
              '-ml-4 mr-3 w-7 h-7 rotate-y-180 rotate-right',
              player.foot != 'Chap' ? 'text-teal-400' : '',
            ]"
          />
          <div>
            <h4 class="font-bold">{{ player.foot }}</h4>
            <p class="text-[#666]">oyoq</p>
          </div>
        </div>
        <div
          class="flex items-center gap-x-5 bg-white p-2 md:px-4 rounded shadow"
        >
          <ShoesIcon class="w-8 h-8 text-teal-400" />
          <div>
            <h4 class="font-bold">{{ `${player.wins * 3}` }}</h4>
            <p class="text-[#666]">Points</p>
          </div>
        </div>
        <div
          class="flex items-center gap-x-5 bg-white p-2 md:px-4 rounded shadow"
        >
          <BallIcon class="w-8 h-8 text-teal-400" />
          <div>
            <h4 class="font-bold">{{ `${player.wins + player.loses}` }}</h4>
            <p class="text-[#666] whitespace-nowrap">Total match</p>
          </div>
        </div>
        <div
          class="flex items-center gap-x-5 bg-white p-2 md:px-4 rounded shadow"
        >
          <CupIcon class="w-8 h-8 text-yellow-400" />
          <div>
            <h4 class="font-bold">{{ player.loses }}</h4>
            <p class="text-[#666]">Wins</p>
          </div>
        </div>
        <div
          class="flex items-center gap-x-5 bg-white p-2 md:px-4 rounded shadow"
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
