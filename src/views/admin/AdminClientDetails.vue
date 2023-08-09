<template>
  <section class="space-y-4 py-5 px-10">
    <div class="flex text-xs text-black font-extrabold gap-x-1">
      <RouterLink to="/admin/employees">
        <span class="cursor-pointer">Employees > details ></span>
      </RouterLink>
      <span class="text-gray-600">{{ email }}</span>
    </div>
    <h1
      class="font-thin text-xl text-zinc-700 py-2 border-[1px] border-b border-t border-gray-100 flex gap-x-2 flex"
    >
      <span>Employee </span>
      <span class="text-gray-900">- {{ email }}</span>
    </h1>
    <section class="py-5 grid grid-cols-5 items-end gap-4">
      <HolidayCard
        v-for="holiday in holidays"
        :key="holiday.id"
        :holiday="holiday"
        @mouseleave="currentHoverId = ''"
        @click.stop="goToDetailsOf(holiday.id)"
      >
        <template #bulle-icon>
          <IconBulleInfo
            v-if="JSON.parse(holiday.description).status === 'PENDING'"
            @mouseover="currentHoverId = holiday.id"
            class="cursor-pointer"
          />
        </template>
        <template #default>
          <HolidayCardValidation
            v-if="
              holiday.id === currentHoverId &&
              JSON.parse(holiday.description).status === 'PENDING'
            "
            @rejected="validatHoliday(holiday, 'REJECTED')"
            @approved="validatHoliday(holiday, 'APPROVED')"
            class="shadow-lg absolute -top-4 -right-[40%] z-20 bg-white"
          />
        </template>
      </HolidayCard>
    </section>
  </section>
</template>

<script>
import HolidayCard from "@/components/HolidayCard.vue";
import HolidayCardValidation from "@/components/HolidayCardValidation.vue";
import IconBulleInfo from "@/components/icons/IconBulleInfo.vue";
import { useHolidayStore } from "../../stores/holiday";

export default {
  name: "AdminEmployeeDetails",
  components: {
    HolidayCard,
    HolidayCardValidation,
    IconBulleInfo,
  },
  setup() {
    return {
      store: useHolidayStore(),
    };
  },
  data() {
    return { currentHoverId: "", holidays: [], email: localStorage.getItem("profil") };
  },
  async beforeMount() {
    await this.fetchAllHolidays();
  },
  methods: {
    async validatHoliday(holiday, status) {
      const dto = JSON.parse(holiday.description);
      const description = {
        status,
        description: dto.description,
        createdAt: dto.createdAt,
      };

      await this.store.validateHoliday(holiday.id, JSON.stringify(description));
      await this.fetchAllHolidays();
    },
    goToDetailsOf(id) {
      this.$router.push(`/admin/holidays/details/${id}`);
    },
    async fetchAllHolidays() {
      const _holidays = await this.store.getAllHolidays();
      this.holidays = _holidays.filter((holiday) => holiday.client.email === this.email);
    },
  },
};
</script>
