<template>
  <div class="space-y-2">
    <label class="font-bold">{{ label }}</label>
    <div class="flex flex-col relative h-14">
      <input
        :type="type"
        :placeholder="placeholder"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
        :class="[
          'outline-none rounded-lg px-12 text-[15px] h-full',
          errors.length ? 'error' : 'default'
        ]"
      />
      <component class="absolute left-3 bottom-3.5" :is="icons[label.toLowerCase()]" />
    </div>
  </div>
</template>

<script>
import IconWrapper from '@/components/icons/IconWrapper.vue'
import IconBlock from '@/components/icons/IconBlock.vue'

export default {
  name: 'FormInput',
  components: {
    IconWrapper,
    IconBlock
  },
  props: ['modelValue', 'type', 'placeholder', 'label', 'errors'],
  emits: ['update:modelValue'],
  data() {
    return {
      icons: {
        email: 'IconWrapper',
        password: 'IconBlock'
      }
    }
  }
}
</script>

<style scoped>
.error {
  @apply border border-red-500;
}

.default {
  @apply border border-gray-200 focus:border-blue-500 focus:shadow focus:shadow-blue-500;
}
</style>
