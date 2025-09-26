import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { VueQueryPlugin } from '@tanstack/vue-query'
import i18n from './i18n'
import piniaPersistedState from 'pinia-plugin-persistedstate'

import App from './App.vue'
import router from './router'

import './style.css'
import './assets/scss/index.scss'

const app = createApp(App)

const pinia = createPinia()
pinia.use(piniaPersistedState)

app.use(createPinia())
app.use(router)
app.use(VueQueryPlugin)
app.use(i18n)
app.use(pinia)

app.mount('#app')
