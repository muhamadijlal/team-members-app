<script setup>
import TeamListMembers from "./members/TeamListMembers.vue";

import { defineProps } from "vue";

defineProps({
  team: Object,
});
</script>

<template>
  <main class="my-10">
    <div class="flex justify-center">
      <table class="border-separate table-fixed border-spacing-4 w-[900px]">
        <thead>
          <th
            class="text-lg w-1/2 font-bold text-slate-800 border border-slate-300 rounded-md p-2"
          >
            Name
          </th>
          <th
            class="text-lg w-1/3 font-bold text-slate-800 border border-slate-300 rounded-md p-2"
          >
            Email
          </th>
          <th
            class="text-lg font-bold text-slate-800 border border-slate-300 rounded-md p-2"
          >
            Status
          </th>
        </thead>

        <tbody>
          <team-list-members
            v-for="(member, index) in team.members"
            :key="index"
            :name="member.name"
            :email="member.email"
            :status="member.status"
          />
        </tbody>
      </table>
    </div>
    <span
      class="text-md font-bold italic flex justify-end text-slate-500"
      v-show="team.spots - team.members.length === 0"
      >There are no remaining team spots. Upgrade to add more.</span
    >
  </main>
</template>
