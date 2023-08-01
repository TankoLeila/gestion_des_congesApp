<template>
  <section class="relative z-10">
    <div class="fixed inset-0 bg-white lg:bg-gray-500 bg-opacity-75 transition-opacity"></div>
    <section class="fixed inset-0 z-10 overflow-y-auto">
      <section
        class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"
      >
        <section
          class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:w-full sm:max-w-lg"
        >
          <CreateHoliday class="border"/>
        </section>
      </section>
    </section>
  </section>
</template>

<script>
import CreateHoliday from './CreateHoliday.vue'
export default {
  name: 'CreateHolidayModal',
  components: {
    CreateHoliday
  },
}
</script>
