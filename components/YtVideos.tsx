import YtCarousel from './YtCarouse';

import { FC } from 'react';

interface YtVideosProps {
  recentVideos: {
    items: {
      id: { videoId: string };
      snippet: {
        title: string;
        description: string;
        thumbnails: { medium: { url: string } };
      };
    }[];
  };
}

const YtVideos: FC<YtVideosProps> = ({ recentVideos }) => {
  return (
    <section className="p-4 mt-10">
      <h2 className="font-bold mb-2 text-lg uppercase">Ultimi video</h2>
      <YtCarousel slides={recentVideos.items} />
    </section>
  );
};

export default YtVideos;
