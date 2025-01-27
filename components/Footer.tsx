import React from 'react';
import Line from './ui/Line';
import WebcraftLogo from '@/public/webcraft.png';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className="p-4 ">
      <div className="mb-4">
        <Line />
      </div>

      <div className="flex my-5  justify-between items-center font-extralight ">
        <Link href={'/privacy-policy'}>Privacy policy</Link>

        <Link href={'/privacy-policy'}>Privacy preferences</Link>
      </div>

      <a
        className="flex gap-1 font-semibold text-xs justify-center items-center uppercase"
        href="https://webcraft-iota.vercel.app/it"
      >
        <Image
          src={WebcraftLogo}
          width={150}
          height={1500}
          alt="Webcraft - soluzioni digitali"
        ></Image>
      </a>
    </div>
  );
};

export default Footer;
