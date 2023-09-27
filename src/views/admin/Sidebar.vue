<script setup>
import {ref} from "vue";
import UserCircleIcon from "@/assets/icons/UserCircleIcon.vue";
import DashboardIcon from "@/assets/icons/DashboardIcon.vue";
import OrdersIcon from "@/assets/icons/OrdersIcon.vue";
import MyStadiumsIcon from "@/assets/icons/MyStadiumsIcon.vue";
import BallIcon from "@/assets/icons/BallIcon.vue";
import LogOutIcon from "@/assets/icons/LogOutIcon.vue";
import UserBoldIcon from "@/assets/icons/UserBoldIcon.vue";

const isOpenSidebar = ref(true)
const isOpenNavMenu = ref(false)
const toggleSidebar = () => {
  isOpenSidebar.value = !isOpenSidebar.value
}
const toggleNavMenu = () => {
  isOpenNavMenu.value = !isOpenNavMenu.value
}
</script>
<template>
  <nav class="fixed top-0 z-50 w-full bg-white border-b border-gray-200">
    <div class="px-3 py-3 lg:px-5 lg:pl-3">
      <div class="flex items-center justify-between">
        <div class="flex items-center justify-start">
          <button @click="toggleSidebar" type="button"
                  class="inline-flex items-center p-2 rounded-lg sm:hidden hover:bg-teal-200 focus:outline-none focus:ring-2 focus:ring-teal-400">
            <svg v-if="isOpenSidebar" xmlns="http://www.w3.org/2000/svg" class="text-teal-500" width="24" height="24" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor"
                 stroke-width="2"
                 stroke-linecap="round" stroke-linejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
            <svg v-else class="w-6 h-6 text-teal-500" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path clip-rule="evenodd" fill-rule="evenodd"
                    d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
            </svg>
          </button>
          <a href="#" class="flex ml-2 md:mr-24">
            <!--            <img src="#" class="h-8 mr-3" alt="Logo" />-->
            <span class="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap text-teal-500">Gazon</span>
          </a>
        </div>
        <div @click="toggleNavMenu" class="cursor-pointer flex items-center">
            <button  type="button"
                    class="flex rounded-lg p-1.5 bg-teal-500 focus:ring-2 focus:ring-teal-300 mr-4">
              <UserBoldIcon class="w-5 h-5 text-white"/>
            </button>
            <div v-if="isOpenNavMenu"
                 class="right-28 top-16 translate-x-1/2 absolute text-base list-none bg-white divide-y divide-gray-100 rounded shadow-lg"
                 id="dropdown-user">
              <ul class="py-1 w-52 text-teal-800" role="none">
                <li class="flex items-center px-4 hover:bg-teal-200">
                  <DashboardIcon/>
                  <router-link to="/dashboard"
                               class="block p-2 text-sm"
                               role="menuitem">Dashboard
                  </router-link>
                </li>
                <li class="flex px-4 items-center  hover:bg-teal-200">
                  <LogOutIcon/>
                  <a href="#"
                     class="block p-2 text-sm"
                     role="menuitem">Sign out</a>
                </li>
              </ul>

          </div>
          <div>
           <p class="text-sm font-bold text-teal-600" role="none">
             Admin's name
           </p>
           <p class="text-sm font-medium" role="none">
             name@example.com
           </p>
         </div>
        </div>
      </div>
    </div>
  </nav>
  <!--  Sidebar-->
  <div v-if="isOpenSidebar" id="logo-sidebar"
       class="fixed top-0 left-0 z-40 md:w-64 w-72 h-screen pt-20 transition-transform bg-white border-r border-gray-200">
    <div class="h-full px-3 pb-4 overflow-y-auto bg-white">
      <ul class="space-y-2 font-bold">
        <li>
          <router-link to="/dashboard"
                       class="flex  items-center p-2 text-teal-700 rounded-lg hover:bg-teal-100 group">
            <DashboardIcon class="w-5 h-5"/>
            <span class="ml-3">Dashboard</span>
          </router-link>
        </li>
        <li>
          <router-link to="/orders"
                       class="flex items-center p-2 text-teal-700 rounded-lg hover:bg-teal-100 group">
            <OrdersIcon class="w-5 h-5"/>
            <span class="flex-1 ml-3 whitespace-nowrap">Buyurtmalar</span>
            <span
                class="inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm font-medium text-teal-700 bg-teal-200 rounded-full">3</span>
          </router-link>
        </li>
        <li>
          <router-link to="/my-stadiums"
                       class="flex items-center p-2 text-teal-700 rounded-lg hover:bg-teal-100 group">
            <MyStadiumsIcon class="w-5 h-5"/>
            <span class="flex-1 ml-3 whitespace-nowrap">Mening stadionlarim</span>
          </router-link>
        </li>
        <li>
          <router-link to="/matches"
                       class="flex items-center p-2 text-teal-700 rounded-lg hover:bg-teal-100 group">
            <BallIcon class="w-5 h-5"/>
            <span class="flex-1 ml-3 whitespace-nowrap">O'yinlar</span>
          </router-link>
        </li>
        <li>
          <router-link to="/matches"
                       class="flex items-center p-2 text-teal-700 rounded-lg hover:bg-teal-100 group">
            <UserBoldIcon class="w-5 h-5"/>
            <span class="flex-1 ml-3 whitespace-nowrap">Profil</span>
          </router-link>
        </li>
        <li class="absolute md:bottom-4 bottom-32">
          <button class="flex items-center p-2 text-teal-700 rounded-lg hover:bg-teal-100 group">
            <LogOutIcon/>
            <span class="flex-1 ml-3 whitespace-nowrap">Chiqish</span>
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>
<style scoped>

</style>