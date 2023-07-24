import { defineStore } from "pinia";

export let useTeamStore = defineStore("team", {
  state: () => ({
    name: "",
    spots: 0,
    members: [],
  }),

  getters: {
    spotsRemaining() {
      return this.spots - this.members.length;
    },
  },

  actions: {
    async fill() {
      let r = await import("@/team.json");

      this.$state = r.default;
    },
  },
});
