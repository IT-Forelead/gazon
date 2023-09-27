<script setup>
import {useModalStore} from "@/stores/modal.store";
import CloseIcon from "@/assets/icons/CloseIcon.vue";
import WarningIcon from "@/assets/icons/WarningIcon.vue";
import {useStadiumStore} from "@/stores/stadium.store";
import {supabase} from "@/client/supabase";
const closeModal = () => {
  useModalStore().closeDeleteStadiumModal()
};

const deleteStadium = async () => {
  const stadiumIdToDelete = useStadiumStore().stadiumIdToDelete;
  const { error } = await supabase.from('stadiums').delete().eq('id', stadiumIdToDelete);
  if (error) {
    console.error(error);
  } else {
    closeModal();
  }
};

</script>
<template>
  <div
      v-if="useModalStore().isDeleteStadiumModalOpen"
      class="fixed inset-0 z-50 bg-black opacity-50"
      @click="closeModal"
  ></div>
  <div v-if="useModalStore().isDeleteStadiumModalOpen"
       class="fixed top-0 bottom-0 left-0 right-0 z-50 flex items-center justify-center px-2">
    <div class="relative w-full max-w-md max-h-full">
      <div class="relative bg-white rounded-lg shadow">
        <button @click="closeModal" type="button"
                 class="absolute top-3 right-2.5 text-white bg-teal-500 hover:bg-teal-600 rounded-lg p-1 inline-flex justify-center items-center" data-modal-hide="popup-modal">
         <CloseIcon class="w-5 h-5"/>
        </button>
        <div class="p-6 text-center">
          <WarningIcon class="mx-auto mb-4 text-gray-400 w-12 h-12"/>
          <h3 class="mb-5 text-lg font-normal text-gray-500">Siz haqiqatda ushbu stadionni o'chirishni xohlaysizmi?</h3>
          <button @click="deleteStadium" type="button"
                   class="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2">
            Ha, albatta
          </button>
          <button @click="closeModal" type="button"
                   class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10">No, cancel</button>
        </div>
      </div>
    </div>
  </div>

</template>

<style scoped>

</style>