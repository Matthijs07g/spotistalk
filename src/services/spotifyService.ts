import axios from 'axios';

const BASE_URL = 'https://api.spotify.com/v1';

// Create an Axios instance with default settings
const spotifyClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    // Set up your authorization header with Spotify Access Token (you may implement proper auth later)
    Authorization: 'Bearer YOUR_SPOTIFY_ACCESS_TOKEN',
  },
});

export const getArtistData = async (artistId: string) => {
  try {
    const response = await spotifyClient.get(`/artists/${artistId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching artist data:', error);
    throw error;
  }
};

// Export other functions for different endpoints as required
