import { getTwVideos } from '@/actions/getVideos';
import Image from 'next/image';

interface DataProps {
  id: string;
  title: string;
  thumbnail_url: string;
  views: number;
  duration: string;
  url: string;
}

const TwVideos = async () => {
  const { data } = await getTwVideos();
  return (
    <div className="flex gap-4 overflow-x-scroll scrollbar-hide p-4 mt-6">
      {data.map((item: DataProps) => (
        <div
          key={item.id}
          className="bg-[#2a2a2a] max-w-[300px] md:max-w-[390px] flex shrink-0 justify-center items-center gap-4 overflow-hidden rounded-lg md:min-h-[150px] md:min-w-[150px] min-h-[120px] min-w-[120px]"
        >
          <Image
            layout="intrinsic"
            width={640} // Larghezza desiderata
            height={360} // Altezza desiderata
            alt={item.title}
            src={item.thumbnail_url
              .replace('%{width}', '640')
              .replace('%{height}', '360')}
          />
        </div>
      ))}
    </div>
  );
};

export default TwVideos;
