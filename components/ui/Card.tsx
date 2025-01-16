import Image from 'next/image';

interface CardProps {
  title: string;
  description: string;
  image: string;
}

const Card = ({ title, description, image }: CardProps) => {
  return (
    <div className="bg-[#2a2a2a] max-w-[300px] md:max-w-[390px] flex shrink-0 justify-center items-center gap-4 overflow-hidden rounded-lg md:min-h-[150px] md:min-w-[150px] min-h-[120px] min-w-[120px]">
      <div className="h-[120px] w-[120px] md:h-[150px] md:w-[150px]  shrink-0">
        <Image
          className="object-cover h-full w-full"
          width={250}
          height={250}
          src={image}
          alt={title}
        />
      </div>
      <div className="font-light grow">
        <h1 className="md:text-xl text-lg mb-1 mr-10 line-clamp-2 font-semibold">
          {title}
        </h1>
        <p className="line-clamp-2 text-sm">{description}</p>
      </div>
    </div>
  );
};

export default Card;
