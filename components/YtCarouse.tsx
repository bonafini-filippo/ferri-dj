'use client';
import { EmblaOptionsType } from 'embla-carousel';
import useEmblaCarousel from 'embla-carousel-react';
import Card from './ui/Card';
import Carousel from './Carousel';

type PropType = {
  slides: ItemProps[];
  options?: EmblaOptionsType;
};

interface ItemProps {
  id: { videoId: string };
  snippet: {
    title: string;
    description: string;
    thumbnails: { medium: { url: string } };
  };
}

const YtCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const [] = useEmblaCarousel(options);

  return (
    <Carousel>
      {slides.map((item) => (
        <div
          className="embla__slide relative bg-[#2a2a2a] max-w-[300px] md:max-w-[390px] shrink-0 gap-4 overflow-hidden rounded-lg md:min-h-[150px] md:min-w-[150px] min-h-[120px] min-w-[120px]"
          key={item.id.videoId}
        >
          <div className="embla__slide__number">
            <Card
              key={item.id.videoId}
              video_id={item.id.videoId}
              title={item.snippet.title}
              description={item.snippet.description}
              image={item.snippet.thumbnails.medium.url}
            />
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default YtCarousel;
