<template>
  <section class="bg-gray-100 h-screen">
    <!-- detail holiday section -->
    <div class="flex justify-between m-10 md:hidden lg:hidden">
      <h1 class="text-xl font-bold">Details</h1>
      <IconHome />
    </div>
    <section class="lg:m-20 flex justify-between hidden md:block md:m-10 lg:block">
      <div class="flex">
        <a href="#" class=" text-gray-600">Home</a>
        <IconArrow />
        <a href="#" class=" text-gray-600">Holiday History</a>
        <IconArrow />
        <p class="font-bold text-lg">Holiday detail</p>
      </div>

    </section>
    <section class="m-10 lg:m-20 space-y-5">
      <div class="">
        <h1 class="text-xl font-bold text-center md:text-left lg:text-left">{{ holiday.startingDate }} - {{ holiday.endingDate }}</h1>
        <p class="text-gray-400 hidden md:block lg:block">Il vous reste {{ remainingDays }} jours(s)</p>
      </div>

      <div class="space-y-5">
        <div class="md:flex md:justify-between w-full lg:flex lg:justify-between space-y-5">
          <div class="flex flex-col">
            <span class="text-gray-400 text-xs">Type</span>
            <span class="font-semibold">{{ holiday.type }}</span>
          </div>

          <div class="flex justify-between items-center lg:w-[50%]">
            <div class="flex flex-col">
              <span class="text-gray-400 text-xs">Starts</span>
              <span class="font-semibold">{{ holiday.startingDate }}</span>
            </div>

            <div>
              <IconCalendarDetails1 />
            </div>
          </div>
        </div>
        <div class="md:flex md:justify-between lg:w-full lg:flex lg:justify-between space-y-5">

          <div class="flex flex-col">
            <span class="text-gray-400 text-xs">Return</span>
            <span class="font-semibold">{{ holiday.returningDate }}</span>
          </div>

          <div class="flex justify-between items-center lg:w-[50%]">
            <div class="flex flex-col">
              <span class="text-gray-400 text-xs">Ends</span>
              <span class="font-semibold">{{ holiday.endingDate }}</span>
            </div>

            <div>
              <IconCalendarDetails2 />
            </div>

          </div>

        </div>

        <div>
          <span class="text-gray-400 text-xs">Description</span>
          <p>{{ holiday.description }}</p>
        </div>

      </div>
    </section>
  </section>
</template>


<script>
import IconArrow from '../components/icons/IconArrow.vue';
import IconHome from '../components/icons/IconHome.vue';
import IconCalendarDetails1 from '../components/icons/IconCalendarDetails1.vue';
import IconCalendarDetails2 from '../components/icons/IconCalendarDetails2.vue';

export default {
  name: "HolidayDeatils",
  components: {
    IconArrow,
    IconHome,
    IconCalendarDetails1,
    IconCalendarDetails2
  },
  data: () => ({
    holiday:
    {
      id: "",
      createdAt: "",
      time: "",
      startingDate: "",
      endingDate: "",
      returningDate: "",
      description: "",
      type: "",
    }
  }),
  computed: {
    remainingDays() {
      return this.getDays(new Date(this.holiday.endingDate).getTime() - new Date(this.holiday.startingDate).getTime())
    }
  },
   methods:{
    getDays(time){
      return (60*360000*24) / time 
    }
   }
}
</script>