<script setup>
import {ref} from 'vue';
import HomeIcon from "@/assets/icons/HomeIcon.vue";
import StadiumIcon from "@/assets/icons/StadiumIcon.vue";
import BallIcon from "@/assets/icons/BallIcon.vue";
import CalendarIcon from "@/assets/icons/CalendarIcon.vue";
import ProfileIcon from "@/assets/icons/ProfileIcon.vue";

const activeTab = ref('home');

const tabs = [
  {id: 'home', icon: HomeIcon, size: 'w-8 h-8'},
  {id: 'stadium', icon: StadiumIcon, size: 'w-8 h-8'},
  {id: 'ball', icon: BallIcon, size: 'w-10 h-10'},
  {id: 'calendar', icon: CalendarIcon, size: 'w-8 h-8'},
  {id: 'profile', icon: ProfileIcon, size: 'w-8 h-8'},
];

const handleTabClick = (tab) => {
  if (activeTab.value !== tab) {
    activeTab.value = tab;
  }
};

const isActive = (tab) => {
  return activeTab.value === tab;
};
</script>

<template>
  <div class="fixed z-40 w-full h-18 -translate-x-1/2 left-1/2 bottom-0">
    <div class="tab-bar h-32 tab-style mx-auto">
      <ul class="flex absolute bottom-0 w-full h-12 justify-center bg-teal-500">
        <li
            v-for="tab in tabs"
            :key="tab.id"
            :class="{ active: isActive(tab.id) }"
            class="pb-1 top-[1px] w-[60px] h-[60px] flex items-center justify-center bg-teal-500 mx-4 cursor-pointer relative transition-all duration-300 rounded-tl-full rounded-tr-full"
            @mousedown="handleTabClick(tab.id)"
            @touchstart="handleTabClick(tab.id)"
        >
          <component :is="tab.icon" :class="tab.size + ' text-white'"/>
        </li>
      </ul>
    </div>
  </div>
</template>
<style scoped>
.tab-style .active {
  width: 60px;
  height: 60px;
  top: -1rem;
}

.tab-style .active:before {
  border-bottom-right-radius: 100%;
  left: -10px;
}

.tab-style .active:after {
  border-bottom-left-radius: 100%;
  right: -10px;
}

.tab-style .active:before, .tab-style .active:after {
  position: absolute;
  content: " ";
  width: 14px;
  height: 14px;
  border-bottom: 7px solid rgb(6 148 162 / var(--tw-bg-opacity));
  top: 11px;
}
</style>