<script setup>
import { ref, computed } from "vue";
import { Vue3Marquee } from "vue3-marquee";
import StarIcon from "@/assets/icons/StarIcon.vue";
import SortButton from "../Buttons/SortButton.vue";
import stadiumList from "@/assets/data/stadiumList.json";
import useMoneyFormatter from "../../mixins/currencyFormatter";

const currentStadion = ref("barchasi");
const titleList = ref(["barchasi", "band", "band emas", "narxi"]);
const reportStadion = computed(() => {
  if (currentStadion.value == "barchasi") return stadiumList;
  if (currentStadion.value == "narxi")
    return stadiumList.sort((a, b) => b.price - a.price);
  return stadiumList.filter(
    (stadion) => stadion.status == currentStadion.value
  );
});
</script>

<template>
  <div class="px-2">
    <div class="flex justify-between items-center text-teal-600 font-bold">
      <h2 class="text-2xl">Stadionlar ro'yhati</h2>
      <router-link to="/stadium">Barchasi</router-link>
    </div>
    <ul
      class="hidden my-2 gap-x-2 min-[374px]:flex"
      v-show="$route.href == 'stadium'"
    >
      <li
        v-for="(item, index) in titleList"
        :key="index"
        :class="{ 'ml-auto': item == 'narxi' }"
      >
        <SortButton
          :class="{ 'bg-teal-500 text-white': currentStadion == item }"
          :title="item"
          @click="currentStadion = item"
        />
      </li>
    </ul>
    <select
      v-model="currentStadion"
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
        v-for="(stadion, index) in reportStadion"
        :key="index"
      >
        <li class="w-72 md:w-96 ml-1 md:ml-2 relative group">
          <router-link :to="`/view-stadiums/${stadion.id}`">
            <div
              class="flex items-start gap-x-1 absolute top-3 right-3 text-white font-extrabold z-10"
            >
              <StarIcon class="text-yellow-300 h-6 w-6" />
              <p>{{ stadion.assessment }}</p>
            </div>
            <div
              class="h-40 bg-cover bg-center md:h-48 2xl:h-60 rounded-t-xl relative after:absolute after:content-[''] after:w-full after:h-full after:rounded-t-xl after:bg-[#00000049] duration-300 group-hover:after:bg-[#00000070]"
              :style="{
                backgroundImage: `url(/images/stadiums/${stadion.images[0]}.jpg)`,
              }"
            ></div>
            <div class="p-2 border border-t-0 rounded-b-xl">
              <h4 class="text-teal-700 md:text-2xl text-lg font-bold">
                {{ stadion.title }}
              </h4>
              <div class="flex justify-between">
                <p>{{ stadion.address }}</p>
                <p>{{ useMoneyFormatter(stadion.price) }}</p>
              </div>
            </div>
          </router-link>
        </li>
      </ul>
    </Vue3Marquee>
  </div>
</template>

<style>
bg {
  background-color: rgba(0, 128, 128, 0.034);
}
</style>