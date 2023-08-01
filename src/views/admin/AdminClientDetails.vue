<template>
  <section class="space-y-4 py-5 px-10">
    <div class="flex text-xs text-black font-extrabold">
      Employees > details > {{ store.user.email }}
    </div>
    <h1 class="font-semibold text-xl text-zinc-700 py-2 border-b border-t border-black">
      Employee - {{ store.user.email }}
    </h1>
    <section class="py-5 grid grid-cols-5 items-center gap-4">
      <router-link :to="`/admin/holidays/details/${holiday.id}`" v-for="holiday in holidays" :key="holiday.id">
        <HolidayCard :holiday="holiday">
          <template #bulle-icon>
            <IconBulleInfo class="cursor-pointer" />
          </template>
          <template #bulle-card>
            <HolidayCardValidation />
          </template>
        </HolidayCard>
      </router-link>
    </section>
  </section>
</template>

<script>
import HolidayCard from "@/components/HolidayCard.vue"
import HolidayCardValidation from "@/components/HolidayCardValidation.vue"
import IconBulleInfo from "@/components/icons/IconBulleInfo.vue"
import { useHolidayStore } from "../../stores/holiday"

export default {
  name: "AdminEmployeeDetails",
  components: {
    HolidayCard,
    HolidayCardValidation,
    IconBulleInfo,
  },
  setup() {
    return {
      store: useHolidayStore()
    }
  },
  async beforeMount() {
    await this.store.getAllHolidays()
  },
  computed: {
    holidays() {
      return this.store.holidays.filter((holiday) => holiday.client.email === this.store.user.email)
    }
  }
}
</script>