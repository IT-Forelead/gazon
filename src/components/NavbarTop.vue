<script setup>
import SunIcon from "@/assets/icons/SunIcon.vue";
import BallIcon from "@/assets/icons/BallIcon.vue";
import CloudIcon from "@/assets/icons/CloudIcon.vue";
import RainIcon from "@/assets/icons/RainIcon.vue";
import SnowIcon from "@/assets/icons/SnowIcon.vue";
import NotificationIcon from "@/assets/icons/NotificationIcon.vue";
import axios from "axios";
import {onMounted, ref} from "vue";
import Spinners270Ring from "@/assets/icons/Spinners270RingIcon.vue";

const weatherData = ref(null);
const city = 'Urganch'
const apiKey = '96b947a45d33d7dc1c49af3203966408';
const isLoading = ref(false)
const fetchWeatherData = async () => {
  isLoading.value  = true
  try {
    const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    );
    isLoading.value = false
    weatherData.value = response.data;
  } catch (error) {
    console.error('Error fetching weather data:', error);
  }
};
const formatMonthDay = (date) => {
  const options = { month: 'long', day: 'numeric' };
  const formatter = new Intl.DateTimeFormat('uz-UZ', options);
  return formatter.format(date);
};
onMounted(() => {
  fetchWeatherData();
});

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
      <div class="flex flex-col items-center" >
        <p class="font-bold">Urganch, {{ formatMonthDay(new Date()) }}</p>
        <div class="flex items-center">
          <template v-if="weatherData">
            <SnowIcon v-if="weatherData.weather[0].main === 'Snow'" class="text-blue-500 w-4 h-4 mx-2" />
            <RainIcon v-else-if="weatherData.weather[0].main === 'Rain'" class="text-blue-500 w-4 h-4 mx-2" />
            <CloudIcon v-else-if="weatherData.weather[0].main === 'Clouds'" class="text-blue-500 w-4 h-4 mx-2" />
            <SunIcon v-else class="text-yellow-400 w-4 h-4 mx-2" />
          </template>
          <Spinners270Ring class="text-teal-500" v-if="isLoading"/>
          <p v-else class="text-gray-600">{{ weatherData ? Math.round(weatherData.main.temp) + '°C' : '' }}</p>
        </div>
      </div>
      <div class="hover:cursor-pointer">
        <NotificationIcon class="w-6 h-6 hover:text-teal-500 text-teal-400" />
      </div>
    </div>
  </div>
</template>
<style scoped></style>