<script setup>
import HomeIcon from "@/assets/icons/HomeIcon.vue"
import StadiumIcon from "@/assets/icons/StadiumIcon.vue"
import CreateIcon from "@/assets/icons/CreateIcon.vue"
import CalendarIcon from "@/assets/icons/CalendarIcon.vue"
import ProfileIcon from "@/assets/icons/ProfileIcon.vue"
import {initFlowbite} from 'flowbite'
import {onMounted} from "vue";

onMounted(() => {
  initFlowbite();
})
</script>

<template>
  <div class="fixed z-50 w-full h-14 -translate-x-1/2 bg-white border-t border-gray-300 bottom-1 left-1/2">
    <div class="grid h-full max-w-lg grid-cols-5 mx-auto md:max-w-3xl">
      <router-link to="/" class="inline-flex flex-col items-center justify-center px-5 text-teal-400 hover:text-teal-600">
        <HomeIcon class="w-6 h-6"/>
      </router-link>
      <router-link to="#" class="inline-flex flex-col items-center justify-center px-5 text-teal-400 hover:text-teal-600">
        <StadiumIcon class="w-6 h-6"/>
      </router-link>
      <div class="flex items-center justify-center">
        <router-link to="#"
                     class="inline-flex items-center justify-center w-8 h-8 font-medium bg-teal-500 rounded-full">
          <CreateIcon class="w-6 h-6 text-white"/>
        </router-link>
      </div>
      <router-link to="#"
                   class="inline-flex flex-col items-center justify-center px-5 text-teal-400 hover:text-teal-600">
        <CalendarIcon class="w-6 h-6"/>
      </router-link>
      <router-link to="#"
              class="inline-flex flex-col items-center justify-center px-5 text-teal-400 hover:text-teal-600">
        <ProfileIcon class="w-6 h-6"/>
      </router-link>
    </div>
  </div>
</template>

<style scoped>

</style>