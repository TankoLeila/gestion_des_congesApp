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
        id: '',
        email: '',
        password: ''
      },
      holidays: [],
      show: false,
      isLoading:true
    }
  },
  actions: {
    async loginEmployee(client) {
      let id = ''
      this.isLoading=true
      try {
        id = await ClientService.loginaClient({
          requestBody: {
            email: client.email,
            password: client.password
          }
        })
        Object.assign(this.user, {
          id,
          email: client.email,
          password: client.password
        })
      } catch (error) {
        this.setError(error)
      }
      this.isLoading=false
      return id
    },
    async createEmployee(client) {
      this.isLoading=true
      try {
        await ClientService.createClient({
          requestBody: {
            email: client.email,
            password: client.password
          }
        })
      } catch (error) {
        this.setError(error)
      }
      this.isLoading=false
    },
    async getAllEmployees() {
      let clients = []
      this.isLoading=true
      try {
        clients = await ClientService.getAllClient()
      } catch (error) {
        this.setError(error)
      }
      this.isLoading=false
      return clients
    },
    async getHolidayById(holidayId) {
      let holiday = {}
      this.isLoading=true
      try {
        holiday = await CongeService.fetchHolidayById({ id: holidayId })
      } catch (error) {
        this.setError(error)
      }
      this.isLoading=false
      return holiday  
    },
    async getAllHolidays() {
      this.isLoading=true
      try {
        this.holidays = await CongeService.getHolidays()
      } catch (error) {
        this.setError(error)
      }
      this.isLoading=false
    },
    async createHoliday(holiday) {
      this.isLoading=true
      try {
        await CongeService.createHoliday({
          id: this.user.id,
          requestBody: {
            dateDebut: holiday.dateDebut,
            dateFin: holiday.dateFin,
            dateRetour: holiday.dateRetour,
            description: JSON.stringify(holiday.description),
            type: holiday.type,
            nbrJour: holiday.nbrJour,
            client: {
              email: this.user.email,
              id: this.user.id,
            }
          }
        })
      } catch (error) {
        this.setError(error)
      }
      this.isLoading=false
    },
    setError(error) {
      this.error.email = error.message
      this.error.password = error.message
    }
  }
})
