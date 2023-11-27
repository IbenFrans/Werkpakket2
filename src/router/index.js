import {createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/HomeView.vue'
import Product from '@/views/ProductView.vue'
import ProductDetail from '@/views/ProductDetailView.vue'
import Login from '@/views/LoginView.vue'
import NotFound from '@/views/NotFoundView.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: "/", component: Home},
        {path: "/", redirect: '/Home'},
        {path: "/Product", component: Product},
        {path: "/ProductDetail", component: ProductDetail},
        {path: "/Login", component: Login},
        {path: "/:notFound(.*)", component: NotFound},
    ]
})

export default router