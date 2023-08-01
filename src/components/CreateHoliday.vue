<template>
  <section class="pb-10">
    <section class="flex flex-col border-b p-4 gap-y-1">
      <span class="text-lg lg:text-2xl font-bold">Create holiday</span>
      <span>formulaire d'envoie d'une demande de conge</span>
    </section>
    <section class="p-4 grid gap-3 grid-cols-2 lg:grid-cols-3 items-center">
      <CustomSelectBox label="Type" v-model="holiday.type" class="col-span-2" />
      <CustomDateField label="Starting date" v-model="holiday.dateDebut" />
      <CustomDateField label="Ending date" v-model="holiday.dateFin" />
      <CustomTextField label="Number of days" v-model="holiday.nbrJour" />
      <CustomDateField label="Return date" v-model="holiday.dateRetour" />
      <CustomTextareaField
        label="Description"
        v-model="holiday.description.description"
        class="col-span-2 lg:col-span-3"
      />
    </section>
    <section class="flex justify-center items-center pt-6">
      <button
        class="p-2 h-11 w-1/2 max-w-[300px] rounded-md bg-blue-500 text-white text-sm font-bold text-center"
        @click="createHoliday"
      >
        submit
      </button>
    </section>
  </section>
</template>

<script>
import { useHolidayStore } from '../stores/holiday'
import CustomSelectBox from './CustomSelectBox.vue'
import CustomDateField from './CustomDateField.vue'
import CustomTextField from './CustomTextField.vue'
import CustomTextareaField from './CustomTextareaField.vue'


export default {
  name: 'CreateHoliday',
  components: {
    CustomSelectBox,
    CustomDateField,
    CustomTextField,
    CustomTextareaField
  },
  setup() {
    return {
      store: useHolidayStore()
    }
  },
  data() {
    return {
      holiday: {
        type: '',
        dateDebut: '',
        dateFin: '',
        nbrJour: 0,
        dateRetour: '',
        description: {
          description: '',
          status: 'PENDING',
          createdAt: new Date().toISOString()
        }
      }
    }
  },
  methods: {
    async createHoliday() {
      await this.store.createHoliday(this.holiday)
      await this.store.getAllHolidays()
      this.store.show = false
      this.$router.push('/holidays/list')
    }
  }
}
</script>
