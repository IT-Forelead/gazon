<script setup>
import { ref, reactive } from "vue";
import EyeIcon from "@/assets/icons/EyeIcon.vue";
import PhoneIcon from "@/assets/icons/PhoneIcon.vue";
import UserBoldIcon from "@/assets/icons/UserBoldIcon.vue";
import EyeSlashIcon from "@/assets/icons/EyeSlashIcon.vue";
import UserRoleIcon from "@/assets/icons/UserRoleIcon.vue";
import LockPasswordIcon from "@/assets/icons/LockPasswordIcon.vue";
import { vMaska } from "maska";
import notify from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const showToast = (text) => {
  notify.error({
    message: text,
    messageSize: "23",
    position: "bottomRight",
    timeout: 10000,
  });
};

const showWarningToast = (text) => {
  notify.warning({
    message: text,
    messageSize: "23",
    position: "bottomRight",
    timeout: 10000,
  });
};

const showSuccessToast = (text) => {
  notify.success({
    message: text,
    messageSize: "23",
    position: "bottomRight",
    timeout: 10000,
  });
};

const hidePassword = ref(true);
const hideConfirmPassword = ref(true);
const togglePassword = () => (hidePassword.value = !hidePassword.value);

const loginFormData = reactive({
  firstName: "",
  lastName: "",
  phoneNumber: "",
  password: "",
  repeatPassword: "",
  role: "",
});

const toggleConfirmPassword = () =>
  (hideConfirmPassword.value = !hideConfirmPassword.value);

const isValidPassword = (password) => {
  return /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(
    password
  );
};
const submitRegister = () => {
  if (loginFormData.firstName.length == 0) {
    showToast("Iltimos ismingizni kiriting");
  } else if (loginFormData.lastName.length == 0) {
    showToast("Iltimos familyangizni kiriting");
  } else if (loginFormData.role.length == 0) {
    showToast("Iltimos rolni tanlang");
  } else if (loginFormData.phoneNumber.length == 0) {
    showToast("Iltimos telefon nomeringizni kiriting");
  } else if (
    loginFormData.phoneNumber.length > 0 &&
    loginFormData.phoneNumber.length < 18
  ) {
    showWarningToast("Iltimos telefon raqamingizni to'liq kiriting");
  } else if (loginFormData.password.length == 0) {
    showToast("Iltimos parolni kiritng");
  } else if (!isValidPassword(loginFormData.password)) {
    showWarningToast(
      "Uzunligi 8 va kamida 1 ta katta, 1 ta kichik harf, 1 ta raqam va 1 ta maxsus belgi bo'lishi kerak"
    );
  } else if (loginFormData.password != loginFormData.repeatPassword) {
    showToast("Passwordlar teng emas");
  } else {
    showSuccessToast("Success");
  }
};

const whenPressEnter = (e) => {
  if (e.keyCode === 13) {
    submitRegister();
  }
};
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
          v-model="loginFormData.firstName"
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
          v-model="loginFormData.lastName"
        />
      </div>
      <div class="relative flex items-center mt-8">
        <span class="absolute">
          <UserRoleIcon class="w-6 h-6 mx-3 text-teal-400" />
        </span>
        <select
          class="block w-full px-10 py-3 bg-white border border-gray-300 rounded-full focus:outline-none focus:ring-1 focus:ring-teal-400"
          v-model="loginFormData.role"
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
          v-maska
          data-maska="+998(##) ###-##-##"
          class="block w-full py-3 bg-white border border-gray-300 rounded-full px-11 focus:outline-none focus:ring-1 focus:ring-teal-400"
          placeholder="+998(00) 000-00-00"
          v-model="loginFormData.phoneNumber"
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
          v-model="loginFormData.password"
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
          v-model="loginFormData.repeatPassword"
          @keyup.enter="submitRegister"
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
          @click="submitRegister"
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
