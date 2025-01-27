import { getElo, getPosition } from '@/actions/getElo';
import { getTwVideos, getYtVideos, isLive } from '@/actions/getVideos';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import ScoreElo from '@/components/ScoreElo';
import TwVideos from '@/components/TwVideos';
import YtVideos from '@/components/YtVideos';

export default async function Home() {
  const isTwLive = await isLive();
  const RecentVideos = await getYtVideos();
  const RecentLive = await getTwVideos();
  const score = await getElo();
  const position = await getPosition();
  return (
    <div>
      <Hero isTwLive={isTwLive} />
      <YtVideos recentVideos={RecentVideos} />
      <TwVideos recentLive={RecentLive} isTwLive={isTwLive} />
      <ScoreElo score={score} position={position} />
      <Footer />
    </div>
  );
}
