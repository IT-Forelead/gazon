<script setup>
import playersList from "@/assets/data/playerLists.json";
import router from "@/router";
import { computed, ref } from "vue";
import { useRoute } from "vue-router";

const goBack = () => {
  router.back();
};

const showPasswordChange = ref(false);
const hideCurrentPassword = ref(true);
const hideNewPassword = ref(true);
const hideConfirmPassword = ref(true);
const toggleCurrentPassword = () =>
  (hideCurrentPassword.value = !hideCurrentPassword.value);
const toggleNewPassword = () =>
  (hideNewPassword.value = !hideNewPassword.value);
const toggleConfirmPassword = () =>
  (hideConfirmPassword.value = !hideConfirmPassword.value);

const player = computed(() => playersList[useRoute().fullPath?.split("/")[2]]);
</script>
<template>
  <div
    class="min-h-screen max-w-lg mx-auto py-6 mb-10 flex flex-col justify-center"
  >
    <button @click="router.back()">
      <LeftBackIcon
        class="w-7 h-7 ml-8 text-teal-600 hover:text-teal-500 cursor-pointer mx-2"
      />
    </button>
    <div class="relative px-4 py-10 mx-8 md:mx-0">
      <div class="max-w-md mx-auto">
        <div class="flex justify-center items-center mt-12">
          <div class="mb-6 text-center absolute">
            <div
              class="mx-auto w-36 h-36 border rounded-full bg-top bg-cover relative bg-gray-100 mb-4 shadow-inset"
              :style="{
                backgroundImage: `url(/images/${player?.firstName}.jpg)`,
              }"
            >
              <img
                style="display: none"
                :src="`/images/${player?.firstName}.jpg`"
                onerror="
                  this.parentNode.style.backgroundImage = `url(/images/userProfile.jpg)
               ` "
              />
            </div>
            <label
              for="fileInput"
              type="button"
              class="relative -top-7 text-teal-500 cursor-pointer focus:outline-none border py-1 px-3 rounded-full shadow-sm text-left bg-white hover:bg-gray-100 font-medium"
            >
              <EditPhotoIcon class="inline-flex w-5 h-5 mr-1" />
              O'zgartirish
            </label>
            <input
              name="photo"
              id="fileInput"
              accept="image/*"
              class="hidden"
              type="file"
            />
          </div>
        </div>
        <div class="py-12 space-y-4">
          <div class="flex flex-col">
            <label class="text-teal-500">Ism</label>
            <input
              type="text"
              class="capitalize px-4 py-3 border focus:ring-teal-500 focus:border-teal-500 w-full sm:text-sm border-gray-300 rounded-lg focus:outline-none"
              placeholder="Ism"
              v-model="player.firstName"
            />
          </div>
          <div class="flex flex-col">
            <label class="text-teal-500">Familiya</label>
            <input
              v-model="player.lastName"
              type="text"
              class="capitalize px-4 py-3 border focus:ring-teal-500 focus:border-teal-500 w-full sm:text-sm border-gray-300 rounded-lg focus:outline-none"
              placeholder="Familiya"
            />
          </div>
          <div class="flex flex-col">
            <label class="text-teal-500">Username</label>
            <input
              v-model="player.username"
              type="text"
              class="px-4 py-3 border focus:ring-teal-500 focus:border-teal-500 w-full sm:text-sm border-gray-300 rounded-lg focus:outline-none"
              placeholder="Username"
            />
          </div>
          <div class="flex flex-col">
            <label class="text-teal-500">Telefon raqam</label>
            <input
              v-model="player.phone"
              id="phone"
              v-maska
              data-maska="+998(##) ###-##-##"
              type="text"
              class="px-4 py-3 border focus:ring-teal-500 focus:border-teal-500 w-full sm:text-sm border-gray-300 rounded-lg focus:outline-none"
              placeholder="+998(00) 000-00-00"
            />
          </div>
          <button
            @click="showPasswordChange = !showPasswordChange"
            class="bg-teal-500 flex justify-between items-center w-full text-white px-4 py-3 rounded-lg focus:outline-none hover:bg-teal-400"
          >
            Parolni o'zgartirish
            <RightIcon class="w-6 h-6 text-white" />
          </button>
          <div v-if="showPasswordChange">
            <div class="py-1 space-y-4">
              <div class="flex flex-col">
                <label for="password" class="text-teal-500"
                  >Hozirgi parol
                  <div class="relative">
                    <input
                      id="password"
                      :type="hideCurrentPassword ? 'password' : 'text'"
                      class="px-4 py-3 border focus:ring-teal-500 focus:border-teal-500 w-full sm:text-sm border-gray-300 rounded-lg focus:outline-none"
                      placeholder="Parolingizni kiriting"
                    />
                    <EyeIcon
                      v-if="hideCurrentPassword"
                      @click="toggleCurrentPassword()"
                      class="absolute z-10 text-gray-500 -translate-y-1/2 cursor-pointer top-1/2 right-6 w-7 h-7"
                    />
                    <EyeSlashIcon
                      v-else
                      @click="toggleCurrentPassword()"
                      class="absolute z-10 text-gray-500 -translate-y-1/2 cursor-pointer top-1/2 right-6 w-7 h-7"
                    />
                  </div>
                </label>
              </div>
              <div class="flex flex-col">
                <label for="newPassword" class="text-teal-500"
                  >Yangi parol
                  <div class="relative">
                    <input
                      id="newPassword"
                      :type="hideNewPassword ? 'password' : 'text'"
                      class="px-4 py-3 border focus:ring-teal-500 focus:border-teal-500 w-full border-gray-300 rounded-lg focus:outline-none"
                      placeholder="Yangi parol kiriting"
                    />
                    <EyeIcon
                      v-if="hideNewPassword"
                      @click="toggleNewPassword()"
                      class="absolute z-10 text-gray-500 -translate-y-1/2 cursor-pointer top-1/2 right-6 w-7 h-7"
                    />
                    <EyeSlashIcon
                      v-else
                      @click="toggleNewPassword()"
                      class="absolute z-10 text-gray-500 -translate-y-1/2 cursor-pointer top-1/2 right-6 w-7 h-7"
                    />
                  </div>
                </label>
              </div>
              <div class="flex flex-col">
                <label for="confirmPassword" class="text-teal-500"
                  >Parolni tasdiqlash
                  <div class="relative">
                    <input
                      id="confirmPassword"
                      :type="hideConfirmPassword ? 'password' : 'text'"
                      class="px-4 py-3 border focus:ring-teal-500 focus:border-teal-500 w-full sm:text-sm border-gray-300 rounded-lg focus:outline-none"
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
                </label>
              </div>
            </div>
          </div>
          <div class="pt-4 flex items-center space-x-4">
            <button
              @click="goBack"
              class="bg-red-500 flex justify-center text-white items-center w-full px-4 py-3 rounded-full focus:outline-none hover:bg-red-600"
            >
              Bekor qilish
            </button>
            <button
              class="bg-teal-500 flex justify-center items-center w-full text-white px-4 py-3 rounded-full focus:outline-none hover:bg-teal-600"
            >
              Saqlash
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped></style>
