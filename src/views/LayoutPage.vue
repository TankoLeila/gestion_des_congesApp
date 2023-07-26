<template>
  <section>
    <HeaderWrapper />
    <router-view></router-view>
  </section>
</template>

<script>
import HeaderWrapper from '../components/HeaderWrapper.vue';

export default {
  name: 'layout',
  components: {
    HeaderWrapper
  }
}
</script>