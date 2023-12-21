import {createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/HomeView.vue'
import Product from '@/views/ProductView.vue'
import ProductDetail from '@/views/ProductDetailView.vue'
import Login from '@/views/LoginView.vue'
import Cart from '@/views/CartView.vue'
import NotFound from '@/views/NotFoundView.vue'
import Checkout from '@/views/Checkout.vue'
import Confirmation from '@/views/Confirmation.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: "/", component: Home},
        {path: "/", redirect: '/Home'},
        {path: "/Products", component: Product},
        {path: "/ProductDetail", component: ProductDetail},
        {path: "/Login", component: Login},
        {path: "/Cart", component: Cart},
        {path: "/Checkout", component: Checkout},
        {path: "/Confirmation", component: Confirmation},
        {path: "/:notFound(.*)", component: NotFound},
    ]
})

export default router