<template>
 <router-view></router-view>
</template>

<script>
import { useHolidayStore } from './stores/holiday';

export default {
  name: "App",
  setup(){
    return {store: useHolidayStore()}
  },
  async beforeMount() {
    await this.store.getAllHolidays()
  }
}
</script>

