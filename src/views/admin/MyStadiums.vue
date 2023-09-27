<script setup>
import useMoneyFormatter from "../../mixins/currencyFormatter";
import AddStadiumModal from "@/components/Modals/AddStadiumModal.vue";
import DeleteStadiumModal from "@/components/Modals/DeleteStadiumModal.vue";
import ViewStadiumModal from "@/components/Modals/ViewStadiumModal.vue";
import {useModalStore} from "@/stores/modal.store";
import {onMounted, ref} from "vue";
import EditIcon from "@/assets/icons/EditIcon.vue";
import TrashIcon from "@/assets/icons/TrashIcon.vue";
import EyeIcon from "@/assets/icons/EyeIcon.vue";
import { supabase} from "@/client/supabase";

const stadiums = ref([]);

onMounted(async () => {
  const { data, error } = await supabase.from('stadiums').select('*');
  if (error) {
    console.error(error);
  } else {
    stadiums.value = data;
  }
});
</script>
<template>
  <div class=" flex-1 w-full py-4">
    <div class="flex justify-between items-center p-2.5">
      <p class="font-bold text-2xl">Mening stadionlarim</p>
      <button @click="useModalStore().openAddStadiumModal()" class="py-1.5 px-2 bg-teal-500 rounded-lg text-white hover:bg-teal-600">Qo'shish</button>
      <AddStadiumModal/>
    </div>
    <div class="overflow-x-auto rounded shadow-lg bg-white">
      <table class="w-full table-auto">
        <thead class="bg-gray-100">
        <tr class="text-sm text-left text-gray-600 border-b border-gray-200">
          <th class="pl-4 py-3 font-bold">№</th>
          <th class="flex items-center py-3 pl-2 font-bold">Nomi</th>
          <th class="px-2 py-3 font-bold">Manzil</th>
          <th class="px-2 py-3 font-bold">Maydoni</th>
          <th class="px-2 py-3 font-bold">Status</th>
          <th class="px-2 py-3 font-bold">Narxi</th>
          <th class="px-2 py-3 font-bold">Telefon</th>
          <th class="px-2 py-3 font-bold">Actions</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(stadium, index) in stadiums" :key="index" class="border-b border-gray-200">
          <td class="pl-4 text-sm font-medium">{{index+1}}</td>
          <td class="flex items-center md:px-2 pr-14 py-3">
            <div class="flex items-center flex-row">
              <img class="object-cover w-10 h-10 mr-2 rounded-lg"
                   src="/images/the-stadium.jpg" alt="">
              <div>
                <p class="text-sm font-medium">{{stadium.title}}</p>
              </div>
            </div>
          </td>
          <td class="px-2 text-sm font-medium ">{{stadium.address}}</td>
          <td class="px-2 text-sm font-medium ">{{ stadium.field }} <span>m <sup>2</sup></span></td>
          <td class="px-2 text-sm font-medium ">
            <span class="inline-block px-2 py-1 font-medium text-white bg-green-500 rounded-lg">Band emas</span>
          </td>
          <td class="px-4 text-sm font-medium ">{{ useMoneyFormatter(stadium.price) }}</td>
          <td class="px-2 text-sm font-medium ">{{stadium.phone}}</td>
          <td class="px-2">
            <div class="flex">
              <button @click="useModalStore().openViewStadiumModal()" class="px-2 py-2 mr-3 text-white bg-blue-500 rounded-md hover:bg-teal-600">
                <EyeIcon/>
              </button>
              <ViewStadiumModal/>
              <button class="px-2 py-2 mr-3 text-white bg-teal-500 rounded-md hover:bg-teal-600">
                <EditIcon/>
              </button>
              <button @click="useModalStore().openDeleteStadiumModal()" class="px-2 py-2 mr-3 text-white bg-red-500 rounded-md hover:bg-red-600">
                <TrashIcon/>
              </button>
              <DeleteStadiumModal/>
            </div>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped>

</style>