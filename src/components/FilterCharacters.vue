<template>
  <div
    class="filter-bar"
    id="filter-bar">
    <div class="icons-filter">
      <div
        v-for="(weapon, index) in favoniusWeapons"
        :key="index"
        @click="filter('weapon', weapon.weapontype, index, favoniusWeapons)">
        <img
          :src="weaponImage(weapon)"
          :alt="weapon.weapontype"
          class="icon-img"
          :class="{ active: weapon.isActive }" />
      </div>
    </div>
    <div class="divider"></div>
    <div class="icons-filter">
      <div
        v-for="(element, index) in elements"
        :key="index"
        @click="filter('element', element.name, index, elements)">
        <img
          :src="elementImage(element)"
          :alt="element.name"
          class="icon-img"
          :class="{ active: element.isActive }" />
      </div>
    </div>
    <div class="divider"></div>
    <div class="icons-filter">
      <div
        v-for="(rarity, index) in rarities"
        :key="index"
        @click="filter('rarity', rarity.name, index, rarities)">
        <img
          :src="rarityImage(rarity)"
          class="icon-img"
          :class="{ active: rarity.isActive }"
          :alt="rarity.name" />
      </div>
    </div>
  </div>
</template>

<script setup>
  import { useWeaponStore } from "../store/WeaponStore";
  import { useCharacterStore } from "../store/CharacterStore";
  import { useRarityElementStore } from "../store/RarityElementStore";

  const addActivity = function (array) {
    for (let i = 0; i < array.length; i++) {
      array[i].isActive = false;
    }

    return array;
  };
  const characterStore = useCharacterStore();
  const rarityElementStore = useRarityElementStore();
  const weaponStore = useWeaponStore();
  const favoniusWeapons = addActivity(weaponStore.favoniusWeapons);
  const elements = addActivity(rarityElementStore.elements);
  const rarities = addActivity(rarityElementStore.rarities.slice(0, 2));
  const weaponImage = (weapon) => weapon.images.awakenicon;
  const elementImage = (element) => element.images.wikia;
  const rarityImage = (rarity) => rarity.image;

  const filter = (type, specificity, index, items) => {
    toggleActive(index, items);
    const data = { type, specificity };
    characterStore.filter(data);
  };
  function toggleActive(index, items) {
    items.forEach((item, i) => {
      if (i === index) {
        item.isActive = !item.isActive;
      } else {
        item.isActive = false;
      }
    });
  }
</script>

<style lang="css" scoped>
  .filter-bar {
    width: 100%;
    /* border: solid 4px var(--accent-color); */
    background-color: var(--accent-color);

    display: flex;
    justify-content: space-around;
    border-radius: 1rem;
    padding: 0.6rem 0.8rem;
    gap: 2rem;
  }

  /* WEAPONS STYLE */

  /* ELEMENTS STYLES */
  .icons-filter {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.6rem;
  }

  .icon-img {
    height: 2.6rem;
    transition: all 0.2s ease-in;
    border-radius: 6px;
  }
  .icon-img:hover {
    background-color: var(--light-color);
  }

  .divider {
    position: relative;
    width: 1px;
    height: auto;
    background-color: var(--light-color);
    border-radius: 2px;
  }
  .active {
    background-color: var(--light-color);
    /* border-radius: 6px; */
  }
  @media (max-width: 800px) {
    .filter-bar {
      flex-direction: column;
      gap: 0.4rem;
    }
    .divider {
      position: relative;
      align-self: center;
      width: 65%;
      height: 1px;
      background-color: var(--light-color);
      border-radius: 2px;
      z-index: 0;
    }
  }
</style>
