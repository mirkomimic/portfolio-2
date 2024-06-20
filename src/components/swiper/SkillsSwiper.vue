<template>
  <div class="h-screen overflow-hidden" >
    <v-row class="swiper h-100">

      <v-col cols="4" class="h-100 d-none d-lg-block">
        <div class="h-100">
          <swiper
            class="w-100 h-100"
            @swiper="setSwiper1"
            :modules="[Mousewheel]"
            :slides-per-view="1"
            :space-between="20"
            :scrollbar="{ draggable: true }"
            direction="vertical"
            :mousewheel="{enabled: true, releaseOnEdges: true, eventsTarget: '#section_2'}"
          >
            <swiper-slide v-for="(image, index) in skillsImages" :key="index">
              <div class="h-100 w-100 d-flex justify-center align-center">
                <div class="">
                  <v-img width="300" height="300" :src="`skills/${image}`"></v-img>
                </div>
              </div>
            </swiper-slide>        
          </swiper>
        </div>

      </v-col>
      
      <v-col cols="8" class="h-100 mx-auto mx-lg-0">
        <div class="h-100">
          <swiper
            class="h-100 w-100"
            @swiper="setSwiper2"
            :modules="[Mousewheel, EffectCube]"
            :slides-per-view="1"
            :space-between="20"
            :scrollbar="{ draggable: true }"
            :mousewheel="{enabled: true, releaseOnEdges: true, eventsTarget: '#section_2'}"
            direction="vertical"
            effect="cube"
          >
            <swiper-slide v-for="(skill, index) in skills" :key="index">
              <div class="h-100 w-100 d-flex justify-center align-center">
                <div class="card card-bg pa-4 mr-lg-10" style="border-radius: 15px;">
                  <h4 class="text-h5 text-lg-h4 mb-3 roboto-mono">{{ skill.h1 }}</h4>
                  <h5 class="text-h5 text-start mb-3 roboto-mono">{{ skill.h2 }}</h5>
                  <p class="text-lg-h5 roboto-mono">{{ skill.p1 }}</p>

                  <p class="text-lg-h5 my-3 roboto-mono">{{ skill.p2 }}</p>

                  <ul class="text-lg-h5 ms-4 roboto-mono">
                    <li v-for="(li, index) in skill.list" :key="index">{{ li }}</li>
                  </ul>
                </div>
              </div>
            </swiper-slide>        

          </swiper>
        </div>

      </v-col>
    </v-row>


  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Mousewheel, EffectCube } from 'swiper/modules';
import { ref } from 'vue';

import 'swiper/css';
import 'swiper/css/mousewheel';
import 'swiper/css/effect-cube';

const mySwiper1 = ref()
const mySwiper2 = ref()


const setSwiper1 = (s) => {
  mySwiper1.value = s
}

const setSwiper2 = (s) => {
  mySwiper2.value = s
}

const skillsImages = ['Laravel.png', 'vue.png', 'sql.png', 'vuetify.svg']

const skills = [
  {
    h1: 'My Work with Laravel',
    h2: 'Why Laravel?',
    p1: 'Laravel is a powerful PHP framework that provides an elegant syntax and robust tools for web application development. Its comprehensive features, scalability, and developer-friendly environment make it my go-to choice for backend development.',
    p2: 'In my projects, I leverage Laravel to:',
    list: [
      'Efficient Routing',
      'Database Management',
      'Authentication and Security',
      'API Development',
      'Task Scheduling and Queues'
    ]
  },
  {
    h1: 'My Work with Vue.js',
    h2: 'Why Vue.js?',
    p1: 'Vue.js is a versatile and progressive JavaScript framework that I use to build interactive and dynamic user interfaces. Its ease of integration, comprehensive documentation, and flexibility make it an ideal choice for both small and large-scale applications.',
    p2: 'In my projects, I leverage Vue.js to:',
    list: [
      'Create Responsive Interfaces',
      'Component-Based Architecture',
      'State Management',
      'Integration with Backend',
    ]
  },
  {
    h1: 'My Work with MySQL',
    h2: 'Why MySQL?',
    p1: 'MySQL is a reliable and widely-used relational database management system that offers high performance, scalability, and ease of use. Its robust feature set and strong community support make it an excellent choice for managing application data.',
    p2: 'In my projects, I leverage MySQL to:',
    list: [
      'Data Modeling',
      'Query Optimization',
      'Database Security',
      'Backup and Recovery',
      'Integration with Applications',
    ]
  },
  {
    h1: 'My Work with Vuetify',
    h2: 'Why Vuetify?',
    p1: 'Vuetify is a powerful and flexible Vue.js framework that follows the Material Design specification. It provides a wide range of pre-designed components and a responsive grid system, making it an excellent choice for building visually appealing and user-friendly interfaces.',
    p2: 'In my projects, I leverage Vuetify to:',
    list: [
      'Design Consistency',
      'Responsive Layouts',
      'Component Reusability',
      'Enhanced User Experience',
      'Rapid Prototyping',
    ]
  },
]

</script>