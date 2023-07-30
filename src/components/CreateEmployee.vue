<template>
  <section class="bg-white flex flex-col divide-y-2 rounded-lg">
    <section class="p-4">
      <span class="text-xl font-medium text-gray-900">Add Employee</span>
      <span class="text-xs text-gray-700 font-bold">add new user in the system</span>
    </section>
    <section class="p-4">
      <span 
        class="text-red-500 font-bold text-sm"
         v-if="errorMessage">
         {{ errorMessage }}
      </span>
      <FormInput v-model="email" />
      <FormInput v-model="password" />
      <div class="flex justify-end py-7">
        <button 
          @click="performEmployeeCreation" 
          class="bg-blue-500 rounded-md p-2 text-white font-bold">
          Save
        </button>
      </div>
    </section>
  </section>
</template>

<script>
import FormInput from "@/components/FormInput.vue"
import { useVuelidate } from '@vuelidate/core'
import { required, helpers } from '@vuelidate/validators'
import { useHolidayStore } from '@/stores/holiday'

export default {
  name: "CreateEmployee",
  components: {
    FormInput
  },
  emits: ["fetchEmployeesList"],
  setup() {
    return {
      v$: useVuelidate(),
      store: useHolidayStore()
    }
  },
  data() {
    return {
      email: "",
      password: "",
      vuelidateExternalResults: {
        email: '',
        password: ''
      }
    }
  },
  validations() {
    return {
      email: { required: helpers.withMessage('This field cannot be empty', required) },
      password: { required: helpers.withMessage('This field cannot be empty', required) }
    }
  },
  methods: {
    validate() {
      Object.assign(this.vuelidateExternalResults, this.store.error)
    },
    async performEmployeeCreation() {
      const isFormValid = await this.v$.$validate()
      if (isFormValid) {
        await this.store.createEmployee({
          status: "member-without-rules",
          email: this.email,
          password: this.password
        })
        this.$emit("fetchEmployeesList")
      }
    }
  },
  computed: {
    errorMessage() {
      return this.v$.$errors.map((error) => error.$message)[0]
    }
  }
}
</script>