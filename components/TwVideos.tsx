import Carousel from './TwCarousel';

interface TwVideosProps {
  recentLive: {
    data: {
      id: number;
      url: string;
      view_count: number;
      duration: string;
      title: string;
      thumbnail_url: string;
    }[];
  };
  isTwLive: boolean;
}

const TwVideos = ({ recentLive, isTwLive }: TwVideosProps) => {
  // Se isTwLive è true, escludi il primo elemento (l'ultimo video)
  const videosToShow = isTwLive ? recentLive.data.slice(1) : recentLive.data;

  return (
    <section className="p-4 mt-4">
      <h2 className="font-bold mb-2 text-lg uppercase">Ultime live</h2>
      <Carousel slides={videosToShow} />
    </section>
  );
};

export default TwVideos;
