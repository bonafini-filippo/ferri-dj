'use client';

import { Track } from '@/data/tracks';
import Carousel from './Carousel';
import Card from './ui/Card';

interface TracksProps {
  title: string;
  tracks: Track[];
}

const Tracks = ({ title, tracks }: TracksProps) => {
  return (
    <section className="p-4 mt-8">
      <h2 className="font-bold mb-2 text-lg uppercase">{title}</h2>
      <Carousel>
        {tracks.map((track) => (
          <div
            className="embla__slide relative bg-[#2a2a2a] max-w-[300px] md:max-w-[390px] shrink-0 gap-4 overflow-hidden rounded-lg md:min-h-[80px] min-h-[70px]"
            key={track.id}
          >
            <div className="embla__slide__number">
              <Card
                title={track.title}
                description={track.description}
                url={track.url}
                cover={track.cover}
                platform={track.platform}
              />
            </div>
          </div>
        ))}
      </Carousel>
    </section>
  );
};

export default Tracks;
