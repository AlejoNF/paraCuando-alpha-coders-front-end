import NarvarUser from '@/components/NarvarUser';
import Votes from '@/components/Votes';
import Image from 'next/image';
import Link from 'next/link';

export default function MyVotes() {
  return (
    <div>
      <section>
        <NarvarUser />
      </section>
      <div className="flex  pt-10  h-[350px]">
        <main>
          <div className="bg-blue flex flex-row ">
            <div>
              <section className=" flex items-center justify-center  bg-blue-600 h-[129px] w-[1280px] mt-5">
                <div className="rounded-full bg-pink-400 mt-[8rem]">
                  <Image
                    src="/img/profile.png"
                    width={117}
                    height={117}
                    alt="Frame@2x"
                    className="rounded-full w-[120px] h-[120px] "
                  ></Image>
                </div>
              </section>

              <section className=" flex items-center justify-center gap-6 mt-[6rem]">
                <Link href={'/MyVotes'}>
                  <button className=" bg-white cursor-pointer px-5 py-3 rounded-full border border-slate-300 text-gray-500 text-xs  hover:bg-slate-300 hover:text-white">
                    Mis votos
                  </button>
                </Link>
                <Link href={'/MyPosts'}>
                  <button className=" bg-white cursor-pointer px-5 py-3 rounded-full border border-slate-300 text-gray-500 text-xs  hover:bg-slate-300 hover:text-white">
                    Mis publicaciones
                  </button>
                </Link>
              </section>
              <section>
                <Votes />
              </section>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
