<script setup>
import {useModalStore} from "@/stores/modal.store";
import useMoneyFormatter from "../../mixins/currencyFormatter";
const closeModal = () => {
  useModalStore().closeViewStadiumModal()
};
</script>

<template>
  <div
      v-if="useModalStore().isViewStadiumModalOpen"
      class="fixed inset-0 z-50 bg-black opacity-50"
      @click="closeModal"
  ></div>
  <div v-if="useModalStore().isViewStadiumModalOpen"
       class="fixed top-0 bottom-0 left-0 right-0 z-50 flex items-center justify-center px-2">
    <div class="relative w-full max-w-md max-h-full">
      <div class="relative bg-white rounded-lg shadow p-3">
          <div class="relative w-full h-40">
            <img src="/images/the-stadium.jpg" alt=""
                 class="object-cover w-full h-full rounded-lg">
          </div>
          <div class="flex items-center justify-between my-2">
            <h2 class="text-lg font-semibold">Xorazm Palace</h2>
            <h2 class="text-base font-semibold text-green-600">{{ useMoneyFormatter(95000) }}</h2>
          </div>
          <div class="flex items-center justify-between mb-2">
            <h2 class="text-sm font-medium dark:text-gray-400">Manzil</h2>
            <h2 class="inline-block px-2 py-1 text-xs text-blue-500 rounded-full bg-blue-50">Urganch shahar</h2>
          </div>
          <div class="flex items-center justify-between mb-2">
            <h2 class="text-sm font-medium">Maydoni</h2>
            <h2 class="inline-block px-2 py-1 text-xs text-blue-500 rounded-full bg-blue-50">90 m<sup>2</sup></h2>
          </div>
          <div class="flex items-center justify-between mb-4">
            <h2 class="text-sm font-medium dark:text-gray-400">Telefon</h2>
            <h2 class="inline-block px-2 py-1 text-xs text-blue-500 rounded-full bg-blue-50">+998 91 111 1212</h2>
          </div>
          <button @click="closeModal" class="bg-gray-700 text-white hover:bg-gray-600 p-2 w-full rounded-lg">Yopish</button>
        </div>
      </div>
    </div>
</template>

<style scoped>

</style>