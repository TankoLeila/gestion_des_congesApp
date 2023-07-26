<template>
  <section class=" md:flex lg:flex min-h-screen items-center justify-center">
    <section class="bg-white md:hidden lg:hidden">
      <div class="flex justify-center">
        <img src="/Illustrations/HolidayTracker.png" alt="" class="h-[100px]">
        <span class="text-3xl font-bold p-10 text-center"></span>
      </div>
    </section>

    <section
      class="flex flex-col gap-y-10 md:gap-y-2 lg:gap-y-2 md:items-center lg:items-center shadow-lg border h-[700px] md:h-[400px] lg:h-[400px] px-5 md:bg-white lg:bg-white md:w-[400px] md:p-5 lg:w-[400px] lg:p-5 md:flex md:rounded-2xl">
      <div class="flex flex-col gap-y-2 p-5">
        <span class="text-2xl font-bold">Login</span>
        <span class="">Welcome and Identify you here!!</span>
      </div>

      <div class="flex flex-col gap-y-5 md:gap-y-2 ">

        <div class="flex flex-col">
          <div class="flex flex-col relative">
            <label class="font-bold">Email</label>
            <input type="email" placeholder="Enter your email"
              class="p-3 md:p-2 lg:p-2 md:w-[350px] w-[370px] shadow-lg bg-gray-50 md:bg-white lg:bg-white border-2 rounded-md pl-10 md:pl-10 lg:pl-10">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
              stroke="currentColor" class="w-6 h-6 absolute left-3 bottom-3">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
            </svg>
          </div>

        </div>


        <div class="flex flex-col">
          <div class="flex flex-col relative">
            <label class="font-bold">Password</label>
            <input type="email" placeholder="Enter your Password"
              class="p-3 md:p-2 lg:p-2 bg-gray-50  md:bg-white lg:bg-white md:w-[350px] lg:w-[350px] w-[370px] border-2 rounded-md shadow-lg pl-10 md:pl-10 lg:pl-10">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
              stroke="currentColor" class="w-6 h-6 absolute left-3 bottom-3">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
            </svg>
          </div>

        </div>
      </div>

      <div class="border-blue-200 m-5">
        <button
          class="bg-blue-400 text-white font-bold rounded-md border-2 p-2 w-[350px] md:w-[300px] lg:w-[300px] shadow-lg shadow-blue-400">LOGIN</button>
      </div>
      
    </section>
  </section>
</template>