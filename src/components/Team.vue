<script setup>
import TeamHeader from "@/components/TeamHeader.vue";
import TeamContent from "@/components/TeamContent.vue";
import TeamFooter from "@/components/TeamFooter.vue";
import team from "@/team.json";
</script>

<template>
  <section class="w-full">
    <team-header :team="team" />

    <team-content :team="team" />

    <team-footer :team="team" />
  </section>
</template>
