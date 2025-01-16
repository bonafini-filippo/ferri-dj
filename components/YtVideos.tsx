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
    <div className="flex gap-4 overflow-x-scroll scrollbar-hide p-4 mt-6">
      {items.map((item: ItemProps) => (
        <Card
          key={item.id.videoId}
          video_id={item.id.videoId}
          title={item.snippet.title}
          description={item.snippet.description}
          image={item.snippet.thumbnails.medium.url}
        />
      ))}
    </div>
  );
};

export default YtVideos;
