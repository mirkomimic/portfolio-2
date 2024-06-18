<template>
  <v-toolbar id="toolbar" class="bg-transparent position-fixed" elevation="1" style="z-index: 10;" density="comfortable">
    <v-container>
      <div class="d-flex align-center h-100">

        <div
          @click="goToSection(1)" 
          class="roboto-mono text-h5 cursor-pointer"
          >M.M.
        </div>

        <v-spacer></v-spacer>

        <div class="d-flex align-center ga-4">
          <div v-for="(item, index) in navItems" :key="index">
            <v-btn
              v-if="!item.items"
              @click="goToSection(item.section)"
              class="pa-1"
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
          </div>
        </div>
      </div>
    </v-container>
  </v-toolbar>
</template>

<script setup>
import { computed, onMounted, ref, watch } from 'vue';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import ScrollToPlugin from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

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

onMounted(() => {
  
  const toolbar = document.querySelector('#toolbar')
  
  gsap.to(toolbar, {
    scrollTrigger: {
      target: '#section_1',
      start: 'top+=300 top',
      onEnter: () => {
        toolbar.classList.remove('bg-transparent')
        toolbar.classList.add('glassy2')
      },
      onLeaveBack: () => {
        toolbar.classList.add('bg-transparent')
        toolbar.classList.remove('glassy2')
      }
    },
    
  
  })
})




</script>

<style scoped>
.glassy2 {
  background-color: rgba(254, 254, 254, 0.19);
  backdrop-filter: blur(15px);
}
</style>