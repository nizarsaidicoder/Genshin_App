import { defineStore } from "pinia";
import { reactive, computed } from "vue";
import genshinDB from "genshin-db";
export const useWeaponStore = defineStore("WeaponStore", () => {
  const weapons = reactive(
    genshinDB.weapons("names", {
      matchCategories: true,
      verboseCategories: true,
    })
  );
  const favoniusWeapons = computed(() =>
    weapons.filter((weapon) => weapon.name.includes("Favonius"))
  );
  return { weapons, favoniusWeapons };
});
