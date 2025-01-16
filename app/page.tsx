import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import TwVideos from '@/components/TwVideos';
import YtVideos from '@/components/YtVideos';

export default function Home() {
  return (
    <div>
      <Hero />
      <YtVideos />
      <TwVideos />
      <Footer />
    </div>
  );
}
