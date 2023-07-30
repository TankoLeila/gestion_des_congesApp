<template>
  <section class="h-screen flex flex-col relative">
    <section class="px-2 py-4 flex justify-between items-center">
      <div>LOGO</div>
      <div class="px-2 border-l border-pink-600 flex flex-col items-start gap-y-2">
        <span class="text-pink-500 font-thin text-sm">Leila Tanko</span>
        <span class="text-pink-800 font-bold text-xs">
          <span class="w-2 h-2 bg-pink-800 rounded-full block"></span>
          Admin
        </span>
      </div>
    </section>
    <section class="flex divide-x-2">
      <section>
        <div class="flex gap-x-2">
          <span class="text-gray-900 font-extrabold text-lg">MENU</span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
            class="w-3 h-3">
            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </div>
        <div class="text-blue-500 bg-indigo-200 rounded-lg p-2 text-center font-medium text-xs">
          Employees
        </div>
      </section>
      <section>
        <router-view></router-view>
      </section>
    </section>
  </section>
</template>