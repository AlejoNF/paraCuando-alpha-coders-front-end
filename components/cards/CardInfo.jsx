import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const CardInfo = (props) => {
  let { imgSrc, title, text, url, votes } = props.data;

  const [changeColor, setChangeColor] = useState(false);

  const handleClick = () => {
    setChangeColor(!changeColor);
  };

  return (
    <div className="flex gap-3 justify-center flex-wrap ">
      <article className="mt-[1rem] mb-[1rem] bg-white w-full max-w-[300px] rounded-[20px] overflow-hidden h-[455px] t-[455px] ">
        <header className="relative">
          <Link href={'/artist/artist_id'}>
            <Image
              width={373}
              height={244}
              src={imgSrc}
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

        <section className="p-[15px]">
          <h3 className=" text-slate-600 text-2xl title-font font-bold font-Roboto text-blue pb-2">
            {title}
          </h3>
          <ul>
            <li>
              <span className="text-gray-600 text-base pb-1 p-[2px] font-Roboto">
                {text}
              </span>
            </li>
            <li>
              <span className="no-underline text-blue-600 font-normal font-Roboto">
                {url}
              </span>
            </li>
            <li>
              <span className="no-underline text-black font-normal font-Roboto">
                {votes}
              </span>
            </li>
          </ul>
        </section>
      </article>
    </div>
  );
};

export default CardInfo;
