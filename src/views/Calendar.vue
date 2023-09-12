<script setup>
import {computed, ref} from "vue"
import Datepicker from 'vuejs3-datepicker'
import notify from "izitoast"
import "izitoast/dist/css/iziToast.min.css"
import LeftBackIcon from "@/assets/icons/LeftBackIcon.vue"
import CalendarCheckIcon from "@/assets/icons/CalendarCheckIcon.vue"
import LocationIcon from "@/assets/icons/LocationIcon.vue"
import BookmarkIcon from "@/assets/icons/BookmarkIcon.vue"
import SearchStadium from "@/components/SearchStadium.vue"
import PriceIcon from "@/assets/icons/PriceIcon.vue"
import CalendarIcon from "@/assets/icons/CalendarIcon.vue"
import UserIcon from "@/assets/icons/UserIcon.vue"
import {useModalStore} from "@/stores/modal.store"
import SuccessBookingStadiumModal from "@/components/Modals/SuccessBookingStadiumModal.vue"
import {useStadiumStore} from "@/stores/stadiums.store"
import router from "@/router";
import useMoneyFormatter from "../mixins/currencyFormatter";

let searchStadium = ref('')
const currentStep = ref(1)
const clientName = ref('')

const goBackToPreviousStep = () => {
  if (currentStep.value === 1){
    router.push({ path: '/' })
  }else {
    currentStep.value--;
  }
}
const selectedDate = ref(new Date())
const startTime = ref('12:00')
const matchTime = ref('1')

const selectedDateTime = (time) => {
  const date = new Date(selectedDate.value);
  const startTimeParts = time.split(":");
  date.setHours(parseInt(startTimeParts[0], 10));
  date.setMinutes(parseInt(startTimeParts[1], 10));

  const formatter = new Intl.DateTimeFormat("uz-UZ", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
  });
  return formatter.format(date);
};
const disabledDates = computed(() => {
  return {to: new Date(Date.now() - 24 * 60 * 1000)}
});

const showWarningToast = (text) => {
  notify.warning({
    message: text,
    messageSize: "20",
    position: "bottomRight",
    timeout: 5000,
  });
};
const validateStartTime = () => {
  const currentTime = new Date()
  const selectedStartTime = new Date(selectedDate.value)
  const startTimeParts = startTime.value.split(":")
  selectedStartTime.setHours(parseInt(startTimeParts[0], 10))
  selectedStartTime.setMinutes(parseInt(startTimeParts[1], 10))
  if (selectedStartTime < currentTime) {
    showWarningToast("Boshlanish vaqti joriy vaqtdan keyin bo'lishi mumkin emas.")
    return false
  }
  return true
};

const endTime = computed(() => {
  const startTimeParts = startTime.value.split(":");
  const startHour = parseInt(startTimeParts[0], 10);
  const startMinute = parseInt(startTimeParts[1], 10);
  let endHour = startHour;
  let endMinute = startMinute;
  const selectedMatchTime = matchTime.value;
  if (selectedMatchTime === '1') {
    endHour += 1;
  } else if (selectedMatchTime === '2') {
    endHour += 2;
  } else if (selectedMatchTime === '3') {
    endHour += 3;
  } else if (selectedMatchTime === '4') {
    endHour += 4;
  } else if (selectedMatchTime === 'vip') {
    // Handle VIP case separately
    endHour = 23;
    endMinute = 59;
  }
  // Check if the end time exceeds 23:59
  if (endHour >= 24) {
    // You can choose to display 24:00 instead of 00:00
    endHour -= 24;
  }
  return `${String(endHour).padStart(2, '0')}:${String(endMinute).padStart(2, '0')}`;
});

const validateCustomerName = () => {
  const name = clientName.value.trim();
  if (name === "") {
    showWarningToast("Iltimos, ismingizni kiriting!");
    return false;
  }
  const nameParts = name.split(" ");
  if (nameParts.length < 1 || nameParts.some(part => !/^[a-zA-Z]+$/.test(part))) {
    showWarningToast("Iltimos, ismingiz va familiyangizni faqat harflardan foydalanib to'liq kiriting!");
    return false;
  }
  return true;
};

const goToNextStep = () => {
  if (validateStartTime() && validateCustomerName()) {
    currentStep.value++;
  }
};
const goToThirdStep = () => {
  if (useStadiumStore().selectStadium.images === undefined) {
    showWarningToast('Iltimos, stadion tanlang')
  } else {
    currentStep.value++
  }
}
</script>
<template>
  <div class="max-w-3xl mx-2 my-8 md:mx-auto">
    <div class="flex justify-around mb-5">
      <button @click="goBackToPreviousStep">
        <LeftBackIcon class="text-teal-600 cursor-pointer w-7 h-7 hover:text-teal-500"/>
      </button>
      <h1 class="flex-grow text-lg font-bold text-center text-teal-600">Stadion band qilish</h1>
    </div>
    <div class="mx-4">
      <div class="overflow-hidden bg-gray-200 rounded-full">
        <div :style="'width: ' + (currentStep * 33.33) + '%' " class="h-2 transition-all bg-teal-500 rounded-full"></div>
      </div>
      <ol class="grid grid-cols-3 mt-4 text-sm font-medium text-gray-500">
        <li class="flex items-center justify-start text-teal-500 sm:gap-1.5" :class="{ 'text-teal-500': currentStep >= 1 }">
          <span class="hidden sm:inline"> Vaqt </span>
          <CalendarCheckIcon class="w-6 h-6 sm:h-5 sm:w-5" :class="{ 'text-teal-500': currentStep === 1 }"/>
        </li>
        <li class="flex items-center justify-center  sm:gap-1.5" :class="{ 'text-teal-500': currentStep >= 2 }">
          <span class="hidden sm:inline"> Stadion </span>
          <LocationIcon class="w-6 h-6 sm:h-5 sm:w-5" :class="{ 'text-teal-500': currentStep === 2 }"/>
        </li>
        <li class="flex items-center justify-end sm:gap-1.5" :class="{ 'text-teal-500': currentStep >= 3 }">
          <span class="hidden sm:inline"> Band qilish </span>
          <BookmarkIcon class="w-6 h-6 sm:h-5 sm:w-5" :class="{ 'text-teal-500': currentStep === 3 }"/>
        </li>
      </ol>
    </div>
    <!-- Step 1 -->
    <div v-if="currentStep === 1" class="flex flex-col w-full px-2 mt-3 md:mx-auto">
      <div class="flex flex-wrap justify-center mt-1">
        <div class="max-w-sm p-4">
          <datepicker
              language="ru"
              monday-first
              v-model="selectedDate"
              :disabled-dates="disabledDates"
              :inline="true"
          ></datepicker>
        </div>
        <div class="flex p-4">
          <!--          Start Time-->
          <div class="flex flex-col justify-center p-2">
            <label for="startTime" class="px-1 text-sm font-bold text-teal-600">Boshlanish vaqti:</label>
            <input
                type="time"
                id="startTime"
                v-model="startTime"
                class="border-teal-500 rounded-xl focus:ring-teal-500 focus:border-teal-500"/>
          </div>
          <!-- Match Time-->
          <div class="flex flex-col justify-center p-2">
            <label for="match-time" class="block text-sm font-bold text-teal-600">O'yin vaqti</label>
            <select
                id="match-time"
                v-model="matchTime"
                class="border border-teal-500 rounded-xl focus:ring-teal-500 focus:border-teal-500">
              <option selected value="1">1 soat</option>
              <option value="2">2 soat</option>
              <option value="3">3 soat</option>
              <option value="4">4 soat</option>
              <option value="vip">VIP</option>
            </select>
          </div>
        </div>
        <div class="w-full p-4">
          <div class="max-w-3xl md:mx-auto">
            <label for="client-name" class="text-sm font-bold text-teal-600">Band qiluvchi shaxs:</label>
            <input id="client-name" v-model="clientName" type="text" placeholder="Abdullayev Anvar"
                   class="block w-full mt-2 bg-white border border-gray-300 rounded-xl focus:ring-teal-500 focus:border-teal-500"/>
          </div>
        </div>
      </div>
      <div class="flex justify-end mt-5">
        <button @click="goToNextStep" class="px-4 py-2 font-medium text-white bg-teal-500 rounded-lg">
          Keyingi
        </button>
      </div>
    </div>
    <!-- Step 2 -->
    <div v-if="currentStep === 2" class="mt-4">
      <SearchStadium/>
      <div class="flex justify-between mx-4 mt-14">
        <button @click="goBackToPreviousStep" class="px-4 py-2 mt-4 font-medium text-white bg-gray-500 rounded-lg">Orqaga</button>
        <button @click="goToThirdStep" class="px-4 py-2 mt-4 font-medium text-white bg-teal-500 rounded-lg">Keyingi</button>
      </div>
    </div>
    <!--    Step 3-->
    <div class="max-w-3xl px-2 mt-6 md:mx-auto" v-if="currentStep === 3">
      <div class="relative flex flex-col w-full text-gray-700 bg-white border rounded-lg">
        <div class="md:h-80 h-60 relative bg-center bg-cover mx-3 mt-4 overflow-hidden text-white shadow-lg rounded-lg"
             :style="{ backgroundImage:
      `url(/images/${useStadiumStore().selectStadium.images[0]}.jpg)` }">
          <div class="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-tr from-transparent via-transparent to-black/60"></div>
        </div>
        <div class="p-3">
          <div class="flex items-center py-2">
            <LocationIcon class="w-6 h-6"/>
            <h1 class="px-1 text-sm font-medium">{{ useStadiumStore().selectStadium.title }}, {{ useStadiumStore().selectStadium.address }}</h1>
          </div>
          <div v-if="selectedDateTime(startTime)">
            <div class="flex min-[383px]:items-center py-2">
              <div class="w-6 h-6">
                <CalendarIcon class="w-6 h-6"/>
              </div>
              <h1 class="px-1 text-sm font-medium capitalize">
                {{ selectedDateTime(startTime) }} - {{ endTime }}
              </h1>
            </div>
          </div>
          <div class="flex items-center py-2">
            <PriceIcon class="w-6 h-6"/>
            <h1 class="px-1 text-sm font-medium">{{ useMoneyFormatter(useStadiumStore().selectStadium.price) }}</h1>
          </div>
          <div class="flex items-center py-2">
            <UserIcon class="w-6 h-6"/>
            <h1 class="px-1 text-sm font-medium">{{ clientName }}</h1>
          </div>
        </div>
        <div class="p-4">
          <button
              @click="useModalStore().openSuccessBookingStadiumModal()"
              class="block w-full select-none rounded-lg bg-teal-500 py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow transition-all hover:shadow-lg focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
          >
            Band qilish
          </button>
          <SuccessBookingStadiumModal/>
        </div>
      </div>
      <div class="flex justify-start mt-4">
        <button @click="goBackToPreviousStep" class="px-4 py-2 mt-4 font-medium text-white bg-gray-500 rounded-lg">Orqaga</button>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
