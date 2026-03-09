export interface Track {
  id: string;
  title: string;
  description: string;
  url: string;
  cover: string;
  platform: 'spotify' | 'soundcloud';
}

export const tracks: Track[] = [
  // ========== SPOTIFY ==========
  {
    id: 'sp-1',
    title: 'Feel the Light',
    description: 'Lorenzo Ferri',
    url: 'https://open.spotify.com/track/2XjY3G0JfERc55CsAbQvhh',
    cover: 'https://i.scdn.co/image/ab67616d00001e02238d7a40d97c6e9baf69b20c',
    platform: 'spotify',
  },
  {
    id: 'sp-2',
    title: 'Bounce',
    description: 'Lorenzo Ferri',
    url: 'https://open.spotify.com/track/3OcQSMvBi2NbyLB8OwDaAR',
    cover: 'https://i.scdn.co/image/ab67616d00001e02a78a06c36a76af9290c34473',
    platform: 'spotify',
  },
  {
    id: 'sp-3',
    title: 'Fucked',
    description: 'Lorenzo Ferri',
    url: 'https://open.spotify.com/track/5gmUkIIhk2U4q2VJ2HMV3W',
    cover: 'https://i.scdn.co/image/ab67616d00001e023fd8b05ec02ba5cb2f3b9f8e',
    platform: 'spotify',
  },
  {
    id: 'sp-4',
    title: 'Papi Dale Duro',
    description: 'Lorenzo Ferri',
    url: 'https://open.spotify.com/track/56PUTn6F4JddsRaab5Pp9w',
    cover: 'https://i.scdn.co/image/ab67616d00001e02d475a81aef8109464d69d503',
    platform: 'spotify',
  },
  {
    id: 'sp-5',
    title: 'Neon Pulse',
    description: 'Lorenzo Ferri',
    url: 'https://open.spotify.com/track/2CG06rtHIlMCjRH8OrvYaq',
    cover: 'https://i.scdn.co/image/ab67616d00001e02862ec6e90880cd4992417cff',
    platform: 'spotify',
  },
  // ========== SOUNDCLOUD ==========
  // Aggiungi qui le tracce SoundCloud quando vuoi
];
