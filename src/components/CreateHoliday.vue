<template>
  <section class="w-full md:flex flex-col md:items-center md:justify-center bg-white h-screen z-20">
    <section class="border-2 bg-white md:hidden">
      <div class="flex justify-between">
        <div class="p-3">
          <img
            src="/Illustrations/HolidayTracker.png"
            alt="logoApp"
            class="h-[70px] border-2 rounded-2xl"
          />
          <h1 class="font-semibold text-xs md:text-base text-gray-400">Monday January 10, 2022</h1>
        </div>

        <div>
          <svg
            width="31"
            height="32"
            viewBox="0 0 31 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="h-[100px] w-[60%]"
          >
            <path
              d="M15.5002 0.355347C6.99016 0.355347 0.0834961 7.26201 0.0834961 15.772C0.0834961 24.282 6.99016 31.1887 15.5002 31.1887C24.0102 31.1887 30.9168 24.282 30.9168 15.772C30.9168 7.26201 24.0102 0.355347 15.5002 0.355347ZM15.5002 4.98035C18.0593 4.98035 20.1252 7.04618 20.1252 9.60535C20.1252 12.1645 18.0593 14.2303 15.5002 14.2303C12.941 14.2303 10.8752 12.1645 10.8752 9.60535C10.8752 7.04618 12.941 4.98035 15.5002 4.98035ZM15.5002 26.872C11.646 26.872 8.23891 24.8987 6.25016 21.9078C6.29641 18.8399 12.4168 17.1595 15.5002 17.1595C18.5681 17.1595 24.7039 18.8399 24.7502 21.9078C22.7614 24.8987 19.3543 26.872 15.5002 26.872Z"
              fill="#999999"
            />
          </svg>
        </div>
      </div>
    </section>

    <section
      class="flex flex-col bg-gray-100 md:m-10 md:bg-white p-4 md:flex justify-center rounded-xl md:h-[700px] md:w-1/2 md:p-5 md:justify-center w-full gap-y-10 md:gap-y-10"
    >
      <div class="flex flex-col items-center p-5">
        <h1 class="text-xl font-bold">Create holiday</h1>
        <span>Lorem ipsum dolor sit amet consectetur.</span>
      </div>

      <div class="flex flex-col gap-y-5 md:gap-y-2">
        <div class="flex flex-col gap-y-5">
          <label class="font-bold block">Type</label>

          <select
            v-model="holiday.type"
            class="w-full md:w-full p-3 border border-gray-400 bg-gray-200 rounded-md shadow-sm"
          >
            <option disabled>Choose your holiday's Type</option>
            <option v-for="type in types" :key="type">{{ type }}</option>
          </select>
        </div>

        <div class="flex justify-between">
          <div class="flex flex-col gap-y-5">
            <label class="font-bold block">Starting date</label>

            <input
              class="appearance-none border border-gray-400 bg-gray-200 rounded md:w-[270px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="date"
              type="date"
              placeholder="YYYY-MM-DD"
              v-model="holiday.dateDebut"
            />
          </div>

          <div class="flex flex-col gap-y-5">
            <label class="block text-sm font-bold">Ending date</label>
            <input
              class="appearance-none border border-gray-400 bg-gray-200 rounded md:w-[270px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="date"
              type="date"
              placeholder="YYYY-MM-DD"
              v-model="holiday.dateFin"
            />
          </div>
        </div>

        <div class="flex justify-between">
          <div class="flex flex-col gap-y-5">
            <label class="block font-bold">Number of days</label>
            <input
              type="number"
              placeholder="days?"
              class="p-2 border border-gray-400 rounded-lg md:w-[270px] bg-gray-200"
              v-model="holiday.nbrJour"
            />
          </div>

          <div class="flex flex-col gap-y-5">
            <label class="block text-sm font-bold mb-2">Return date</label>
            <input
              class="border border-gray-400 rounded md:w-[270px] p-2 text-gray-700 bg-gray-200 leading-tight focus:outline-none focus:shadow-outline"
              id="date"
              type="date"
              placeholder="YYYY-MM-DD"
              v-model="holiday.dateRetour"
            />
          </div>
        </div>

        <div class="flex flex-col gap-y-5">
          <label class="block text-sm font-bold mb-2">Description</label>
          <textarea
            v-model="holiday.description.description"
            class="border border-gray-400 rounded-md p-2 w-full h-32 bg-gray-200"
            placeholder="Please enter the description holiday..."
          ></textarea>
        </div>

        <div class="flex justify-center m-5">
          <button
            @click="createHoliday"
            class="rounded-md bg-blue-500 p-2 w-[300px] text-white font-bold shadow-lg shadow-blue-400"
          >
            SUBMIT
          </button>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
import { useHolidayStore } from '../stores/holiday'
export default {
  name: 'CreateHoliday',
  setup() {
    return {
      store: useHolidayStore()
    }
  },
  data() {
    return {
      types: ['ANNUEL', 'MALADIE', 'MATERNITE', 'PATERNITE', 'FORMATION', 'AUTRE'],
      holiday: {
        type: '',
        dateDebut: '',
        dateFin: '',
        nbrJour: 0,
        dateRetour: '',
        description: {
          description: '',
          status: 'PENDING',
          createdAt: new Date().toISOString()
        }
      }
    }
  },
  methods: {
    async createHoliday() {
      await this.store.createHoliday(this.holiday)
      await this.store.getAllHolidays()
      this.store.show = false
      this.$router.push('/holiday-list')
    }
  }
}
</script>
