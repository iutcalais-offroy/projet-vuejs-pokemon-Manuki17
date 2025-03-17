<!------------------------------
--- Projet Vue JS ~ Pokémon ---
-- Manon Chagot --
- BUT 2 app -
----------->
<script setup>
import { ref } from "vue";
import LoginFormComponent from "../components/forms/LoginForm.component.vue";
import RegisterFormComponent from "../components/forms/RegisterForm.component.vue";
import { NTabs, NTabPane, NCard, NText } from "naive-ui";

const activeTab = ref("login");

// -- Changer l'onglet depuis une redirection --
const changeTab = (tab) => {
  activeTab.value = tab;
};
</script>

<template>
  <div class="tabs-form">
    <n-card>
      <n-tabs v-model:value="activeTab" type="line" animated>

        <!-- Onglet de connexion -->
        <n-tab-pane name="login" tab="Connexion">
          <LoginFormComponent/>

          <!-- Redirection à l'inscription -->
          <n-text>
            Pas de compte ? <a href="#" @click.prevent="changeTab('register')">S'inscrire</a>
          </n-text>
        </n-tab-pane>

        <!-- Onglet d'inscription -->
        <n-tab-pane name="register" tab="Inscription">
          <RegisterFormComponent/>

          <!-- Redirection à la connexion -->
          <n-text>
            Déjà inscrit ? <a href="#" @click.prevent="changeTab('login')">Se connecter</a>
          </n-text>
        </n-tab-pane>

      </n-tabs>
    </n-card>
  </div>
</template>

<style scoped>
.tabs-form{
  width: 15rem;
  height: 25rem;
  text-decoration: solid;
}

</style>
