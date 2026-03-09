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
  const fadeTimerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [videoEnded, setVideoEnded] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Fix React hydration bug: force muted attribute in DOM for iOS autoplay
    video.defaultMuted = true;
    video.muted = true;
    video.setAttribute('muted', '');
    video.setAttribute('playsinline', '');
    video.setAttribute('webkit-playsinline', '');

    video.load();
    video.play().catch(() => {});

    const onCanPlay = () => {
      video.play().catch(() => {});
    };
    video.addEventListener('canplay', onCanPlay);

    return () => {
      video.removeEventListener('canplay', onCanPlay);
    };
  }, []);

  const fadeVolume = useCallback((video: HTMLVideoElement, from: number, to: number, duration: number, onDone?: () => void) => {
    if (fadeTimerRef.current) clearInterval(fadeTimerRef.current);
    const steps = 20;
    const interval = duration / steps;
    let step = 0;
    video.volume = Math.min(Math.max(from, 0), 1);
    fadeTimerRef.current = setInterval(() => {
      step++;
      const progress = step / steps;
      video.volume = Math.min(Math.max(from + (to - from) * progress, 0), 1);
      if (step >= steps) {
        if (fadeTimerRef.current) clearInterval(fadeTimerRef.current);
        fadeTimerRef.current = null;
        onDone?.();
      }
    }, interval);
  }, []);

  const toggleMute = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;

    if (isMuted) {
      video.volume = 0;
      video.muted = false;
      video.play();
      setIsMuted(false);
      fadeVolume(video, 0, 1, 400);
    } else {
      fadeVolume(video, video.volume, 0, 400, () => {
        video.muted = true;
        setIsMuted(true);
      });
    }
  }, [isMuted, fadeVolume]);

  const handleVideoEnd = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;

    if (!video.muted) {
      fadeVolume(video, video.volume, 0, 500, () => {
        video.muted = true;
        setIsMuted(true);
        setVideoEnded(true);
      });
    } else {
      setVideoEnded(true);
    }
  }, [fadeVolume]);

  const handleReplay = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;

    setVideoEnded(false);

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

        <Image
          className={`w-full absolute inset-0 h-full object-cover transition-opacity duration-700 ${
            videoEnded ? 'opacity-100' : 'opacity-0'
          }`}
          src="/lorenzo-ferri.png"
          alt="Lorenzo Ferri DJ"
          width={1000}
          height={1000}
        />

        <video
          ref={videoRef}
          className={`w-full transition-opacity duration-700 ${
            videoEnded ? 'opacity-0' : 'opacity-100'
          }`}
          autoPlay
          muted
          playsInline
          preload="auto"
          onEnded={handleVideoEnd}
          suppressHydrationWarning
        >
          <source src="/video.mp4" type="video/mp4" />
        </video>
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
