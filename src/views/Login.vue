<script setup>
import notify from "izitoast";
import { vMaska } from "maska";
import {ref, reactive} from "vue";
import "izitoast/dist/css/iziToast.min.css";
import EyeIcon from "@/assets/icons/EyeIcon.vue";
import EyeSlashIcon from "@/assets/icons/EyeSlashIcon.vue";
import notify from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import {supabase} from "@/client/supabase";
import router from "@/router";
import Spinners270Ring from "@/assets/icons/Spinners270RingIcon.vue";

const hidePassword = ref(true);
const togglePassword = () => (hidePassword.value = !hidePassword.value);
const isLoading = ref(false)
const loginFormData = reactive({
  // phoneNumber: "",
  email: "",
  password: "",
});

const showErrorToast = (text) => {
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

const login = async () => {
  if (loginFormData.email.length === 0) {
    showWarningToast("Iltimos email pochtangizni kiriting");
  } else if (loginFormData.password.length === 0) {
    showWarningToast("Iltimos parolni kiritng");
  } else {
    try {
      isLoading.value = true;
      const {data, error} = await supabase.auth.signInWithPassword({
        email: loginFormData.email,
        password: loginFormData.password,
        role: ''
      });
      if (error) {
        console.error('Error signing in:', error.message);
      } else {
        isLoading.value = false;
        console.log('User signed in successfully:', data);
        showSuccessToast("Tabriklaymiz, siz muvaffaqiyatli kirdingiz");
        await router.push({path: '/admin'});
      }
    } catch (error) {
      console.error('An error occurred:', error.message);
    }
  }
};
const isLoadingSignOut = ref(false)
const logout = async () => {
  isLoadingSignOut.value = true;
  try {
    await supabase.auth.signOut();
    isLoadingSignOut.value = false;
    await router.push({ path: '/' });
    console.log('User logged out');
    showSuccessToast("Tabriklaymiz, siz muvaffaqiyatli chiqdingiz");
  } catch (error) {
    console.error('An error occurred during logout:', error.message);
  }
};
</script>

<template>
  <div
      class="absolute w-full max-w-lg px-8 -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 md:w-2/3 md:px-4 md:mx-auto"
  >
    <h1 class="mb-5 text-2xl font-bold text-teal-600">Kirish</h1>
    <div class="flex flex-col space-y-6">
      <!--      <label for="phone">-->
      <!--        <p class="pb-2 font-medium text-gray-500">Telefon raqam</p>-->
      <!--        <input-->
      <!--          id="phone"-->
      <!--          v-maska-->
      <!--          data-maska="+998(##) ###-##-##"-->
      <!--          type="text"-->
      <!--          class="w-full py-4 text-lg border border-gray-300 rounded-full focus:outline-none focus:ring-1 focus:ring-teal-500"-->
      <!--          placeholder="+998(00) 000-00-00"-->
      <!--          v-model="loginFormData.phoneNumber"-->
      <!--        />-->
      <!--      </label>-->
      <label for="email">
        <p class="pb-2 font-medium text-gray-500">Email</p>
        <input
            id="email"
            type="email"
            class="w-full py-4 text-lg border border-gray-300 rounded-full focus:outline-none focus:ring-1 focus:ring-teal-500"
            placeholder="name@gmail.com"
            v-model="loginFormData.email"
        />
      </label>
      <div>
        <div class="flex flex-row items-center justify-between mb-2">
          <p class="font-medium text-gray-500">Parol</p>
          <router-link
              to="/forgot-password"
              class="font-medium text-teal-500 cursor-pointer hover:text-teal-800"
          >
            Parolni unutdingizmi?
          </router-link>
        </div>
        <label for="password">
          <div class="relative">
            <input
                id="password"
                :type="hidePassword ? 'password' : 'text'"
                class="w-full px-3 py-4 border border-gray-300 rounded-full focus:outline-none focus:ring-1 focus:ring-teal-500"
                placeholder="Parolingizni kiriting"
                v-model="loginFormData.password"
                @keyup.enter="login"
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
        </label>
      </div>
      <div v-if="isLoading"
           class="flex items-center justify-center w-full py-4 font-semibold text-white bg-teal-600 rounded-full cursor-pointer select-none">
        <Spinners270Ring/>
        <span>Loading</span>
      </div>
      <button v-else
              type="submit"
              class="flex items-center justify-center w-full py-4 font-semibold text-white bg-teal-600 rounded-full cursor-pointer select-none hover:bg-teal-500"
              @click="login"
      >
        <span>Kirish</span>
      </button>
      <div v-if="isLoadingSignOut"
           class="flex items-center justify-center w-full py-4 font-semibold text-white bg-gray-600 rounded-full cursor-pointer select-none">
        <Spinners270Ring/>
        <span>Loading</span>
      </div>
      <button v-else
          type="submit"
          class="flex items-center justify-center w-full py-4 font-semibold text-white bg-gray-600 rounded-full cursor-pointer select-none hover:bg-gray-500"
          @click="logout"
      >
        <span>Chiqish</span>
      </button>
      <div class="space-x-1 text-center">
        <span class="font-normal"> Akkauntingiz yo'qmi? </span>
        <router-link
            to="sign-up"
            class="font-medium text-teal-500 cursor-pointer hover:text-teal-800"
        >
          Ro'yxatdan o'tish
        </router-link>
      </div>
    </div>
  </div>
</template>
<style scoped>

</style>
