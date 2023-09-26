<script setup>
import useMoneyFormatter from "@/mixins/currencyFormatter";
import StarIcon from "@/assets/icons/StarIcon.vue";
import Location16 from "@/assets/icons/LocationIcon.vue";

  defineProps({
  stadium: Object
})
</script>

<template>
  <div class="max-w-xl px-8 p  md:mx-auto">
    <div class="flex flex-wrap justify-center mt-1">
      <div>
        <div class=" border w-full transition duration-300 flex flex-col rounded-xl">
          <div class="relative ">
            <div  class="  bg-gray-800 bg-opacity-50 w-full h-full  text-lg items-center absolute rounded-xl">
              <div class="flex justify-center items-center space-x-1  h-full">
                <span><Location16 class="h-5 w-5" /></span>
                <p class="border border-red-500 p-10">{{stadium}}</p>
              </div>
            </div>
            <div class="w-14 h-5 gap-x-1 flex items-center absolute top-3 left-3 bg-gray-200 text-black text-sm rounded-3xl p-2">
              <StarIcon class="text-yellow-500 h-6 w-6"/>
<!--              <p>{{assessment }}</p>-->
            </div>
<!--            <div class="h-36 bg-cover bg-center rounded-t-lg lg:h-40 xl:h-48 2xl:h-52" :style="{-->
<!--        backgroundImage: `url(/images/${images[0]}.jpg)`}">-->
<!--            </div>-->
          </div>
<!--          <div class="p-2">-->
<!--            <div  class="border-b-2 pb-1">-->
<!--              <h3 class="text-zinc-900 md:text-xl text-lg">-->
<!--&lt;!&ndash;                {{title }}&ndash;&gt;-->
<!--              </h3>-->
<!--              <div  class="flex justify-between text-[#666] text-sm font-normal gap-x-2">-->
<!--&lt;!&ndash;                <p>{{address }}</p>&ndash;&gt;-->
<!--&lt;!&ndash;                <p>{{ useMoneyFormatter(price) }}</p>&ndash;&gt;-->
<!--              </div>-->
<!--            </div>-->
<!--            <div class="flex justify-between items-center mt-2 relative">-->
<!--              <button class="bg-teal-400 hover:bg-teal-500 transition duration-200 text-sm text-gray-50 rounded-full py-1 md:py-1.5 px-3 md:px-5">-->
<!--                Booking-->
<!--              </button>-->
<!--              <div class="absolute left-1/2 ml-2 bg-zinc-400 top-0 border-l h-7 md:h-8 w-0.5"></div>-->
<!--&lt;!&ndash;              <router-link :to="`/view-stadiums/${id}`" class="font-normal text-[#666] text-sm md:text-lg hover:text-teal-400">&ndash;&gt;-->
<!--&lt;!&ndash;                Batafsil...&ndash;&gt;-->
<!--&lt;!&ndash;              </router-link>&ndash;&gt;-->
<!--            </div>-->
<!--          </div>-->
        </div>
      </div>
    </div>
  </div>

</template>

<style scoped>

</style>