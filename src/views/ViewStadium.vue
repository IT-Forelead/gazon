<script setup>
import { useRoute } from "vue-router";
import { onMounted, onUpdated, ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import CallIcon from "@/assets/icons/CallIcon.vue";
import StarIcon from "@/assets/icons/StarIcon.vue";
import UserIcon from "@/assets/icons/UserIcon.vue";
import FieldIcon from "@/assets/icons/FieldIcon.vue";
import stadiumList from "@/assets/data/stadiumList.json";
import LocationIcon from "@/assets/icons/LocationIcon.vue";
import ArrowLeftIcon from "@/assets/icons/ArrowLeftIcon.vue";
import StadiumsSection from "@/components/HomeSections/StadiumsSection.vue";
import { Autoplay, Pagination, Navigation, EffectCube } from "swiper/modules";

const stadium = ref();
const stadiums = ref([]);
const route = useRoute();
const modules = [Autoplay, Pagination, Navigation, EffectCube];
const scrollContainer = ref(null);

const scrollToBottom = () => {
  if (scrollContainer.value) {
    scrollContainer.value.scrollTop = scrollContainer.value.scrollHeight;
  }
};

// Scroll to the end when the component is mounted
onMounted(() => {
  scrollToBottom;
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
  <div class="px-3 mx-auto">
    <div class="flex items-center pt-1 pb-3">
      <RouterLink to="/" class="">
        <ArrowLeftIcon class="h-6 w-6" />
      </RouterLink>
      <h1 class="text-3xl text-center md:text-4xl font-bold mx-auto">
        {{ stadium?.title }}
      </h1>
    </div>
    <swiper
      :slidesPerView="1"
      :spaceBetween="5"
      :loop="true"
      :pagination="{
        clickable: true,
      }"
      :modules="modules"
      class="mySwiper"
    >
      <swiper-slide v-for="(image, key) in stadium?.images" :key="key">
        <div class="w-full h-60 md:h-96 lg:h-[500px]">
          <div
            class="w-full h-full mx-auto rounded-xl bg-cover bg-center"
            :style="{ backgroundImage: `url(/images/stadiums/${image}.jpg)` }"
          ></div>
        </div>
      </swiper-slide>
    </swiper>
    <StadiumsSection />
    <div class="overflow-y-auto h-96" ref="scrollContainer">
      <div class="flex mt-2 space-x-2">
        <span class="text-blue-700 font-bold"><LocationIcon /></span>
        <p class="text-md">
          {{ stadium?.Item }} Xorazm Palace 24-son maktab yoni
        </p>
      </div>
      <div class="w-full h-64">
        <iframe
          :src="stadium?.location"
          class="rounded-2xl my-3.5 mx-auto w-full h-full"
        ></iframe>
        <!-- <iframe
          class="rounded-2xl my-3.5 mx-auto w-full h-full"
          src="https://yandex.ru/map-widget/v1/?um=constructor%3A0861d5d052d7a68acfd29d258e16d301bf0474c689e21cece960b0f2abbbaedc&amp;source=constructor"
          frameborder="0"
        ></iframe> -->
      </div>
      <div class="flex justify-between items-center mt-2">
        <div class="flex items-center space-x-2">
          <h1 class="text-3xl font-bold">
            <StarIcon class="text-yellow-500 h-6 w-6" />
          </h1>
          <h1 class="text-lg">{{ stadium?.assessment }}</h1>
          <h1 class="text-lg text-[#666]">({{ stadium?.reviews }} Reviews)</h1>
        </div>
        <div class="flex items-center">
          <h1 class="text-2xl md:text-3xl font-bold">{{ stadium?.price }}</h1>
          <h1 class="text-md md:text-lg ml-1">so'm</h1>
        </div>
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
  </div>
</template>



