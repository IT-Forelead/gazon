<script setup>
import "swiper/css";
import "swiper/css/effect-cards";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import { EffectCards } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";
import CupIcon from "../assets/icons/CupIcon.vue";
import BallIcon from "../assets/icons/BallIcon.vue";
import FootIcon from "../assets/icons/FootIcon.vue";
import ShoesIcon from "../assets/icons/ShoesIcon.vue";
import playerLists from "@/assets/data/playerLists.json";
import LightingIcon from "../assets/icons/LightingIcon.vue";

import Story from "../Story.vue";

const hero = ref();
const route = useRoute();
const currentImage = ref(-1);
const modules = ref([EffectCards]);

onMounted(() => {
  hero.value = playerLists.filter((player) => player.id == route.params.id)[0];
});
</script>

<template>
  <section class="px-2">
    <div class="flex items-center pl-10 pt-5">
      <div
        class="bg-top bg-cover w-20 h-20 mr-2 bg-no-repeat rounded-full"
        :style="{
          backgroundImage: `url(/images/players/${hero?.firstName}.jpg)`,
        }"
      ></div>
      <span class="-space-y-1">
        <h2 class="capitalize font-semibold text-xl">{{ hero?.firstName }}</h2>
        <h4 class="capitalize">{{ hero?.lastName }}</h4>
        <h4 class="text-[12px] text-gray-400">{{ hero?.age }} yosh</h4>
      </span>
    </div>
    <div
      class="grid grid-cols-2 max-[375px]:grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-5 mt-5"
    >
      <div class="flex items-center bg-white p-2 md:px-4 rounded shadow">
        <FootIcon
          :class="[
            'w-7 h-7 -rotate-[30deg]',
            hero?.foot == 'Chap' ? 'text-teal-400' : '',
          ]"
        />
        <FootIcon
          :class="[
            '-ml-4 mr-3 w-7 h-7 rotate-y-180 rotate-right',
            hero?.foot != 'Chap' ? 'text-teal-400' : '',
          ]"
        />
        <div>
          <h4 class="font-bold">{{ hero?.foot }}</h4>
          <p class="text-[#666]">oyoq</p>
        </div>
      </div>
      <div
        class="flex items-center gap-x-5 bg-white p-2 md:px-4 rounded shadow"
      >
        <ShoesIcon class="w-8 h-8 text-teal-400" />
        <div>
          <h4 class="font-bold">{{ hero?.wins * 3 }}</h4>
          <p class="text-[#666]">Points</p>
        </div>
      </div>
      <div
        class="flex items-center gap-x-5 bg-white p-2 md:px-4 rounded shadow"
      >
        <BallIcon class="w-8 h-8 text-teal-400" />
        <div>
          <h4 class="font-bold">{{ hero?.wins + hero?.loses }}</h4>
          <p class="text-[#666]">Total match</p>
        </div>
      </div>
      <div
        class="flex items-center gap-x-5 bg-white p-2 md:px-4 rounded shadow"
      >
        <CupIcon class="w-8 h-8 text-yellow-400" />
        <div>
          <h4 class="font-bold">{{ hero?.wins }}</h4>
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
          <h4 class="font-bold">{{ hero?.loses }}</h4>
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
        v-for="(image, index) in hero?.images"
        :key="index"
        @click="currentImage = index"
        class="bg-top bg-cover h-40 xl:h-96 2xl:h-[600px] md:h-60 bg-no-repeat cursor-pointer"
        :style="{ backgroundImage: `url(/images/players/${image}.jpg)` }"
      ></li>
      <li
        class="bg-top bg-cover h-40 xl:h-96 2xl:h-[600px] md:h-60 bg-no-repeat cursor-pointer"
      >
        <Story />
      </li>
    </ul>
    <div v-if="currentImage > -1" class="fixed inset-0">
      <div
        class="z-1 fixed inset-0 bg-[#ffffff4f]"
        @click="currentImage = -1"
      ></div>
      <swiper
        :effect="'cards'"
        :grabCursor="true"
        :modules="modules"
        :loop="true"
        class="absolute top-1/2 -translate-y-1/2 w-80 max-w-lg h-3/5 max-h-lg"
      >
        <swiper-slide
          class="p-5 bg-top bg-no-repeat bg-cover"
          v-for="(player, index) in hero?.images"
          :key="index"
          :style="{ backgroundImage: `url(/images/players/${player}.jpg)` }"
        >
        </swiper-slide>
      </swiper>
    </div>
  </section>
</template>
