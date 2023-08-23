<script setup>
import "swiper/css";
import "swiper/css/effect-cards";
import { useRoute } from "vue-router";
import { onMounted, watch, ref } from "vue";
import { EffectCards } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";
import CupIcon from "../assets/icons/CupIcon.vue";
import playerLists from "@/assets/playerLists.json";
import BallIcon from "../assets/icons/BallIcon.vue";
import ShoesIcon from "../assets/icons/ShoesIcon.vue";
import LightingIcon from "../assets/icons/LightingIcon.vue";

const modules = ref([EffectCards]);

const hero = ref();
const players = ref([]);
const route = useRoute();
const heroImage = ref("");

onMounted(() => {
  hero.value = playerLists.filter((player) => player.id == route.params.id)[0];
  players.value = playerLists.filter((player) => player.id != route.params.id);
  players.value.unshift(hero.value);
});
</script>

<template>
  <section>
    <div class="flex items-center pl-10">
      <div
        class="bg-top bg-cover w-20 h-20 mr-2 bg-no-repeat rounded-full"
        :style="{ backgroundImage: `url(/${hero?.firstName}.jpg)` }"
      ></div>
      <span class="-space-y-1">
        <h2 class="capitalize font-semibold text-xl">{{ hero?.firstName }}</h2>
        <h4 class="capitalize">{{ hero?.lastName }}</h4>
        <h4 class="text-[12px] text-gray-400">{{ hero?.age }} yosh</h4>
      </span>
    </div>

    <div class="grid p-5 grid-cols-2 gap-4">
      <div class="flex items-center gap-x-5 bg-white py-2 px-4 rounded">
        <div>
          <ShoesIcon class="w-8 h-8 text-teal-400" />
        </div>
        <div>
          <h4 class="font-bold text-xl">{{ 80 * 3 }}</h4>
          <p class="text-[#666]">Points</p>
        </div>
      </div>
      <div class="flex items-center gap-x-5 bg-white py-2 px-4 rounded">
        <div>
          <BallIcon class="w-8 h-8 text-teal-400" />
        </div>
        <div>
          <h4 class="font-bold text-xl">120</h4>
          <p class="text-[#666]">Total match</p>
        </div>
      </div>
      <div class="flex items-center gap-x-5 bg-white py-2 px-4 rounded">
        <div>
          <CupIcon class="w-8 h-8 text-yellow-400" />
        </div>
        <div>
          <h4 class="font-bold text-xl">80</h4>
          <p class="text-[#666]">Wins</p>
        </div>
      </div>
      <div class="flex items-center gap-x-5 bg-white py-2 px-4 rounded">
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

    <ul class="flex my-4 items-center justify-around">
      <li>
        <h4 class="font-bold">1 000</h4>
        <span>rasm va video</span>
      </li>
      <li>
        <h4 class="font-bold">2 347</h4>
        <span>obunachi</span>
      </li>
      <li>
        <h4 class="font-bold">100</h4>
        <span>gollar</span>
      </li>
    </ul>
    <ul class="grid items-center grid-cols-3 gap-1">
      <li
        v-for="(player, index) in players"
        :key="index"
        @click="heroImage = index + 1"
        class="bg-top bg-cover h-40 xl:h-96 2xl:h-[600px] md:h-60 bg-no-repeat cursor-pointer"
        :style="{ backgroundImage: `url(/${player.firstName}.jpg)` }"
      ></li>
    </ul>

    <div v-if="heroImage" class="fixed inset-0">
      <div class="fixed inset-0 bg-[#ffffff4f]" @click="heroImage = ''"></div>
      <swiper
        :effect="'cards'"
        :grabCursor="true"
        :modules="modules"
        :autoplay="true"
        :loop="true"
        class="mySwiper absolute top-1/2 -translate-y-1/2 w-80 max-w-lg h-3/5 max-h-lg"
      >
        <swiper-slide
          class="p-5 bg-top bg-no-repeat bg-cover"
          v-for="(player, index) in playerLists"
          :key="index"
          :style="{ backgroundImage: `url(/${player?.firstName}.jpg)` }"
        >
          {{ index }} <br />
          {{ heroImage }}
        </swiper-slide>
      </swiper>
    </div>
  </section>
</template>
