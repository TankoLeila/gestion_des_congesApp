<template>
  <section class="cursor-pointer bg-white rounded-md space-y-1 p-0.5">
    <div class="rounded-md px-4 py-1.5 flex gap-x-2 items-center text-red-500 hover:bg-red-200">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
        class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round"
          d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
      </svg>
      <span>rejected</span>
      <IconDeny />
    </div>
    <div class="rounded-md px-4 py-1.5 flex gap-x-2 items-center text-green-500 hover:bg-green-100">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
        class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round"
          d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
      </svg>
      <span>Approved</span>
      <IconApprove />
    </div>
  </section>
</template>

<script>
import IconApprove from "@/components/icons/IconApprove.vue"
import IconDeny from "@/components/icons/IconDeny.vue"

export default {
  name: "HolidayCardValidation",
  emits: ["approved", "rejected"],
  components: {
    IconApprove,
    IconDeny
  },
}
</script>