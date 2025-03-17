<!------------------------------
--- Projet Vue JS ~ Pokémon ---
-- Manon Chagot --
- BUT 2 app -
----------->
<script lang="ts" setup>
import { storeToRefs } from "pinia";
import { useDeckBuilderStore } from '../../stores/DeckBuilder.store.js';
import { NCard } from 'naive-ui';

const deckBuilderStore = useDeckBuilderStore();
const { deckBuilderData } = storeToRefs(deckBuilderStore);

const list = await deckBuilderStore.deckBuilderState();
</script>

<template>
    <n-card>
        
    </n-card>
</template>