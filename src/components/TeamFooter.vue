<script setup>
import { useTeamStore } from "@/stores/TeamStore.js";

let team = useTeamStore();
</script>

<template>
  <footer class="bg-gray-200 rounded-lg p-4 flex justify-center">
    <h5 class="text-lg font-bold text-slate-800">
      {{ team.name }} - {{ team.members.length }} Member Team
    </h5>
  </footer>
</template>
