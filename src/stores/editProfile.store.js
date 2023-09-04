import { defineStore } from "pinia"

export const useEditProfile = defineStore('edit-profile', {
    state: () => ({
        editProfile: {}
    }),
    actions: {
        setEditProfile(val) {
            this.editProfile = val
        }
    }
})