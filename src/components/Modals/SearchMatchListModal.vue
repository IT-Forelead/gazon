<script setup>

import {useModalStore} from "@/stores/modal.store"
import SearchIcon from "@/assets/icons/SearchIcon.vue"
import CloseIcon from "@/assets/icons/CloseIcon.vue"

const closeModal = () => {
  useModalStore().closeSearchMatchListModal()
}

</script>

<template>
  <div
      v-if="useModalStore().isSearchMatchListModalOpen"
      class="fixed inset-0 bg-black opacity-50 z-40"
      @click="closeModal"
  ></div>
  <div v-if="useModalStore().isSearchMatchListModalOpen"
       class="fixed top-20 left-0 right-0 flex items-center justify-center z-50 bg-white rounded-lg border max-w-md md:mx-auto mx-4">
    <div class="w-full md:p-2 shadow-md p-3">
      <div class="flex justify-between">
        <h3 class="text-xl font-semibold text-teal-600">
          Qidirish
        </h3>
        <button @click="closeModal" type="button"
                class="text-gray-400 bg-transparent hover:bg-teal-200 hover:text-teal-500 rounded-lg w-8 h-8 ml-auto inline-flex justify-center items-center">
          <CloseIcon class="w-5 h-5"/>
        </button>
      </div>
      <div class="flex my-2 w-full">
        <input type="text" id="simple-search"
               class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
               placeholder="Search matches...">
        <button type="button"
                class="p-2.5 ml-2 font-medium text-white bg-teal-500 rounded-lg hover:bg-teal-600 focus:ring-2 focus:outline-none focus:ring-teal-500">
          <SearchIcon class="w-5 h-5"/>
        </button>
      </div>
    </div>
  </div>
</template>
<style scoped>

</style>