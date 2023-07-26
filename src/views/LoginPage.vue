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
      <div class="flex flex-col gap-y-5 md:gap-y-2 border">
        <div class="flex flex-col">
          <div class="flex flex-col relative">
            <label class="font-bold">Email</label>
            <input type="email" placeholder="Enter your email"
              class="p-3 md:p-2 lg:p-2 md:w-[350px] w-[370px] shadow-lg bg-gray-50 md:bg-white lg:bg-white border-2 rounded-md pl-10 md:pl-10 lg:pl-10">
            <IconWrapper class="absolute left-3 bottom-3" />
          </div>

        </div>
        <div class="flex flex-col">
          <div class="flex flex-col relative">
            <label class="font-bold">Password</label>
            <input type="email" placeholder="Enter your Password"
              class="p-3 md:p-2 lg:p-2 bg-gray-50  md:bg-white lg:bg-white md:w-[350px] lg:w-[350px] w-[370px] border-2 rounded-md shadow-lg pl-10 md:pl-10 lg:pl-10">
            <IconBlock class="absolute left-3 bottom-3" />
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
