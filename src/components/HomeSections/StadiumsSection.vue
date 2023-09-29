<script setup>
import { ref, computed } from "vue";
import { Vue3Marquee } from "vue3-marquee";
import StadiumCard from "./StadiumCard.vue";
import SortButton from "../Buttons/SortButton.vue";
import stadiumList from "@/assets/data/stadiumList.json";

const currentStadium = ref("barchasi");
const titleList = ref(["barchasi", "band", "band emas", "narxi"]);
const reportStadium = computed(() => {
  if (currentStadium.value == "barchasi") return stadiumList;
  if (currentStadium.value == "narxi")
    return stadiumList.sort((a, b) => b.price - a.price);
  return stadiumList.filter(
    (stadion) => stadion.status == currentStadium.value
  );
});
</script>

<template>
  <section>
    <div class="flex justify-between items-center text-teal-600 font-bold px-2">
      <h2 class="text-2xl">Stadionlar ro'yhati</h2>
      <router-link to="/stadium">Barchasi</router-link>
    </div>
    <ul
      class="hidden my-2 gap-x-2 min-[374px]:flex px-2"
      v-show="$route.href == 'stadium'"
    >
      <li
        v-for="(item, index) in titleList"
        :key="index"
        :class="{ 'ml-auto': item == 'narxi' }"
      >
        <SortButton
          :class="{ 'bg-teal-500 text-white': currentStadium == item }"
          :title="item"
          @click="currentStadium = item"
        />
      </li>
    </ul>
    <select
      v-model="currentStadium"
      class="my-2 py-[1px] px-2 text-teal-600 rounded border-teal-500 shadow-[0_0_1em_0_rgba(0,128,128,0.2)] focus:border-teal-400 hidden max-[373px]:inline"
    >
      <option
        v-for="(item, index) in titleList"
        :key="index"
        :value="item"
        class="capitalize"
      >
        {{ item }}
      </option>
    </select>

    <Vue3Marquee
      :duration="100"
      :pauseOnHover="true"
      :direction="'normal'"
      class="overflow-hidden"
    >
      <ul
        class="flex items-center cursor-pointer"
        v-for="(stadium, index) in reportStadium"
        :key="index"
      >
        <li class="w-72 md:w-96 ml-4 group">
          <StadiumCard :stadium="stadium" />
        </li>
      </ul>
    </Vue3Marquee>
  </section>
</template>