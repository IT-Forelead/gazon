<script setup>
import { computed, ref } from 'vue';
import CloseIcon from '../assets/icons/CloseIcon.vue';
import { useViewPlayerStore } from '../stores/viewPlayer.store';

const playerInformation = computed(() => useViewPlayerStore().player)

const clearAll = () => {
    useViewPlayerStore().clearPlayer()
}

const photos = ref(['arslon', 'abror', 'akmal', 'bobur', 'elyor', 'qodirbergan', 'ibrohim', 'jamshid', 'otabek', 'ulugbek', 'sardor', 'shaxzod', 'umid2', 'doniyor', 'yunusbek', 'behruz', 'bekzod', 'umid', 'umidbek', 'elyor junior'])

</script>

<template>
    <section
        class="fixed left-0 right-0 top-0 bg-white py-5 px-10 border rounded z-10 max-h-[340px] overflow-y-auto style-shadow"
        v-show="useViewPlayerStore().player.name">
        <button class="absolute bg-[#16858D] rounded-full group right-10 top-6 hover:bg-red-500">
            <CloseIcon class="w-10 h-10 text-white font-bold group-hover:rotate-90 duration-300" @click="clearAll()" />
        </button>

        <div class="flex items-center">
            <div class="bg-top bg-cover w-20 h-20 mr-2 bg-no-repeat rounded-full"
                :style="{ backgroundImage: `url('${playerInformation.name}.jpg')` }"></div>
            <span class="-space-y-1">
                <h2 class="capitalize font-semibold text-xl">{{ playerInformation.name }}</h2>
                <h4>{{ playerInformation.name }}ov</h4>
                <h4 class="text-[12px] text-gray-400">{{ playerInformation.age }} yosh</h4>
            </span>
        </div>
        <ul class="flex my-4 items-center justify-around">
            <li>
                <h4 class="font-bold">1 000</h4>
                <span>videolar</span>
            </li>
            <li>
                <h4 class="font-bold">2 347</h4>
                <span>obunachi</span>
            </li>
            <li>
                <h4 class="font-bold">100</h4>
                <span>gollar</span>
            </li>
        </ul>
        <ul class="flex items-center flex-wrap gap-1">
            <li class="bg-top bg-cover w-[32%] h-40 xl:h-96 xl:w-[30%] bg-no-repeat"
                :style="{ backgroundImage: `url('${playerInformation.name}.jpg')` }">
            </li>
            <li v-for="(photo, index) in photos" :key="index"
                class="bg-top bg-cover w-[32%] h-40 xl:h-96 xl:w-[30%] bg-no-repeat"
                :style="{ backgroundImage: `url('${photo}.jpg')` }">
            </li>
        </ul>
    </section>
</template>
<style scoped>
.style-shadow {
    box-shadow: 0px -49px 36px -50px #18a9d1 inset;
}
</style>
