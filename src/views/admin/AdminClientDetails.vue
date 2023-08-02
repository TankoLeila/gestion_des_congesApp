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
        <HolidayCard :holiday="holiday" @mouseleave="show = false">
          <template #bulle-icon>
            <IconBulleInfo @mouseover="show = true" class="cursor-pointer" />
          </template>
          <template #default>
            <HolidayCardValidation
              v-if="show"
              @rejected=""
              @approuved="" 
              class="shadow-lg absolute -top-4 -right-[40%] z-20 bg-white" />
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
  data(){
    return { show: false }
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