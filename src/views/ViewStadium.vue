<script setup>
import ArrowLeftIcon from "@/assets/icons/ArrowLeftIcon.vue";
import StarIcon from "@/assets/icons/StarIcon.vue";
import UserBoldIcon from "@/assets/icons/UserBoldIcon.vue";
import {onMounted, ref} from "vue";
import {useRoute} from "vue-router";
import stadiumList2 from '@/data/stadiumList.json'
import FieldIcon from "@/assets/icons/FieldIcon.vue";
import { vMaska } from "maska"
import { Swiper, SwiperSlide } from 'swiper/vue';
import {Autoplay, Pagination} from "swiper/modules";


const modules = [Autoplay, Pagination];
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
  <div class=" max-w-lg mb-8 overflow-y pb-1 md:max-w-lg max-h-96 mr-5 md:mx-auto my-2">
    <div class="  items-center mb-6">
      <RouterLink to="/" class=""><ArrowLeftIcon/></RouterLink>
      <h1 class="text-xl text-center font-bold text-teal-600">Batafsil</h1>
    </div>
    <swiper
            :centeredSlides="true"
            :spaceBetween="30"
            :navigation="true"
            :pagination="{ clickable: true, }"
            :autoplay="{
             delay: 3500,
             disableOnInteraction: false,
            }"
            :loop="true"
            :modules="modules" class="mySwiper">

      <swiper-slide>  <img class="h-72 w-5/5 mx-auto rounded-xl" :src="hero?.listImage" /> </swiper-slide>
      <swiper-slide>   <img class="h-72 w-5/5 mx-auto rounded-xl" src="https://i.guim.co.uk/img/media/936ffea3d696c9c42ad1741fc755542c0f1eb576/0_0_5700_3420/master/5700.jpg?width=1200&quality=85&auto=format&fit=max&s=f104a75e0cf7a96baa06e02f23003e24" /> </swiper-slide>
      <swiper-slide>  <img class="h-72 w-5/5 mx-auto rounded-xl" src="https://i.ytimg.com/vi/Yhu45tigIsI/maxresdefault.jpg" /> </swiper-slide>
      <swiper-slide>  <img class="h-72 w-5/5 mx-auto rounded-xl" src="https://www.fischerblog.com/gb/wp-content/uploads/sites/12/2019/09/1200x827-Tottenham-Stadion-2.jpg" /></swiper-slide>
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
        <h1 class="text-3xl font-bold"><star-icon/></h1>
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
          <h1 class="text-3xl font-bold"><UserBoldIcon/></h1>
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
    </div>
    <div class="flex items-center mt-4 justify-center">
      <div>
        <input v-model="booking"  class="border-2 border-teal-500  rounded-l-xl px-6 py-3 -none  text-lg  "
               v-maska data-maska="+998(##) ###-##-##" placeholder="+998(00) 000-00-00" />
      </div>

      <button class="bg-teal-500 hover:bg-teal-600 transition duration-300 text-white font-semibold px-8 py-4 rounded-r-xl">
        Book Now
      </button>
    </div>


  </div>
</template>

<style scoped>
/* Scoped styles go here */
</style>
