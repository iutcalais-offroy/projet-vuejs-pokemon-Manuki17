/*------------------------------
--- Projet Vue JS ~ Pokémon ---
-- Manon Chagot --
- BUT 2 app -
-----------*/
import { defineStore } from 'pinia';
import { ref } from 'vue';
import { registerUser } from '../apis/registerUser.api';

export const useRegisterStore = defineStore('register', () => {
    const registerData = ref({
        email: '',
        password: '',
        passwordConfirmed: ''
    });

    // -- Envoie des données à l'API si le mot de passe est vérifié --
    const registerState = async () => {
        if (registerData.value.password === registerData.value.passwordConfirmed) {
            try {
                await registerUser(registerData.value.email, registerData.value.password);
                console.log("Création réussie :");
            } catch (error) {
                console.error("Erreur lors de la création :", error);
            }
        }
        else {
            console.log("Erreur, les mots de passe ne sont pas identiques.");
        }
    }

    return { registerData, registerState };
})