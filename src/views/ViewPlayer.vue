<script setup>
import { useRoute } from 'vue-router'
import { onMounted, ref } from 'vue';
import playerLists from '@/assets/playerLists.json'

const hero = ref()
const players = ref([])
const route = useRoute()

onMounted(() => {
    hero.value = playerLists.filter(player => player.id == route.params.id)[0]
    players.value = playerLists.filter(player => player.id != route.params.id)
    players.value.unshift(hero.value)
})

</script>

<template>
    <section>
        <div class="flex items-center pl-10">
            <div class="bg-top bg-cover w-20 h-20 mr-2 bg-no-repeat rounded-full"
                :style="{ backgroundImage: `url(/public/${hero?.firstName}.jpg)` }"></div>
            <span class="-space-y-1">
                <h2 class="capitalize font-semibold text-xl">{{ hero?.firstName }}</h2>
                <h4 class="capitalize">{{ hero?.lastName }}</h4>
                <h4 class="text-[12px] text-gray-400">{{ hero?.age }} yosh</h4>
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
        <ul class="flex items-center flex-wrap gap-1 justify-center">
            <!-- <li class="bg-top bg-cover w-[32%] h-40 xl:h-96 xl:w-[30%] bg-no-repeat cursor-pointer"
                :style="{ backgroundImage: `url(/${hero?.firstName}.jpg)` }">
            </li> -->
            <li v-for="(player, index) in players" :key="index"
                class="bg-top bg-cover w-[32%] h-40 xl:h-96 xl:w-[30%] bg-no-repeat cursor-pointer"
                :style="{ backgroundImage: `url(/${player.firstName}.jpg)` }">
            </li>
        </ul>


        <!-- <ul class="flex items-center flex-wrap gap-1">
            <li class="bg-top bg-cover w-[32%] h-40 xl:h-96 xl:w-[30%] bg-no-repeat cursor-pointer"
                :style="{ backgroundImage: `url('${playerInformation.name}.jpg')` }" @click="hero = playerInformation.name">
            </li>
            <li v-for="(photo, index) in photos" :key="index"
                class="bg-top bg-cover w-[32%] h-40 xl:h-96 xl:w-[30%] bg-no-repeat cursor-pointer"
                :style="{ backgroundImage: `url('${photo}.jpg')` }" @click="hero = photo">
            </li>
        </ul> -->
        <!-- <div class="absolute -bottom-72 left-0 bgcolor w-full mt-20 h-72 bg-no-repeat bg-center bg-contain" v-show="hero"
            :style="{ backgroundImage: `url('${hero?.firstName}.jpg')` }"></div> -->
    </section>
</template>
<style scoped>
.style-shadow {
    box-shadow: 0px -49px 36px -50px #18a9d1 inset;
}

.bgcolor {
    background-color: #33333329;
}
</style>
