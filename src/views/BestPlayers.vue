<script setup>
import { computed, ref } from "vue";
import PlaceIcon from "@/assets/icons/PlaceIcon.vue";
import bestPlayers from "@/assets/data/playerLists.json";
import PlaceOneIcon from "@/assets/icons/PlaceOneIcon.vue";
import PlaceTwoIcon from "@/assets/icons/PlaceTwoIcon.vue";
import SortButton from "../components/Buttons/SortButton.vue";
import PlaceThreeIcon from "@/assets/icons/PlaceThreeIcon.vue";

const bestPlayer = ref("kunlik");
const reportBestPlayer = computed(() =>
  bestPlayers.filter((player) => player.status == bestPlayer.value)
);
</script>

<template>
  <section
    class="px-2 overflow-y-auto max-w-lg md:mx-auto my-2"
    :class="{ 'max-h-96': $route.href == '/' }"
  >
    <div class="sticky top-0 bg-gray-50 pb-4">
      <h2
        :class="[
          $route.href == '/' ? 'text-xl' : 'text-3xl my-4',
          'font-bold text-teal-600',
        ]"
      >
        Eng zo'r futbolchilar
      </h2>
      <ul class="flex mt-2 gap-x-2">
        <li
          v-for="(title, index) in ['kunlik', 'haftalik', 'oylik']"
          :key="index"
        >
          <SortButton
            :class="{ 'bg-teal-500 text-white': bestPlayer == title }"
            :title="title"
            @click="bestPlayer = title"
          />
        </li>
      </ul>
    </div>
    <ul class="space-y-2">
      <li
        v-for="(player, index) in reportBestPlayer"
        :key="index"
        class="bg-white rounded-md p-2"
      >
        <router-link
          :to="`/view-player/${player.firstName}/${player.id}`"
          class="flex items-center justify-between"
        >
          <button class="flex items-center">
            <PlaceOneIcon class="w-10 h-10" v-show="index == 0" />
            <PlaceTwoIcon class="w-10 h-10" v-show="index == 1" />
            <PlaceThreeIcon class="w-10 h-10" v-show="index == 2" />
            <PlaceIcon class="w-10 h-10" v-show="index > 2" />
            <div
              class="bg-top bg-cover w-16 h-16 bg-no-repeat rounded-full mx-2"
              :style="{
                backgroundImage: `url('/images/${player.firstName}.jpg')`,
              }"
            ></div>
            <div class="text-left">
              <h3 class="font-semibold capitalize">{{ player.firstName }}</h3>
              <h4 class="text-sm capitalize">{{ player.lastName }}</h4>
            </div>
          </button>
          <div class="text-right">
            <p class="text-[#666]">
              Gool: <b class="text-black">{{ player.goal }}</b>
            </p>
            <p class="text-[#666]">
              Assist: <b class="text-black">{{ player.assist }}</b>
            </p>
          </div>
        </router-link>
      </li>
    </ul>
  </section>
</template>
