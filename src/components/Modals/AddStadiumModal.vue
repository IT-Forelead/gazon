<script setup>
import {useModalStore} from "@/stores/modal.store";
import CloseIcon from "@/assets/icons/CloseIcon.vue";
import {reactive, ref} from "vue";
import {supabase} from "@/client/supabase";

const newStadium = reactive({
  title: '',
  address: '',
  price: '',
  field: '',
  phone: ''
});

const clearForm = () => {
  newStadium.title = ''
  newStadium.address = ''
  newStadium.price = ''
  newStadium.field = ''
  newStadium.phone = ''
}
const closeModal = () => {
  useModalStore().closeAddStadiumModal()
  clearForm()
};

const createStadium = async () => {
  const { data, error } = await supabase.from('stadiums').insert([newStadium]).select();
  if (error) {
    console.error(error);
  } else {
    // Clear the form fields
    Object.keys(newStadium).forEach((key) => {
      newStadium[key] = '';
    });
    // Optionally, you can navigate back to the list page
  }
};
</script>
<template>
  <div
      v-if="useModalStore().isAddStadiumModalOpen"
      class="fixed inset-0 z-50 bg-black opacity-50"
      @click="closeModal"
  ></div>
  <div v-if="useModalStore().isAddStadiumModalOpen"
       class="fixed top-0 bottom-0 left-0 right-0 z-50 flex items-center justify-center px-4">
    <div class="relative w-full max-w-3xl max-h-full">
      <div class="relative bg-white rounded-lg">
        <p class="py-4 px-4 font-bold">Stadion qo'shish</p>
        <button @click="closeModal" type="button"
                class="absolute top-2 right-2.5 text-white bg-teal-500 hover:bg-teal-600 rounded-lg p-1 inline-flex justify-center items-center"
        >
          <CloseIcon class="w-5 h-5"/>
        </button>
        <div class="px-4">

          <form @submit.prevent="createStadium">
            <div class="grid gap-3 mb-2 md:grid-cols-2">
              <div>
                <label for="name" class="block mb-1 text-sm font-medium text-gray-900">Nomi</label>
                <input type="text" id="name" v-model="newStadium.title"
                       class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-full p-2.5"
                       placeholder="Stadion nomi">
              </div>
              <div>
                <label for="address" class="block mb-1 text-sm font-medium text-gray-900">Manzili</label>
                <input type="text" id="address" v-model="newStadium.address"
                       class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-full p-2.5"
                       placeholder="Stadion manzili">
              </div>
              <div>
                <label for="field" class="block mb-1 text-sm font-medium text-gray-900">Maydoni</label>
                <input type="number" id="field" v-model="newStadium.field"
                       class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-full p-2.5"
                       placeholder="o'lchami metr kvadrat">
              </div>
              <div>
                <label for="phone" class="block mb-1 text-sm font-medium text-gray-900">Telefon</label>
                <input type="tel" id="phone" v-model="newStadium.phone"
                       class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-full p-2.5"
                       placeholder="+998-90-123-4567">
              </div>
              <div>
                <label for="price" class="block mb-1 text-sm font-medium text-gray-900">Narxi</label>
                <input type="number" id="price" v-model="newStadium.price"
                       class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-full p-2.5"
                       placeholder="1 soatlik narxi" required>
              </div>
              <div>
                <label for="image" class="block mb-1 text-sm font-medium text-gray-900">Rasm</label>
                <input
                    class="block w-full px-4 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none"
                    aria-describedby="file_input_help" id="image" type="file">
                <p class="mt-1 text-sm text-gray-500" id="file_input_help">PNG, JPG (MAX. 800x400px).</p>
              </div>
            </div>
            <div class="flex justify-end items-center py-4">
              <button @click="closeModal"
                      class="mx-1 text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center">
                Bekor qilish
              </button>
              <button type="submit"
                      class="mx-1 text-white bg-teal-600 hover:bg-teal-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center">
                Saqlash
              </button>
            </div>
          </form>

        </div>
      </div>
    </div>
  </div>

</template>

<style scoped>

</style>