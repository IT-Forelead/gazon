<script setup>
import { ref } from "vue";

const phone = ref("");
</script>
<template>
  <div
    class="absolute w-full max-w-lg px-8 mx-auto -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 md:w-2/3 md:px-4"
  >
    <h1 class="mb-5 text-2xl font-bold text-teal-600">Parolni tiklash</h1>
    <div class="flex flex-col space-y-6">
      <label for="phone">
        <p class="pb-2 font-medium text-gray-700 dark:text-white">
          Telefon raqam
        </p>
        <input
          id="phone"
          data-maska="+998(##) ###-##-##"
          data-maska-tokens="998"
          type="text"
          class="w-full py-4 text-lg border border-gray-300 rounded-full focus:outline-none focus:ring-1 focus:ring-teal-500"
          placeholder="+998(00) 000-00-00"
        />
      </label>
      <div class="text-gray-500 dark:text-gray-300">
        Parolni tiklash havolasi telefoningizga SMS sifatida yuboriladi
      </div>
      <div
        class="flex items-center justify-center w-full py-4 font-semibold text-white bg-teal-600 rounded-full cursor-pointer select-none hover:bg-teal-500"
      >
        <span>Yuborish</span>
      </div>
      <router-link
        to="/"
        class="font-medium text-center text-teal-500 cursor-pointer hover:text-teal-800"
      >
        Uyga qaytish
      </router-link>
    </div>
  </div>
</template>

<style scoped></style>
