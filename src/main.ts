import {createApp} from 'vue';
import {createPinia} from 'pinia';
import App from './App.vue';
import {router} from './router';
import naive from 'naive-ui'

const pinia = createPinia();
const app = createApp(App);

app.use(naive)
app.use(pinia);
app.use(router)
app.mount('#app');
