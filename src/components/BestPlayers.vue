<script setup>
import { computed, ref } from "vue";
import PlaceIcon from "../assets/icons/PlaceIcon.vue";
import PlaceOneIcon from "../assets/icons/PlaceOneIcon.vue";
import PlaceTwoIcon from "../assets/icons/PlaceTwoIcon.vue";
import PlaceThreeIcon from "../assets/icons/PlaceThreeIcon.vue";
import { useViewPlayerStore } from '../stores/viewPlayer.store'
import ViewPlayer from "../views/ViewPlayer.vue";

const bestPlayers = ref([
    { name: 'arslon', goal: 10, assist: 5, age: 27, status: 'daily' },
    { name: 'abror', goal: 8, assist: 8, age: 20, status: 'weekly' },
    { name: 'akmal', goal: 7, assist: 5, age: 25, status: 'monthly' },
    { name: 'bobur', goal: 5, assist: 5, age: 27, status: 'daily' },
    { name: 'elyor', goal: 5, assist: 5, age: 30, status: 'daily' },
    { name: 'qodirbergan', goal: 4, assist: 5, age: 25, status: 'weekly' },
    { name: 'ibrohim', goal: 4, assist: 5, age: 4, status: 'monthly' },
    { name: 'jamshid', goal: 4, assist: 5, age: 28, status: 'monthly' },
    { name: 'otabek', goal: 6, assist: 5, age: 28, status: 'weekly' },
    { name: 'ulugbek', goal: 6, assist: 5, age: 27, status: 'weekly' },
    { name: 'sardor', goal: 3, assist: 4, age: 18, status: 'weekly' },
    { name: 'shaxzod', goal: 2, assist: 3, age: 22, status: 'monthly' },
    { name: 'umid2', goal: 2, assist: 3, age: 28, status: 'monthly' },
    { name: 'doniyor', goal: 1, assist: 1, age: 28, status: 'weekly' },
    { name: 'yunusbek', goal: 3, assist: 1, age: 23, status: 'daily' },
    { name: 'behruz', goal: 3, assist: 0, age: 29, status: 'weekly' },
    { name: 'bekzod', goal: 1, assist: 1, age: 21, status: 'daily' },
    { name: 'umid', goal: 1, assist: 3, age: 28, status: 'daily' },
    { name: 'umidbek', goal: 1, assist: 3, age: 28, status: 'daily' },
    { name: 'elyor junior', goal: 1, assist: 1, age: 16, status: 'monthly' }
])

const best = ref('daily')
const reportBestPlayer = computed(() => bestPlayers.value.filter(player => player.status == best.value))

</script>

<template>
    <section class="px-2 max-h-96 overflow-y-auto">
        <div class="sticky top-0 bg-gray-50 pb-4">
            <h2 class="text-3xl font-medium">Eng zo'r futbolchilar</h2>
            <ul class="flex mt-2 space-x-2">
                <li @click="useViewPlayerStore().clearPlayer()">
                    <button class="text-sm py-1 px-4 bg-gray-200 rounded font-semibold duration-200"
                        :class="{ 'bg-teal-500 text-white': best == 'daily' }" @click="best = 'daily'">Kunlik</button>
                </li>
                <li @click="useViewPlayerStore().clearPlayer()">
                    <button class="text-sm py-1 px-4 bg-gray-200 rounded font-semibold duration-200"
                        :class="{ 'bg-teal-500 text-white': best == 'weekly' }" @click="best = 'weekly'">Haftalik</button>
                </li>
                <li @click="useViewPlayerStore().clearPlayer()">
                    <button class="text-sm py-1 px-4 bg-gray-200 rounded font-semibold duration-200"
                        :class="{ 'bg-teal-500 text-white': best == 'monthly' }" @click="best = 'monthly'">Oylik</button>
                </li>
            </ul>
        </div>
        <ul class="space-y-2">
            <li v-for="(player, index) in reportBestPlayer" :key="index" @click="useViewPlayerStore().setPlayer(player)"
                class="flex items-center justify-between bg-white rounded-md p-2">
                <button class="flex items-center" popovertarget="player">
                    <PlaceOneIcon class="w-10 h-10" v-show="index == 0" />
                    <PlaceTwoIcon class="w-10 h-10" v-show="index == 1" />
                    <PlaceThreeIcon class="w-10 h-10" v-show="index == 2" />
                    <PlaceIcon class="w-10 h-10" v-show="index > 2" />
                    <div class="bg-top bg-cover w-16 h-16 bg-no-repeat rounded-full mx-2"
                        :style="{ backgroundImage: `url('${player.name}.jpg')` }"></div>
                    <div>
                        <h3 class="font-semibold capitalize">{{ player.name }}</h3>
                        <h4 class="text-sm capitalize">{{ player.name }}ov</h4>
                    </div>
                </button>
                <div class="text-right">
                    <p class="text-[#666]">Gool: <b class="text-black">{{ player.goal }}</b></p>
                    <p class="text-[#666]">Assist: <b class="text-black">{{ player.assist }}</b></p>
                </div>
            </li>
        </ul>

    </section>
    <span id="player" popover>
        <ViewPlayer />
    </span>
</template>
