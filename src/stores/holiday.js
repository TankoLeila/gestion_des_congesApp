import { defineStore } from 'pinia'
import { ClientService, CongeService } from '../services/backend/'

export const useHolidayStore = defineStore('holiday', {
  state: () => {
    return {
      error: {
        email: '',
        password: ''
      },
      user: {
        id: "",
        email: "",
      }
    }
  },
  actions: {
    async loginEmployee(client) {
      let id = ""
      try {
        id = await ClientService.loginaClient({
          requestBody: {
            email: client.email,
            password: client.password,
          }
        }) 
        Object.assign(this.user, {
          id,
          email: client.email
        })
      } catch (error) {
        this.setError(error)
      }
      return id
    },
    async createEmployee(client) {
      try {
        await ClientService.createClient({
          requestBody: {
            email: client.email,
            password: client.password
          }
        })
      }
      catch (error) {
        this.setError(error)
      }
    },
    async getAllEmployees() {
      let clients = []
      try {
        clients = await ClientService.getAllClient()
      }
      catch (error) {
        this.setError(error)
      }
      return clients;
    },
    setError(error) {
      this.error.email = error.message
      this.error.password = error.message
    }
  }
})
