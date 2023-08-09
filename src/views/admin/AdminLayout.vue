<template>
  <section class="h-screen flex flex-col relative">
    <section class="px-4 bg-white flex justify-between items-center shadow-sm border-b-2">
      <div class="p-3">
        <img
          src="../../assets/HolidayTracker.png"
          alt="logoApp"
          class="h-[70px] border-2 rounded-2xl"
        />
      </div>
      <div class="px-4 border-l border-indigo-600 flex flex-col items-start gap-y-2">
        <span class="text-indigo-800 font-semi-bold text-sm">Leila Tanko</span>
        <span
          class="text-indigo-800 font-bold text-xs flex items-center gap-x-2 bg-indigo-200 rounded-md px-2 py-1"
        >
          <span class="w-2 h-2 bg-indigo-800 rounded-full block"></span>
          Admin
        </span>
      </div>
    </section>
    <section class="flex divide-x-2">
      <section class="w-1/4 bg-white  max-w-[120px] p-4 space-y-7">
        <div class="flex gap-x-4 items-center">
          <span class="text-gray-900 font-extrabold text-lg">MENU</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-3 h-3"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </div>
        <div class="text-indigo-800 bg-indigo-200 rounded-lg p-2 text-center font-medium text-xs">
          Employees
        </div>
      </section>
      <section class="h-screen w-full">
        <router-view></router-view>
      </section>
    </section>
  </section>
</template>
