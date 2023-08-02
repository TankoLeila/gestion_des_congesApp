<template>
  <section class="text-black space-y-2 text-xs lg:mt-2 relative">
    <span>{{ label }}</span>
    <section
      :class="[
        'border rounded-md relative h-11 rounded border border-gray-200 p-2 text-gray-900 rounded border border-gray-200 p-2 text-gray-300',
        errors.length ? 'error' : 'default'
      ]"
    >
      <input
        type="text"
        class="px-2 placeholder:text-zinc-900 h-full w-full absolute top-0 left-0 outline-none rounded-md"
        placeholder="choose your type here"
        v-model="selectedOption"
        readonly="false"
      />
      <svg
        @click="showOptions = !showOptions"
        :class="[
          'absolute right-2 -translate-y-1/2 top-1/2 cursor-pointer duration-300 ease-in w-4 h-6',
          showOptions ? 'rotate-180' : 'rotate-0'
        ]"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
      >
        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
      </svg>
    </section>
    <section v-if="showOptions" class="p-2 border rounded-md absolute top-16 z-10 w-full bg-white">
      <div
        v-for="option in options"
        :key="option"
        :class="[
          'cursor-pointer hover:bg-indigo-100 p-2 rounded-md',
          {
            'bg-indigo-200': selectedOption === option
          }
        ]"
        @click="selectOption(option)"
      >
        {{ option }}
      </div>
    </section>
  </section>
</template>

<script>
export default {
  name: 'CustomSelectBox',
  props: ['modelValue', 'label', 'errors'],
  emits: ['update:modelValue'],
  data() {
    return {
      selectedOption: '',
      showOptions: false,
      options: ['ANNUEL', 'MALADIE', 'MATERNITE', 'PATERNITE', 'FORMATION', 'AUTRE']
    }
  },
  methods: {
    selectOption(option) {
      this.selectedOption = option
      this.$emit('update:modelValue', option)
      this.showOptions = false;
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
<!-- rounded border border-gray-200 p-2 text-gray-300 -->