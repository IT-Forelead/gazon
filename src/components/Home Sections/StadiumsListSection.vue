<script setup>
import "swiper/css";
import { ref, computed, onMounted } from "vue";
import "swiper/css/navigation";
import { useRouter } from "vue-router";
import { Swiper, SwiperSlide } from "swiper/vue";
import StarIcon from "@/assets/icons/StarIcon.vue";
import { Autoplay, Pagination } from "swiper/modules";
import stadiumList1 from "@/assets/data/stadiumList.json";

const router = useRouter();

const screenSize = ref(0);

const slidesPerView = computed(() => {
  if (screenSize.value < 360) {
    return 1.0;
  } else if (screenSize.value < 415) {
    return 1.0;
  } else if (screenSize.value < 450) {
    return 1.2;
  } else if (screenSize.value < 568) {
    return 1.4;
  } else if (screenSize.value < 650) {
    return 1.6;
  } else if (screenSize.value < 768) {
    return 1.8;
  } else {
    // Desktop and larger screens
    return 2;
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
  } else if (screenSize.value < 650) {
    return -7;
  } else if (screenSize.value < 768) {
    //Other mobile device
    return -10;
  } else {
    // Desktop and larger screens
    return -30;
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
  <div class="relative mx-auto max-w-lg mb-8 pb-1 md:max-w-lg text-center">
    <div>
      <div
        class="flex justify-between max-w-lg items-center md:mx-auto text-teal-600 font-bold px-2"
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
          v-for="(list, index) in stadiumList1"
          :key="index"
          @click="router.push(`/View-stadiums/${list.id}`)"
        >
          <div class="overflow-hidden -mr-10 mt-6">
            <div class="flex transition-transform duration-500 ease-in-out">
              <div class="px-4">
                <div
                  class="bg-white border hover:shadow-xl w-56 transition duration-300 flex flex-col rounded-xl"
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
                    <img
                      class="h-36 bg-cover bg-center rounded-t-lg"
                      :src="list.listImage"
                    />
                  </div>
                  <div class="p-3 flex flex-col">
                    <div class="text-left border-b-2">
                      <a href="#" class="font-semibold text-zinc-900">
                        {{ list.title }}
                      </a>
                      <p class="mb-4 mt-2 text-zinc-500 text-sm font-normal">
                        {{ list.Item }}
                      </p>
                    </div>
                    <div class="flex justify-between items-center mt-2">
                      <button
                        class="bg-teal-400 hover:bg-teal-500 transition duration-200 text-sm font-semibold text-gray-50 rounded-full p- py-1.5 px-4"
                      >
                        Booking
                      </button>
                      <div
                        @click="router.push(`/View-stadiums/${list.id}`)"
                        class="text-md mt-1 font-normal border-l-2 pl-6 text-zinc-500"
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
