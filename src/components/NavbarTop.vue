<script setup>
import SunIcon from "@/assets/icons/SunIcon.vue";
import BallIcon from "@/assets/icons/BallIcon.vue";
import NotificationIcon from "@/assets/icons/NotificationIcon.vue";
</script>
<template>
  <div class="w-full h-14 px-4 pt-2">
    <div
      class="mx-auto px-2 h-full flex justify-between items-center max-w-5xl"
    >
      <div class="flex items-center">
        <router-link to="/">
          <BallIcon class="w-8 h-8 text-teal-400" />
        </router-link>
      </div>
      <div class="flex flex-col items-center">
        <p class="font-bold">Urganch, 15 Avg</p>
        <div class="flex items-center">
          <SunIcon class="text-yellow-400 w-4 h-4 mx-2" />
          <p class="text-gray-600">30 <sup>o</sup></p>
        </div>
      </div>
      <div class="hover:cursor-pointer">
        <NotificationIcon class="w-6 h-6 hover:text-teal-500 text-teal-400" />
      </div>
    </div>
  </div>
</template>
<style scoped></style>