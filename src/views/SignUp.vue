<script setup>
import { ref } from "vue";
import EyeIcon from "@/assets/icons/EyeIcon.vue";
import PhoneIcon from "@/assets/icons/PhoneIcon.vue";
import UserBoldIcon from "@/assets/icons/UserBoldIcon.vue";
import EyeSlashIcon from "@/assets/icons/EyeSlashIcon.vue";
import UserRoleIcon from "@/assets/icons/UserRoleIcon.vue";
import LockPasswordIcon from "@/assets/icons/LockPasswordIcon.vue";

const hidePassword = ref(true);
const hideConfirmPassword = ref(true);
const togglePassword = () => (hidePassword.value = !hidePassword.value);

const toggleConfirmPassword = () => (hideConfirmPassword.value = !hideConfirmPassword.value);
</script>
<template>
  <div
    class="absolute w-full max-w-lg px-8 -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 md:w-2/3 md:px-4 md:mx-auto"
  >
    <h1 class="mt-6 text-2xl font-bold text-teal-600">Ro'yxatdan o'tish</h1>
    <div class="flex flex-col space-y-4">
      <div class="relative flex items-center mt-8">
        <span class="absolute">
          <UserBoldIcon class="w-6 h-6 mx-3 text-teal-400" />
        </span>
        <input
          type="text"
          class="block w-full py-3 bg-white border border-gray-300 rounded-full px-11 focus:outline-none focus:ring-1 focus:ring-teal-400"
          placeholder="Ism"
        />
      </div>
      <div class="relative flex items-center mt-8">
        <span class="absolute">
          <UserBoldIcon class="w-6 h-6 mx-3 text-teal-400" />
        </span>
        <input
          type="text"
          class="block w-full py-3 bg-white border border-gray-300 rounded-full px-11 focus:outline-none focus:ring-1 focus:ring-teal-400"
          placeholder="Familiya"
        />
      </div>
      <div class="relative flex items-center mt-8">
        <span class="absolute">
          <UserRoleIcon class="w-6 h-6 mx-3 text-teal-400" />
        </span>
        <select
          class="block w-full px-10 py-3 bg-white border border-gray-300 rounded-full focus:outline-none focus:ring-1 focus:ring-teal-400"
        >
          <option selected disabled>Rolni tanlang</option>
          <option value="player">Futbolchi</option>
          <option value="referee">Hakam</option>
          <option value="owner">Stadion egasi</option>
        </select>
      </div>
      <div class="relative flex items-center mt-6">
        <span class="absolute">
          <PhoneIcon class="w-6 h-6 mx-3 text-teal-400" />
        </span>
        <input
          type="text"
          data-maska="+998(##) ###-##-##"
          data-maska-tokens="998"
          class="block w-full py-3 bg-white border border-gray-300 rounded-full px-11 focus:outline-none focus:ring-1 focus:ring-teal-400"
          placeholder="+998(00) 000-00-00"
        />
      </div>
      <div class="relative flex items-center mt-4">
        <span class="absolute">
          <LockPasswordIcon class="w-6 h-6 mx-3 text-teal-400" />
        </span>
        <input
          :type="hidePassword ? 'password' : 'text'"
          class="block w-full py-3 bg-white border border-gray-300 rounded-full px-11 focus:outline-none focus:ring-1 focus:ring-teal-400"
          placeholder="Parol"
        />
        <EyeIcon
          v-if="hidePassword"
          @click="togglePassword()"
          class="absolute z-10 text-gray-500 -translate-y-1/2 cursor-pointer top-1/2 right-6 w-7 h-7"
        />
        <EyeSlashIcon
          v-else
          @click="togglePassword()"
          class="absolute z-10 text-gray-500 -translate-y-1/2 cursor-pointer top-1/2 right-6 w-7 h-7"
        />
      </div>
      <div class="relative flex items-center mt-4">
        <span class="absolute">
          <LockPasswordIcon class="w-6 h-6 mx-3 text-teal-400" />
        </span>
        <input
          :type="hidePassword ? 'password' : 'text'"
          class="block w-full py-3 bg-white border border-gray-300 rounded-full px-11 focus:outline-none focus:ring-1 focus:ring-teal-400"
          placeholder="Parolni tasdiqlang"
        />
        <EyeIcon
            v-if="hideConfirmPassword"
            @click="toggleConfirmPassword()"
          class="absolute z-10 text-gray-500 -translate-y-1/2 cursor-pointer top-1/2 right-6 w-7 h-7"
        />
        <EyeSlashIcon
          v-else
          @click="toggleConfirmPassword()"
          class="absolute z-10 text-gray-500 -translate-y-1/2 cursor-pointer top-1/2 right-6 w-7 h-7"
        />
      </div>
      <div class="mt-6">
        <button
          type="submit"
          class="flex items-center justify-center w-full py-4 font-semibold text-white bg-teal-600 rounded-full cursor-pointer select-none hover:bg-teal-500"
        >
          <span>Ro'yxatdan o'tish</span>
        </button>
        <div class="mt-6 text-center">
          <span class="font-normal"> Allaqachon akkauntingiz bormi? </span>
          <router-link
            to="login"
            class="font-medium text-teal-500 cursor-pointer hover:text-teal-800"
          >
            Kirish
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped></style>
