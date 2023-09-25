<script setup>
import HomeIcon from "@/assets/icons/HomeIcon.vue"
import BallIcon from "@/assets/icons/BallIcon.vue"
import ProfileIcon from "@/assets/icons/ProfileIcon.vue"
import StadiumIcon from "@/assets/icons/StadiumIcon.vue"
import CalendarIcon from "@/assets/icons/CalendarIcon.vue"

const menuLists = [
  { path: "", icon: HomeIcon, size: "w-9 h-9" },
  { path: "stadium", icon: StadiumIcon, size: "w-8 h-8" },
  { path: "best-players", icon: BallIcon, size: "w-9 h-9" },
  { path: "calendar", icon: CalendarIcon, size: "w-8 h-8" },
  { path: "profile", icon: ProfileIcon, size: "w-8 h-8" },
];
</script>
<template>
  <div class="fixed z-40 w-full bottom-0">
    <ul
      class="flex items-center justify-around absolute bottom-0 w-full h-16 bg-teal-500"
    >
      <li v-for="menu in menuLists" :key="menu" class="cursor-pointer">
        <router-link
          :to="`/${menu.path}`"
          class="rounded-full border-0 border-[#fff] relative h-16 w-16 flex items-center justify-center"
        >
          <component :is="menu.icon" :class="menu.size + ' text-white'" />
        </router-link>
      </li>
    </ul>
  </div>
</template>
<style scoped>
.router-link-active {
  border-width: 5px;
  margin-bottom: 66px;
  transition: margin 0.5s;
  background-color: #0694a2;
}

/* .router-link-active::before,
.router-link-active::after {
  position: absolute;
  content: "";
  width: 14px;
  height: 14px;
  top: 20px;
  border-bottom: 7px solid rgb(6 148 162 / var(--tw-bg-opacity));
  border-bottom: 7px solid #0694a2;
} */

.router-link-active:before {
  right: -18.45px;
  border-bottom-right-radius: 100%;
}

.router-link-active:after {
  left: -18.45px;
  border-bottom-left-radius: 100%;
}

.router-link-active svg {
  /* color: #0694a2; */
}

/* .router-link-active::before {
  bottom: -15px;
  left: 50%;
  transition: all 1s;
  content: "";
  width: 10px;
  height: 10px;
  position: absolute;
  border-radius: 50%;
  transform: translateX(-50%);
  background-color: #fff;
} */

/* a.router-link-active {
  width: 60px;
  height: 60px;
  top: -1rem;
  padding: 10px;
  position: relative;
  transition: all 1s;
  background-color: red;
} */

/* a.router-link-exact-active {
  background: #000;
  transition: all 5s;
} */

/* .router-link-active:before {
  left: -9.45px;
  border-bottom-right-radius: 100%;
} */

/* .router-link-active:after {
  right: -9.45px;
  border-bottom-left-radius: 100%;
} */

/* .router-link-active:before,
.router-link-active:after {
  position: absolute;
  content: "";
  width: 14px;
  height: 14px;
  top: 3px;
  border-bottom: 7px solid rgb(6 148 162 / var(--tw-bg-opacity));
} */
</style>