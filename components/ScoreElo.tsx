import { getElo } from '@/actions/getElo';
import React from 'react';
import ChessLogo from '../public/chessLogo.webp';
import Image from 'next/image';
import { FaBolt, FaStopwatch } from 'react-icons/fa';
import Bullet from '../public/bullet.svg';
import { IoIosArrowDropright } from 'react-icons/io';
import Link from 'next/link';

const ScoreElo = async () => {
  const score = await getElo();
  return (
    <section className="p-4 mt-5">
      <Link
        href="https://www.chess.com/member/moro182"
        className="bg-[#2a2a2a] relative rounded-md overflow-hidden  flex gap-6 p-4  items-center"
      >
        <span className="absolute right-4 top-4 text-2xl">
          <IoIosArrowDropright size={32} />
        </span>
        <div className="rounded-xl overflow-hidden">
          <Image src={ChessLogo} width={150} height={150} alt="Chess.com" />
        </div>
        <div className="text-xl tracking-wider">
          <div className="flex  items-center gap-2">
            <FaStopwatch size={28} />
            <span>
              <span className="font-light">Rapid: </span>
              <span className="font-semibold">
                {score.chess_rapid.last.rating}
              </span>
            </span>
          </div>
          <div className="flex items-center gap-2 my-4">
            <FaBolt size={28} />
            <span>
              <span className="font-light">Blitz: </span>
              <span className="font-semibold">
                {score.chess_blitz.last.rating}
              </span>
            </span>
          </div>
          <div className="flex items-center gap-2 ">
            <div className="flex justify-center items-center w-[28px] h-[28px] ">
              <Image src={Bullet} width={22} height={22} alt="bullet" />
            </div>

            <span>
              <span className="font-light">Bullet: </span>
              <span className="font-semibold">
                {score.chess_bullet.last.rating}
              </span>
            </span>
          </div>
        </div>
      </Link>
    </section>
  );
};

export default ScoreElo;
