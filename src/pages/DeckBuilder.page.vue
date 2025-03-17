<!------------------------------
--- Projet Vue JS ~ Pokémon ---
-- Manon Chagot --
- BUT 2 app -
----------->
<script lang="ts" setup>
import { ref } from "vue";
import DeckBuilderComponent from "../components/forms/DeckBuilder.component.vue";
import { NCard, NText, NTag, NInput } from "naive-ui";

// -- Rechercher un Pokémon --
const searchPokemon = (pokemonName) => {
  null;
}
</script>

<template>
  <n-input
    placeholder="Rechercher un nom de Pokémon"  
  ></n-input>
</template>

<style scoped>
body {
  justify-content: center;
}

.n-input {
  width: 40rem;
}
</style>