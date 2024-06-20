<template>
  <v-toolbar id="toolbar" class="bg-transparent position-sticky top-0" elevation="1" density="comfortable" style="z-index: 10;">
    <v-container class="px-lg-15">
      <div class="d-flex align-center h-100">

        <div
          @click="goToSection(1)" 
          class="roboto-mono text-h5 cursor-pointer"
          >M.M.
        </div>

        <v-spacer></v-spacer>

        <v-list 
          class="d-flex align-center ga-4 bg-transparent"
        >

          <v-list-item v-for="(item, index) in navItems" :key="index" >
            <v-btn
              v-if="!item.items"
              @click="goToSection(item.section)"
              class="pa-1"
              :href="`#section_${item.section}`"
              :active="activeSection === item.section"
              >{{ item.name }}
            </v-btn>
          
            <v-menu
              v-else
              open-on-hover
              theme="dark"
            >
              <template v-slot:activator="{ props }">
                <v-btn
                  v-bind="props"
                  @click="goToSection(item.section)"
                  class="pa-1"
                  append-icon="mdi-chevron-down"
                >
                  {{ item.name }}
                </v-btn>
              </template>
              <v-list class="bg-brown-darken-4 roboto-mono" min-width="100" density="comfortable">
                <v-list-item
                  v-for="(subItem, index) in item.items"
                  :key="index"
                  :value="index"
                >
                  <v-list-item-title @click="goToSection(subItem.section)">
                    {{ subItem.name }}
                  </v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </v-list-item>

        </v-list>
      </div>
    </v-container>
  </v-toolbar>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import ScrollToPlugin from 'gsap/ScrollToPlugin';
import { useIntersectionObserver } from '@/composables/useInteractionObserver';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

const sections = ref([1, 2, 3, 4]);
const { activeSection } = useIntersectionObserver(sections, { threshold: .5 })

const navItems = [
  {
    name: 'About Me',
    section: 1,
  },
  {
    name: 'Stack',
    section: 2
  },
  {
    name: 'Projects',
    section: 3,
  },
  {
    name: 'Contact Me',
    section: 4,
  },
]

const goToSection = (section) => {
  gsap.to(window, {
    duration: .5,
    scrollTo: `#section_${section}`
  })
}

// onMounted(() => {
//   observer.value = new IntersectionObserver(entries => {
//     entries.forEach(entry => {
//       if (entry.isIntersecting) {
//         activeSection.value = parseInt(entry.target.id.split('_')[1])
//       }
//     })
//   }, {
//     threshold: .5
//   })

//   sections.value.forEach(section => {
//     const el = document.getElementById(`section_${section}`);
//     if (el) observer.value.observe(el);
//   });
  

//   // console.log(observer.observe(document.getElementById("section_4")));

//   const toolbar = document.querySelector('#toolbar')
  
//   gsap.to(toolbar, {
//     scrollTrigger: {
//       target: '#section_1',
//       start: 'top+=300 top',
//       onEnter: () => {
//         toolbar.classList.remove('bg-transparent')
//         toolbar.classList.add('glassy2')
//       },
//       onLeaveBack: () => {
//         toolbar.classList.add('bg-transparent')
//         toolbar.classList.remove('glassy2')
//       }
//     },
    
  
//   })
// })




</script>

<style scoped>
.glassy2 {
  background-color: rgba(28, 25, 25, 0.843);
  backdrop-filter: blur(15px);
}
</style>