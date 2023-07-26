<template>
  <div class="bg-white rounded-xl p-5 shadow-lg shadow-blue-300 space-y-3">
      <div class="flex justify-between">
        <p class="text-gray-400">{{ holiday.createdAt }}</p>
        <span class="text-gray-400">{{ holiday.time }}</span>
      </div>
      <h1 class="text-blue-500 text-xl font-bold ">{{ holiday.startingDate }} - {{ holiday.endingDate }}</h1>
      <p class="text-xs">{{ holiday.description }}</p>
      <p class="bg-blue-300 p-1 text-center text-blue-600 font-semibold w-[100px] rounded-2xl">{{ holiday.type }}</p>
    </div>
</template>

<script>
export default {
  name: 'HolidayCard',
  props: {
    holiday: Object
  }
}
</script>