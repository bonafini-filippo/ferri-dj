import Image from 'next/image';
import MoroniImg from '@/public/luca-moroni.png';
// import MoroniImg from '@/public/luca-moroni.jpeg';
import { FaInstagram, FaYoutube, FaTwitch, FaChess } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { isLive } from '@/actions/getVideos';
import { FaCircle } from 'react-icons/fa';
import Link from 'next/link';
import ShareButton from './ui/ShareButton';

const Hero = async () => {
  const isTwLive = await isLive();

  return (
    <section>
      {/* IMMAGINE DI COPERTINA */}
      <div className="relative">
        {isTwLive && (
          <Link
            href={'https://www.twitch.tv/gm_moro'}
            className="absolute p-4 text-red-500 flex justify-center items-center gap-2"
          >
            <FaCircle />
            <span className="text-xl uppercase">Live now</span>
          </Link>
        )}
        <ShareButton className="absolute p-4 text-red-500 flex justify-center items-center gap-2 right-0" />
        <Image
          className="w-full"
          src={MoroniImg}
          alt="Luca Moroni"
          width={1000}
          height={1000}
        />
      </div>
      {/* TITOLO */}
      <div>
        <h1 className="text-[38px]  text-center font-bold mt-16 ">
          Luca Moroni Jr
        </h1>
      </div>
      {/* SOCIAL  */}
      <div className="flex text-2xl mt-6 justify-center items-center gap-10">
        <Link href={'https://www.instagram.com/lucamoronijr/'}>
          <FaInstagram />
        </Link>
        <Link href={'https://www.youtube.com/@gm_moro6252'}>
          <FaYoutube />
        </Link>
        <Link href={'https://www.twitch.tv/gm_moro'} className="relative">
          {isTwLive && (
            <FaCircle
              size={12}
              className="absolute -top-1 -left-1 text-red-500"
            />
          )}
          <FaTwitch />
        </Link>
        <Link href={''}>
          <FaXTwitter />
        </Link>
        <Link href={'https://ratings.fide.com/profile/865834'}>
          <FaChess />
        </Link>
      </div>
    </section>
  );
};

export default Hero;
