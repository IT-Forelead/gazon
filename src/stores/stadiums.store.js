import {defineStore} from "pinia"

export const useStadiumStore = defineStore('stadium', {
    state: () => ({
        selectStadium: {},
    }),
    actions: {
        setSelectStadium(data) {
            this.selectStadium = data
        },
    }
})