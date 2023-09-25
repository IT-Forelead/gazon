<script setup>
import { computed, ref } from "vue";
import PlaceIcon from "@/assets/icons/PlaceIcon.vue";
import bestPlayers from "@/assets/data/playerLists.json";
import PlaceOneIcon from "@/assets/icons/PlaceOneIcon.vue";
import PlaceTwoIcon from "@/assets/icons/PlaceTwoIcon.vue";
import PlaceThreeIcon from "@/assets/icons/PlaceThreeIcon.vue";

const best = ref("daily");
const reportBestPlayer = computed(() =>
  bestPlayers.filter((player) => player.status == best.value)
);
</script>

<template>
  <section
    class="px-2 overflow-y-auto max-w-5xl md:mx-auto my-2"
    :class="{ 'max-h-96': $route.href == '/' }"
  >
    <div class="sticky top-0 pb-4 px-2 bg-white">
      <h2
        :class="[
          $route.href == '/' ? 'text-xl' : 'text-3xl my-4',
          'font-bold text-teal-600',
        ]"
      >
        Eng zo'r futbolchilar
      </h2>
      <ul class="flex mt-2 gap-x-2">
        <li>
          <button
            @click="best = 'daily'"
            :class="{ 'bg-teal-500 text-white': best == 'daily' }"
            class="text-sm py-1 px-4 bg-gray-200 rounded font-semibold duration-200"
          >
            Kunlik
          </button>
        </li>
        <li>
          <button
            @click="best = 'weekly'"
            :class="{ 'bg-teal-500 text-white': best == 'weekly' }"
            class="text-sm py-1 px-4 bg-gray-200 rounded font-semibold duration-200"
          >
            Haftalik
          </button>
        </li>
        <li>
          <button
            @click="best = 'monthly'"
            :class="{ 'bg-teal-500 text-white': best == 'monthly' }"
            class="text-sm py-1 px-4 bg-gray-200 rounded font-semibold duration-200"
          >
            Oylik
          </button>
        </li>
      </ul>
    </div>
    <ul class="space-y-2">
      <li
        v-for="(player, index) in reportBestPlayer"
        :key="player.id"
        class="bg-white rounded-md py-2 pr-2"
      >
        <router-link
          :to="`/view-player/${player.firstName}/${player.id}`"
          class="flex items-center justify-between text-sm"
        >
          <button class="flex items-center">
            <PlaceOneIcon class="w-10 h-10" v-show="index == 0" />
            <PlaceTwoIcon class="w-10 h-10" v-show="index == 1" />
            <PlaceThreeIcon class="w-10 h-10" v-show="index == 2" />
            <PlaceIcon class="w-10 h-10" v-show="index > 2" />
            <div
              class="bg-top bg-cover w-16 h-16 bg-no-repeat rounded-full mx-2"
              :style="{
                backgroundImage: `url('/images/players/${player.firstName}.jpg')`,
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
