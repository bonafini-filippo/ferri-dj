'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import {
  FaInstagram,
  FaSoundcloud,
  FaSpotify,
  FaPhone,
  FaEnvelope,
  FaVolumeUp,
  FaVolumeMute,
  FaUndo,
} from 'react-icons/fa';
import { FaTiktok } from 'react-icons/fa6';
import Link from 'next/link';
import ShareButton from './ui/ShareButton';

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const fadeRef = useRef<number | null>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [videoEnded, setVideoEnded] = useState(false);

  // Force autoplay on mount (mobile browsers sometimes block autoPlay attribute)
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const tryPlay = () => {
      video.muted = true;
      video.play().catch(() => {
        // If still blocked, retry on first user interaction
        const playOnInteraction = () => {
          video.muted = true;
          video.play();
          document.removeEventListener('touchstart', playOnInteraction);
          document.removeEventListener('click', playOnInteraction);
        };
        document.addEventListener('touchstart', playOnInteraction, { once: true });
        document.addEventListener('click', playOnInteraction, { once: true });
      });
    };

    if (video.readyState >= 2) {
      tryPlay();
    } else {
      video.addEventListener('loadeddata', tryPlay, { once: true });
    }
  }, []);

  const fadeVolume = useCallback((video: HTMLVideoElement, from: number, to: number, duration: number) => {
    if (fadeRef.current) cancelAnimationFrame(fadeRef.current);
    const steps = 20;
    const interval = duration / steps;
    let step = 0;
    const tick = () => {
      step++;
      const progress = step / steps;
      video.volume = Math.min(Math.max(from + (to - from) * progress, 0), 1);
      if (step < steps) {
        fadeRef.current = requestAnimationFrame(() => setTimeout(tick, interval));
      }
    };
    tick();
  }, []);

  const toggleMute = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;

    if (isMuted) {
      video.volume = 0;
      video.muted = false;
      setIsMuted(false);
      fadeVolume(video, 0, 1, 400);
    } else {
      fadeVolume(video, video.volume, 0, 400);
      setTimeout(() => {
        video.muted = true;
        setIsMuted(true);
      }, 420);
    }
  }, [isMuted, fadeVolume]);

  const handleVideoEnd = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;

    // fade out audio before showing image
    if (!video.muted) {
      fadeVolume(video, video.volume, 0, 500);
      setTimeout(() => {
        video.muted = true;
        setIsMuted(true);
        setVideoEnded(true);
      }, 520);
    } else {
      setVideoEnded(true);
    }
  }, [fadeVolume]);

  const handleReplay = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;

    setVideoEnded(false);

    // small delay to let crossfade start, then play with audio
    setTimeout(() => {
      video.currentTime = 0;
      video.volume = 0;
      video.muted = false;
      video.play();
      setIsMuted(false);
      fadeVolume(video, 0, 1, 600);
    }, 100);
  }, [fadeVolume]);

  return (
    <section>
      <div className="relative">
        {/* Top-left button: mute/unmute or replay */}
        {videoEnded ? (
          <button
            onClick={handleReplay}
            className="absolute p-4 text-white left-0 z-10"
            aria-label="Rivedi video"
          >
            <FaUndo />
          </button>
        ) : (
          <button
            onClick={toggleMute}
            className="absolute p-4 text-white left-0 z-10"
            aria-label={isMuted ? 'Attiva audio' : 'Disattiva audio'}
          >
            {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
          </button>
        )}
        <ShareButton className="absolute p-4 text-white flex justify-center items-center gap-2 right-0 z-10" />

        {/* Image layer */}
        <Image
          className={`w-full absolute inset-0 h-full object-cover transition-opacity duration-700 ${
            videoEnded ? 'opacity-100' : 'opacity-0'
          }`}
          src="/lorenzo-ferri.png"
          alt="Lorenzo Ferri DJ"
          width={1000}
          height={1000}
        />

        {/* Video layer */}
        <video
          ref={videoRef}
          className={`w-full transition-opacity duration-700 ${
            videoEnded ? 'opacity-0' : 'opacity-100'
          }`}
          src="/video.mp4"
          autoPlay
          muted
          playsInline
          onEnded={handleVideoEnd}
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
