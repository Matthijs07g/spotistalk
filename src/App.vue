<!-- src/App.vue -->
<template>
  <div id="app">
    <h1>Spotistalk - Spotify Stats Dashboard</h1>
    <div v-if="error">{{ error }}</div>
    <div v-else-if="artist">
      <ArtistCard :artist="artist" />
    </div>
    <div v-else>Loading...</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import { getArtistData } from './services/spotifyService';
import ArtistCard from './components/ArtistCard.vue';

export default defineComponent({
  name: 'App',
  components: { ArtistCard },
  setup() {
    const artist = ref(null);
    const error = ref('');

    onMounted(async () => {
      try {
        // Replace 'YOUR_ARTIST_ID' with a valid Spotify artist ID
        artist.value = await getArtistData('YOUR_ARTIST_ID');
      } catch (err) {
        error.value = 'Failed to load artist data.';
      }
    });

    return { artist, error };
  },
});
</script>

<style>
#app {
  font-family: Arial, sans-serif;
  text-align: center;
  margin: 2rem;
}
</style>
