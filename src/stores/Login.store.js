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
        password: '',
        token: '',
        id: ''
    });

    // -- Envoie des données reçues à l'API --
    const loginState = async () => {
        try {
            const response = await loginUser(loginData.value.email, loginData.value.password);
            
            loginData.value.id = response.id;
            loginData.value.token = response.token;
            
            console.log("✅ Connexion réussie");
        } catch (error) {
            console.error("❌ Erreur lors de la connexion :", error);
        }
    };

    return { loginData, loginState };
});
