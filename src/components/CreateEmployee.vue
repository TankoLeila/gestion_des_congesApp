<template>
  <section class="bg-white flex flex-col divide-y-2 rounded-lg">
    <section class="p-4 pb-2 flex flex-col gap-y-1">
      <span class="text-xl font-medium text-gray-900">Add Employee</span>
      <span class="text-xs text-gray-700 font-bold">add new user in the system</span>
    </section>
    <section class="p-4 space-y-2">
      <span class="text-red-500 font-bold text-sm" v-if="errorMessage">
        {{ errorMessage }}
      </span>
      <div class="space-y-5">
        <FormInput :errors="v$.email.$errors" v-model="email" label="Email" placeholder="Enter your email" type="email" />
        <FormInput v-model="password" type="password" placeholder="Enter your Password" label="Password"
          :errors="v$.password.$errors" />
      </div>
      <div class="flex justify-end py-7 gap-x-4">
        <button @click="$emit('cancel')" class="bg-gray-400 rounded-md p-2 text-white font-bold w-[90px]">
          Close
        </button>
        <button @click="performEmployeeCreation" class="bg-blue-500 rounded-md p-2 text-white font-bold w-[90px]">
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
  emits: ["fetchEmployeesList", 'cancel'],
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
    async performEmployeeCreation() {
      const isFormValid = await this.v$.$validate()
      if (isFormValid) {
        await this.store.createEmployee({
          email: this.email,
          password: this.password
        })
        if (this.store.error.email) {
          Object.assign(this.vuelidateExternalResults, this.store.error)
          return;
        }
        this.$emit("fetchEmployeesList")
      }
    }
  },
  watch: {
    email(newEmail) {
      if (newEmail && this.store.error.email) {
        Object.assign(this.store.error, { email: "", password: "" })
        Object.assign(this.vuelidateExternalResults, { email: "", password: "" })
      }
    },
    password(newPassword) {
      if (newPassword && this.store.error.password) {
        Object.assign(this.store.error, { email: "", password: "" })
        Object.assign(this.vuelidateExternalResults, { email: "", password: "" })
      }
    },
  },
  computed: {
    errorMessage() {
      return this.v$.$errors.map((error) => error.$message)[0]
    }
  }
}
</script>