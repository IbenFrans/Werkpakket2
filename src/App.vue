<script>
  import NavComponent from '@/components/NavComponent.vue';
  import FooterComponent from '@/components/FooterComponent.vue';

  export default {
        data() {
            return {
            
            }
        },
        components: {
            NavComponent,
            FooterComponent,
        }
    }

</script>

<template>
  <NavComponent/>
  <main>
  <router-view></router-view>
</main>
  <FooterComponent/>
</template>

<style scoped>

</style>
