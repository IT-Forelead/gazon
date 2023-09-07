<script setup>
import "swiper/css";
import "swiper/css/navigation";
import { useRouter } from "vue-router";
import { ref, computed, onMounted } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import StarIcon from "@/assets/icons/StarIcon.vue";
import { Autoplay, Pagination } from "swiper/modules";
import stadiumList from "@/assets/data/stadiumList.json";
import useMoneyFormatter from "../../mixins/currencyFormatter";

const screenSize = ref(0);
const router = useRouter();
const modules = [Autoplay, Pagination];

const slidesPerView = computed(() => {
  if (screenSize.value < 340) {
    return 1.3;
  } else if (screenSize.value < 377) {
    return 1.5;
  } else if (screenSize.value < 400) {
    return 1.6;
  } else if (screenSize.value < 440) {
    return 1.7;
  } else if (screenSize.value < 464) {
    return 1.8;
  } else if (screenSize.value < 510) {
    return 2;
  } else {
    return 3;
  }
});

const spaceBetween = computed(() => {
  if (screenSize.value < 360) {
    return 12;
  } else if (screenSize.value < 415) {
    return -10;
  } else if (screenSize.value < 450) {
    return -27;
  } else if (screenSize.value < 568) {
    return -7;
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

const currentStadion = ref("all");
const reportStadion = computed(() => {
  if (currentStadion.value == "all") return stadiumList;
  if (currentStadion.value == "money")
    return stadiumList.sort((a, b) => b.price - a.price);
  return stadiumList.filter(
    (stadion) => stadion.status == currentStadion.value
  );
});
</script>
<template>
  <div class="relative mx-auto max-w-3xl mb-8">
    <div
      class="flex justify-between items-center md:mx-auto text-teal-600 font-bold px-2"
    >
      <h1 class="text-xl">Stadionlar ro'yhati</h1>
      <router-link to="/" class="text-xs">Barchasi</router-link>
    </div>
    <ul class="flex my-2 gap-x-2">
      <li>
        <button
          class="text-sm py-1 px-4 bg-gray-200 rounded font-semibold duration-200"
          :class="{ 'bg-teal-500 text-white': currentStadion == 'all' }"
          @click="currentStadion = 'all'"
        >
          Barchasi
        </button>
      </li>
      <li>
        <button
          class="text-sm py-1 px-4 bg-gray-200 rounded font-semibold duration-200"
          :class="{ 'bg-teal-500 text-white': currentStadion == 'occupied' }"
          @click="currentStadion = 'occupied'"
        >
          Band
        </button>
      </li>
      <li>
        <button
          class="text-sm py-1 px-4 bg-gray-200 rounded font-semibold duration-200"
          :class="{ 'bg-teal-500 text-white': currentStadion == 'unoccupied' }"
          @click="currentStadion = 'unoccupied'"
        >
          Band bo'lmagan
        </button>
      </li>
      <li class="ml-auto">
        <button
          class="text-sm py-1 px-4 bg-gray-200 rounded font-semibold duration-200"
          :class="{ 'bg-teal-500 text-white': currentStadion == 'money' }"
          @click="currentStadion = 'money'"
        >
          Narxi bo'yicha
        </button>
      </li>
    </ul>
    <!-- :centeredSlides="true" -->
    <swiper
      :slidesPerView="slidesPerView"
      :spaceBetween="spaceBetween"
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
          class="overflow-hidden flex transition-transform duration-500 ease-in-out rounded-xl"
        >
          <div
            class="border shadow-xl hover:shadow-xl w-56 transition duration-300 flex flex-col rounded-xl"
          >
            <div class="relative">
              <div
                class="w-20 h-8 flex items-center absolute top-3 left-3 bg-gray-200 text-black text-lg rounded-3xl p-2"
              >
                <StarIcon />
                <a class="text-lg font-semibold ml-2">{{
                  stadion.assessment
                }}</a>
              </div>
              <div
                class="h-36 bg-cover bg-center rounded-t-lg"
                :style="{
                  backgroundImage: `url(/images/${stadion.images[0]}.jpg)`,
                }"
              ></div>
            </div>
            <div class="p-2">
              <div class="border-b-2 pb-1">
                <h3 class="font-semibold text-zinc-900">
                  {{ stadion.title }}
                </h3>
                <div
                  class="flex justify-between text-zinc-500 text-sm font-normal"
                >
                  <p>{{ stadion.address }}</p>
                  <p>{{ useMoneyFormatter(stadion.price) }}</p>
                </div>
              </div>
              <div class="flex justify-between items-center mt-2">
                <button
                  class="bg-teal-400 hover:bg-teal-500 transition duration-200 text-sm text-gray-50 rounded-full py-1.5 px-4"
                >
                  Booking
                </button>
                <router-link
                  :to="`/view-stadiums/${stadion.id}`"
                  class="font-normal border-l-2 pl-5 text-zinc-500 text-lg hover:text-teal-400"
                >
                  Batafsil...
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<style scoped>
.swiper-slide {
  min-width: fit-content;
}
</style>
