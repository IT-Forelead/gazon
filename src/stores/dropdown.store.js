import {defineStore} from "pinia"

export const useDropDownStore = defineStore('dropdown', {
    state: () => ({
        selectStadiumsOption: '',
        isOpenSelectStadiums: false,
    }),
    actions: {
        setSelectStadiumsOption(data) {
            this.selectStadiumsOption = data
        },
        openSelectStadiums() {
            this.isOpenSelectStadiums = true
        },
        closeSelectStadiums() {
            this.isOpenSelectStadiums = false
        },
        clearStore() {
            this.selectStadiumsOption = ''
        }
    }
})