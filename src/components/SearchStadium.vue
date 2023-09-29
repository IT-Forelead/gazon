<script setup>
import notify from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import RightIcon from "@/assets/icons/RightIcon.vue";
import stadiums from "@/assets/data/stadiumList.json";
import SearchIcon from "@/assets/icons/SearchIcon.vue";
import { useStadiumStore } from "@/stores/stadiums.store";
import { useDropDownStore } from "@/stores/dropdown.store";
import LocationIcon from "@/assets/icons/LocationIcon.vue";
import useMoneyFormatter from "../mixins/currencyFormatter";
import { computed, onBeforeUnmount, onMounted, ref } from "vue";

const inputRef = ref(null);
const searchQuery = ref("");

const showWarningToast = (text) => {
  notify.warning({
    message: text,
    messageSize: "20",
    position: "bottomRight",
    timeout: 5000,
  });
};

const filterStadiums = computed(() =>
  stadiums.filter((stadium) =>
    stadium.title.toLowerCase().includes(searchQuery.value.toLowerCase())
  )
);

const closeStadiumList = (event) => {
  if (inputRef.value && !inputRef.value.contains(event.target)) {
    useDropDownStore().closeSelectStadiums();
  }
};

onMounted(() => {
  document.addEventListener("click", closeStadiumList);
});
onBeforeUnmount(() => {
  document.removeEventListener("click", closeStadiumList);
});
const handleClick = (stadium) => {
  useStadiumStore().setSelectStadium(stadium);
};
</script>
<template>
  <!--SearchInput-->
  <div class="max-w-3xl px-2 mt-10 md:mx-auto">
    <div class="relative max-w-3xl pb-1 mx-auto">
      <div class="absolute inset-y-0 flex items-center pl-3">
        <SearchIcon class="w-5 h-5 text-teal-600" />
      </div>
      <input
        type="search"
        id="default-search"
        @click="useDropDownStore().openSelectStadiums()"
        ref="inputRef"
        v-model="searchQuery"
        class="w-full p-4 pl-10 text-sm text-gray-900 bg-white border border-gray-200 rounded-xl focus:ring-teal-500 focus:border-teal-500"
        placeholder="Stadionlarni qidirish..."
      />
    </div>
    <!--    StadiumList-->
    <div class="px-1">
      <ul
        v-if="useDropDownStore().isOpenSelectStadiums"
        class="flex flex-col max-h-48 overflow-y-scroll rounded-lg"
      >
        <li
          v-for="(stadium, index) in filterStadiums"
          :key="index"
          class="mb-0.5"
        >
          <div
            @click="handleClick(stadium)"
            class="justify-between transition duration-300 shadow hover:-translate-y-0.5 hover:shadow select-none cursor-pointer bg-white flex flex-1 items-center py-1 pr-2"
          >
            <div
              class="flex flex-col items-center justify-center w-10 h-10 mr-4 bg-center bg-cover rounded-full"
              :style="{
                backgroundImage: `url(/images/stadiums/${
                  stadium.images[0] ? stadium.images[0] : 'the-stadium'
                }.jpg)`,
              }"
            ></div>
            <div class="flex-1 pl-1 md:mr-16">
              <div class="font-medium dark:text-white">
                {{ stadium.title }}
              </div>
              <div class="text-sm text-gray-600 dark:text-gray-200">
                {{ stadium.address }}
              </div>
            </div>
            <div class="text-xs text-gray-600 dark:text-gray-200">
              {{ useMoneyFormatter(stadium.price) }}
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
  <!--Selected Stadium Info-->
  <div
    v-if="useStadiumStore().selectStadium.title"
    class="flex flex-col items-center justify-center w-full max-w-lg px-2 mx-auto mt-4"
  >
    <div
      class="w-full h-64 bg-gray-300 bg-center bg-cover rounded-lg shadow-md"
      :style="{
        backgroundImage: `url(/images/stadiums/${
          useStadiumStore().selectStadium.images[0]
            ? useStadiumStore().selectStadium.images[0]
            : 'the-stadium'
        }.jpg)`,
      }"
    ></div>
    <div
      class="w-64 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-80 dark:bg-gray-800"
    >
      <h3
        class="py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white"
      >
        {{ useStadiumStore().selectStadium.title }}
      </h3>
      <div
        class="flex items-center justify-between px-3 py-2 text-white bg-teal-500"
      >
        <LocationIcon class="w-5 h-5" />
        <span class="text-xs font-bold">{{
          useStadiumStore().selectStadium.address
        }}</span>
        <div
          class="px-2 py-1 text-xs font-semibold text-white uppercase transition-colors duration-300 transform bg-teal-700 rounded hover:bg-teal-600 dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none"
        >
          {{ useMoneyFormatter(useStadiumStore().selectStadium.price) }}
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
</style>