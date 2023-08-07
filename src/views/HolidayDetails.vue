<template>
  <section class="bg-gray-100 h-screen">
    <div class="flex justify-between m-10 md:hidden lg:hidden">
      <h1 class="text-xl font-bold">Details</h1>
      <IconHome />
    </div>
    <section class="lg:m-20 flex justify-between hidden md:block md:m-10 lg:block">
      <div class="flex">
        <a href="#" class="text-gray-600">Home</a>
        <IconArrow />
        <a href="#" class="text-gray-600">Holiday History</a>
        <IconArrow />
        <p class="font-bold text-lg">Holiday detail</p>
      </div>
      <div>status: {{ description.status }}</div>
    </section>
    <section class="m-10 lg:m-20 space-y-5">
      <div class="">
        <h1 class="text-xl font-bold text-center md:text-left lg:text-left">
          {{ holiday.dateDebut }} - {{ holiday.dateRetour }}
        </h1>
        <p class="text-gray-400 hidden md:block lg:block">
          Il vous reste {{ remainingDays }} jours(s)
        </p>
      </div>
      <div class="space-y-5">
        <div class="md:flex md:justify-between w-full lg:flex lg:justify-between space-y-5">
          <div class="flex flex-col">
            <span class="text-gray-400 text-xs">Type</span>
            <span class="font-semibold">{{ holiday.type }}</span>
          </div>
          <div class="flex justify-between items-center lg:w-[50%]">
            <div class="flex flex-col">
              <span class="text-gray-400 text-xs">Starts</span>
              <span class="font-semibold">{{ holiday.dateDebut }}</span>
            </div>
            <IconCalendar />
          </div>
        </div>
        <div class="md:flex md:justify-between lg:w-full lg:flex lg:justify-between space-y-5">
          <div class="flex flex-col">
            <span class="text-gray-400 text-xs">Return</span>
            <span class="font-semibold">{{ holiday.dateRetour }}</span>
          </div>
          <div class="flex justify-between items-center lg:w-[50%]">
            <div class="flex flex-col">
              <span class="text-gray-400 text-xs">Ends</span>
              <span class="font-semibold">{{ holiday.dateFin }}</span>
            </div>
            <IconCalendar />
          </div>
        </div>
        <div>
          <span class="text-gray-400 text-xs">Description</span>
          <p>{{ description.description }}</p>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
import IconArrow from '../components/icons/IconArrow.vue'
import IconHome from '../components/icons/IconHome.vue'
import IconCalendar from '../components/icons/IconCalendar.vue'
import { useHolidayStore } from '../stores/holiday'

export default {
  name: 'HolidayDetails',
  components: {
    IconArrow,
    IconHome,
    IconCalendar
  },
  setup() {
    return { store: useHolidayStore() }
  },
  data: () => ({
    holiday: {},
  }),
  computed: {
    remainingDays() {
      return this.getDays(
        new Date(this.holiday.dateFin).getTime() - new Date(this.holiday.dateDebut).getTime()
      )
    },
    description() {
      return this.holiday.description
        ? JSON.parse(this.holiday.description)
        : {
            description: '',
            status: ''
          }
    }
  },
  async beforeMount() {
    this.holiday = await this.store.getHolidayById(this.$route.params.id)
  },
  methods: {
    getDays(time) {
      return (60 * 360000 * 24) / time
    }
  }
}
</script>
