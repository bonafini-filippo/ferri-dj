import Image from 'next/image';
import Link from 'next/link';

interface CardProps {
  title: string;
  description: string;
  image: string;
  video_id: string;
}

const Card = ({ title, description, image, video_id }: CardProps) => {
  return (
    <Link
      href={'https://www.youtube.com/watch?v=' + video_id}
      className="bg-[#2a2a2a] max-w-[300px] md:max-w-[390px] flex shrink-0 justify-start items-center gap-4 overflow-hidden rounded-lg md:min-h-[150px] md:min-w-[150px] min-h-[120px] min-w-[120px]"
    >
      {/* Contenitore immagine con proporzioni fisse */}
      <div className="flex-shrink-0 relative h-[120px] w-[120px] md:h-[150px] md:w-[150px]">
        <Image
          className="object-cover rounded-md"
          fill
          src={image}
          alt={title}
        />
      </div>
      {/* Contenitore testo */}
      <div className="grow overflow-hidden p-1">
        <h1 className="md:text-xl text-lg mb-1 mr-2 line-clamp-2 font-semibold">
          {title}
        </h1>
        <p className="line-clamp-2 text-sm">{description}</p>
      </div>
    </Link>
  );
};

export default Card;
