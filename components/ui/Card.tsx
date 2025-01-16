import Image from 'next/image';

interface CardProps {
  title: string;
  description: string;
  image: any;
}

const Card = ({ title, description, image }: CardProps) => {
  return (
    <div className="bg-[#2a2a2a] max-w-[390px] flex shrink-0 justify-center items-center gap-5 overflow-hidden rounded-lg min-h-[150px] min-w-[150px]">
      <div className="h-[150px] w-[150px]  shrink-0">
        <Image
          className="object-cover h-full w-full"
          width={150}
          height={150}
          src={image}
          alt="image"
        />
      </div>
      <div className="font-light grow">
        <h1 className="text-xl mb-1 line-clamp-2 font-semibold">{title}</h1>
        <p className="line-clamp-2 text-sm">{description}</p>
      </div>
    </div>
  );
};

export default Card;
