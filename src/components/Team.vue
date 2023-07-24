<script setup>
import TeamHeader from "@/components/TeamHeader.vue";
import TeamContent from "@/components/TeamContent.vue";
import TeamFooter from "@/components/TeamFooter.vue";
import { useTeamStore } from "@/stores/TeamStore.js";

let team = useTeamStore();

team.fill();

setTimeout(() => {
  team.spots = 20;
}, 3000);
</script>

<template>
  <section class="w-full">
    <team-header />

    <team-content />

    <team-footer />
  </section>
</template>
