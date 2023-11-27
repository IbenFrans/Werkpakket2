<script>
export default {
    data(){
        return{
            homeNav: {path: "/", name: "Home"},
            navItems: [
            {path: "/Product", name: "Product"},
            {path: "/Login", name: "Login"},
            {path: "/Cart", name: "Cart"}
        ]}
    }
}
</script>
<template lang="">
    <nav>
        <router-link  :to="homeNav.path">Shneaky Shop</router-link>
    <ul>
        <li v-for="navItem in navItems">
        <router-link :to="navItem.path"/></li>
    </ul>
    </nav>
</template>

<style lang="">
    
</style>