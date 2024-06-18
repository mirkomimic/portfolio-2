<template>
  <section id="section_1" class="h-screen">
    <v-row class="h-100 ma-0">
      <v-col 
        class="d-flex align-center justify-center pa-0 mx-auto"
        cols="4"
      >
        <div class="d-flex">
          <v-img src="images/programming5.webp" width="400" class="image floating ms-5"></v-img>
        </div>
      </v-col>
      <v-col
        class="d-flex justify-center align-center pa-0"
      >
        <div 
          class="card d-flex flex-column justify-center align-center ga-4 pa-4 mr-lg-10 mb-15 mb-lg-0"
          style="border: 1px solid white; border-radius: 15px; width: 800px; z-index: 0;"
        >
          <h1 class="roboto-mono text-h4">Welcome to My Portfolio</h1>

          <h3 class="caveat-font">Hi, I'm 
            <span class="caveat-font text-light-blue-darken-1">M</span>
            <span class="caveat-font text-light-blue-darken-1">i</span>
            <span class="caveat-font text-light-blue-darken-1">r</span>
            <span class="caveat-font text-light-blue-darken-1">k</span>
            <span class="caveat-font text-light-blue-darken-1">o</span>
            <span class="caveat-font text-light-blue-darken-1"> M</span>
            <span class="caveat-font text-light-blue-darken-1">i</span>
            <span class="caveat-font text-light-blue-darken-1">m</span>
            <span class="caveat-font text-light-blue-darken-1">i</span>
            <span class="caveat-font text-light-blue-darken-1">ċ</span>        
          </h3>

          <p class="roboto-mono text-h6 line-height-1">I'm an aspiring Full Stack Web Developer with a keen</p>
          <p class="roboto-mono text-h6 line-height-1">interest in building dynamic and responsive web</p>
          <p class="roboto-mono text-h6 line-height-1">applications. With growing expertise in Laravel,</p>
          <p class="roboto-mono text-h6 line-height-1"> Vue.js, MySQL, and Vuetify, I'm dedicated to learning</p>
          <p class="roboto-mono text-h6 line-height-1"> and applying the best practices in both front-end and</p>
          <p class="roboto-mono text-h6 line-height-1">back-end development.</p>

        </div>
      </v-col>
    </v-row>

  </section>
</template>

<script setup>
import { gsap } from 'gsap'
import { onMounted, ref } from 'vue';
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger) 

const image = ref()

onMounted(() => {

  const tl = gsap.timeline()

  tl.from('#section_1 .card h1', {
    // yPercent: -100,
    opacity: 0,
    duration: 3,
    rotateX: 45,
    ease: 'power1.out'
  }).from('#section_1 .card h3 span', {
    yPercent: -100,
    opacity: 0,
    duration: .5,
    ease: 'power1.out',
    stagger: .1,
    repeat: -1,
    repeatDelay: 2
  }, '<').from('#section_1 .card p', {
    x: -100,
    opacity: 0,
    ease: 'power1.out',
    stagger: .1,
  }, '<').from('.image', {
    duration: 2,
    scale: .7
  }, '<')

})
</script>



<style scoped>


.floating {  
    animation-name: floating;
    animation-duration: 3s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
    /* margin-left: 30px;
    margin-top: 5px; */
}
 
@keyframes floating {
    0% { transform: translate(0,  0px); }
    50%  { transform: translate(15px, 0); }
    100%   { transform: translate(-0px, 0); }    
}
</style>