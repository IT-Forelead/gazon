<script setup>
import {useRoute} from "vue-router";
import {onMounted, onUpdated, ref} from "vue";
import {Swiper, SwiperSlide} from "swiper/vue";
import CallIcon from "@/assets/icons/CallIcon.vue";
import StarIcon from "@/assets/icons/StarIcon.vue";
import UserIcon from "@/assets/icons/UserIcon.vue";
import FieldIcon from "@/assets/icons/FieldIcon.vue";
import stadiumList from "@/assets/data/stadiumList.json";
import LocationIcon from "@/assets/icons/LocationIcon.vue";
import ArrowLeftIcon from "@/assets/icons/ArrowLeftIcon.vue";
import {Autoplay, Pagination, Navigation, EffectCube} from "swiper/modules";
import StadiumsListSection from "@/components/Home Sections/StadiumsListSection.vue";

const stadion = ref();
const stdions = ref([]);
const route = useRoute();
const scrollContainer = ref(null);
const modules = [Autoplay, Pagination, Navigation, EffectCube];

onMounted(() => {
  stadion.value = stadiumList.filter((item) => item.id == route.params.id)[0];
  stdions.value = stadiumList.filter((item) => item.id != route.params.id);
  stdions.value.unshift(stadion.value);
});

onUpdated(() => {
  stadion.value = stadiumList.filter(
      (player) => player.id == route.params.id
  )[0];
  stdions.value = stadiumList.filter((item) => item.id != route.params.id);
  stdions.value.unshift(stadion.value);
});


const scrollToBottom = () => {
  if (scrollContainer.value) {
    scrollContainer.value.scrollTop = scrollContainer.value.scrollHeight;
  }
};
onMounted(scrollToBottom);

</script>

<template>
  <div class="max-w-lg px-1 pb-1 md:max-w-lg mx-auto md:mx-auto">
    <div class="flex md:space-x-32 space-x-20 items-center mb-6">
      <RouterLink to="/" class="">
        <ArrowLeftIcon/>
      </RouterLink>
      <h1 class="text-3xl  md:text-4xl font-bold">{{ stadion?.title }}</h1>
    </div>
    <swiper
        :slidesPerView="1"
        :spaceBetween="5"
        :loop="true"
        :pagination="{
       clickable: true,
     }"
        :modules="modules"
        class="mySwiper">

      <swiper-slide v-for="(image, key) in stadion?.images" :key="key">
        <div class="w-full h-80">
          <div class="w-full h-full mx-auto rounded-xl bg-cover bg-center"
               :style="{ backgroundImage: `url(/images/${image}.jpg)` }">
          </div>
        </div>
      </swiper-slide>
    </swiper>

    <div class="mt-2 relative">
      <div class="   w-full bg-white z-10">
        <StadiumsListSection  />
      </div>
    </div>

  <div class="h-96 overflow-y-auto" ref="scrollContainer"  >
  <div class="flex mt-2 space-x-2">
    <span class="text-blue-700 font-bold"><LocationIcon/></span>
    <p class="text-md">
      {{ stadion?.Item }} Xorazm Palace 24-son maktab yoni
    </p>
  </div>
  <div class="w-full h-64">
    <iframe
        class="rounded-2xl my-3.5 mx-auto w-full h-full " width="500" height="350"
        src="https://yandex.ru/map-widget/v1/?um=constructor%3A0861d5d052d7a68acfd29d258e16d301bf0474c689e21cece960b0f2abbbaedc&amp;source=constructor"
        frameborder="0"
    ></iframe>
  </div>
  <div class="flex justify-between items-center mt-2">
    <div class="flex items-center space-x-2">
      <h1 class="text-3xl font-bold">
        <StarIcon/>
      </h1>
      <h1 class="text-lg font-semibold">{{ stadion?.assessment }}</h1>
      <h1 class="text-lg">({{ stadion?.reviews }} Reviews)</h1>
    </div>
    <div class="flex items-center">
      <h1 class="text-2xl md:text-3xl font-bold">{{ stadion?.price }}</h1>
      <h1 class="text-md md:text-lg ml-1">so'm</h1>
    </div>
  </div>
  <div class="items-center mt-3">
    <span class="text-lg font-bold">Xususiyatlari:</span>
    <div class="flex justify-start space-x-6 items-center mt-1">
      <div class="flex space-x-1 items-center">
        <h1 class="text-3xl font-bold">
          <UserIcon/>
        </h1>
        <h1 class="text-lg">{{ stadion?.reviews }}ta odam</h1>
      </div>
      <div class="flex space-x-1 items-center">
        <FieldIcon/>
        <h1 class="text-lg">{{ stadion?.field }}</h1>
      </div>
    </div>
  </div>
  <div class="items-center mt-3">
    <span class="text-lg font-bold">Tasnifi:</span>
    <p class="text-left">
      Lorem Ipsum is simply dummy text of the printing and typesetting
      industry. Lorem Ipsum has been the industry's
    </p>
  </div>
  <div class="items-center mb-auto mt-2">
    <div class="flex justify-around mb-3 mt-2 text-center items-center">
      <div class="flex">
        <h1
            class="text-lg rounded-l-lg border-2 px-6 py-1.5 bg-teal-50 border-teal-50 hover:bg-teal-50 transition duration-300">
          {{ stadion?.phone }}
        </h1>
        <button
            class="border-2 px-6 py-2 bg-teal-400 border-teal-400 hover:hover:bg-teal-500 transition duration-300 rounded-r-lg">
          <a href="tel:+998942469111">
            <CallIcon/>
          </a>
        </button>
      </div>
      <button
          class="border-2 px-6 py-2 bg-teal-400 border-teal-400 hover:hover:bg-teal-500 transition duration-300 rounded-lg">
        <label class="text-gray-50">Band qilish</label>
      </button>
    </div>
  </div>
</div>
  </div>
</template>

<style scoped>
/* Scoped styles go here */
</style>