import Image from 'next/image';

export default function Footer() {
  return (
    <div className="pt-10 w-[1285px] container ">
      <div className="flex justify-center ">
        <input
          className="absolute  w-[360px] mt-[320px] border bg-white border-solid-[1px] border-gray-300 cursor-pointer px-5 py-3 rounded-full text-gray-500 text-xs"
          type="text"
          placeholder="¿Qué quieres ver en tu ciudad? 🔍"
        />
        <Image
          width={1285}
          height={488}
          src="/rectangle22.png"
          alt="atoms-img"
        ></Image>
        {/* <img
          className="w-[1285px] h-[488px] "
          src="/rectangle22.png"
          alt="atoms-img"
        /> */}
      </div>
    </div>
  );
}
