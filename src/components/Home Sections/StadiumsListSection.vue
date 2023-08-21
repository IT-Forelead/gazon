<script setup>
import StarIcon from "@/assets/icons/StarIcon.vue";
import {computed, ref} from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css';

const screenSize = computed(() => {
  return window.innerWidth;
});

const slidesPerView = computed(() => {
  if (screenSize.value < 375) {
    // iPhone X portrait width
    return 1.4;
  } else if (screenSize.value < 768) {
    // Other mobile devices
    return 1.6;
  } else {
    // Desktop and larger screens
    return 2;
  }
});

const spaceBetween = computed(() => {
  if (screenSize.value < 375) {
    // iPhone X portrait width
    return -10;
  } else if (screenSize.value < 768) {
    // Other mobile devices
    return -10;
  } else {
    // Desktop and larger screens
    return -30;
  }
});

const modules = [Autoplay, Pagination];

const stadiumList = ref([
  {
    id:1,
    listImage:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbNqFPWhGxt19V2DsmJPXhi2wtBrwYXEbAT3Wi1xvmab0uSrCG_7K43IY-7cOuo3pFlkU&usqp=CAU',
    assessment:"4.5",
    title:'Milliy Gazon',
    Item:'Dedicated * Outdoor',
    Mentor:"Batafsil..."
  },
  {
    id:2,
    listImage:'https://www.austadiums.com/news/images/tottenham-hotspur-stadium-football1.jpg',
    assessment:"4.9",
    title:'Xorazm Palace',
    Item:'Hybrid * Indoor',
    Mentor:"Batafsil..."
  },
  {
    id:3,
    listImage:'https://i.guim.co.uk/img/media/936ffea3d696c9c42ad1741fc755542c0f1eb576/0_0_5700_3420/master/5700.jpg?width=1200&quality=85&auto=format&fit=max&s=f104a75e0cf7a96baa06e02f23003e24',
    assessment:"5.0",
    title:'Milliy Gazon',
    Item:'Dedicated * Outdoor',
    Mentor:"Batafsil..."
  },
  {
    id:3,
    listImage:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-Vpv-doYPXFLoYXvo9lO1pCxzLfGDyvr386CRb6PCEUCiL7nS6UF_OVCS5RaKWEsPuzA&usqp=CAU',
    assessment:"4.7",
    title:'Xorazm Palace',
    Item:'Hybrid * Indoor',
    Mentor:"Batafsil..."
  },
  {
    id:3,
    listImage:'https://www.the8log.com/wp-content/uploads/2019/12/Football-Stadiums.png',
    assessment:"4.4",
    title:'Milliy Gazon',
    Item:'Dedicated * Outdoor',
    Mentor:"Batafsil..."
  },
  {
    id:3,
    listImage:'https://ficazfootball.com/wp-content/uploads/2021/03/West-Ham-United-F.C.-London-Stadium-1.jpg',
    assessment:"4.9",
    title:'Xorazm Palace',
    Item:'Hybrid * Indoor',
    Mentor:"Batafsil..."
  },
  {
    id:3,
    listImage:'https://www.re-thinkingthefuture.com/wp-content/uploads/2021/02/A3309-Image-4_Allianz-Arena-Munich-Germany_%C2%A9allianz-arena.com_.jpg',
    assessment:"5.0",
    title:'Milliy Gazon',
    Item:'Dedicated * Outdoor',
    Mentor:"Batafsil..."
  },
  {
    id:3,
    listImage:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvwJ_s8CbcfO9FMA1raB6Ay76ljPOA4GJeykhxEweTalHc7JXTkecFlH--pwTC-w8gJT8&usqp=CAU',
    assessment:"4.6",
    title:'Xorazm Palace',
    Item:'Hybrid * Indoor',
    Mentor:"Batafsil..."
  },
  {
    id:3,
    listImage:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHcYeJ6UYeqJLiwjWihQ2aPEekNUVuQnvBkeUT0F3kOqvRVj_l9wcVjjFX_bOvxunTems&usqp=CAU',
    assessment:"4.3",
    title:'Milliy Gazon',
    Item:'Dedicated * Outdoor',
    Mentor:"Batafsil..."
  },

])


</script>
<template>
  <div class="relative mx-auto max-w-lg mb-8 pb-1 md:max-w-lg text-center">
    <div>
        <div class="flex justify-between max-w-lg items-center md:mx-auto text-teal-600 font-bold px-2">
          <h1 class="text-xl">Stadionlar ro'yhati</h1>
          <a href="" class="text-xs">Barchasi</a>
        </div>
      <swiper
          :slidesPerView="slidesPerView"
          :centeredSlides="true"
          :spaceBetween="spaceBetween"
          :grabCursor="true"
          :pagination="{
          clickable: true,
          }"
          :autoplay="{
          delay: 3500,
          disableOnInteraction: false,
         }"
          :loop="true"
          :modules="modules"
          class="mySwiper"
      >
        <swiper-slide v-for="(list, index) in stadiumList" :key="index">
      <div class="overflow-hidden -mr-10 mt-6 ">
        <div class="flex transition-transform duration-500 ease-in-out">
          <div class="flex-none px-4" >
          <div  class="bg-white border shadow-xl hover:shadow-xl w-56 transition duration-300 flex flex-col rounded-xl">
              <div class="relative">
                <div class="w-20 h-8 flex items-center absolute top-3 left-3 bg-gray-200 text-black text-lg rounded-3xl p-2">
                  <span><StarIcon/></span>
                  <a class="text-lg font-semibold ml-2">{{list.assessment}}</a>
                </div>
                <img class="h-36 bg-cover bg-center rounded-t-lg" :src="list.listImage">
              </div>
              <div class="p-3 flex flex-col">
                <div class="text-left border-b-2">
                  <a href="#" class="font-semibold text-zinc-900">
                    {{list.title}}
                  </a>
                  <p class="mb-4 mt-2 text-zinc-500 text-sm font-normal dark:text-zinc-400">{{list.Item}}</p>
                </div>
                <div class="flex justify-between items-center mt-2">
                  <button class="bg-teal-400 hover:bg-teal-500 transition duration-200 text-sm font-semibold text-gray-50  rounded-full p- py-1.5 px-4">
                      Booking
                  </button>
                  <RouterLink to="/stadiums" class="text-md mt-1 font-normal border-l-2 pl-6 text-zinc-500">
                    {{list.Mentor}}
                  </RouterLink>
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
</style>