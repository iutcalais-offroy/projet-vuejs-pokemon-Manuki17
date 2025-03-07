<script setup>
import { ref } from "vue";
import LoginFormComponent from "../components/forms/LoginForm.component.vue";
import RegisterFormComponent from "../components/forms/RegisterForm.component.vue";
import { NTabs, NTabPane, NCard } from "naive-ui";

const activeTab = ref("login");
</script>

<template>
  <div class="tabs-form">
    <n-card>
      <n-tabs v-model:value="activeTab" type="line" animated>

        <!-- Onglet de connexion -->
        <n-tab-pane name="login" tab="Connexion">
          <LoginFormComponent/>
        </n-tab-pane>

        <!-- Onglet d'inscription -->
        <n-tab-pane name="register" tab="Inscription">
          <RegisterFormComponent/>
        </n-tab-pane>

      </n-tabs>
    </n-card>
  </div>
</template>

<style scoped>
.tabs-form{
  width: 100%;
  text-decoration: solid;
}
</style>
