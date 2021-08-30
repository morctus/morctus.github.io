import {createRouter, createWebHistory} from 'vue-router'
import Got from '../views/Got'

const routes = [
    {
        path: '/got',
        name: 'Got',
        component: Got
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router