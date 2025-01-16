import { getYtVideos } from '@/actions/getVideos';
import Card from './ui/Card';

interface ItemProps {
  id: { videoId: string };
  snippet: {
    title: string;
    description: string;
    thumbnails: { medium: { url: string } };
  };
}

const YtVideos = async () => {
  const { items } = await getYtVideos();
  console.log(items);
  return (
    <section className="p-4 mt-10">
      <h2 className="font-bold mb-2 text-lg uppercase">Ultimi video</h2>
      <div className="flex gap-4 overflow-x-scroll scrollbar-hide ">
        {items?.map((item: ItemProps) => (
          <Card
            key={item.id.videoId}
            video_id={item.id.videoId}
            title={item.snippet.title}
            description={item.snippet.description}
            image={item.snippet.thumbnails.medium.url}
          />
        ))}
      </div>
    </section>
  );
};

export default YtVideos;
