<template>
  <div id="section_4" class="h-screen position-relative bg-grey-darken-4">
    <v-row class="h-100">
      <v-col 
        class="d-flex align-center justify-center pa-0"
      >
        <v-form v-model="form" class="w-66" @submit.prevent="submit">
          <h4 class="text-h4 mb-3">Contact Me</h4>

          <v-text-field 
            label="Email"
            :rules="[rules.required, rules.email]"
            class="mb-3"
          ></v-text-field>

          <v-textarea 
            label="Message"
            :rules="[rules.required]"
            class="mb-3"
          ></v-textarea>

          <v-btn type="submit" variant="tonal">Submit</v-btn>
        </v-form>
      </v-col>
    </v-row>
  </div>
</template>

<script setup>
import { ref } from 'vue';


const form = ref()

const rules = {
  required: value => !!value || 'Required.',
  email: value => {
    const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return pattern.test(value) || 'Invalid e-mail.'
  },

}

const submit = () => {
  if (!form.value) return
  console.log('submit');
}


</script>

<style scoped>
</style>