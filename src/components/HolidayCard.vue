<template>
  <section class="bg-white rounded-xl p-5 shadow-lg shadow-blue-300 space-y-3 relative">
    <section class="flex justify-between text-gray-400">
      <div class="flex items-center gap-x-4">
        <span>{{ getDate }}</span>
        <span>{{ getHour }}</span>
      </div>
      <slot name="bulle-icon" />
    </section>
    <section class="text-blue-500 text-sm font-bold">
      {{ holiday.dateDebut }} - {{ holiday.dateFin }}
    </section>
    <div class="text-xs text-ellipsis">{{ JSON.parse(holiday.description).description }}</div>
    <div class="flex p-2 justify-between items-center">
      <span class="bg-blue-300 px-3 py-1 text-center text-blue-600 font-semibold rounded-2xl">
        {{ holiday.type.toLowerCase() }}
      </span>
      <span :class="[
        'rounded-lg p-2 text-sm font-bold',
        {
          'bg-gray-200 text-gray-500': JSON.parse(holiday.description).status.toLowerCase() === 'pending',
          'bg-green-200 text-green-500': JSON.parse(holiday.description).status.toLowerCase() === 'approuve',
          'bg-red-200 text-red-500': JSON.parse(holiday.description).status.toLowerCase() === 'rejected',
        }
      ]">{{ JSON.parse(holiday.description).status.toLowerCase() }}</span>
    </div>
    <slot />
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