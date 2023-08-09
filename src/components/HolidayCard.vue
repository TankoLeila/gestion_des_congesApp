<template>
  <section class="bg-white rounded-xl p-5 shadow-lg shadow-blue-300 space-y-3 relative">
    <section class="flex justify-between text-gray-400">
      <span>{{ createdAt }}</span>
      <slot name="bulle-icon" />
    </section>
    <section class="text-blue-500 text-sm font-bold">
      {{ holiday.dateDebut }} - {{ holiday.dateFin }}
    </section>
    <div class="text-xs line-clamp-1 text-ellipsis">{{ JSON.parse(holiday.description).description }}</div>
    <div class="flex p-2 justify-between items-stretch">
      <span class="bg-blue-100 px-3 py-1 text-center text-blue-500 font-semibold rounded-lg">
        {{ holiday.type.toLowerCase() }}
      </span>
      <span
        :class="[
          'rounded-lg p-2 text-sm font-bold',
          {
            'bg-gray-100 text-gray-500':
              JSON.parse(holiday.description).status.toLowerCase() === 'pending',
            'bg-green-100 text-green-500':
              JSON.parse(holiday.description).status.toLowerCase() === 'approved',
            'bg-red-100 text-red-500':
              JSON.parse(holiday.description).status.toLowerCase() === 'rejected'
          }
        ]"
        >{{ JSON.parse(holiday.description).status.toLowerCase() }}</span
      >
    </div>
    <slot />
  </section>
</template>

<script>
import dayjs from '../utils/date'

export default {
  name: 'HolidayCard',
  props: {
    holiday: Object
  },
  computed: {
    createdAt() {
      const now = dayjs(JSON.parse(this.holiday.description).createdAt)
      return now.calendar(null, {
        sameDay: '[Today at] h:mm A',
        nextDay: '[Tomorrow at] h:mm A',
        nextWeek: 'dddd [at] h:mm A',
        lastDay: '[Yesterday at] h:mm A',
        lastWeek: '[Last] dddd [at] h:mm A',
        sameElse: 'DD/MM/YYYY'
      })
    }
  }
}
</script>
