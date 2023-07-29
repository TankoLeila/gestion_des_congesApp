import { defineStore } from 'pinia'

export const useHolidayStore = defineStore('holiday', {
  state: () => {
    return {
      error: {
        email: '',
        password: ''
      }
    }
  },
  actions: {
    async loginClient(client) {
      try {
        console.log(client)
      } catch (error) {
        this.error.email = error.message
        this.error.password = error.message
      }
    }
  }
})
