<template>
  <section class="pb-10">
    <section class="border-b p-4 flex justify-between">
      <section class="flex flex-col gap-y-1">
        <span class="text-lg lg:text-2xl font-bold">Create holiday</span>
        <span>formulaire d'envoie d'une demande de conge</span>
      </section>
      <svg
        @click="$emit('close')"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-6 h-6 cursor-pointer"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M12 9.75L14.25 12m0 0l2.25 2.25M14.25 12l2.25-2.25M14.25 12L12 14.25m-2.58 4.92l-6.375-6.375a1.125 1.125 0 010-1.59L9.42 4.83c.211-.211.498-.33.796-.33H19.5a2.25 2.25 0 012.25 2.25v10.5a2.25 2.25 0 01-2.25 2.25h-9.284c-.298 0-.585-.119-.796-.33z"
        />
      </svg>
    </section>
    <div class="text-red-500 p-4 rounded-lg" v-if="errorMessage">
      {{ errorMessage }}
    </div>
    <section class="p-4 grid gap-3 grid-cols-2 lg:grid-cols-3 items-center">
      <CustomSelectBox
        label="Type"
        :errors="v$.holiday.type.$errors"
        v-model="holiday.type"
        class="col-span-2"
      />
      <CustomDateField
        label="Starting date"
        :errors="v$.holiday.dateDebut.$errors"
        v-model="holiday.dateDebut"
      />
      <CustomDateField
        label="Ending date"
        :errors="v$.holiday.dateFin.$errors"
        v-model="holiday.dateFin"
      />
      <CustomTextField
        label="Number of days"
        :errors="v$.holiday.nbrJour.$errors"
        v-model="holiday.nbrJour"
      />
      <CustomDateField
        label="Return date"
        :errors="v$.holiday.dateRetour.$errors"
        v-model="holiday.dateRetour"
      />

      <CustomTextareaField
        class="col-span-2 lg:col-span-3"
        label="Description"
        v-model="holiday.description.description"
      />
    </section>
    <section class="flex justify-center items-center pt-6">
      <button
        class="p-2 h-11 w-1/2 max-w-[300px] rounded-md bg-blue-500 text-white text-sm font-bold text-center"
        @click="createHoliday"
      >
        SUBMIT
      </button>
    </section>
  </section>
</template>

<script>
import { useHolidayStore } from "../stores/holiday";
import { useVuelidate } from "@vuelidate/core";
import { required, helpers } from "@vuelidate/validators";
import CustomSelectBox from "./CustomSelectBox.vue";
import CustomDateField from "./CustomDateField.vue";
import CustomTextField from "./CustomTextField.vue";
import CustomTextareaField from "./CustomTextareaField.vue";

export default {
  name: "CreateHoliday",
  components: {
    CustomSelectBox,
    CustomDateField,
    CustomTextField,
    CustomTextareaField,
  },
  emits: ['close'],
  setup() {
    return {
      v$: useVuelidate(),
      store: useHolidayStore(),
    };
  },
  data() {
    return {
      holiday: {
        type: "",
        dateDebut: "",
        dateFin: "",
        nbrJour: "",
        dateRetour: "",
        description: {
          description: "",
          status: "PENDING",
          createdAt: new Date().toISOString(),
        },
      },
      vuelidateExternalResults: {
        error: "",
      },
    };
  },
  validations() {
    return {
      holiday: {
        type: { required: helpers.withMessage("This field cannot be empty", required) },
        dateDebut: {
          required: helpers.withMessage("This field cannot be empty", required),
        },
        dateFin: {
          required: helpers.withMessage("This field cannot be empty", required),
        },
        nbrJour: {
          required: helpers.withMessage("This field cannot be empty", required),
        },
        dateRetour: {
          required: helpers.withMessage("This field cannot be empty", required),
        },
      },
    };
  },
  methods: {
    async createHoliday() {
      const isFormValid = await this.v$.$validate();
      if (isFormValid) {
        const id = localStorage.getItem("userId");
        if (id) {
          await this.store.createHoliday(this.holiday);
          this.store.show = false;
          this.$router.push("/holidays/list");
        }
        Object.assign(this.vuelidateExternalResults, this.store.error);
      }
    }
  },
  watch: {
    holiday(newValue) {
      if (newValue && this.store.error.type) {
        Object.assign(this.store.error, { error: "" });
        Object.assign(this.vuelidateExternalResults, { error: "" });
      }
    },
    deep: true,
  },
  computed: {
    errorMessage() {
      return this.v$.$errors.map((error) => error.$message)[0];
    },
  },
};
</script>
