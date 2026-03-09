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
      className="bg-[#2a2a2a] max-w-[300px] md:max-w-[390px] flex shrink-0 justify-start items-center gap-4 overflow-hidden rounded-lg md:min-h-[100px] min-h-[80px]"
    >
      <div className="flex-shrink-0 relative h-[80px] w-[80px] md:h-[100px] md:w-[100px]">
        <Image
          className="object-cover"
          fill
          src={cover}
          alt={title}
        />
        <div
          className={`absolute bottom-1 right-1 p-1 rounded-full ${
            isSpotify ? 'bg-[#1DB954]' : 'bg-[#FF5500]'
          }`}
        >
          {isSpotify ? (
            <FaSpotify className="text-white text-xs" />
          ) : (
            <FaSoundcloud className="text-white text-xs" />
          )}
        </div>
      </div>
      <div className="grow overflow-hidden pr-3">
        <h3 className="md:text-lg text-base font-semibold line-clamp-1">
          {title}
        </h3>
        <p className="line-clamp-1 text-sm text-gray-400">{description}</p>
      </div>
    </Link>
  );
};

export default Card;
