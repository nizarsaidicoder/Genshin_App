<template>
  <div class="container">
    <FilterCharacters></FilterCharacters>

    <div class="characters-list">
      <Character
        v-for="character in characters"
        :name="character.name"
        :rarity="character.rarity"
        :element="character.element"
        :weapon="character.weapontype"
        :image="character.image"
        :key="character.name"></Character>
    </div>
  </div>
</template>

<script setup>
  import { useCharacterStore } from "../store/CharacterStore";
  import { computed } from "vue";
  import FilterCharacters from "./FilterCharacters.vue";
  import Character from "./Character.vue";

  const characterStore = useCharacterStore();
  const characters = computed(() => characterStore.charactersList);
</script>

<style lang="css" scoped>
  .container {
    margin: var(--m-space) 0;
    /* border: solid 4px var(--accent-color); */
    background-color: var(--secondary-color);
    border-radius: 8px;
    padding: var(--s-space) var(--m-space);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: var(--m-space);
    border-top: 4px solid #ebc275;
  }
  .characters-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, 100px);
    padding: 8px 16px;
    width: 100%;
    justify-content: space-between;
    gap: var(--xs-space);

    /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */
  }
</style>
