<script setup>
import SearchIcon from "@/assets/icons/SearchIcon.vue";
import stadiumsList from "@/assets/data/stadiumList.json";
import useMoneyFormatter from "@/mixins/currencyFormatter";
import { computed, onBeforeUnmount, onMounted, ref } from "vue";

const search = ref("");
const open = ref(false);
const inputRef = ref(null);
const searchStadium = computed(() =>
  stadiumsList.filter((stadium) =>
    stadium.title.toLowerCase().includes(search.value.toLowerCase())
  )
);

const closePlayerList = (event) => {
  if (inputRef.value && !inputRef.value.contains(event.target)) {
    open.value = false;
  }
};
onMounted(() => {
  document.addEventListener("click", closePlayerList);
});

onBeforeUnmount(() => {
  document.removeEventListener("click", closePlayerList);
});
</script>

<template>
  <section class="mt-8 pb-6 px-2">
    <label
      ref="inputRef"
      @click="open = true"
      class="mx-auto md:max-w-5xl flex items-center px-2 py-2 border rounded-full bg-white border-teal-600"
    >
      <SearchIcon class="w-7 h-7 text-teal-600 cursor-pointer mr-2" />
      <input
        type="search"
        v-model="search"
        class="text-gray-900 border-0 focus:ring-0 w-full sm:p-2 p-0"
        placeholder="Stadionlarni qidirish..."
      />
    </label>
    <ul
      class="max-h-52 md:max-w-5xl mx-auto mt-2 pr-2 flex flex-col overflow-y-scroll rounded-lg"
      v-show="open"
    >
      <li v-for="stadium in searchStadium" :key="stadium.id" class="mb-0.5">
        <router-link
          :to="`/view-stadiums/${stadium.id}`"
          class="justify-between transition duration-300 shadow hover:-translate-y-0.5 hover:shadow select-none cursor-pointer bg-white flex flex-1 items-center py-1 pr-2"
        >
          <div
            class="flex flex-col items-center justify-center w-10 h-10 mr-4 bg-center bg-cover rounded-full"
            :style="{
              backgroundImage: `url(/images/stadiums/${stadium.images[0]}.jpg)`,
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
        </router-link>
      </li>
    </ul>
  </section>
</template>