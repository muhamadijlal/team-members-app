<script setup>
defineProps({
  team: Object,
});
</script>

<template>
  <header class="flex justify-between items-center">
    <button
      class="px-3 py-2 bg-green-400 rounded-md font-medium text-lg text-slate-100 disabled:bg-gray-400 disabled:cursor-not-allowed"
      :disabled="team.members.length === team.spots"
    >
      Add member ({{ team.spots - team.members.length }} spots left)
    </button>

    <div>
      <div class="inline-flex relative pr-7">
        <div class="flex items-center gap-2">
          <img
            src="@/assets/image/logo-team.jpg"
            alt="logo-team"
            class="w-10 h-10"
          />
          <h4 class="text-4xl font-semibold">{{ team.name }} Team</h4>
        </div>
        <div
          class="top-0 right-0 absolute flex items-center justify-center w-6 h-6 text-slate-100 text-xs font-bold bg-green-400 rounded-full"
        >
          {{ team.members.length }}
        </div>
      </div>
    </div>
  </header>
</template>
