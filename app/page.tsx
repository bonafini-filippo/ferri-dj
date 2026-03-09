import Hero from '@/components/Hero';
import Tracks from '@/components/Tracks';
import { tracks } from '@/data/tracks';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'MusicGroup',
  name: 'Lorenzo Ferri',
  description: 'DJ italiano',
  url: 'https://ferri-lorenzo.vercel.app',
  genre: 'Electronic',
  sameAs: [
    'https://www.instagram.com/lorenzoo_ferriidj',
    'https://www.tiktok.com/@lorenzooferrii',
    'https://soundcloud.com/lorenzo-ferri-189672089',
    'https://spotify.link/EyLTsr74xDb',
  ],
};

export default function Home() {
  const spotifyTracks = tracks.filter((t) => t.platform === 'spotify');
  const soundcloudTracks = tracks.filter((t) => t.platform === 'soundcloud');

  return (
    <>
      <Script
        id="json-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div>
        <Hero />
        {spotifyTracks.length > 0 && (
          <Tracks title="Spotify" tracks={spotifyTracks} />
        )}
        {soundcloudTracks.length > 0 && (
          <Tracks title="SoundCloud" tracks={soundcloudTracks} />
        )}
        <div className="flex justify-center items-center gap-2 py-8 opacity-40 hover:opacity-70 transition-opacity">
          <Link
            href="https://www.obelica.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2"
          >
            <Image
              src="/obelica-dark.svg"
              width={80}
              height={20}
              alt="Obelica"
            />
          </Link>
        </div>
      </div>
    </>
  );
}
