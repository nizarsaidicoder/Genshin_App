<template>
  <RouterLink :to="'/characters/' + name">
    <div
      class="character-card"
      :style="{ maxWidth: computedSize + 'rem' }">
      <div
        class="character-icon"
        :class="computedRarity">
        <img
          :src="image"
          alt="" />
        <div class="element">
          <img
            v-show="elementImage"
            :src="elementImage"
            alt="" />
        </div>
        <div class="constellation">
          <div>{{ computedConstellation }}</div>
        </div>
      </div>
      <p class="character-name">{{ name }}</p>
    </div>
  </RouterLink>
</template>

<script setup>
  import { useRarityElementStore } from "../store/RarityElementStore";
  // import { constellations } from "genshin-db";
  import { toRef, computed } from "vue";
  const elementStore = useRarityElementStore();
  const elements = elementStore.elements;

  const props = defineProps([
    "name",
    "rarity",
    "element",
    "weapon",
    "image",
    "constellation",
    "size",
  ]);
  const characterElement = toRef(props, "element");
  const characterRarity = toRef(props, "rarity");
  let elementImage;
  const computedElement = elements.find(
    (Element) => Element.name == characterElement.value
  );
  computedElement
    ? (elementImage = computedElement.images.wikia)
    : (elementImage = null);

  const computedRarity = computed(() => {
    if (characterRarity.value == 5) {
      return "five-star";
    } else {
      return "four-star";
    }
  });
  const computedConstellation = computed(() =>
    props.constellation !== undefined && props.constellation !== null
      ? "C" + props.constellation
      : ""
  );
  const computedSize = computed(() => {
    if (props.size === "medium") {
      return 9;
    } else {
      return 10;
    }
  });
</script>

<style lang="css" scoped>
  .character-card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.8rem;
    color: var(--text-color);
    transition: all 0.15s ease-in;
    padding-bottom: 0.5rem;
    color: var(--text-color);
  }
  .character-card:hover {
    transform: scale(1.05);
  }
  .character-card:active {
    transform: scale(1);
  }
  .character-icon {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    box-shadow: var(--box-shadow);
    /* border-radius: 1.8rem 0 1.8rem 0; */
    border-radius: 0.6rem;
  }
  .character-icon > img {
    flex-shrink: 0;
    max-width: 100%;
    max-height: 100%;
    border-radius: 0.6rem;
    /* border-radius: 1.8rem 0 1.8rem 0; */
  }
  .character-name {
    text-align: center;
  }

  .element {
    width: 2.6rem;
    height: 2.6rem;
    position: absolute;
    top: -10%;
    left: 93%;
    transform: translate(-50%, 15%);
    border-radius: 50%;
    background-color: #303b7a;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .element > img {
    max-width: 80%;
    max-height: 80%;
  }
  .constellation {
    width: 3.2rem;
    position: absolute;
    bottom: 0%;
    left: 65%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #2d377b;
    border-radius: 0.4rem;
    color: #ddd;
    font-size: 1.4rem;
  }
</style>
