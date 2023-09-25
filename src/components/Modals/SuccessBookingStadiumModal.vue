<script setup>
import {useModalStore} from "@/stores/modal.store";
import CloseIcon from "@/assets/icons/CloseIcon.vue";
import SuccessIcon from "@/assets/icons/SuccessIcon.vue";

const closeModal = () => {
  useModalStore().closeSuccessBookingStadiumModal()
}
</script>
<template>
  <div
      v-if="useModalStore().isSuccessBookingStadiumModalOpen"
      class="fixed inset-0 z-40 bg-black opacity-50"
      @click="closeModal"
  ></div>
  <div v-if="useModalStore().isSuccessBookingStadiumModalOpen"
       class="fixed top-0 bottom-0 left-0 right-0 z-50 flex items-center justify-center px-4">
    <div class="relative w-full max-w-md max-h-full">
      <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
        <button @click="closeModal" type="button"
                class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-teal-200 hover:text-teal-500 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
        >
          <CloseIcon class="w-5 h-5"/>
        </button>
        <div class="p-6 text-center">
          <SuccessIcon class="w-12 h-12 mx-auto text-teal-500"/>
          <h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">So'rovingiz muvaffaqiyatli yuborildi.</h3>
          <button type="button" @click="closeModal"
                  class="text-white bg-teal-500 transition duration-300 hover:bg-teal-700 focus:ring-4 focus:outline-none focus:ring-teal-500 font-medium rounded-lg text-md inline-flex items-center px-5 py-2.5 text-center mr-2">
            Yuborildi
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>