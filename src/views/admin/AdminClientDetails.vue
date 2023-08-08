<template>
  <section class="space-y-4 py-5 px-10">
    <div class="flex text-xs text-black font-extrabold">Employees > details > {{ email }}</div>
    <h1 class="font-semibold text-xl text-zinc-700 py-2 border-b border-t border-black">
      Employee - {{ email }}
    </h1>
    <section class="py-5 grid grid-cols-5 items-center gap-4">
      <HolidayCard
        v-for="holiday in holidays"
        :key="holiday.id"
        :holiday="holiday"
        @mouseleave="currentHoverId = ''"
        @click.stop="goToDetailsOf(holiday.id)"
      >
        <template #bulle-icon>
          <IconBulleInfo @mouseover="currentHoverId = holiday.id" class="cursor-pointer" />
        </template>
        <template #default>
          <HolidayCardValidation
            v-if="
              holiday.id === currentHoverId && JSON.parse(holiday.description).status === 'PENDING'
            "
            @rejected="rejectHoliday(holiday)"
            @approved="approuveHoliday(holiday)"
            class="shadow-lg absolute -top-4 -right-[40%] z-20 bg-white"
          />
        </template>
      </HolidayCard>
    </section>
  </section>
</template>

<script>
import HolidayCard from '@/components/HolidayCard.vue'
import HolidayCardValidation from '@/components/HolidayCardValidation.vue'
import IconBulleInfo from '@/components/icons/IconBulleInfo.vue'
import { useHolidayStore } from '../../stores/holiday'

export default {
  name: 'AdminEmployeeDetails',
  components: {
    HolidayCard,
    HolidayCardValidation,
    IconBulleInfo
  },
  setup() {
    return {
      store: useHolidayStore()
    }
  },
  data() {
    return { currentHoverId: '', holidays: [], email: localStorage.getItem('profil') }
  },
  async beforeMount() {
    const _holidays = await this.store.getAllHolidays()
    this.holidays = _holidays.filter((holiday) => holiday.client.email === this.email)
  },
  methods: {
    async approuveHoliday(holiday) {
      const description = JSON.parse(holiday.description)
      console.log(console.log("dscp rcue", JSON.parse(holiday.description).status = 'ee'));

      description.status = 'APPROUVED'

      await this.store.validateHoliday(holiday.id, `${description}`)
    },
    async rejectHoliday(holiday) {
      const description = JSON.parse(holiday.description)
      description.status = 'REJECTED'

      await this.store.validateHoliday(holiday.id, `${description}`)
    },
    goToDetailsOf(id) {
      this.$router.push(`/admin/holidays/details/${id}`)
    }
  }
}
</script>
