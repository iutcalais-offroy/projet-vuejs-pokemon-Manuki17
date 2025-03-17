/*------------------------------
--- Projet Vue JS ~ Pokémon ---
-- Manon Chagot --
- BUT 2 app -
-----------*/
import axios from 'axios';

// -- Renvoie le résultat de l'API après le post --
export const registerUser = async (email: String, password: String) => {
    const response = await axios.post('https://pokemon-api-seyrinian-production.up.railway.app/users/', {
        email: email,
        password: password
    });
    console.log(response.data);
    return response.data;
}