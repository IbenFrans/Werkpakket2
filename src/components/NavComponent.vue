<script>
export default {
    data(){
        return{
            homeNav: {path: "/", name: "Home", title: ""},
            navItems: [
            {path: "/Products", name: "Products"},
            {path: "/Login", name: "Login"},
            {path: "/Cart", name: "Cart"},
            ],
            shneakyShop: "Shneaky Shop"
    }
    },  
}
</script>
<template lang="">
    <nav>
        <p><router-link  :to="homeNav.path">{{ shneakyShop }}</router-link></p>
    <ul>
        <li v-for="navItem in navItems">
        <router-link :to="navItem.path">{{  navItem.name }}</router-link></li>
    </ul>
    </nav>
</template>

<style lang="">
    
</style>