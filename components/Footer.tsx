import React from 'react';
import Line from './ui/Line';
import WebcraftLogo from '@/public/webcraft-logo.svg';
import Image from 'next/image';

const Footer = () => {
  return (
    <div className="p-4 ">
      <div className="mb-4">
        <Line />
      </div>

      <div className="flex  justify-end items-center font-extralight text-sm">
        <a href="https://webcraft-iota.vercel.app/it">
          <Image
            src={WebcraftLogo}
            width={200}
            height={90}
            alt="Webcraft - soluzioni digitali"
          ></Image>
        </a>
      </div>
    </div>
  );
};

export default Footer;
