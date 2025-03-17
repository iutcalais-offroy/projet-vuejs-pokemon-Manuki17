/*------------------------------
--- Projet Vue JS ~ Pokémon ---
-- Manon Chagot --
- BUT 2 app -
-----------*/
import { defineStore } from 'pinia';
import { ref } from 'vue';
import { loginUser } from '../apis/loginUser.api';

export const useLoginStore = defineStore('login', () => {
    const loginData = ref({
        email: '',
        password: ''
    });

    // -- Envoie des données reçues à l'API --
    const loginState = async () => {
        try {
            await loginUser(loginData.value.email, loginData.value.password);  
            console.log("Connexion réussie :", loginData.value);
        } catch (error) {
            console.error("Erreur lors de la connexion :", error);
        }
    };

    return { loginData, loginState };
});
