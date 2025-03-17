<!------------------------------
--- Projet Vue JS ~ Pokémon ---
-- Manon Chagot --
- BUT 2 app -
----------->
<script lang="ts" setup>
import { ref } from 'vue';
import { NForm, NFormItem, NInput, NButton } from 'naive-ui'

const loginData = ref({
  email: '',
  password: ''
})

function submitLogin() {
  console.log("Connexion avec :", loginData.value)
}
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
          v-model:value="loginData.password"
          placeholder="Entrez votre mot de passe"
        />
      </n-form-item>

      <!-- Confirmation du mot de passe -->
      <n-form-item label="Confirmer le mot de passe">
        <n-input
          v-model:value="loginData.password"
          placeholder="Confirmez votre mot de passe"
        />
      </n-form-item>

      <!-- Validation -->
      <n-form-item>
        <n-button type="primary" @click="submitLogin">
          S'inscrire
        </n-button>
      </n-form-item>
    </n-form>
  </div>
</template>
