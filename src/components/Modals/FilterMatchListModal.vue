<script setup>
import {useModalStore} from "@/stores/modal.store"
import CloseIcon from "@/assets/icons/CloseIcon.vue"

const closeModal = () => {
  useModalStore().closeFilterMatchListModal()
}

</script>
<template>
  <div v-if="useModalStore().isFilterMatchListModalOpen"
       class="fixed md:top-0 left-0 right-0 -bottom-4 md:bottom-0 flex items-center justify-center z-50">
    <div class="fixed inset-0 bg-black opacity-40"></div>
    <div class="w-full md:p-4 md:max-w-lg">
      <div class="relative bg-white md:rounded-lg rounded-t-3xl shadow">
        <div class="flex items-start justify-between p-3 border-b rounded-t">
          <h3 class="text-xl font-semibold text-teal-600">
            Filtr
          </h3>
          <button @click="closeModal" type="button"
                  class="text-gray-400 bg-transparent hover:bg-teal-200 hover:text-teal-500 rounded-lg w-8 h-8 ml-auto inline-flex justify-center items-center">
            <CloseIcon class="w-5 h-5"/>
          </button>
        </div>
        <!-- Modal body -->
        <div class="px-3 py-2 space-y-2">
          <h3 class="text-lg font-medium text-gray-900">Gollar</h3>
          <ul class="grid w-full gap-2 grid-cols-3">
            <li>
              <input type="radio" id="price-1" name="hosting" value="price-1" class="hidden peer" required>
              <label for="price-1"
                     class="inline-flex items-center justify-center w-full py-1 text-gray-600 bg-white border border-gray-200 rounded-lg cursor-pointer peer-checked:border-0 peer-checked:bg-teal-500 peer-checked:text-white hover:text-gray-600 hover:bg-gray-100">
                <div class="block">
                  <div class="w-full text-sm font-semibold">0-5</div>
                </div>
              </label>
            </li>
            <li>
              <input type="radio" id="price-2" name="hosting" value="price-2" class="hidden peer" required>
              <label for="price-2"
                     class="inline-flex items-center justify-center w-full py-1 text-gray-600 bg-white border border-gray-200 rounded-lg cursor-pointer peer-checked:border-0 peer-checked:bg-teal-500 peer-checked:text-white hover:text-gray-600 hover:bg-gray-100">
                <div class="block">
                  <div class="w-full text-sm font-semibold">6-10</div>
                </div>
              </label>
            </li>
            <li>
              <input type="radio" id="hosting-big" name="hosting" value="hosting-big" class="hidden peer">
              <label for="hosting-big"
                     class="inline-flex items-center justify-center w-full py-1 text-gray-600 bg-white border border-gray-200 rounded-lg cursor-pointer peer-checked:border-0 peer-checked:bg-teal-500 peer-checked:text-white hover:text-gray-600 hover:bg-gray-100">
                <div class="block">
                  <div class="w-full text-sm font-semibold">10-20</div>
                </div>
              </label>
            </li>
          </ul>
        </div>
        <div class="px-3 py-2 space-y-2">
          <h3 class="mb-4 font-semibold text-gray-900">Vaqt oralig'i</h3>
          <div class="grid grid-cols-3 gap-2">
            <div class="flex items-center pl-4 border border-gray-200 rounded-lg">
              <input id="today" type="radio" value="today" name="bordered-radio"
                     class="w-4 h-4 text-teal-600 bg-gray-100 border-gray-300 focus:ring-teal-500 focus:ring-2">
              <label for="today" class="w-full py-1 ml-2 text-sm font-medium text-gray-900">Bugun</label>
            </div>
            <div class="flex items-center pl-4 border border-gray-200 rounded-lg">
              <input checked id="week" type="radio" value="week" name="bordered-radio"
                     class="w-4 h-4 text-teal-600 bg-gray-100 border-gray-300 focus:ring-teal-500 focus:ring-2">
              <label for="week" class="w-full py-1 ml-2 text-sm font-medium text-gray-900">Hafta</label>
            </div>
            <div class="flex items-center pl-4 border border-gray-200 rounded-lg">
              <input checked id="month" type="radio" value="month" name="bordered-radio"
                     class="w-4 h-4 text-teal-600 bg-gray-100 border-gray-300 focus:ring-teal-500 focus:ring-2">
              <label for="month" class="w-full py-1 ml-2 text-sm font-medium text-gray-900">Oy</label>
            </div>
            <div class="flex items-center pl-4 border border-gray-200 rounded-lg">
              <input checked id="three-month" type="radio" value="three-month" name="bordered-radio"
                     class="w-4 h-4 text-teal-600 bg-gray-100 border-gray-300 focus:ring-teal-500 focus:ring-2">
              <label for="three-month" class="w-full py-1 ml-2 text-sm font-medium text-gray-900">3 Oy</label>
            </div>
            <div class="flex items-center pl-4 border border-gray-200 rounded-lg">
              <input checked id="all" type="radio" value="all" name="bordered-radio"
                     class="w-4 h-4 text-teal-600 bg-gray-100 border-gray-300 focus:ring-teal-500 focus:ring-2">
              <label for="all" class="w-full py-1 ml-2 text-sm font-medium text-gray-900">Barchasi</label>
            </div>
          </div>
        </div>
        <!-- Modal footer -->
        <div class="flex items-center p-4 space-x-2 border-t mb-2">
          <button  type="button"
                  class="text-white w-full bg-teal-500 hover:bg-teal-600 focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-md px-4 py-2.5 text-center">
            Filtr
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>

</style>