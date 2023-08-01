<template>
  <section>
    <section class="flex flex-col pt-14 w-full gap-y-12 h-[700px]">
      <div class="flex flex-col items-center gap-y-2 px-6">
        <h1 class="font-bold text-center text-xl">Hello, welcome to HolidayTracker!!</h1>
        <span class="text-center"
          >You have the possibility to submit or have a look on the list of holidays</span
        >
      </div>

      <div
        class="flex flex-col items-center w-full gap-y-4 md:flex-row md:justify-center md:gap-x-5 px-6"
      >
        <div class="relative w-full md:w-[200px]">
          <button
            @click="store.show = true"
            class="bg-blue-500 shadow-md shadow-blue-400 text-white text-sm w-full p-3 rounded-lg font-semibold flex justify-start pl-12"
          >
            <span>Create new holiday</span>
          </button>
          <IconPlus />
        </div>

        <router-link to="/holidays/list">
          <div class="relative">
            <button
              class="bg-white w-[350px] md:w-[200px] text-blue-500 p-3 font-semibold flex justify-start pl-12 rounded-lg shadow-md shadow-blue-500"
            >
              <span class="font-bold text-sm">Your Holidays list</span>
            </button>
            <IconCalendar />
          </div>
        </router-link>
      </div>

      <div class="md:flex md:justify-center gap-y-4 pt-14">
        <IconDiscover />
      </div>
    </section>
  </section>
</template>

<script>
import IconDiscover from '../components/icons/IconDiscover.vue'
import IconPlus from '../components/icons/IconPlus.vue'
import IconCalendar from '../components/icons/IconCalendar.vue'
import { useHolidayStore } from '@/stores/holiday'

export default {
  name: 'WelcomePage',
  components: {
    IconDiscover,
    IconPlus,
    IconCalendar
  },
  setup() {
    return {
      store: useHolidayStore()
    }
  }
}
</script>
