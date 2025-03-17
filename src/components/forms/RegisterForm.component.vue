<!------------------------------
--- Projet Vue JS ~ Pokémon ---
-- Manon Chagot --
- BUT 2 app -
----------->
<script lang="ts" setup>
import { useRegisterStore } from '../../stores/Register.store.js';
import { NForm, NFormItem, NInput, NButton } from 'naive-ui';
import { storeToRefs } from 'pinia';

const registerStore = useRegisterStore();
const { registerData } = storeToRefs(registerStore);

// -- Envoie les données du formulaire au Store --
async function submitRegister() {
  try {
    await registerStore.registerState();
  } catch (error) {
    console.error("Échec de la création :", error);
  }
}
// ---------------------------------------
</script>

<template>
  <div>
    <n-form :model="registerData" label-placement="top">

      <!-- Adresse mail -->
      <n-form-item label="Email">
        <n-input
          v-model:value="registerData.email"
          placeholder="Entrez votre email"
        />
      </n-form-item>

      <!-- Mot de passe -->
      <n-form-item label="Mot de passe">
        <n-input
          type="password"
          v-model:value="registerData.password"
          placeholder="Entrez votre mot de passe"
        />
      </n-form-item>

      <!-- Confirmation du mot de passe -->
      <n-form-item label="Confirmer le mot de passe">
        <n-input
          type="password"
          v-model:value="registerData.passwordConfirmed"
          placeholder="Confirmez votre mot de passe"
        />
      </n-form-item>

      <!-- Validation -->
      <n-form-item>
        <n-button type="primary" @click="submitRegister">
          S'inscrire
        </n-button>
      </n-form-item>
    </n-form>
  </div>
</template>
