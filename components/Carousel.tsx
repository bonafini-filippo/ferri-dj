'use client';
import { EmblaOptionsType } from 'embla-carousel';
import useEmblaCarousel from 'embla-carousel-react';
import React from 'react';

type PropType = {
  options?: EmblaOptionsType;
  children: React.ReactNode;
};

const Carousel: React.FC<PropType> = (props) => {
  const { options, children } = props;
  const [emblaRef] = useEmblaCarousel(options);

  return (
    <section className="embla relative">
      <div className="absolute left-0 top-0 bottom-0 w-6 bg-gradient-to-r from-[#121212] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-6 bg-gradient-to-l from-[#121212] to-transparent z-10 pointer-events-none" />
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container flex gap-4">{children}</div>
      </div>
    </section>
  );
};

export default Carousel;
