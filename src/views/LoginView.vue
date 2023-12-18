<script>
import HeaderComponent from '@/components/HeaderComponent.vue';
import { useUsersStore } from '@/stores/users';

export default {
    data(){
        return{
            userStore: useUsersStore(),
            email: "",
            password: "",
            loginError: "",
            loggedIn: false,
        }
    },
    components:{
        HeaderComponent
    },
    computed:{
        users(){
            return this.userStore.users;
        },
        headerText(){
            if (!this.userStore.loggedIn){
                return "Log in!"
            } else {
                return "Welcome!"
            }
        },
        headerSubText(){
            if (!this.userStore.loggedIn){
                return "Join the shneak side, we have cookies!"
            } else {
                return "Here have a tasty cookie!"
            }
        }
    },
    methods:{
        login() {
      // Simulating user authentication (replace this with your actual login logic)
      const foundUser = this.users.find(user => user.email === this.email && user.password === this.password);

      if (foundUser) {
        // Successful login
        this.userStore.loggedIn = foundUser;
        console.log('Login successful');
        this.loginError = ''; // Clear any previous login error
        // Here you can navigate to a new page or perform other actions upon successful login
        this.$router.push("Cart")
      } else {
        // Invalid credentials
        this.loginError = 'Invalid email or password. Please try again.';
        console.log('Login failed');
      }
    },
    logout(){
        this.email = "",
        this.password = "",
        this.userStore.loggedIn = "";
    }
    }
    
}
</script>
<template lang="">
    <main>
        <HeaderComponent :title="headerText" :subtext="headerSubText"/>
        
        <form @submit.prevent="login" v-if="!userStore.loggedIn">
            <p v-if="loginError" class="errorMessage tags">{{ loginError }}</p>
            <label for="email">E-mail</label>
            <input type="text" id="email" placeholder="john@doe.com" v-model="email">
            <label for="password">Password</label>
            <input type="password" id="password" placeholder="*********" v-model="password">
            <div class="formButtons">
                <button class="loginButton" type="submit">Login</button>
                <button class="changePasswordButton">Change password</button>
            </div>
        </form>
        <div v-else class="logout">
            <p>Please dont log out</p>
            <button class="errorMessage tags" @click="logout()">Log out</button>
        </div>
        
    </main>
</template>

<style lang="">
    
</style>