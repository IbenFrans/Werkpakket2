<script>
export default {
    props:[
        'user',
    ],
    data(){
        return{
            streetLabel: "Street:",
            housenumberLabel: "House Number:",
            postalcodeLabel: "Postal Code:",
            cityLabel: "City:",
            countryLabel: "Country:"
        }
    }
    
}
</script>
<template lang="">
    <form class="checkOut" action="/submit_address" method="post">
  <label for="street">{{streetLabel}}</label><br>
  <input type="text" id="street" name="street" v-model="user.streetname" required><br><br>
  
  <label for="house_number">{{housenumberLabel}}</label><br>
  <input type="text" id="house_number" name="house_number" v-model="user.streetnumber" required><br><br>
  
  <label for="postal_code">{{postalcodeLabel}}</label><br>
  <input type="number" id="postal_code" name="postal_code" v-model="user.postalCode" required><br><br>
  
  <label for="city">{{cityLabel}}</label><br>
  <input type="text" id="city" name="city" v-model="user.city" required><br><br>
  
  <label for="country">{{countryLabel}}</label><br>
  <input type="text" id="country" name="country" v-model="user.country" required><br><br>
</form>
</template>
<style lang="">
    
</style>