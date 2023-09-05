<script setup>
import "swiper/css";
import "swiper/css/navigation";
import { useRouter } from "vue-router";
import { ref, computed, onMounted } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import StarIcon from "@/assets/icons/StarIcon.vue";
import { Autoplay, Pagination } from "swiper/modules";
import stadiumList from "@/assets/data/stadiumList.json";

const screenSize = ref(0);
const router = useRouter();

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
    return 4;
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

const modules = [Autoplay, Pagination];
</script>
<template>
  <div class="relative mx-auto max-w-3xl mb-8 pb-1 text-center">
    <div>
      <div
        class="flex justify-between items-center md:mx-auto text-teal-600 font-bold px-2"
      >
        <h1 class="text-xl">Stadionlar ro'yhati</h1>
        <a href="" class="text-xs">Barchasi</a>
      </div>
      <swiper
        :slidesPerView="slidesPerView"
        :centeredSlides="true"
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
          v-for="(list, index) in stadiumList"
          :key="index"
          @click="router.push(`/View-stadiums/${list.id}`)"
        >
          <div class="overflow-hidden -mr-10 mt-6">
            <div class="flex transition-transform duration-500 ease-in-out">
              <div class="px-4">
                <div
                  class="bg-white border shadow-xl hover:shadow-xl w-56 transition duration-300 flex flex-col rounded-xl"
                >
                  <div class="relative">
                    <div
                      class="w-20 h-8 flex items-center absolute top-3 left-3 bg-gray-200 text-black text-lg rounded-3xl p-2"
                    >
                      <StarIcon />
                      <a class="text-lg font-semibold ml-2">{{
                        list.assessment
                      }}</a>
                    </div>
                    <div
                      class="h-36 bg-cover bg-center rounded-t-lg"
                      :style="{
                        backgroundImage: `url(/images/${list.images[0]}.jpg)`,
                      }"
                    ></div>
                  </div>
                  <div class="py-2.5 px-2.5 flex flex-col">
                    <div class="text-left border-b-2">
                      <a href="#" class="font-semibold text-zinc-900">
                        {{ list.title }}
                      </a>
                      <p
                        class="mb-4 mt-1 text-zinc-500 text-sm font-normal dark:text-zinc-400"
                      >
                        {{ list.address }}
                      </p>
                    </div>
                    <div class="flex justify-between items-center mt-2">
                      <button
                        class="bg-teal-400 hover:bg-teal-500 transition duration-200 text-sm font-Semibold text-gray-50 rounded-full p- py-1.5 px-4"
                      >
                        Booking
                      </button>
                      <div
                        @click="router.push(`/View-stadiums/${list.id}`)"
                        class="text-lg mt-1 font-normal border-l-2 pl-5 text-zinc-500"
                      >
                        Batafsil...
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<style scoped>
.swiper-slide {
  min-width: fit-content;
}
</style>
