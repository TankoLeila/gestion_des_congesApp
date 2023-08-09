<template>
  <section class="space-y-2">
    <label class="text-xs font-medium" :for="label">{{ label }}</label>
    <div class="rounded border border-gray-200 p-2 text-gray-900">
      <textarea
        class="resize-none w-full h-20 rounded-md outline-none"
        :id="label"
        placeholder="Please enter the description holiday..."
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
      ></textarea>
    </div>
  </section>
</template>

<script>
export default {
  name: 'CustomTextareaField',
  props: ['label', 'modelValue'],
  emits: ['update:modelValue']
}
</script>
