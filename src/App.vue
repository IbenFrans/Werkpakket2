<script>
  import NavComponent from '@/components/NavComponent.vue';
  import FooterComponent from '@/components/FooterComponent.vue';
  import ActiveCartComponent from './components/ActiveCartComponent.vue';
  import { useUsersStore } from '@/stores/users';

  export default {
        data() {
            return {
              userStore: useUsersStore()
            }
        },
        components: {
            NavComponent,
            FooterComponent,
            ActiveCartComponent
        }
    }

</script>

<template>
  <NavComponent/>
  <main>
   <ActiveCartComponent v-if="userStore.shoppingCart != 0" />
  <router-view></router-view>
</main>
  <FooterComponent/>
</template>

<style scoped>

</style>
