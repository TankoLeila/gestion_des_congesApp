<template>
  <section class="bg-white h-screen">
        <!-- create holiday section -->
        <section class=" m-10 lg:m-20 flex justify-between">

            <div class="font-bold text-xl lg:hidden">
                <h1>Holidays</h1>
            </div>
            <div class="flex hidden lg:block lg:flex">
                <a href="#" class=" text-gray-600">Home</a>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
                </svg>

                <p class="font-bold text-lg">Holiday History</p>
            </div>

            <button
                class="bg-blue-400 text-white font-semibold rounded-md border-2 p-2 w-[200px] hidden lg:block">Create
                holiday</button>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="w-6 h-6 lg:hidden ">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>

        </section>

        <!-- partie des box -->

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:m-20 p-5">
            <div class="bg-white rounded-xl p-5 shadow-lg shadow-blue-300 space-y-3">
                <div class="flex justify-between">
                    <p class="text-gray-400">Il y'a un jour</p>
                    <span class="text-gray-400">11h45</span>
                </div>

                <h1 class="text-blue-500 text-xl font-bold ">January, 12 - Febuary, 12</h1>
                <p class="text-xs">Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, autem!</p>
                <p class="bg-blue-300 p-1 text-center text-blue-600 font-semibold w-[100px] rounded-2xl">Annual</p>
            </div>
            <div class="bg-white rounded-xl p-5 shadow-lg shadow-blue-300 space-y-3">
                <div class="flex justify-between">
                    <p class="text-gray-400">Il y'a un jour</p>
                    <span class="text-gray-400">11h45</span>
                </div>
                <h1 class="text-blue-500 text-xl font-bold ">January, 12 - Febuary, 12</h1>
                <p class="text-xs">Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, autem!</p>
                <p class="bg-blue-300 p-1 text-center text-blue-600 font-semibold w-[100px] rounded-2xl">Annual</p>
            </div>
            <div class="bg-white rounded-xl p-5 shadow-lg shadow-blue-300 space-y-3">
                <div class="flex justify-between">
                    <p class="text-gray-400">Il y'a un jour</p>
                    <span class="text-gray-400">11h45</span>
                </div>
                <h1 class="text-blue-500 text-xl font-bold ">January, 12 - Febuary, 12</h1>
                <p class="text-xs">Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, autem!</p>
                <p class="bg-blue-300 p-1 text-center text-blue-600 font-semibold w-[100px] rounded-2xl">Annual</p>
            </div>
            <div class="bg-white rounded-xl p-5 shadow-lg shadow-blue-300 space-y-3">
                <div class="flex justify-between">
                    <p class="text-gray-400">Il y'a un jour</p>
                    <span class="text-gray-400">11h45</span>
                </div>
                <h1 class="text-blue-500 text-xl font-bold ">January, 12 - Febuary, 12</h1>
                <p class="text-xs">Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, autem!</p>
                <p class="bg-blue-300 p-1 text-center text-blue-600 font-semibold w-[100px] rounded-2xl">Annual</p>
            </div>

            <div class="bg-white rounded-xl p-5 shadow-lg shadow-blue-300 space-y-3">
                <div class="flex justify-between">
                    <p class="text-gray-400">Il y'a un jour</p>
                    <span class="text-gray-400">11h45</span>
                </div>
                <h1 class="text-blue-500 text-xl font-bold ">January, 12 - Febuary, 12</h1>
                <p class="text-xs">Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, autem!</p>
                <p class="bg-blue-300 p-1 text-center text-blue-600 font-semibold w-[100px] rounded-2xl">Annual</p>
            </div>

            <div class="bg-white rounded-xl p-5 shadow-lg shadow-blue-300 space-y-3">
                <div class="flex justify-between">
                    <p class="text-gray-400">Il y'a un jour</p>
                    <span class="text-gray-400">11h45</span>
                </div>
                <h1 class="text-blue-500 text-xl font-bold ">January, 12 - Febuary, 12</h1>
                <p class="text-xs">Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, autem!</p>
                <p class="bg-blue-300 p-1 text-center text-blue-600 font-semibold w-[100px] rounded-2xl">Annual</p>
            </div>
        </div>

    </section>
</template>