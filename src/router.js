
import {createRouter, createWebHistory} from 'vue-router'
import Home from './views/Home.vue'
import SamplePanel from './views/SamplePanel/SamplePanel.vue'
const routes = [
    {
        path:'/',
        component:Home
    },
    {
        path:'/samplepanel',
        component:SamplePanel
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;