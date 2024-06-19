<template>
  <MainLayout>
    <div class="main-bg-img">
      <NavBar/>
      <Section1/>
      <Section2/>
      <Section3/>
      <Section4/>
    </div>
  </MainLayout>
</template>

<script setup>
import NavBar from '@/components/NavBar.vue';
import MainLayout from '@/layouts/MainLayout.vue';
import Section1 from '@/sections/Section1.vue';
import Section2 from '@/sections/Section2.vue';
import Section3 from '@/sections/Section3.vue';
import Section4 from '@/sections/Section4.vue';
</script>

<style scoped>

</style>