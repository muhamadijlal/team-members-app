<script setup>
import { defineProps } from "vue";

defineProps({
  team: Object,
});
</script>

<template>
  <footer class="bg-gray-200 rounded-lg p-4 flex justify-center">
    <h5 class="text-lg font-bold text-slate-800">
      {{ team.name }} - {{ team.members.length }} Member Team
    </h5>
  </footer>
</template>
