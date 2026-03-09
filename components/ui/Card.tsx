import Image from 'next/image';
import Link from 'next/link';
import { FaSpotify, FaSoundcloud } from 'react-icons/fa';

interface CardProps {
  title: string;
  description: string;
  url: string;
  cover: string;
  platform: 'spotify' | 'soundcloud';
}

const Card = ({ title, description, url, cover, platform }: CardProps) => {
  const isSpotify = platform === 'spotify';

  return (
    <Link
      href={url}
      target="_blank"
      className="bg-[#2a2a2a] w-full flex items-center gap-4 overflow-hidden rounded-lg h-[100px] md:h-[120px] relative"
    >
      <div className="flex-shrink-0 relative h-[100px] w-[100px] md:h-[120px] md:w-[120px]">
        <Image
          className="object-cover"
          fill
          src={cover}
          alt={title}
        />
      </div>
      <div className="grow overflow-hidden pr-3">
        <h3 className="md:text-lg text-base font-semibold line-clamp-1">
          {title}
        </h3>
        <p className="line-clamp-1 text-sm text-gray-400">{description}</p>
      </div>
      <div
        className={`absolute bottom-2 right-2 p-1.5 rounded-full ${
          isSpotify ? 'bg-[#1DB954]' : 'bg-[#FF5500]'
        }`}
      >
        {isSpotify ? (
          <FaSpotify className="text-white text-sm" />
        ) : (
          <FaSoundcloud className="text-white text-sm" />
        )}
      </div>
    </Link>
  );
};

export default Card;
