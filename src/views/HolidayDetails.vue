<template>
  <section class="bg-gray-100 h-screen">
    <div class="flex justify-between m-10 md:hidden lg:hidden">
      <h1 class="text-xl font-bold">Details</h1>
      <IconHome />
    </div>
    <section class="lg:mx-20 flex justify-between hidden md:block md:mx-10 lg:block">
      <div class="text-xs flex items-center gap-1 pt-8">
        <div @click="backToList" class="text-gray-600 flex items-center gap-1">
          <a href="#">Home</a>
          <IconArrow />
          <a href="#">Holiday History</a>
          <IconArrow />
        </div>
        <p class="font-bold text-gray-500">Holiday details</p>
      </div>
      <div class="py-10 flex items-center gap-x-4">
        status:
        <span
          :class="[
            'rounded py-1 px-2 text-xs font-semibold',
            {
              'bg-zinc-500 text-gray-300': description.status.toLowerCase() === 'pending',
              'bg-green-200 text-green-500':
                description.status.toLowerCase() === 'approved',
              'bg-red-200 text-red-600': description.status.toLowerCase() === 'rejected',
            },
          ]"
        >
          {{ description.status.toLowerCase() }}
        </span>
      </div>
    </section>
    <section class="mx-10 lg:mx-20 space-y-5">
      <div class="">
        <h1 class="text-xl font-bold text-center md:text-left lg:text-left">
          {{ startingDate }} - {{ returningDate }}
        </h1>
        <p class="text-gray-400 hidden md:block lg:block">
          End in {{ remainingDays }} day(s)
        </p>
      </div>
      <div class="space-y-5">
        <div
          class="md:flex md:justify-between w-full lg:flex lg:justify-between space-y-5"
        >
          <div class="flex flex-col">
            <span class="text-gray-400 text-xs">Type</span>
            <span class="font-semibold">{{ holiday.type }}</span>
          </div>
          <div class="flex justify-between items-center lg:w-[50%]">
            <div class="flex flex-col">
              <span class="text-gray-400 text-xs">Starts</span>
              <span class="font-semibold">{{ startingDate }}</span>
            </div>
            <IconCalendar />
          </div>
        </div>
        <div
          class="md:flex md:justify-between lg:w-full lg:flex lg:justify-between space-y-5"
        >
          <div class="flex flex-col">
            <span class="text-gray-400 text-xs">Return</span>
            <span class="font-semibold">{{ returningDate }}</span>
          </div>
          <div class="flex justify-between items-center lg:w-[50%]">
            <div class="flex flex-col">
              <span class="text-gray-400 text-xs">Ends</span>
              <span class="font-semibold">{{ endingDate }}</span>
            </div>
            <IconCalendar />
          </div>
        </div>
        <div>
          <span class="text-gray-400 text-xs">Description</span>
          <p>{{ description.description }}</p>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
import IconArrow from "../components/icons/IconArrow.vue";
import IconCalendar from "../components/icons/IconCalendar.vue";
import { useHolidayStore } from "../stores/holiday";

import dayjs from "../utils/date";

export default {
  name: "HolidayDetails",
  components: {
    IconArrow,
    IconCalendar,
  },
  setup() {
    return { store: useHolidayStore() };
  },
  data: () => ({
    holiday: {},
  }),
  computed: {
    remainingDays() {
      return dayjs(this.holiday.dateFin).diff(dayjs(this.holiday.dateDebut), 'days');
    },
    returningDate() {
      return dayjs(this.holiday.dateRetour).format("MMM D, YYYY");
    },
    startingDate() {
      return dayjs(this.holiday.dateDebut).format("MMM D, YYYY");
    },
    endingDate() {
      return dayjs(this.holiday.dateFin).format("MMM D, YYYY");
    },
    description() {
      return this.holiday.description
        ? JSON.parse(this.holiday.description)
        : {
            description: "",
            status: "",
          };
    },
  },
  async beforeMount() {
    this.holiday = await this.store.getHolidayById(this.$route.params.id);
  },
  methods: {
    backToList() {
      this.$router.push("/holidays/list");
    },
  },
};
</script>
