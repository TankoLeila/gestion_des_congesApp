<template>
  <section class="p-10 flex justify-center items-center" v-if="!employees.length">
    <div class="flex flex-col items-center justify-center gap-y-7 font-bold text-sm">
      <div class="flex items-center justify-center flex-col">
        <IconDiscover />
        <span>No employee available until now</span>
      </div>
      <div
        @click="toggleEmployeeCreationFormDisplay"
        class="flex items-center justify-center gap-x-2 text-indigo-500 cursor-pointer"
      >
        <span>Add new employee</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m6-6H6" />
        </svg>
      </div>
    </div>
  </section>
  <section v-else class="space-y-4 p-5">
    <div
      @click="toggleEmployeeCreationFormDisplay"
      class="cursor-pointer px-10 flex items-center gap-x-2 justify-end text-indigo-500 hover:bg-indigo-100 font-bold text-sm"
    >
      <span>New employee</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-6 h-6"
      >
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m6-6H6" />
      </svg>
    </div>
    <div class="text-gray-900 font-bold text-lg pt-5">Liste des employees</div>
    <section class="space-y-2">
      <div class="flex gap-x-4">
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
            />
          </svg>
        </span>
        <span>Email</span>
        <span>Password</span>
      </div>
      <section class="flex flex-wrap gap-3">
        <div
          class="cursor-pointer bg-zinc-100 flex flex-col gap-2 p-4 border hover:border-2 hover:shadow-inner rounded-md"
          v-for="employee in employees"
          :key="employee.id"
          @click="goToEmployeeDetailsPage(employee)"
        >
          <div class="text-gray-600">
            <span class="flex gap-x-0.5 items-center" 
              v-if="getNumberOfNotification(employee.id)"
            >
              <span class="w-2 h-2 bg-blue-500 rounded-full block"></span>
              <IconBellActivated class="rotate-45" />
            </span>
            <IconBellInactivated class="-rotate-12" v-else />
          </div>
          <span class="font-extrabold">{{ employee.email }}</span>
          <span>{{ employee.password }}</span>
        </div>
      </section>
    </section>
  </section>
  <section
    v-if="shouldDisplayEmployeeCreationForm"
    class="absolute inset-0 w-full h-full opacity-90 bg-gray-800"
  >
    <section class="relative flex justify-center items-center">
      <CreateEmployee
        @cancel="toggleEmployeeCreationFormDisplay"
        class="min-w-[400px] z-40 absolute -translate-x-1/2 translate-y-1/2 left-1/2 top-1/2"
        @fetchEmployeesList="getAllEmployees"
      />
    </section>
  </section>
</template>

<script>
import IconBellActivated from '@/components/icons/IconBellActivated.vue'
import IconBellInactivated from '@/components/icons/IconBellInactivated.vue'
import IconDiscover from '@/components/icons/IconDiscover.vue'
import { useHolidayStore } from '@/stores/holiday'
import CreateEmployee from '@/components/CreateEmployee.vue'

export default {
  name: 'AdminClientList',
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
      shouldDisplayEmployeeCreationForm: false
    }
  },
  methods: {
    async getAllEmployees() {
      this.isLoading = true
      this.shouldDisplayEmployeeCreationForm = false
      this.employees = await this.store.getAllEmployees()
      this.isLoading = false
    },
    async goToEmployeeDetailsPage(employee) {
      this.store.user.email = employee.email
      this.store.user.id = employee.id
      await this.$router.push(`/admin/employees/${employee.id}`)
    },
    toggleEmployeeCreationFormDisplay() {
      this.shouldDisplayEmployeeCreationForm = !this.shouldDisplayEmployeeCreationForm
    },
    getNumberOfNotification(clientId) {
      return this.store.holidays
        .filter((holiday) => holiday.client.id === clientId)
        .filter((holiday) => JSON.parse(holiday.description).status === 'PENDING')
        .length
    }
  },
  async beforeMount() {
    await this.getAllEmployees()
    await this.store.getAllHolidays()
  }
}
</script>
