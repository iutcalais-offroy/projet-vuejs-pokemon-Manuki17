/*------------------------------
--- Projet Vue JS ~ Pokémon ---
-- Manon Chagot --
- BUT 2 app -
-----------*/
import axios from 'axios';

// -- Renvoie le résultat de l'API après le post --
export const deckBuilder = async () => {
    const pokemonList = await axios.get('https://pokemon-api-seyrinian-production.up.railway.app/pokemon-cards/');
    console.log(pokemonList.data)
    return pokemonList.data
}