<template>
  <section class="cursor-pointer bg-white rounded-md space-y-1 p-0.5">
    <div
      @click.stop="$emit('rejected')"
      class="rounded-md px-4 py-1.5 flex gap-x-2 items-center text-red-500 hover:bg-red-200"
    >
      <span>rejected</span>
      <IconDeny />
    </div>
    <div
      @click.stop="$emit('approved')"
      class="rounded-md px-4 py-1.5 flex gap-x-2 items-center text-green-500 hover:bg-green-100"
    >
      <span>Approved</span>
      <IconApprove />
    </div>
  </section>
</template>

<script>
import IconApprove from '@/components/icons/IconApprove.vue'
import IconDeny from '@/components/icons/IconDeny.vue'

export default {
  name: 'HolidayCardValidation',
  emits: ['approved', 'rejected'],
  components: {
    IconApprove,
    IconDeny
  }
}
</script>
