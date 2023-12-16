<script>
import HeaderComponent from '../components/HeaderComponent.vue';

export default {
    data(){
        return{
            users: [
            {
    email: 'john.doe@example.com',
    password: 'P@ssw0rd!',
    streetname: 'Main Street',
    streetnumber: 23,
    postalCode: 1000,
    city: 'Brussels',
    country: 'Belgium'
  },
  {
    email: 'alice.smith@example.com',
    password: 'SecurePwd123',
    streetname: 'Canal Avenue',
    streetnumber: 45,
    postalCode: 9000,
    city: 'Ghent',
    country: 'Belgium'
  },
  {
    email: 'michael.johnson@example.com',
    password: 'SecretPass789',
    streetname: 'Market Street',
    streetnumber: 67,
    postalCode: 2000,
    city: 'Antwerp',
    country: 'Belgium'
  },
  {
    email: 'sophia.wong@example.com',
    password: 'P@ssw0rd!',
    streetname: 'Park Lane',
    streetnumber: 89,
    postalCode: 3000,
    city: 'Leuven',
    country: 'Belgium'
  },
  {
    email: 'pablo.garcia@example.com',
    password: 'P@55word!',
    streetname: 'Hill Street',
    streetnumber: 101,
    postalCode: 5000,
    city: 'Namur',
    country: 'Belgium'
  }
            ],
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
        headerText(){
            if (!this.loggedIn){
                return "Log in!"
            } else {
                return "Welcome!"
            }
        },
        headerSubText(){
            if (!this.loggedIn){
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
        this.loggedIn = true;
        console.log('Login successful');
        this.loginError = ''; // Clear any previous login error
        // Here you can navigate to a new page or perform other actions upon successful login
      } else {
        // Invalid credentials
        this.loginError = 'Invalid email or password. Please try again.';
        console.log('Login failed');
      }
    },
    logout(){
        this.email = "",
        this.password = "",
        this.loggedIn = false;
    }
    }
    
}
</script>
<template lang="">
    <main>
        <HeaderComponent :title="headerText" :subtext="headerSubText"/>
        
        <form @submit.prevent="login" v-if="!loggedIn">
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
        <div v-else>
            <p>Please dont log out</p>
            <button class="errorMessage tags" @click="Logout">Log out</button>
        </div>
        
    </main>
</template>

<style lang="">
    
</style>