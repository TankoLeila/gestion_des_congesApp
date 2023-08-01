<template>
  <section class="bg-white h-full">
    <section class="flex flex-col items-center justify-between h-[500px] px-5">
      <div class="flex justify-left w-full">
        <h1 class="text-xl font-bold md:hidden">Holidays</h1>
      </div>

      <div class="flex flex-col items-center justify-center gap-y-4">
        <img src="../assets/NoHoliday.png" alt="" />
        <span class="font-semibold text-lg">No holiday has been created</span>
        <button   @click="store.show = true"
          class="bg-blue-500 w-[200px] rounded-lg text-white text-lg font-semibold hover:bg-white text-white hover:text-blue-500 py-2 px-4 border border-black"
        >
          Create Holiday
        </button>
      </div>
    </section>
  </section>
</template>

<script>
import { useHolidayStore } from '@/stores/holiday'
export default{
  name: 'NoHoliday',
  setup() {
    return {
      store: useHolidayStore()
    }
  }
}

</script>