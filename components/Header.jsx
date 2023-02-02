import Image from 'next/image';
import BtnTitle from './titleComponents/BtnTitle';

export default function Header() {
  return (
    <div>
      <div className="flex items-center justify-center ">
        <Image
          width={1280}
          height={488}
          src="/img/Rectangle21.png"
          alt="atoms-img"
          className="w-full h-[488px] mt-[5rem]"
        ></Image>
        <Image
          src="/img/Frame@2x.png"
          width={250}
          height={250}
          top={200}
          left={157}
          // className={styles.header_title}
          alt="Frame@2x"
          className="absolute  w-[214px] h-[190px] t-[79px]"
        />
      </div>

      <div>
        <BtnTitle />
      </div>
    </div>
  );
}
