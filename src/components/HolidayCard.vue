<template>
  <section class="bg-white rounded-xl p-5 shadow-lg shadow-blue-300 space-y-3 relative">
    <section class="flex justify-between text-gray-400">
      <span>{{ holiday.createdAt }}</span>
      <div class="flex items-center gap-x-4">
        <span>{{ holiday.time }}</span>
        <slot name="bulle-icon" />
      </div>
    </section>
    <section class="text-blue-500 text-xl font-bold ">
      {{ holiday.startingDate }} - {{ holiday.endingDate }}
    </section>
    <div class="text-xs text-ellipsis">{{ holiday.description }}</div>
    <div class="flex gap-x-4 items-center">
      <span class="bg-blue-300 p-1 text-center text-blue-600 font-semibold w-[100px] rounded-2xl">
        {{ holiday.type }}
      </span>
      <span>{{ holiday.status }}</span>
    </div>
    <section class="absolute top-0 right-0 z-10">
      <slot class="bulle-card" />
    </section>
  </section>
</template>

<script>
export default {
  name: 'HolidayCard',
  props: {
    holiday: Object
  }
}
</script>