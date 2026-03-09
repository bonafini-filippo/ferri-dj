'use client';

import { useCallback, useRef, useState } from 'react';
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
  const silentVideoRef = useRef<HTMLVideoElement>(null);
  const audioVideoRef = useRef<HTMLVideoElement>(null);
  const fadeTimerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [videoEnded, setVideoEnded] = useState(false);

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
    const silent = silentVideoRef.current;
    const audio = audioVideoRef.current;
    if (!silent || !audio) return;

    if (isMuted) {
      // Switch from silent to audio video
      audio.currentTime = silent.currentTime;
      audio.volume = 0;
      audio.play();
      silent.style.display = 'none';
      audio.style.display = 'block';
      setIsMuted(false);
      fadeVolume(audio, 0, 1, 400);
    } else {
      // Switch from audio to silent video
      fadeVolume(audio, audio.volume, 0, 400, () => {
        silent.currentTime = audio.currentTime;
        audio.style.display = 'none';
        silent.style.display = 'block';
        audio.pause();
        setIsMuted(true);
      });
    }
  }, [isMuted, fadeVolume]);

  const handleVideoEnd = useCallback(() => {
    const audio = audioVideoRef.current;

    if (!isMuted && audio) {
      fadeVolume(audio, audio.volume, 0, 500, () => {
        audio.pause();
        setIsMuted(true);
        setVideoEnded(true);
      });
    } else {
      setVideoEnded(true);
    }
  }, [isMuted, fadeVolume]);

  const handleReplay = useCallback(() => {
    const silent = silentVideoRef.current;
    const audio = audioVideoRef.current;
    if (!silent || !audio) return;

    setVideoEnded(false);

    setTimeout(() => {
      // Replay with audio
      audio.currentTime = 0;
      audio.volume = 0;
      audio.play();
      silent.style.display = 'none';
      audio.style.display = 'block';
      setIsMuted(false);
      fadeVolume(audio, 0, 1, 600);
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

        {/* Silent video - autoplays reliably on iOS (no audio track) */}
        {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
        <video
          ref={silentVideoRef}
          className={`w-full transition-opacity duration-700 ${
            videoEnded ? 'opacity-0' : 'opacity-100'
          }`}
          src="/video-silent.mp4"
          autoPlay
          muted
          playsInline
          preload="auto"
          onEnded={handleVideoEnd}
        />

        {/* Audio video - hidden by default, shown when unmuted */}
        {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
        <video
          ref={audioVideoRef}
          className={`w-full transition-opacity duration-700 ${
            videoEnded ? 'opacity-0' : 'opacity-100'
          }`}
          style={{ display: 'none' }}
          src="/video.mp4"
          playsInline
          preload="auto"
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
