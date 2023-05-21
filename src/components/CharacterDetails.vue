<template>
  <div>
    Character Details
    <h2>{{ characterName }}</h2>
  </div>
</template>

<script setup>
  import { useRoute } from "vue-router";
  const route = useRoute();

  const characterName = route.params.name;
</script>

<style lang="scss" scoped></style>
