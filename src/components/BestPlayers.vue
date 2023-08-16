<script setup>
import { computed, ref } from "vue";
import PlaceIcon from "../assets/icons/PlaceIcon.vue";
import PlaceOneIcon from "../assets/icons/PlaceOneIcon.vue";
import PlaceTwoIcon from "../assets/icons/PlaceTwoIcon.vue";
import PlaceThreeIcon from "../assets/icons/PlaceThreeIcon.vue";
import { useViewPlayerStore } from '../stores/viewPlayer.store'
import ViewPlayer from "../views/ViewPlayer.vue";

const bestPlayers = ref([
    { name: 'arslon', goal: 10, assist: 5, status: 'daily' },
    { name: 'abror', goal: 8, assist: 8, status: 'weekly' },
    { name: 'akmal', goal: 7, assist: 5, status: 'monthly' },
    { name: 'bobur', goal: 5, assist: 5, status: 'daily' },
    { name: 'elyor', goal: 5, assist: 5, status: 'daily' },
    { name: 'qodirbergan', goal: 4, assist: 5, status: 'weekly' },
    { name: 'ibrohim', goal: 4, assist: 5, status: 'monthly' },
    { name: 'jamshid', goal: 4, assist: 5, status: 'monthly' },
    { name: 'otabek', goal: 6, assist: 5, status: 'weekly' },
    { name: 'ulugbek', goal: 6, assist: 5, status: 'weekly' },
    { name: 'sardor', goal: 3, assist: 4, status: 'weekly' },
    { name: 'shaxzod', goal: 2, assist: 3, status: 'monthly' },
    { name: 'umid2', goal: 2, assist: 3, status: 'monthly' },
    { name: 'doniyor', goal: 1, assist: 1, status: 'weekly' },
    { name: 'yunusbek', goal: 3, assist: 1, status: 'daily' },
    { name: 'behruz', goal: 3, assist: 0, status: 'weekly' },
    { name: 'bekzod', goal: 1, assist: 1, status: 'daily' },
    { name: 'umid', goal: 1, assist: 3, status: 'daily' },
    { name: 'umidbek', goal: 1, assist: 3, status: 'daily' },
    { name: 'elyor junior', goal: 1, assist: 1, status: 'monthly' }
])

const best = ref('daily')
const reportBestPlayer = computed(() => bestPlayers.value.filter(player => player.status == best.value))

</script>

<template>
    <section class="px-2">
        <h2 class="text-3xl font-medium">Eng zo'r futbolchilar</h2>
        <ul class="flex mt-2 mb-4 space-x-2">
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
        <ul class="space-y-2">
            <li v-for="(player, index) in reportBestPlayer" :key="index" @click="useViewPlayerStore().setPlayer(player)"
                class="flex items-center justify-between bg-white rounded-md p-2">
                <button class="flex items-center gap-x-2" popovertarget="player">
                    <PlaceOneIcon class="w-10 h-10" v-show="index == 0" />
                    <PlaceTwoIcon class="w-10 h-10" v-show="index == 1" />
                    <PlaceThreeIcon class="w-10 h-10" v-show="index == 2" />
                    <PlaceIcon class="w-10 h-10" v-show="index > 2" />
                    <div class="bg-top bg-cover w-16 h-16 bg-no-repeat rounded-full"
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
