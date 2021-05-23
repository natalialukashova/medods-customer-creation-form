import { createApp } from 'vue'
import App from './App.vue'
import './/assets/style.scss'
import '../src/components/Card.vue'

const app = createApp(App)
window.__VUE_DEVTOOLS_GLOBAL_HOOK__.Vue = app
app.mount('#app')