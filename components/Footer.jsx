import Image from 'next/image';

export default function Footer() {
  return (
    <div>
      <div className="pt-20 w-[1280px] container flex justify-center ml-[1rem]">
        <div className="flex justify-center "></div>
      </div>
      <div>
        <div className="flex gap-3 justify-center">
          <input
            className=" absolute mt-[301px] w-[465px] border bg-white border-solid-[1px] border-gray-300 cursor-pointer px-5 py-3 rounded-full text-gray-500 text-xs"
            type="text"
            placeholder="¿Qué quieres ver en tu ciudad? 🔍"
          />
        </div>
        <Image
          width={1280}
          height={488}
          src="/rectangle22.png"
          alt="atoms-img"
          // className={styles.footer}
          className="w-full h-[488px] "
        ></Image>
      </div>
    </div>
  );
}
