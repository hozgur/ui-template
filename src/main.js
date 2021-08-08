import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
const app = createApp(App)

const components = require.context('./components/core', true, /\/[a-zA-Z0-9]+\.vue$/)
components.keys().forEach(el => {    
    const name = String(components(el).default.name).toLowerCase()    
    app.component(`m-${name}`, components(el).default)
    console.log(`m-${name} loaded.`);
})

app.use(router)
.mount('#app')


// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
