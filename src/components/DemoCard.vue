<template>
  <q-card class="q-pa-md" :class="{ featured: isFeatured }">
    <q-img :src="image" :alt="title" v-if="image" />
    <h2>{{ title }}</h2>
    <p v-if="message">{{ message }}</p>

    <div class="row justify-center">
      <q-btn :label="buttonText" v-if="buttonText" color="green" />
    </div>
  </q-card>
</template>

<script setup lang="ts">
export interface DemoCardProps {
  image?: string;
  title: string;
  message?: string;
  buttonText?: string;
  isFeatured?: boolean;
}

withDefaults(defineProps<DemoCardProps>(), {
  message: '',
  buttonText: '',
  isFeatured: false,
});
</script>

<style scoped>
.featured {
  background-color: yellow;
  border: solid 2px red;
}
</style>
