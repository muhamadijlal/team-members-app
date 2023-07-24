<script setup>
import TeamHeader from "./TeamHeader.vue";
import TeamContent from "./TeamContent.vue";
import TeamFooter from "./TeamFooter.vue";
import team from "../team.json";
</script>

<template>
  <section class="w-full">
    <team-header :team="team" />

    <team-content :team="team" />

    <team-footer :team="team" />
  </section>
</template>
