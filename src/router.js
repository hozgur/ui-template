
import {createRouter, createWebHistory} from 'vue-router'
import Home from './views/Home.vue'
import AdminPanel from './views/AdminPanel.vue'
const routes = [
    {
        path:'/',
        component:Home
    },
    {
        path:'/admin',
        component:AdminPanel
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;