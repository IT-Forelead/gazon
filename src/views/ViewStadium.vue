<script setup>
import ArrowLeftIcon from "@/assets/icons/ArrowLeftIcon.vue";
import CallIcon from "@/assets/icons/CallIcon.vue";
import {onMounted, onUpdated, ref} from "vue";
import StarIcon from "@/assets/icons/StarIcon.vue";
import UserBoldIcon from "@/assets/icons/UserBoldIcon.vue";
import {onMounted, ref} from "vue";
import {useRoute} from "vue-router";
import stadiumList2 from '@/data/stadiumList.json'
import FieldIcon from "@/assets/icons/FieldIcon.vue";
import { vMaska } from "maska"
import { Swiper, SwiperSlide } from 'swiper/vue';
import {Autoplay, Pagination, Navigation, EffectCube} from "swiper/modules";
import StadiumsListSection from "@/components/Home Sections/StadiumsListSection.vue";
import LocationIcon from "@/assets/icons/LocationIcon.vue";


const modules = [Autoplay, Pagination, Navigation,EffectCube];
const hero = ref()
const players = ref([])
const route = useRoute()
const booking = ref([''])
onMounted(() => {
  hero.value = stadiumList2.filter(player => player.id == route.params.id)[0]
  players.value = stadiumList2.filter(player => player.id != route.params.id)
  players.value.unshift(hero.value)
})
onUpdated(() => {
  hero.value = stadiumList2.filter(player => player.id == route.params.id)[0]
  players.value = stadiumList2.filter(player => player.id != route.params.id)
  players.value.unshift(hero.value)
})
</script>

<template>
  <div class="max-w-lg px-1 bg-gray-50 min-h-screen pb-1 md:max-w-lg  max-h-96  mx-auto md:mx-auto">
    <div class="items-center mb-6">
      <RouterLink to="/" class=""><ArrowLeftIcon/></RouterLink>
      <h1 class="text-xl text-center font-bold text-teal-600">Batafsil</h1>
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
      <swiper-slide v-for="(image, key) in hero?.listImage1" :key="key">
        <div class="w-full h-80">
          <div class="w-full h-full mx-auto rounded-xl bg-cover bg-center" :style="{ backgroundImage: `url(/images/${image}.jpg)` }">
          </div>
        </div>
      </swiper-slide>
    </swiper>
    <div class="flex justify-between items-center mt-4">
      <h1 class="text-3xl  md:text-4xl font-bold">{{hero?.title}}</h1>
      <button class="text-md text-teal-600 bg-teal-100 rounded-md hover:bg-teal-50 font-black ml-8 px-3 py-2">
        Top Sales
      </button>
    </div>
    <div class="flex space-x-2">
      <span class="mt-2"><LocationIcon/></span>
      <p class="text-md mt-2">{{hero?.Item}}</p>
    </div>
    <div class="flex justify-between items-center mt-2">
      <div class="flex items-center space-x-2">
        <h1 class="text-3xl font-bold"><StarIcon/></h1>
        <h1 class="text-lg font-semibold">{{hero?.assessment}}</h1>
        <h1 class="text-lg">({{hero?.reviews}} Reviews)</h1>
      </div>
      <div class="flex items-center">
        <h1 class="text-2xl md:text-3xl font-bold">{{hero?.price}}</h1>
        <h1 class="text-md md:text-lg ml-1">so'm dan</h1>
      </div>
    </div>
    <div class="items-center mt-3">
      <span class="text-lg font-bold">Xususiyatlari:</span>
      <div class="flex justify-start space-x-6 items-center mt-1">
        <div class="flex space-x-1 items-center">
          <h1 class="text-3xl font-bold"><UserBoldIcon/></h1>
          <h1 class="text-lg">{{hero?.reviews}}ta odam</h1>
        </div>
        <div class="flex space-x-1 items-center">
          <FieldIcon/>
          <h1 class="text-lg">{{hero?.field}}</h1>
        </div>
      </div>
    </div>
    <div class="items-center mt-3">
      <span class="text-lg font-bold">Tasnifi:</span>
      <p class="text-left ">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
    </div>
    <div class="items-center mb-auto mt-2">
    <span class="text-lg font-bold">Band qilish:</span>

    <div class="flex mb-3 mt-2  text-center items-center">
      <h1 class="text-lg rounded-l-lg border-2 px-6 py-1.5 bg-teal-50 border-teal-50  hover:bg-teal-50  transition duration-300">{{hero?.phone}}</h1>
      <button class="border-2 px-6 py-2 bg-teal-200 border-teal-200 hover:bg-teal-100 transition duration-300 rounded-r-lg">
         <a href="tel:+998942469111"><CallIcon/></a>
      </button>
    </div>
  </div>
    <div>
       <StadiumsListSection/>
    </div>

  </div>
</template>

<style scoped>
/* Scoped styles go here */
</style>
