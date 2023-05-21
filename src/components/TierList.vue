<template>
  <div class="container">
    <FilterCharacters></FilterCharacters>
    <div class="tier-list-container">
      <div class="tier-container">
        <div class="tier-rank ss">SS</div>
        <div class="characters">
          <Character
            v-for="character in SScharacters"
            :name="character.name"
            :rarity="character.rarity"
            :element="character.element"
            :weapon="character.weapontype"
            :constellation="character.constellation"
            :image="character.image"
            :key="character.name"
            size="medium"></Character>
        </div>
      </div>
      <div class="tier-container">
        <div class="tier-rank s">S</div>
        <div class="characters">
          <Character
            v-for="character in Scharacters"
            :name="character.name"
            :rarity="character.rarity"
            :element="character.element"
            :weapon="character.weapontype"
            :constellation="character.constellation"
            :image="character.image"
            :key="character.name"
            size="medium"></Character>
        </div>
      </div>
      <div class="tier-container">
        <div class="tier-rank a">A</div>
        <div class="characters">
          <Character
            v-for="character in Acharacters"
            :name="character.name"
            :rarity="character.rarity"
            :element="character.element"
            :weapon="character.weapontype"
            :constellation="character.constellation"
            :image="character.image"
            :key="character.name"
            size="medium"></Character>
        </div>
      </div>
      <div class="tier-container">
        <div class="tier-rank b">B</div>
        <div class="characters">
          <Character
            v-for="character in Bcharacters"
            :name="character.name"
            :rarity="character.rarity"
            :element="character.element"
            :weapon="character.weapontype"
            :constellation="character.constellation"
            :image="character.image"
            :key="character.name"
            size="medium"></Character>
        </div>
      </div>
      <div class="tier-container">
        <div class="tier-rank c">C</div>
        <div class="characters">
          <Character
            v-for="character in Ccharacters"
            :name="character.name"
            :rarity="character.rarity"
            :element="character.element"
            :weapon="character.weapontype"
            :constellation="character.constellation"
            :image="character.image"
            :key="character.name"
            size="medium"></Character>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import FilterCharacters from "./FilterCharacters.vue";
  import Character from "./Character.vue";
  import { useCharacterStore } from "../store/CharacterStore.js";
  import { computed } from "vue";
  const characterStore = useCharacterStore();
  const charactersTierList = computed(() => characterStore.charactersList);
  console.log(charactersTierList.value);
  const SScharacters = computed(() =>
    charactersTierList.value.filter((character) => character.tier === "ss")
  );
  const Scharacters = computed(() =>
    charactersTierList.value.filter((character) => character.tier === "s")
  );
  const Acharacters = computed(() =>
    charactersTierList.value.filter((character) => character.tier === "a")
  );
  const Bcharacters = computed(() =>
    charactersTierList.value.filter((character) => character.tier === "b")
  );
  const Ccharacters = computed(() =>
    charactersTierList.value.filter((character) => character.tier === "c")
  );
</script>

<style scoped>
  .container {
    margin: var(--s-space) 0;
    /* border: solid 4px var(--accent-color); */
    background-color: var(--secondary-color);
    border-radius: 8px;
    padding: var(--s-space) var(--s-space);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: var(--s-space);
  }
  .tier-list-container {
    display: flex;
    flex-direction: column;
    align-self: flex-start;
    width: 100%;
    border-radius: 1rem;
    overflow: hidden;
  }
  .tier-container {
    display: flex;
    gap: var(--xs-space);
    background-color: #24285a;
    outline: solid 1px var(--accent-color);
  }
  .tier-rank {
    min-width: 9.6rem;
    min-height: 9.2rem;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #222;
  }

  .characters {
    display: flex;
    flex-wrap: wrap;
    padding: var(--xs-space) 0.8rem;
    gap: 2rem;
  }
  .character {
    flex-basis: 8rem;
  }
  .ss {
    background-color: #d83e3e;
    border-radius: 1rem 0 0 0;
  }
  .s {
    background-color: #e57373;
  }
  .a {
    background-color: #e5a032;
  }
  .b {
    background-color: #e1db24;
  }
  .c {
    background-color: #aad83e;
    border-radius: 0 0 0 1rem;
  }
</style>
