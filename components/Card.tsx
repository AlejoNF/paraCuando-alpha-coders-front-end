import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const Card = () => {
  const [changeColor, setChangeColor] = useState(false);

  const handleClick = () => {
    setChangeColor(!changeColor);
  };

  return (
    <div className="flex gap-3 justify-center flex-wrap">
      <article className="mt-[1rem] mb-[1rem] bg-white w-full max-w-[300px] rounded-[20px] overflow-hidden h-[455px] t-[455px] ">
        <header className="relative">
          <Link href={'/artist/artist_id'}>
            <Image
              width={373}
              height={244}
              src="/Bts.png"
              alt="atoms-img"
            ></Image>
          </Link>

          <section>
            <div className="absolute top-[13.5rem] ml-[15rem]  cursor-pointer hover:scale-110 hover:transform-[   100ms ease-linear] ">
              <button
                onClick={handleClick}
                className={`w-[51px] h-[51px] border cursor-pointer px-[7px] rounded-full text-white text-[40px]  hover:bg-pink-400 hover:text-white font-sans ${
                  changeColor === true ? 'bg-pink-400 ' : 'bg-slate-300'
                }`}
              >
                ♡
              </button>
            </div>
          </section>
        </header>

        <section className="p-[20px]">
          <h3 className=" text-slate-600 text-2xl title-font font-bold font-Roboto text-blue pb-2">
            Title 1
          </h3>
          <ul>
            <li>
              <span className="text-gray-600 text-base pb-1 p-1 font-Roboto">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
                quo maxime, neque corrupti itaque animi.
              </span>
            </li>
            <li>
              <span className="no-underline text-blue-600 font-normal font-Roboto">
                Texts 2
              </span>
            </li>
            <li>
              <span className="no-underline text-black font-normal font-Roboto">
                Text 3
              </span>
            </li>
          </ul>
        </section>
      </article>
    </div>
  );
};

export default Card;
