<template>
  <section class="flex h-full">
    <aside class="w-48 bg-gray-200 p-14">
      <div class="flex justify-center mb-10">
        <h3 class="text-2xl font-semibold text-slate-600">Demo</h3>
      </div>

      <div class="flex flex-col gap-7">
        <div class="w-20 h-20 bg-gray-300 rounded-sm"></div>
        <div class="w-20 h-20 bg-gray-300 rounded-sm"></div>
        <div class="w-20 h-20 bg-gray-300 rounded-sm"></div>
        <div class="w-20 h-20 bg-gray-300 rounded-sm"></div>
        <div class="w-20 h-20 bg-gray-300 rounded-sm"></div>
      </div>
    </aside>

    <main class="p-16 w-full">
      <router-view></router-view>
    </main>
  </section>
</template>
