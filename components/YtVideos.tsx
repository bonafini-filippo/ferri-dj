import getYtVideos from '@/actions/getVideos';
import Card from './ui/Card';

const YtVideos = async () => {
  const { items } = await getYtVideos();
  return (
    <div className="flex gap-4 overflow-x-scroll scrollbar-hide p-4 mt-6">
      {items.map((item: any) => (
        <Card
          key={item.id.videoId}
          title={item.snippet.title}
          description={item.snippet.description}
          image={item.snippet.thumbnails.medium.url}
        />
      ))}
    </div>
  );
};

export default YtVideos;
