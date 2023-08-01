<template>
  <section class="min-h-screen w-full relative">
    <BusyIndicator class="absolute top-[60%] left-[90%]" v-if="store.isLoading" />
    <router-view></router-view>
  </section>
</template>

<script>
import BusyIndicator from './components/BusyIndicator.vue'
import { useHolidayStore } from './stores/holiday'

export default {
  name: 'App',
  components: {
    BusyIndicator
  },
  setup() {
    return {
      store: useHolidayStore()
    }
  }
}
</script>
