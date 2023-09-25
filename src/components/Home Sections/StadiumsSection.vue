<script setup>
import "swiper/css";
import "swiper/css/navigation";
import { useRouter } from "vue-router";
import { ref, computed, onMounted } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import StarIcon from "@/assets/icons/StarIcon.vue";
import SortButton from "../Buttons/SortButton.vue";
import { Autoplay, Pagination } from "swiper/modules";
import stadiumList from "@/assets/data/stadiumList.json";
import useMoneyFormatter from "../../mixins/currencyFormatter";

const screenSize = ref(0);
const router = useRouter();
const modules = [Autoplay, Pagination];

const slidesPerView = computed(() => {
  if (screenSize.value < 340) {
    return 1;
  } else if (screenSize.value < 464) {
    return 1.5;
  } else if (screenSize.value < 510) {
    return 2.5;
  } else if (screenSize.value < 910) {
    return 3;
  } else {
    return 4;
  }
});

const updateScreenWidth = () => {
  screenSize.value = window.innerWidth;
};

const onScreenResize = () => {
  window.addEventListener("resize", () => {
    updateScreenWidth();
  });
};

onMounted(() => {
  updateScreenWidth();
  onScreenResize();
});

const titleList = ref(["barchasi", "band", "band emas", "narxi"]);
const currentStadion = ref("barchasi");
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
  <div class="relative max-w-5xl mx-auto mb-8 px-2">
    <div
      class="flex justify-between items-center md:mx-auto text-teal-600 font-bold"
    >
      <h1 class="text-xl">Stadionlar ro'yhati</h1>
      <router-link to="/" class="text-xs">Barchasi</router-link>
    </div>
    <ul class="hidden my-2 gap-x-2 min-[374px]:flex">
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
      class="bg-gray-50 my-2 border-teal-500 rounded-lg focus:ring-teal-500 focus:border-teal-500 text-teal-700 hidden max-[373px]:inline"
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
    <swiper
      :centeredSlides="true"
      :slidesPerView="slidesPerView"
      :spaceBetween="5"
      :grabCursor="true"
      :pagination="{ clickable: true }"
      :autoplay="{
        delay: 3500,
        disableOnInteraction: false,
      }"
      :loop="true"
      :modules="modules"
      class="mySwiper"
    >
      <swiper-slide
        v-for="(stadion, index) in reportStadion"
        :key="index"
        @click="router.push(`/view-stadiums/${stadion.id}`)"
      >
        <div
          class="border w-full transition duration-300 flex flex-col rounded-xl"
        >
          <div class="relative">
            <div
              class="w-20 h-8 gap-x-2 flex items-center absolute top-3 left-3 bg-gray-200 text-black text-lg rounded-3xl p-2"
            >
              <StarIcon />
              <p class="text-lg font-semibold">{{ stadion.assessment }}</p>
            </div>
            <div
              class="h-36 bg-cover bg-center rounded-t-lg lg:h-40 xl:h-48 2xl:h-52"
              :style="{
                backgroundImage: `url(/images/${stadion.images[0]}.jpg)`,
              }"
            ></div>
          </div>
          <div class="p-2">
            <div class="border-b-2 pb-1">
              <h3 class="font-semibold text-zinc-900 md:text-xl text-lg">
                {{ stadion.title }}
              </h3>
              <div
                class="flex justify-between text-zinc-500 text-sm font-normal gap-x-2"
              >
                <p>{{ stadion.address }}</p>
                <p>{{ useMoneyFormatter(stadion.price) }}</p>
              </div>
            </div>
            <div class="flex justify-between items-center mt-2 relative">
              <button
                class="bg-teal-400 hover:bg-teal-500 transition duration-200 text-sm text-gray-50 rounded-full py-1 md:py-1.5 px-3 md:px-5"
              >
                Booking
              </button>
              <div
                class="absolute left-1/2 ml-2 bg-zinc-400 top-0 border-l h-7 md:h-8 w-0.5"
              ></div>
              <router-link
                :to="`/view-stadiums/${stadion.id}`"
                class="font-normal text-zinc-500 text-sm md:text-lg hover:text-teal-400"
              >
                Batafsil...
              </router-link>
            </div>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<style>
.swiper-slide {
  min-width: fit-content;
}
</style>