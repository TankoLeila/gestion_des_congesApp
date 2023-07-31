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
        password: ""
      },
      holidays: []
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
    async getHolidayById(holidayId) {
      let holiday = {};
      try {
        holiday = await CongeService.fetchHolidayById({id: holidayId});
      } catch (error) {
        this.setError(error)
      }
      return holiday;
    },
    async getAllHolidays() {
      try {
        this.holidays = await CongeService.getHolidays()
      }
      catch(error) {
        this.setError(error)
      }
    },
    async createHoliday(clientId, holiday) {
      try {
        await CongeService.createHoliday({
          id: clientId,
          requestBody: {
            dateDebut: holiday.startingDate,
            dateFin: holiday.endingDate,
            dateRetour: holiday.recomingDate,
            description: holiday.description,
            type: holiday.type,
            nbrJour: holiday.numberOfDate,
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
