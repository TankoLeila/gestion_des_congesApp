<template>
  <section class="bg-white rounded-xl p-5 shadow-lg shadow-blue-300 space-y-3 relative">
    <section class="flex justify-between text-gray-400">
      <span>{{ getDate }}</span>
      <div class="flex items-center gap-x-4">
        <span>{{ getHour }}</span>
        <span class="bulle-info">
          <slot name="bulle-icon" />
        </span>
      </div>
    </section>
    <section class="text-blue-500 text-xl font-bold ">
      {{ holiday.dateDebut }} - {{ holiday.dateFin }}
    </section>
    <div class="text-xs text-ellipsis">{{ JSON.parse(holiday.description).description }}</div>
    <div class="flex gap-x-4 items-center">
      <span class="bg-blue-300 p-1 text-center text-blue-600 font-semibold w-[100px] rounded-2xl">
        {{ holiday.type.toLowerCase() }}
      </span>
      <span>{{ JSON.parse(holiday.description).status.toLowerCase() }}</span>
    </div>
    <section class="absolute top-0 right-0 z-10 bulle-card hidden">
      <slot />
    </section>
  </section>
</template>

<script>
export default {
  name: 'HolidayCard',
  props: {
    holiday: Object
  },
  methods: {
    extractDate() {
      const now = new Date(JSON.parse(this.holiday.description).createdAt)
      return {
        hour: now.getHours(),
        minute: now.getMinutes(),
        date: now.getDate(),
        month: now.getMonth()
      }
    }
  },
  computed: {
    getDate() {
      return this.extractDate().month + "/" + this.extractDate().date
    },
    getHour() {
      return this.extractDate().hour + "h : "+ this.extractDate().minute
    }
  }
}
</script>

<style scoped>
  .bulle-info:hover .bulle-card {
    @apply inline-flex
  }
</style>