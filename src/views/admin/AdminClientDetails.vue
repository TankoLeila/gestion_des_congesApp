<template>
  <section class="space-y-4 py-5 px-10">
    <div class="flex text-xs text-black font-extrabold">
      Employees > details > {{ holidays.length && holidays[0].client.email }}
    </div>
    <h1 class="font-semibold text-xl text-zinc-700 py-2 border-b border-t border-black">
      Employee - {{ holidays.length && holidays[0].client.email }}
    </h1>
    <section class="py-5 grid grid-cols-5 items-center gap-4">
      <HolidayCard v-for="holiday in holidays" 
        :key="holiday.id" 
        @click="goToHolidayDetailsPage(holiday.id)">
        <template #bulle-icon>
          <IconBulleInfo @mouseover="shouldDisplayValidationOptions = true" />
        </template>
        <template #bulle-card>
          <HolidayCardValidation @mouseleave="shouldDisplayValidationOptions = false" />
        </template>
      </HolidayCard>
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
  data() {
    return {
      shouldDisplayValidationOptions: false,
    }
  },
  computed: {
    holidays() {
      return this.store.holidays.filter((holiday) => holiday.client.id == this.$route.params.id)
    }
  }
}
</script>