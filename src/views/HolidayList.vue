<template>
  <section class="bg-gray-100 h-screen">
    <section class="p-10 lg:px-20 flex justify-between">
      <div class="font-bold text-xl lg:hidden">
        <h1>Holidays</h1>
      </div>
      <div class="flex hidden items-center gap-2 lg:block lg:flex">
        <a href="#" class="text-gray-600">Home</a>
        <IconArrow />
        <p class="font-bold text-lg">Holiday History</p>
      </div>
      <button
        @click="store.show = true"
        class="bg-blue-400 text-white font-semibold rounded-md border-2 p-2 w-[200px] hidden lg:block"
      >
        Create holiday
      </button>
      <IconAddList />
    </section>
    <section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:mx-20 p-5">
      <router-link
        :to="`/holidays/holiday/details/${holiday.id}`"
        v-for="holiday in holidays"
        :key="holiday.id"
      >
        <HolidayCard :holiday="holiday" />
      </router-link>
    </section>
  </section>
</template>

<script>
import IconAddList from '../components/icons/IconAddList.vue'
import HolidayCard from '../components/HolidayCard.vue'
import { useHolidayStore } from '../stores/holiday'
import IconArrow from '../components/icons/IconArrow.vue'

export default {
  name: 'HolidayList',
  components: {
    IconAddList,
    HolidayCard,
    IconArrow
},

  setup() {
    return { store: useHolidayStore() }
  },
  data (){
      return{
        holidays:[],
        email: localStorage.getItem("profil")
      }
  },
  async beforeMount() {
    const _holidays = await this.store.getAllHolidays()
    this.holidays = _holidays.filter(
      (holiday) => holiday.client.email === this.email
    )
  },
}
</script>
