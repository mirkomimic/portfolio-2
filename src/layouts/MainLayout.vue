<template>
  <v-app>
    
    <v-main>
      <Transition name="fade" appear>
        <div>
          <slot/>
        </div>
      </Transition>
    </v-main>

  </v-app>
</template>

<script setup lang="ts">
// import NavBar from '@/Components/NavBar.vue';


</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>