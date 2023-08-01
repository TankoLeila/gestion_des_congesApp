<template>
  <section class="space-y-2">
    <label class="text-xs font-medium" :for="label">{{ label }}</label>
    <div class="rounded border border-gray-200 p-2 text-gray-300">
      <input
        class="w-full"
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
  props: ['label', 'modelValue'],
  emits: ['update:modelValue'],
}
</script>
