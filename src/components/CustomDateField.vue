<template>
  <section class="space-y-2">
    <label class="text-xs font-medium" :for="label">{{ label }}</label>
    <div
      :class="[
        'rounded border border-gray-200 p-2 text-gray-500',
        errors.length ? 'error' : 'default'
      ]"
    >
      <input
        class="w-full outline-none placeholder:text-gray-300"
        type="date"
        :id="label"
        placeholder="YYYY-MM-DD"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
      />
    </div>
  </section>
</template>

<script>
export default {
  name: 'CustomDateField',
  props: ['label', 'modelValue', 'errors'],
  emits: ['update:modelValue']
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
