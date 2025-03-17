/*------------------------------
--- Projet Vue JS ~ Pokémon ---
-- Manon Chagot --
- BUT 2 app -
-----------*/
import { defineStore } from 'pinia';
import { ref } from 'vue';
import { deckBuilder } from '../apis/deckBuilderBuilder.api';

export const useDeckBuilderStore = defineStore('deckBuilder', () => {
    const deckBuilderData = ref({
        pokemonList: []
    });

    // -- Envoie des données reçues à l'API --
    const deckBuilderState = async () => {
        try {
            deckBuilderData.pokemonList = await deckBuilder();
            
            console.log("✅ Pokémons trouvés : ", deckBuilderData.pokemonList);
        } catch (error) {
            console.error("❌ Erreur lors de la récupération : ", error);
        }
    };

    return { deckBuilderData, deckBuilderState };
});
