<template>
  <section class="bg-white h-screen">
    <section class="m-10 lg:m-20 flex justify-between">
      <div class="font-bold text-xl lg:hidden">
        <h1>Holidays</h1>
      </div>
      <div class="flex hidden lg:block lg:flex">
        <a href="#" class="text-gray-600">Home</a>
        <IconHomeList />
        <p class="font-bold text-lg">Holiday History</p>
      </div>
      <button @click="store.show = true"
        class="bg-blue-400 text-white font-semibold rounded-md border-2 p-2 w-[200px] hidden lg:block">
        Create holiday
      </button>
      <IconAddList />
    </section>
    <section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:m-20 p-5">
      <router-link 
        :to="`/holidays/holiday/details/${holiday.id}`" 
        v-for="holiday in store.holidays" 
        :key="holiday.id" >
        <HolidayCard :holiday="holiday" />
      </router-link>
    </section>
  </section>
</template>

<script>
import IconHomeList from '../components/icons/IconHomeList.vue'
import IconAddList from '../components/icons/IconAddList.vue'
import HolidayCard from '../components/HolidayCard.vue'
import { useHolidayStore } from '../stores/holiday'

export default {
  name: 'HolidayList',
  components: {
    IconHomeList,
    IconAddList,
    HolidayCard
  },

  setup() {
    return { store: useHolidayStore() }
  },
  async beforeMount() {
    await this.store.getAllHolidays()
  },
}
</script>
