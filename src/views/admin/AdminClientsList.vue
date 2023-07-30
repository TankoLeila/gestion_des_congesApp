<template>
  <section class="p-10 flex justify-center items-center" v-if="!employees.length">
    <div class="flex flex-col items-center justify-center gap-y-7 font-bold text-sm">
      <div class="flex items-center justify-center flex-col">
        <IconDiscover />
        <span>No employee available until now</span>
      </div>
      <div @click="toggleEmployeeCreationFormDisplay"
        class="flex items-center justify-center gap-x-2 text-indigo-500 cursor-pointer">
        <span>Add new employee</span>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
          class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m6-6H6" />
        </svg>
      </div>
    </div>
  </section>
  <section v-else class="space-y-4">
    <div @click="toggleEmployeeCreationFormDisplay"
      class="flex items-center gap-x-2 justify-end text-indigo-500 font-bold text-sm">
      <span>New employee</span>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
        class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m6-6H6" />
      </svg>
    </div>
    <div class="text-gray-900 font-bold text-lg pt-5">Liste des employees</div>
    <section>
      <div>
        <span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
            class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
          </svg>
        </span>
        <span>Email</span>
        <span>Password</span>
      </div>
      <div v-for="employee in employees" :key="employee.id" @click="goToEmployeeDetailsPage(employee.id)">
        <div>
          <span class="flex gap-x-2 items-center" v-if="employee.hasSendNotification">
            <span class="w-2 h-2 bg-indigo-800 rounded-full block"></span>
            <IconBellActivated class="rotate-45" />
          </span>
          <IconBellInactivated v-else />
        </div>
        <span class="text-blue-500 font-extrabold">{{ employee.email }}</span>
        <span class="text-indigo-500 font-extralight">{{ employee.password }}</span>
      </div>
    </section>
  </section>
  <section v-if="shouldDisplayEmployeeCreationForm" class="absolute inset-0 w-full h-full opacity-90 bg-gray-800">
    <section class="relative flex justify-center items-center">
      <CreateEmployee @cancel="toggleEmployeeCreationFormDisplay"
        class="min-w-[400px] z-40 absolute -translate-x-1/2 translate-y-1/2 left-1/2 top-1/2"
        @fetchEmployeesList="[toggleEmployeeCreationFormDisplay, getAllEmployees]" />
    </section>
  </section>
</template>

<script>
import IconBellActivated from "@/components/icons/IconBellActivated.vue"
import IconBellInactivated from "@/components/icons/IconBellInactivated.vue"
import IconDiscover from "@/components/icons/IconDiscover.vue"
import { useHolidayStore } from "@/stores/holiday"
import CreateEmployee from "@/components/CreateEmployee.vue";

export default {
  name: "AdminClientList",
  components: {
    IconBellActivated,
    IconBellInactivated,
    CreateEmployee,
    IconDiscover
  },
  setup: () => ({
    store: useHolidayStore()
  }),
  data() {
    return {
      employees: [],
      isLoading: false,
      shouldDisplayEmployeeCreationForm: false,
    }
  },
  methods: {
    async getAllEmployees() {
      this.isLoading = true;
      this.employees = await this.store.getAllEmployees();
      this.isLoading = false;
    },
    async goToEmployeeDetailsPage(employeeId) {
      await this.$router.push(`/admin/employees/${employeeId}`)
    },
    toggleEmployeeCreationFormDisplay() {
      this.shouldDisplayEmployeeCreationForm = !this.shouldDisplayEmployeeCreationForm
    }
  },
  async beforeMount() {
    await this.getAllEmployees()
  }
}
</script>