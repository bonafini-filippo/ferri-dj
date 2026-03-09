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
  const [emblaRef] = useEmblaCarousel({
    dragFree: true,
    ...options,
  });

  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container flex gap-4">{children}</div>
      </div>
    </section>
  );
};

export default Carousel;
