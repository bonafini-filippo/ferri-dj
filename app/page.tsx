import Hero from '@/components/Hero';
import Tracks from '@/components/Tracks';
import { tracks } from '@/data/tracks';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const spotifyTracks = tracks.filter((t) => t.platform === 'spotify');
  const soundcloudTracks = tracks.filter((t) => t.platform === 'soundcloud');

  return (
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
  );
}
