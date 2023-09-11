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
const modules = [Autoplay, Pagination];
const slidesPerView = computed(() => {
  if (screenSize.value < 340) {
    return 1.5;
  } else if (screenSize.value < 377) {
    return 1.7;
  } else if (screenSize.value < 400) {
    return 1.7;
  } else if (screenSize.value < 440) {
    return 1.7;
  } else if (screenSize.value < 464) {
    return 1.8;
  } else if (screenSize.value < 510) {
    return 1.9;
  } else if (screenSize.value < 980)  {
    return 2;
  }else{
    return 2;
  }
});

const spaceBetween = computed(() => {
  if (screenSize.value < 360) {
    return 10;
  } else if (screenSize.value < 415) {
    return 10;
  } else if (screenSize.value < 450) {
    return -10;
  } else if (screenSize.value < 568) {
    return -10;
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


</script>
<template>
  <div class="relative mx-auto max-w-3xl mb-4 pb-1 text-center">
    <div>
      <div  class="flex justify-between items-center md:mx-auto text-teal-600 font-bold mt-4 px-2">
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
        class="mySwiper">
        <swiper-slide
          v-for="(list, index) in stadiumList"
          :key="index"
          @click="router.push(`/View-stadiums/${list.id}`)">
          <div class="max-w-3xl overflow-hidden mx-auto -mr-9 mt-2">
              <div :class="[ $route.href === '/' ? 'px-4' :'px-5']" >
                <div :class="[ $route.href === '/' ? 'bg-white border shadow-xl hover:shadow-xl w-56 transition duration-300 flex flex-col rounded-xl' :' ']">
                  <div class="relative  ">
                    <div  :class="[ $route.href === '/' ? ' hidden' :'text-lg items-center absolute top-3 right-3']">
                      {{ list.title }}
                    </div>
                     <div  class="w-20 h-8 flex items-center absolute top-3 left-3 bg-gray-200 text-black text-lg rounded-3xl p-2">
                       <StarIcon />
                       <a class="text-lg font-semi-bold ml-2">
                         {{list.assessment }}
                       </a>
                     </div>
                    <div  :class="[ $route.href === '/' ? 'h-36 bg-cover bg-center rounded-t-lg' :'h-36 bg-cover bg-center rounded-lg']"
                      :style="{backgroundImage: `url(/images/${list.images[0]}.jpg)`,}"></div>
                  </div>
                  <div :class="[ $route.href === '/' ? 'py-2.5 px-2.5 flex flex-col' :'hidden']">
                    <div class=""  :class="[ $route.href === '/' ? 'text-left border-b-2' :'']">
                      <a href="#"  :class="[ $route.href === '/' ? 'font-semi-bold text-zinc-900' :'none']">{{ list.title}}
                      </a>
                      <p  :class="[$route.href === '/' ? 'mb-4 mt-1 text-zinc-500 text-sm font-normal' :'none']">{{ list.address }}
                      </p>
                    </div>
                    <div  :class="[ $route.href === '/' ? 'flex justify-between items-center mt-2' :'']" class="">
                      <button :class="[$route.href === '/' ? 'bg-teal-400 hover:bg-teal-500 transition duration-200 text-sm font-Semi-bold text-gray-50 rounded-full p- py-1.5 px-4' :'none']">
                        Band qilish
                      </button>
                      <div :class="[$route.href === '/' ? 'text-lg mt-1 font-normal border-l-2 pl-3 text-zinc-500' :'none']" @click="router.push(`/View-stadiums/${list.id}`)">
                        Batafsil...
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


