import React from 'react';
import ChessLogo from '../public/chessLogo.webp';
import Image from 'next/image';
import { FaBolt, FaStopwatch } from 'react-icons/fa';
import Bullet from '../public/bullet.svg';
import { IoIosArrowDropright } from 'react-icons/io';
import Link from 'next/link';

interface ScoreEloProps {
  score: {
    chess_rapid: { last: { rating: number } };
    chess_blitz: { last: { rating: number } };
    chess_bullet: { last: { rating: number } };
  };
  position: {
    world_rank_active: number;
    national_rank_active: number;
  };
}

const ScoreElo = async ({ score, position }: ScoreEloProps) => {
  return (
    <section className="p-4 mt-5">
      <Link
        href="https://www.chess.com/member/moro182"
        className="bg-[#2a2a2a] relative rounded-md overflow-hidden  flex gap-6 p-4  items-center"
      >
        <span className="absolute right-4 top-4 text-2xl">
          <IoIosArrowDropright size={32} />
        </span>
        <div className="rounded-xl w-[100px] h-[100px] md:w-[150px] md:h-[150px] overflow-hidden">
          <Image src={ChessLogo} width={150} height={150} alt="Chess.com" />
        </div>
        <div className="md:text-xl tracking-wider">
          <div className="flex  items-center gap-2">
            <FaStopwatch
              size={28}
              className="w-[18px] h-[18px] md:w-[28px] md:h-[28px] "
            />
            <span>
              <span className="font-light">Rapid: </span>
              <span className="font-semibold">
                {score.chess_rapid.last.rating}
              </span>
            </span>
          </div>
          <div className="flex items-center gap-2 my-4">
            <FaBolt
              size={28}
              className="w-[18px] h-[18px] md:w-[28px] md:h-[28px] "
            />
            <span>
              <span className="font-light">Blitz: </span>
              <span className="font-semibold">
                {score.chess_blitz.last.rating}
              </span>
            </span>
          </div>
          <div className="flex items-center gap-2 ">
            <div className="flex justify-center items-center  w-[18px] h-[18px] md:w-[28px] md:h-[28px]">
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
        <div></div>
      </Link>
      <div className="flex flex-col mt-10 mb-8">
        <div className=" text-[30px] uppercase bg-gradient-to-b from-gray-50 via-gray-400 to-slate-900 bg-clip-text text-transparent text-center">
          FIDE World Rank
        </div>
        <span className=" text-[140px] leading-none bg-gradient-to-b from-gray-50 via-gray-400 to-slate-900 bg-clip-text text-transparent text-center">
          {position.world_rank_active}
        </span>
      </div>
      <div>
        <div className=" text-[30px] uppercase bg-gradient-to-b from-gray-50 via-gray-400 to-slate-900 bg-clip-text text-transparent text-center">
          FIDE Italian Rank
        </div>
        <span className=" text-[140px] leading-none bg-gradient-to-b from-gray-50 via-gray-400 to-slate-900 bg-clip-text text-transparent text-center">
          {position.national_rank_active}
        </span>
      </div>
    </section>
  );
};

export default ScoreElo;
