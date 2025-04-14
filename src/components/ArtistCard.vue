<!-- src/components/ArtistCard.vue -->
<template>
    <div class="artist-card">
      <h2>{{ artist.name }}</h2>
      <img :src="artist.images[0]?.url" alt="Artist image" v-if="artist.images.length" />
      <p>Followers: {{ artist.followers.total }}</p>
      <p>Genres: {{ artist.genres.join(', ') }}</p>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, type PropType } from 'vue';
  
  interface Artist {
    name: string;
    images: { url: string }[];
    followers: { total: number };
    genres: string[];
  }
  
  export default defineComponent({
    name: 'ArtistCard',
    props: {
      artist: {
        type: Object as PropType<Artist>,
        required: true,
      },
    },
  });
  </script>
  
  <style scoped>
  .artist-card {
    border: 1px solid #ccc;
    padding: 1rem;
    border-radius: 8px;
    max-width: 300px;
  }
  </style>
  