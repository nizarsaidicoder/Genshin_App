import { defineStore } from "pinia";
import genshinDB from "genshin-db";

export const useRarityElementStore = defineStore("ElementStore", {
  state: () => ({
    elements: genshinDB.elements("names", {
      matchCategories: true,
      verboseCategories: true,
    }),
    rarities: genshinDB.rarity("names", {
      matchCategories: true,
      verboseCategories: true,
    }),
  }),
});
