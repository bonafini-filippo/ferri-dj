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
        <div className="mx-4 mt-10 mb-6">
          <div className="h-[0.5px] w-full bg-[#2a2a2a]" />
        </div>
        <div className="flex flex-col items-center gap-1 pb-8 opacity-50 hover:opacity-80 transition-opacity">
          <span className="text-xs text-gray-500 uppercase tracking-widest">
            powered by
          </span>
          <Link
            href="https://www.obelica.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/obelica-dark.svg"
              width={120}
              height={30}
              alt="Obelica"
            />
          </Link>
        </div>
      </div>
    </>
  );
}
