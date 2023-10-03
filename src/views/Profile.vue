<script setup>
import CupIcon from "../assets/icons/CupIcon.vue";
import BallIcon from "../assets/icons/BallIcon.vue";
import FootIcon from "../assets/icons/FootIcon.vue";
import ShoesIcon from "../assets/icons/ShoesIcon.vue";
import ShapeIcon from "../assets/icons/ShapeIcon.vue";
import CloseIcon from "../assets/icons/CloseIcon.vue";
import SearchIcon from "../assets/icons/SearchIcon.vue";
import LightingIcon from "../assets/icons/LightingIcon.vue";
import playersListData from "@/assets/data/playerLists.json";
import { useEditProfile } from "../stores/editProfile.store";
import { computed, onBeforeUnmount, onMounted, ref } from "vue";

const player = ref({});
onMounted(() => {
  const randomNumber = Math.floor(Math.random() * 18 + 1);
  player.value = playersListData[randomNumber];
  useEditProfile().setEditProfile(player.value);
});

const search = ref("");
const open = ref(false);
const inputRef = ref(null);
const closePlayerList = (event) => {
  if (inputRef.value && !inputRef.value.contains(event.target)) {
    open.value = false;
  }
};

onMounted(() => {
  document.addEventListener("click", closePlayerList);
});

onBeforeUnmount(() => {
  document.removeEventListener("click", closePlayerList);
});

const team = ref([]);
const playersList = ref([]);

playersList.value = playersListData;
const addPlayer = (id) => {
  search.value = "";
  team.value.push(playersList.value.filter((player) => player.id == id)[0]);
  playersList.value = playersList.value.filter((player) => player.id != id);
};

const searchPlayer = computed(() =>
  playersList.value.filter((player) =>
    player.firstName.toLowerCase().includes(search.value.toLowerCase())
  )
);

const isDelete = ref(false);
const deletePlayer = (index) => {
  playersList.value.push(team.value[index]);
  team.value.splice(index, 1);
};
</script>

<template>
  <section>
    <ShapeIcon class="md:-mt-[7%]" />
    <div
      class="bg-top bg-cover w-32 h-32 md:w-40 md:h-40 xl:w-60 xl:h-60 bg-no-repeat rounded-full mx-auto md:-mt-[18%] -mt-[15%] shadow-2xl"
      :style="{
        backgroundImage: `url('/images/players/${player.firstName}.jpg')`,
      }"
    ></div>
    <h2 class="text-2xl font-semibold text-center capitalize">
      {{ `${player.firstName} ${player.lastName}` }}
    </h2>
    <router-link
      to="/edit-profile"
      class="mx-auto text-center my-3 block py-2 w-32 md:w-60 rounded-3xl bg-teal-500 text-white font-semibold"
      >Edit</router-link
    >
    <hr />
    <div class="px-2">
      <div class="flex justify-between items-center my-4">
        <h4 class="font-semibold">Statistika</h4>
        <select
          class="py-[1px] px-2 text-teal-600 rounded border-teal-500 shadow-[0_0_1em_0_rgba(0,128,128,0.2)] focus:border-teal-400"
        >
          <option value="0">Daily</option>
          <option value="1">Weekly</option>
          <option value="2">Monthly</option>
        </select>
      </div>
      <div
        class="grid grid-cols-2 max-[375px]:grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-5"
      >
        <div class="flex items-center bg-white p-2 md:px-4 rounded shadow">
          <FootIcon
            :class="[
              'w-7 h-7 -rotate-[30deg]',
              player.foot == 'Chap' ? 'text-teal-400' : 'text-zinc-400',
            ]"
          />
          <FootIcon
            :class="[
              '-ml-4 mr-3 w-7 h-7 rotate-right',
              player.foot != 'Chap' ? 'text-teal-400' : 'text-zinc-400',
            ]"
          />
          <div>
            <h4 class="font-bold">{{ player.foot }}</h4>
            <p class="text-[#666]">oyoq</p>
          </div>
        </div>
        <div
          class="flex items-center gap-x-5 bg-white p-2 md:px-4 rounded shadow"
        >
          <ShoesIcon class="w-8 h-8 text-teal-400" />
          <div>
            <h4 class="font-bold">{{ `${player.wins * 3}` }}</h4>
            <p class="text-[#666]">Points</p>
          </div>
        </div>
        <div
          class="flex items-center gap-x-5 bg-white p-2 md:px-4 rounded shadow"
        >
          <BallIcon class="w-8 h-8 text-teal-400" />
          <div>
            <h4 class="font-bold">{{ `${player.wins + player.loses}` }}</h4>
            <p class="text-[#666] whitespace-nowrap">Total match</p>
          </div>
        </div>
        <div
          class="flex items-center gap-x-5 bg-white p-2 md:px-4 rounded shadow"
        >
          <CupIcon class="w-8 h-8 text-yellow-400" />
          <div>
            <h4 class="font-bold">{{ player.loses }}</h4>
            <p class="text-[#666]">Wins</p>
          </div>
        </div>
        <div
          class="flex items-center gap-x-5 bg-white p-2 md:px-4 rounded shadow"
        >
          <div class="relative">
            <CupIcon class="w-8 h-8 text-red-500" />
            <LightingIcon class="absolute top-0 text-white right-2" />
          </div>
          <div>
            <h4 class="font-bold text-xl">40</h4>
            <p class="text-[#666]">Loses</p>
          </div>
        </div>
      </div>
      <div class="md:flex items-start gap-x-10 my-2 md:w-full relative">
        <div class="md:w-96">
          <label
            ref="inputRef"
            @click="open = true"
            class="mt-2 flex items-center justify-between border border-teal-500 px-3 rounded md:w-96"
          >
            <SearchIcon class="text-teal-600 w-6 h-6 cursor-pointer" />
            <input
              type="search"
              v-model="search"
              placeholder="Jamoa qo'shish"
              class="border-0 focus:ring-0 w-full"
            />
          </label>
          <ul
            class="max-h-52 overflow-y-scroll mt-2 pr-2 absolute md:static w-full pb-16 md:pb-0 top-10 md:shadow-none bg-white shadow-[0_0_1em_0_rgba(0,128,128,0.2)] z-10"
            v-show="open"
          >
            <li
              @click="addPlayer(player.id)"
              class="py-1 flex justify-between border-b cursor-pointer duration-300 hover:-translate-y-0.5 hover:shadow bg-white items-center"
              v-for="player in searchPlayer"
              :key="player.id"
            >
              <div class="flex gap-x-2 items-center text-sm">
                <div
                  class="bg-top bg-cover w-16 h-16 bg-no-repeat rounded-full mx-2"
                  :style="{
                    backgroundImage: `url('/images/players/${player.firstName}.jpg')`,
                  }"
                ></div>
                <div>
                  <p class="text-[#666]">
                    Gool: <b class="text-black">{{ player.goal }}</b>
                  </p>
                  <p class="text-[#666]">
                    Assist: <b class="text-black">{{ player.assist }}</b>
                  </p>
                </div>
              </div>
              <div class="text-right">
                <h3 class="font-semibold capitalize">{{ player.firstName }}</h3>
                <h4 class="text-sm capitalize">{{ player.lastName }}</h4>
              </div>
            </li>
          </ul>
        </div>
        <ul
          v-show="team.length"
          class="border md:flex flex-wrap shadow-[0_0_1em_0_rgba(0,128,128,0.9)] mt-2 p-2 rounded-lg gap-y-2 grid grid-cols-6 max-[526px]:grid-cols-4 max-[380px]:grid-cols-3"
        >
          <li v-for="(member, index) in team" :key="member.id">
            <div
              class="bg-top bg-cover w-16 h-16 cursor-pointer bg-no-repeat rounded-full mx-2 relative after:absolute after:content-[''] after:w-16 after:h-16 hover:after:bg-[#56dfe94f] hover:after:backdrop-blur-sm after:transition-all after:rounded-full group"
              :style="{
                backgroundImage: `url('/images/players/${member.firstName}.jpg')`,
              }"
            >
              <CloseIcon
                class="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 h-6 w-0 z-10 text-white font-extrabold duration-300 group-hover:w-6"
                @click="deletePlayer(index)"
              />
            </div>
            <small class="block text-center capitalize w-20">
              {{ member.firstName }}
            </small>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>