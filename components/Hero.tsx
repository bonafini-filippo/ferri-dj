import Image from 'next/image';
import MoroniImg from '@/public/luca-moroni.jpeg';
import { FaInstagram, FaYoutube, FaTwitch, FaChess } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Hero = () => {
  return (
    <section>
      {/* IMMAGINE DI COPERTINA */}
      <div className="relative">
        <Image
          className="w-full"
          src={MoroniImg}
          alt="Luca Moroni"
          width={1000}
          height={1000}
        />
        <div className="bg-gradient-to-t from-[#121212] to-transparent  h-40 -bottom-0.5 right-0 left-0 absolute"></div>
      </div>
      {/* TITOLO */}
      <div>
        <h1 className="text-[38px]  text-center font-bold mt-16 ">
          Luca Moroni Jr - GM
        </h1>
        {/* <h2 className="text-[18px] text-center font-light  ">
          3 volte campione Italiano
        </h2> */}
      </div>
      {/* SOCIAL  */}
      <div className="flex text-2xl mt-6 justify-center items-center gap-10">
        <FaInstagram />
        <FaYoutube />
        <FaTwitch />
        <FaXTwitter />
        <FaChess />
      </div>
    </section>
  );
};

export default Hero;
