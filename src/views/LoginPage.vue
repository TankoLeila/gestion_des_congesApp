<template>
  <section class="md:flex lg:flex min-h-screen items-center justify-center">
    <section class="bg-white md:hidden lg:hidden">
      <div class="flex justify-center">
        <img src="../assets/HolidayTracker.png" alt="" class="h-[100px]" />
        <span class="text-3xl font-bold p-10 text-center"></span>
      </div>
    </section>

    <section
      class="flex flex-col gap-y-10 md:gap-y-2 lg:gap-y-2 md:items-center lg:items-center shadow-lg border h-[700px] md:h-[600px] lg:h-[600px] px-5 md:bg-white lg:bg-white md:w-[400px] md:p-5 lg:w-[400px] lg:p-5 md:flex md:rounded-2xl"
    >
      <div class="flex flex-col gap-y-2 p-5">
        <span class="text-2xl font-bold">Login</span>
        <span class="">Welcome and Identify you here!!</span>
      </div>
      <div class="space-y-12">
        <div class="text-red-500 p-4 rounded-lg" v-if="errorMessage">
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
          :type="passwordFieldType"
          placeholder="Enter your Password"
          label="Password"
          :errors="v$.password.$errors"
        >
          <div class="absolute right-4 top-4 cursor-pointer flex items-center justify-center" @click="passwordVisibility">
            <IconPasswordShow v-if="showPassword" />
            <IconPasswordClose v-else />
          </div>
        </FormInput>
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
import IconPasswordShow from '../components/icons/IconPasswordShow.vue'
import IconPasswordClose from '../components/icons/IconPasswordClose.vue'

export default {
  name: 'LoginPage',
  components: {
    FormInput,
    IconPasswordShow,
    IconPasswordClose
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
      showPassword: false,
      passwordFieldType: 'password',
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
    async loginToApp() {
      const isFormValid = await this.v$.$validate()
      if (isFormValid) {
        if (this.email === 'tanko.leila123@gmail.com' && this.password === 'leilatanko') {
          this.$router.push('/admin/employees')
          return
        }
        const id = await this.store.loginEmployee({
          email: this.email,
          password: this.password
        })
        if (id) {
          this.$router.push('/welcome')
          localStorage.setItem('userId', id)
        }
        Object.assign(this.vuelidateExternalResults, this.store.error)
      }
    },
    passwordVisibility() {
      this.showPassword = !this.showPassword
      this.passwordFieldType = this.passwordFieldType === 'password' ? 'text' : 'password'
    }
  },
  watch: {
    email(newEmail) {
      if (newEmail && this.store.error.email) {
        Object.assign(this.store.error, { email: '', password: '' })
        Object.assign(this.vuelidateExternalResults, { email: '', password: '' })
      }
    },
    password(newPassword) {
      if (newPassword && this.store.error.password) {
        Object.assign(this.store.error, { email: '', password: '' })
        Object.assign(this.vuelidateExternalResults, { email: '', password: '' })
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
