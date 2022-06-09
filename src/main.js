import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createAuth0 } from "@auth0/auth0-vue";

createApp(App).use(router).use(createAuth0({
    domain: process.env.VUE_APP_AUTH_DOMAIN,
    client_id: process.env.VUE_APP_AUTH_CLIENT_ID,
    redirect_uri: window.location.origin
})).mount('#app')