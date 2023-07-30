<template>
  <section class="md:flex lg:flex min-h-screen items-center justify-center">
    <section class="bg-white md:hidden lg:hidden">
      <div class="flex justify-center">
        <img src="../assets/HolidayTracker.png" alt="" class="h-[100px]" />
        <span class="text-3xl font-bold p-10 text-center"></span>
      </div>
    </section>
    <section
      class="flex flex-col gap-y-10 md:gap-y-2 lg:gap-y-2 md:items-center lg:items-center shadow-lg border h-[700px] md:h-[400px] lg:h-[400px] px-5 md:bg-white lg:bg-white md:w-[400px] md:p-5 lg:w-[400px] lg:p-5 md:flex md:rounded-2xl"
    >
      <div class="flex flex-col gap-y-2 p-5">
        <span class="text-2xl font-bold">Login</span>
        <span class="">Welcome and Identify you here!!</span>
      </div>
      <div class="space-y-12">
        <div class="bg-red-700 text-white p-4 rounded-lg" v-if="errorMessage">
          {{ errorMessage }}
        </div>
        <FormInput
          :errors="v$.email.$errors"
          v-model="email"
          label="Email"
          placeholder="Enter your email"
          type="email"
        />
        <FormInput
          v-model="password"
          type="password"
          placeholder="Enter your Password"
          label="Password"
          :errors="v$.password.$errors"
        />
        <div class="border-blue-200">
          <button
            @click="loginToApp"
            class="bg-blue-400 text-white font-bold rounded-md border-2 py-3 px-2 w-full shadow-lg shadow-blue-400"
          >
            LOGIN
          </button>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
import FormInput from '../components/FormInput.vue'
import { useVuelidate } from '@vuelidate/core'
import { required, helpers } from '@vuelidate/validators'
import { useHolidayStore } from '@/stores/holiday'

export default {
  name: 'LoginPage',
  components: {
    FormInput
  },
  setup() {
    return { 
      v$: useVuelidate(), 
      store: useHolidayStore() 
    }
  },
  data() {
    return {
      email: '',
      password: '',
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
    async loginToApp() {
      console.log(this.email, this.password)
      const isFormValid = await this.v$.$validate()
      if (isFormValid) {
        this.$router.push('/welcome')
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
