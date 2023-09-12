<script setup>

import RightIcon from "@/assets/icons/RightIcon.vue";
</script>

<template>
  <div class="max-w-7xl px-4 py-6 sm:px-6 lg:px-0 lg:py-14 mx-auto">
    <h1 class="text-center pb-2 font-bold md:text-3xl text-2xl text-teal-500">Yangiliklar</h1>
    <p class="text-center pb-4 max-w-3xl mx-auto text-lg">Futbol olamiga oid eng so'nggi yangiliklar</p>
    <div class="grid pb-8 lg:grid-cols-2 lg:gap-y-5 gap-10">
      <router-link to="#" v-for="card in 10" class="group rounded-xl overflow-hidden border border-gray-200 p-2">
        <div class="sm:flex">
          <div class="flex-shrink-0 relative rounded-xl overflow-hidden w-full sm:w-56 h-44">
            <img
                class="group-hover:scale-105 transition-transform duration-500 ease-in-out w-full h-full absolute top-0 left-0 object-cover rounded-xl"
                src="/images/the-stadium.jpg" alt="Image Description">
          </div>
          <div class="grow mt-4 sm:mt-0 sm:ml-6 px-4 sm:px-0">
            <h3 class="text-lg font-semibold text-gray-800 group-hover:text-gray-600 dark:text-gray-300 dark:group-hover:text-white">
              Manchester City 5-1 Fulham: Erling Haaland fires second-half hat-trick.
            </h3>
            <p class="mt-3 text-gray-600 dark:text-gray-400">
              Manchester City remain perfect in the Premier League following a 5-1 victory over Fulham as Erling Haaland scored a hat-trick.
            </p>
          <div class="flex justify-between items-center">
            <p class="mt-4 text-gray-600">07/09/2023</p>
            <p class="mt-4 inline-flex items-center gap-x-2 md:pr-2 text-teal-600 decoration-2 hover:underline font-medium">
              Read more
              <RightIcon class="w-4 h-4 group-hover:translate-x-1 duration-300"/>
            </p>
          </div>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<style scoped>

</style>