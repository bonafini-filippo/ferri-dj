'use server';

export default async function getYtVideos() {
  const API_KEY = 'AIzaSyB_Zx5QKNjMDTdq1v2SJmVxN1CYHdjRn0M';
  const CHANNEL_ID = 'UCvb-39ePh7PujNIktpJ1oMA';
  const MAX_RESULTS = 6;

  const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${CHANNEL_ID}&maxResults=${MAX_RESULTS}&order=date&type=video&key=${API_KEY}`;

  try {
    const response = await fetch(url);
    return await response.json();
  } catch (error) {
    return error;
  }
}
