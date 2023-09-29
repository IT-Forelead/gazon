<script setup>
import "swiper/css";
import { useRoute } from "vue-router";
import { onMounted, onUpdated, ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import CallIcon from "@/assets/icons/CallIcon.vue";
import StarIcon from "@/assets/icons/StarIcon.vue";
import UserIcon from "@/assets/icons/UserIcon.vue";
import FieldIcon from "@/assets/icons/FieldIcon.vue";
import stadiumList from "@/assets/data/stadiumList.json";
import LocationIcon from "@/assets/icons/LocationIcon.vue";
import useMoneyFormatter from "../mixins/currencyFormatter";
import ArrowLeftIcon from "@/assets/icons/ArrowLeftIcon.vue";
import StadiumsSection from "@/components/HomeSections/StadiumsSection.vue";
import { Autoplay, Pagination, Navigation, EffectCube } from "swiper/modules";

const stadium = ref();
const stadiums = ref([]);
const route = useRoute();
const modules = [Autoplay, Pagination, Navigation, EffectCube];

// Scroll to the end when the component is mounted
onMounted(() => {
  stadium.value = stadiumList.filter((item) => item.id == route.params.id)[0];
  stadiums.value = stadiumList.filter((item) => item.id != route.params.id);
  stadiums.value.unshift(stadium.value);
});

onUpdated(() => {
  stadium.value = stadiumList.filter(
    (player) => player.id == route.params.id
  )[0];
  stadiums.value = stadiumList.filter((item) => item.id != route.params.id);
  stadiums.value.unshift(stadium.value);
});
</script>

<template>
  <section class="px-2 pt-4">
    <router-link to="/" class="fixed top-5 z-10">
      <ArrowLeftIcon class="h-6 w-6 text-teal-500" />
    </router-link>
    <h1 class="text-3xl md:text-4xl font-bold text-center text-teal-500 mb-4">
      {{ stadium?.title }}
    </h1>
    <div class="md:flex items-center gap-x-5 mb-5">
      <swiper
        :slidesPerView="1"
        :spaceBetween="5"
        :loop="true"
        :pagination="{
          clickable: true,
        }"
        :modules="modules"
        class="mySwiper md:w-1/2 aspect-auto"
      >
        <swiper-slide
          v-for="(image, key) in stadium?.images.length
            ? stadium?.images
            : ['the-stadium']"
          :key="key"
        >
          <div class="w-full h-60 md:h-96">
            <div
              class="w-full h-full mx-auto rounded-xl bg-cover bg-center"
              :style="{
                backgroundImage: `url(/images/stadiums/${
                  image ? image : 'the-stadium'
                }.jpg)`,
              }"
            ></div>
          </div>
        </swiper-slide>
      </swiper>
      <iframe
        :src="stadium?.location"
        class="rounded-xl w-full h-60 md:w-1/2 md:h-96 mt-5 md:mt-0"
      ></iframe>
    </div>

    <div class="">
      <div class="flex items-center justify-between">
        <address class="flex items-center">
          <LocationIcon class="w-4 h-4 text-teal-400" />
          {{ stadium?.address }}
        </address>
        <h4 class="text-2xl">{{ useMoneyFormatter(stadium?.price) }}</h4>
      </div>
      <div class="flex items-center">
        <StarIcon class="text-yellow-300 h-6 w-6" />
        <h4 class="text-lg">{{ stadium?.assessment }}</h4>
        <h4 class="text-lg text-[#666]">({{ stadium?.reviews }} Reviews)</h4>
      </div>
      <div class="items-center mt-3">
        <span class="text-lg font-bold">Xususiyatlari:</span>
        <div class="flex justify-start mb-2 space-x-6 items-center mt-1">
          <div class="flex space-x-1 items-center">
            <h1 class="text-3xl font-bold">
              <UserIcon class="text-teal-400 h-6 w-6 text" />
            </h1>
            <h1 class="text-lg">{{ stadium?.reviews }}ta odam</h1>
          </div>
          <div class="flex space-x-1 items-center">
            <FieldIcon class="text-teal-400 h-6 w-6 text" />
            <h1 class="text-lg text-[#666]">{{ stadium?.field }}</h1>
          </div>
        </div>
        <span class="text-lg mt-4 font-bold">Tasnifi:</span>
        <p class="text-left">
          {{ stadium?.description }}
        </p>
      </div>
      <div class="flex justify-around mb-4 mt-2 items-center">
        <div class="flex">
          <h1
            class="text-lg rounded-l-lg border-2 px-4 py-1.5 bg-teal-50 border-teal-50 hover:bg-teal-50 transition duration-300"
          >
            {{ stadium?.phone }}
          </h1>
          <button
            class="px-4 py-2 bg-teal-400 hover:bg-teal-500 transition duration-300 rounded-r-lg"
          >
            <a :href="`tel:${stadium?.phone}`">
              <CallIcon class="text-white h-6 w-6 text" />
            </a>
          </button>
        </div>
        <button
          class="px-4 py-2 bg-teal-400 hover:bg-teal-500 transition duration-300 rounded-lg"
        >
          <label class="text-gray-50">Band qilish</label>
        </button>
      </div>
    </div>
    <StadiumsSection />
  </section>
</template>



