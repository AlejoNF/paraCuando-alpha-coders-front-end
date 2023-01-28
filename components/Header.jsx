import Image from 'next/image';
import BtnTitle from './titleComponents/BtnTitle';

export default function Header() {
  return (
    <div>
      <div className="pt-20 w-[1285px] container flex justify-center ml-[1rem]">
        <div className="flex justify-center ">
          {/* <input
            className="absolute  w-[360px] mt-[320px] border bg-white border-solid-[1px] border-gray-300 cursor-pointer px-5 py-3 rounded-full text-gray-500 text-xs"
            type="text"
            placeholder="¿Qué quieres ver en tu ciudad? 🔍"
          /> */}
          {/* <Image
            width={1280}
            height={488}
            src="/img/Rectangle21.png"
            alt="atoms-img"
            className={styles.footer}
          ></Image> */}
        </div>
      </div>
      <div>
        {/* <Image
          src="/img/Rectangle21.png"
          width={1280}
          height={488}
          className={styles.header_img}
          alt="rectangle21"
        /> */}

        <Image
          width={1280}
          height={488}
          src="/img/Rectangle21.png"
          alt="atoms-img"
          className="w-[1280px] h-[488px]"
        ></Image>
        <Image
          src="/img/Frame@2x.png"
          width={250}
          height={250}
          top={200}
          left={157}
          // className={styles.header_title}
          alt="Frame@2x"
          className="absolute  w-[250px] h-[250px] mt-[-35%] ml-[37%]  bg-none"
        />
      </div>

      <div>
        <BtnTitle />
      </div>
    </div>
  );
}
