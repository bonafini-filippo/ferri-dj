import {
  FaInstagram,
  FaSoundcloud,
  FaSpotify,
  FaPhone,
  FaEnvelope,
} from 'react-icons/fa';
import { FaTiktok } from 'react-icons/fa6';
import Link from 'next/link';
import ShareButton from './ui/ShareButton';

const Hero = () => {
  return (
    <section>
      <div className="relative">
        <ShareButton className="absolute p-4 text-white flex justify-center items-center gap-2 right-0 z-10" />
        <video
          className="w-full"
          src="/video.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
      </div>
      <div>
        <h1 className="text-[38px] text-center font-bold mt-7">
          Lorenzo Ferri
        </h1>
        <p className="text-center text-lg text-gray-400 uppercase tracking-widest">
          Italian DJ
        </p>
      </div>
      <nav
        aria-label="Social e contatti"
        className="flex text-2xl mt-6 justify-center items-center gap-8"
      >
        <Link
          href="https://www.instagram.com/lorenzoo_ferriidj"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <FaInstagram />
        </Link>
        <Link
          href="https://www.tiktok.com/@lorenzooferrii"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="TikTok"
        >
          <FaTiktok />
        </Link>
        <Link
          href="https://soundcloud.com/lorenzo-ferri-189672089"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="SoundCloud"
        >
          <FaSoundcloud />
        </Link>
        <Link
          href="https://spotify.link/EyLTsr74xDb"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Spotify"
        >
          <FaSpotify />
        </Link>
        <Link href="tel:+393312809143" aria-label="Chiama">
          <FaPhone />
        </Link>
        <Link href="mailto:lorenzoferri1102003@gmail.com" aria-label="Email">
          <FaEnvelope />
        </Link>
      </nav>
    </section>
  );
};

export default Hero;
