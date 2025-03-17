<!------------------------------
--- Projet Vue JS ~ Pokémon ---
-- Manon Chagot --
- BUT 2 app -
----------->
<script lang="ts" setup>
import { storeToRefs } from "pinia";
import { useLoginStore } from '../../stores/Login.store.js';
import { NForm, NFormItem, NInput, NButton } from 'naive-ui';
import { router } from '../../router.js';

const loginStore = useLoginStore();
const { loginData } = storeToRefs(loginStore);

// -- Envoie les données du formulaire au Store --
async function submitLogin() {
  try {
    await loginStore.loginState();

    if (loginData.id != '' && loginData.token != '') {
      localStorage.setItem("token", loginData.token);
      localStorage.setItem("idUser", loginData.id);
      router.push('/deck-builder');
    }
  } catch (error) {
    console.error("⚠️ Échec lors de la connexion :", error);
  }
}
// ---------------------------------------
</script>

<template>
  <div>
    <n-form :model="loginData" label-placement="top">

      <!-- Adresse mail -->
      <n-form-item label="Email">
        <n-input
          v-model:value="loginData.email"
          placeholder="Entrez votre email"
        />
      </n-form-item>

      <!-- Mot de passe -->
      <n-form-item label="Mot de passe">
        <n-input
          type="password"
          v-model:value="loginData.password"
          placeholder="Entrez votre mot de passe"
        />
      </n-form-item>

      <!-- Validation -->
      <n-form-item>
        <n-button type="primary" @click="submitLogin">
          Se connecter
        </n-button>
      </n-form-item>
    </n-form>
  </div>
</template>

<style>
.n-button {
  width: 100%;
}
</style>