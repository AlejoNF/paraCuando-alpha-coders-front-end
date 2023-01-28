import Image from 'next/image';
import Link from 'next/link';

const Artist = () => {
  return (
    <div className="mt-2">
      <div className="pl-40 pr-40 pt-6 flex gap-8 justify-center">
        <ul>
          <Link href={'/'}>
            <span>Rock</span>
            <span>/ Rock</span>
            <span>/ Rock</span>
          </Link>
          <li className="text-black-900 text-[48px] title-font font-bold font-[Roboto] pb-[20px]">
            <p>Title1</p>
          </li>
          <li className=" text-gray-400 text-base pb-[35px]">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
              eius vitae voluptatibus, maxime aspernatur numquam! Odio,
              laboriosam rerum quibusdam quas ducimus totam ipsum expedita culpa
              quidem vitae tenetur consequatur nobis!
            </p>
          </li>
          <li>
            <span className="no-underline text-blue-500 text-base">
              Texts 2
            </span>
          </li>
          <li className="  pt-[10px] pb-8 flex gap-8">
            <Image
              src="/img/person.png"
              alt="person"
              width={51}
              height={51}
            ></Image>
            {/* <img src="/img/person.png" alt="person" /> */}
            <span>Title 3</span>
          </li>
          <li className="flex gap-8 justify-center text-white pb-[]">
            <button className="w-[379px] h-[46px] bg-blue-700 text-white-60 border cursor-pointer px-5 py-3 rounded-full  text-xs hover:bg-slate-300 hover:text-blue">
              Votar!
            </button>
          </li>
        </ul>
        <Image
          src="/Bts.png"
          alt="atoms-img"
          width={538}
          height={381}
          className="w-[538px] h-[381px]"
        ></Image>
        {/* <img className="w-[539px] h-[381px]" src="/Bts.png" alt="atoms-img" /> */}
      </div>
    </div>
  );
};

export default Artist;
