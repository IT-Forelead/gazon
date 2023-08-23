<script setup>
import ArrowLeftIcon from "@/assets/icons/ArrowLeftIcon.vue";
import UserIcon from "@/assets/icons/UserIcon.vue";
import CallIcon from "@/assets/icons/CallIcon.vue";
import StarIcon from "@/assets/icons/StarIcon.vue";
import {onMounted, ref} from "vue";
import {useRoute} from "vue-router";
import stadiumList2 from '@/data/stadiumList.json'
import FieldIcon from "@/assets/icons/FieldIcon.vue";
import { Swiper, SwiperSlide } from 'swiper/vue';
import {Autoplay, Pagination, Navigation, EffectCube} from "swiper/modules";





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
</script>

<template>
  <div class=" max-w-lg mb-10 bg-gray-50 min-h-screen pb-1 md:max-w-lg max-h-96 mr-5 md:mx-auto my-2">
    <div class="  items-center mb-6">
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
      <swiper-slide   v-for="image in hero?.listImage1" :key="image">
        <div class="w-full h-80">
          <img   class="w-full h-full mx-auto rounded-xl"  :src="image" />
        </div>
    </swiper-slide>

    </swiper>
    <div class="flex justify-between items-center mt-4">
      <h1 class="text-4xl font-bold">{{hero?.title}}</h1>
      <button class="text-md text-teal-600 bg-teal-100 rounded-md hover:bg-teal-50 font-black ml-8 px-3 py-2">
        Top Sales
      </button>
    </div>
    <p class="text-md mt-3">{{hero?.Item}}</p>
    <div class="flex justify-between items-center mt-2">
      <div class="flex items-center space-x-2">
        <h1 class="text-3xl font-bold"><StarIcon/></h1>
        <h1 class="text-lg  font-semibold">{{hero?.assessment}}</h1>
        <h1 class="text-lg">({{hero?.reviews}} Reviews)</h1>
      </div>
      <div class="flex items-center">
        <h1 class="text-3xl font-bold">{{hero?.price}}</h1>
        <h1 class="text-lg ml-1">so'm dan</h1>
      </div>
    </div>
    <div class="  items-center mt-3">
      <span class="text-lg font-bold">Xususiyatlari:</span>
      <div class="flex justify-start space-x-6 items-center mt-1">
        <div class="flex space-x-1 items-center">
          <h1 class="text-3xl font-bold"><UserIcon/></h1>
          <h1 class="text-lg">{{hero?.reviews}}ta odam</h1>
        </div>
        <div class="flex space-x-1 items-center">
          <FieldIcon/>
          <h1 class="text-md">{{hero?.field}}</h1>
        </div>
      </div>
    </div>
    <div class="  items-center mt-3">
      <span class="text-lg font-bold">Tasnifi:</span>
      <p class="text-left ">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
    </div><div class="  items-center mb-auto mt-2">
    <span class="text-lg font-bold">Band qilish:</span>
    <div class="flex space-x-2 items-center">
      <h1 class="text-lg">{{hero?.phone}}</h1>
      <a href="tel:+998942469111"><CallIcon/></a>
    </div>
  </div>

  </div>
</template>

<style scoped>
/* Scoped styles go here */
</style>