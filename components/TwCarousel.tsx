'use client';
import { EmblaOptionsType } from 'embla-carousel';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';
import Link from 'next/link';
import { FaEye } from 'react-icons/fa';
import Carousel from './Carousel';

type SlideType = {
  id: number;
  url: string;
  view_count: number;
  duration: string;
  title: string;
  thumbnail_url: string;
};

type PropType = {
  slides: SlideType[];
  options?: EmblaOptionsType;
};

const TwCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const [] = useEmblaCarousel(options);

  return (
    <Carousel>
      {slides.map((item) => (
        <div
          className="embla__slide relative bg-[#2a2a2a] max-w-[300px] md:max-w-[390px] shrink-0 gap-4 overflow-hidden rounded-lg md:min-h-[150px] md:min-w-[150px] min-h-[120px] min-w-[120px]"
          key={item.id}
        >
          <div className="embla__slide__number">
            <Link href={item.url} key={item.id} className="">
              <div className="absolute top-2 right-3 p-1 bg-[#2a2a2a] rounded-md">
                <span className="flex items-center gap-2">
                  <div>
                    <FaEye />
                  </div>
                  <div>{item.view_count}</div>
                </span>
              </div>
              <div className="absolute bottom-2 left-3 p-1 bg-[#2a2a2a] rounded-md">
                <span className="flex items-center gap-2">
                  {item.duration.replace(/h|m|s/g, (match: string) =>
                    match === 'h' ? ':' : match === 'm' ? ':' : ''
                  )}
                </span>
              </div>
              <div>
                <Image
                  width={640} // Larghezza desiderata
                  height={360} // Altezza desiderata
                  alt={item.title}
                  src={item.thumbnail_url
                    .replace('%{width}', '640')
                    .replace('%{height}', '360')}
                />
              </div>
            </Link>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default TwCarousel;
