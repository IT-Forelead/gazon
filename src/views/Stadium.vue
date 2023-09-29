<script setup>
import { ref, computed } from "vue";
import stadiumList from "@/assets/data/stadiumList.json";
import SortButton from "../components/Buttons/SortButton.vue";
import StadiumCard from "../components/HomeSections/StadiumCard.vue";

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
  <section class="px-2">
    <h2 class="text-center text-3xl text-teal-500 font-bold py-5">
      Barcha stadionlar
    </h2>
    <ul
      class="hidden my-2 gap-x-2 min-[390px]:flex"
      v-show="$route.href == '/stadium'"
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
      class="my-2 py-[1px] px-2 text-teal-600 rounded border-teal-500 shadow-[0_0_1em_0_rgba(0,128,128,0.2)] focus:border-teal-400 hidden max-[389px]:inline"
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
    <ul class="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      <li v-for="stadium in reportStadium" :key="stadium.id" class="group">
        <StadiumCard :stadium="stadium" />
      </li>
    </ul>
  </section>
</template>