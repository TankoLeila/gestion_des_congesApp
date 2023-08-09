<template>
  <section class="space-y-2">
    <label class="text-xs font-medium" :for="label">{{ label }}</label>
    <div
      :class="[
        'rounded border border-gray-200 p-2 text-gray-900 h-10',
        errors.length ? 'error' : 'default'
      ]"
    >
      <input
        class="w-full outline-none"
        type="text"
        placeholder="Ex: 2"
        :id="label"
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
  @apply border-red-500;
}

.default {
  @apply border-gray-200 focus:border-blue-500 focus:shadow focus:shadow-blue-500;
}
</style>
