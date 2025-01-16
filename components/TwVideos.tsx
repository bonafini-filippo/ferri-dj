import { getTwVideos } from '@/actions/getVideos';
import Image from 'next/image';
import { FaEye } from 'react-icons/fa';

interface DataProps {
  id: string;
  title: string;
  thumbnail_url: string;
  view_count: number;
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
          className="relative bg-[#2a2a2a] max-w-[300px] md:max-w-[390px]  shrink-0  gap-4 overflow-hidden rounded-lg md:min-h-[150px] md:min-w-[150px] min-h-[120px] min-w-[120px]"
        >
          <div className="absolute top-4 right-4 p-2 ">
            <span className="flex items-center gap-2">
              <div>
                <FaEye />
              </div>
              <div> {item.view_count}</div>
            </span>
          </div>
          <div className="absolute bottom-0 left-0 p-2 ">
            <span className="flex items-center gap-2">{item.duration}</span>
          </div>
          <div>
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
        </div>
      ))}
    </div>
  );
};

export default TwVideos;
