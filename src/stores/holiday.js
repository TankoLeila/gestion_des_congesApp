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
      show: false
    }
  },
  actions: {
    async loginEmployee(client) {
      let id = ''
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
      } catch (error) {
        this.setError(error)
      }
    },
    async getAllEmployees() {
      let clients = []
      try {
        clients = await ClientService.getAllClient()
      } catch (error) {
        this.setError(error)
      }
      return clients
    },
    async getHolidayById(holidayId) {
      let holiday = {}
      try {
        holiday = await CongeService.fetchHolidayById({ id: holidayId })
      } catch (error) {
        this.setError(error)
      }
      return holiday
    },
    async getAllHolidays() {
      try {
        this.holidays = await CongeService.getHolidays()
      } catch (error) {
        this.setError(error)
      }
    },
    async createHoliday(holiday) {
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
    },
    setError(error) {
      this.error.email = error.message
      this.error.password = error.message
    }
  }
})
