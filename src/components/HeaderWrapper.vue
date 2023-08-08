<template>
  <section class="bg-white relative px-5 py-3 font-medium text-sm text-gray-600">
    <div class="flex justify-between">
      <div class="space-y-3">
        <img
          src="../assets/HolidayTracker.png"
          alt="logoApp"
          class="h-12 border-2 rounded-2xl"
        />
        <h1>{{ date }}</h1>
      </div>
      <div class="flex flex-col gap-y-3">
        <svg
          class="h-12 w-12"
          viewBox="0 0 31 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.5002 0.355347C6.99016 0.355347 0.0834961 7.26201 0.0834961 15.772C0.0834961 24.282 6.99016 31.1887 15.5002 31.1887C24.0102 31.1887 30.9168 24.282 30.9168 15.772C30.9168 7.26201 24.0102 0.355347 15.5002 0.355347ZM15.5002 4.98035C18.0593 4.98035 20.1252 7.04618 20.1252 9.60535C20.1252 12.1645 18.0593 14.2303 15.5002 14.2303C12.941 14.2303 10.8752 12.1645 10.8752 9.60535C10.8752 7.04618 12.941 4.98035 15.5002 4.98035ZM15.5002 26.872C11.646 26.872 8.23891 24.8987 6.25016 21.9078C6.29641 18.8399 12.4168 17.1595 15.5002 17.1595C18.5681 17.1595 24.7039 18.8399 24.7502 21.9078C22.7614 24.8987 19.3543 26.872 15.5002 26.872Z"
            fill="#999999"
          />
        </svg>
        <span>{{ profil }}</span>
      </div>
    </div>
    <CreateHolidayModal
      @close="store.show = false"
      v-if="store.show"
      class="absolute h-screen w-full"
    />
  </section>
</template>

<script>
import dayjs from "../utils/date";
import { useHolidayStore } from "../stores/holiday";
import CreateHolidayModal from "./CreateHolidayModal.vue";

export default {
  name: "HeaderWrapper",
  components: {
    CreateHolidayModal,
  },
  setup() {
    return {
      store: useHolidayStore(),
      date: dayjs().format("MMMM D, YYYY"),
    };
  },
  computed: {
    profil() {
      const email = localStorage.getItem("profil").split("");
      const starteIndex = email.findIndex((letter) => letter === "@");
      return email.slice(0, starteIndex).join("");
    },
  },
};
</script>
