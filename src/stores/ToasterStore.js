import { defineStore } from 'pinia'

export const useToasterStore = defineStore('toaster', {
  state: () => ({
    currentSpeech: "Let's get bready!",
    obs: {
      scenes: ['Starting', 'Main', 'Game', 'BRB']
    }
  }),

  getters: {
    //
  },

  actions: {
    //
  }
})
