<script setup>
import Sidebar from "./layouts/Sidebar.vue";
</script>

<template>
  <section class="flex h-full">
    <sidebar />

    <main class="p-16 w-full">
      <router-view></router-view>
    </main>
  </section>
</template>
