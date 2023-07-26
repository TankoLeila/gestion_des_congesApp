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

    <!-- All detail of holidays section -->
    <section class="m-10 lg:m-20 space-y-5">
      <div class="">
        <h1 class="text-xl font-bold text-center md:text-left lg:text-left">January, 12 - Febuary, 12</h1>
        <p class="text-gray-400 hidden md:block lg:block">Il vous reste 19 jours</p>
      </div>

      <div class="space-y-5">

        <!-- detail ligne 1 -->
        <div class="md:flex md:justify-between w-full lg:flex lg:justify-between space-y-5">
          <div class="flex flex-col">
            <span class="text-gray-400 text-xs">Type</span>
            <span class="font-semibold">Annual</span>
          </div>

          <div class="flex justify-between items-center lg:w-[50%]">
            <div class="flex flex-col">
              <span class="text-gray-400 text-xs">Starts</span>
              <span class="font-semibold">Monday, 12 january 2022</span>
            </div>

            <div>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
              </svg>
            </div>
          </div>
        </div>

        <!-- detail ligne 2-->
        <div class="md:flex md:justify-between lg:w-full lg:flex lg:justify-between space-y-5">
          <div class="flex flex-col">
            <span class="text-gray-400 text-xs">Return</span>
            <span class="font-semibold">Friday, 12 january 2022</span>
          </div>

          <div class="flex justify-between items-center lg:w-[50%]">
            <div class="flex flex-col">
              <span class="text-gray-400 text-xs">Ends</span>
              <span class="font-semibold">Friday, 12 january 2022</span>
            </div>

            <div>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
              </svg>

            </div>
          </div>
        </div>

        <div>
          <span class="text-gray-400 text-xs">Description</span>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis dignissimos impedit porro ea
            aliquid laudantium quo commodi error voluptatum nisi.</p>
        </div>

      </div>
    </section>
  </section>
</template>


<script>
  import IconArrow from '../components/icons/IconArrow.vue';
  import IconHome from '../components/icons/IconHome.vue'

  export default {
    name: "HolidayDeatils",
    components: {
      IconArrow,
      IconHome
    }
  }
</script>