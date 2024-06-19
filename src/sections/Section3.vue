<template>
  <div id="section_3" class="h-screen position-relative bg-grey-darken-4">

    <div 
      class="card card-bg justify-center pa-4 position-absolute top-0 bottom-0 left-0 right-0 mx-auto my-auto"
      style="
        border: 1px solid white; 
        border-radius: 15px; 
        width: 800px; 
        height: 550px;
      "
    >
      <h4 class="text-h4 mb-3">
        <v-icon icon="mdi-github"></v-icon>
        My Projects
      </h4>

      <ul class="ms-3">
        <li v-for="(link, index) in links" :key="index" class="text-h5">
          <a :href="link.link" class="text-decoration-none link roboto-mono" target="_blank">{{ link.name }}</a>
          <br>
          <p class="roboto-mono my-3">{{ link.desc }}</p>
        </li>
      </ul>

    </div>
  </div>
</template>

<script setup>
import { gsap } from 'gsap'
import { onMounted, ref } from 'vue';
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger) 

const links = ref([
  {
    name: 'Vehicle Dealership',
    desc: 'Full-stack app with Laravel 10, Vue 3, InertiaJS, Vuetify 3',
    link: 'https://github.com/mirkomimic/vehicle_dealership_full_stack'
  },
  {
    name: 'World News Api & SPA App',
    desc: 'Laravel 10, NewsAPI, Vue 3, Pinia, PrimeVue',
    link: 'https://github.com/mirkomimic/world_news_api'
  },
  {
    name: 'Payments App',
    desc: 'Laravel 10, Vue 3, InertiaJS, Vuetify 3, Laravel Cashier',
    link: 'https://github.com/mirkomimic/payments-app-fullstack'
  },
  {
    name: 'Live Stock App',
    desc: 'Laravel 11, Inertia.js Vue 3, Typescript, Vuetify 3, AlphaVantageAPI',
    link: 'https://github.com/mirkomimic/live-stocks-app'
  },
])

onMounted(() => {
  
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '#section_3',
      start: 'center-=180 center',
      end: 'center center',
      scrub: true,
    }
  })
  
  tl.from('#section_3 .card ul li', {
    opacity: 0,
    stagger: .5,
  })
})




</script>

<style scoped>
</style>