<script>
export default {
    props:[
        'user',
    ]
    
}
</script>
<template lang="">
    <form class="checkOut" action="/submit_address" method="post">
  <label for="street">Street:</label><br>
  <input type="text" id="street" name="street" v-model="user.streetname" required><br><br>
  
  <label for="house_number">House Number:</label><br>
  <input type="text" id="house_number" name="house_number" v-model="user.streetnumber" required><br><br>
  
  <label for="postal_code">Postal Code:</label><br>
  <input type="number" id="postal_code" name="postal_code" v-model="user.postalCode" required><br><br>
  
  <label for="city">City:</label><br>
  <input type="text" id="city" name="city" v-model="user.city" required><br><br>
  
  <label for="country">Country:</label><br>
  <input type="text" id="country" name="country" v-model="user.country" required><br><br>
</form>
</template>
<style lang="">
    
</style>