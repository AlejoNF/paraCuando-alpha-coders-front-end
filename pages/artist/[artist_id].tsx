import ArtistPopular from '@/components/artist/ArtistPopular';
import ArtistRecent from '@/components/artist/ArtistRecent';
import ArtistSugestion from '@/components/artist/ArtistSugestion';
import Footer from '@/components/Footer';
import NarvarUser from '@/components/NarvarUser';
import Preferences from '@/components/Preferences';
import Search from '@/components/Search';
import Image from 'next/image';

const artist_id = () => {
  return (
    <div>
      <section>
        <NarvarUser />
      </section>
      <section>
        <div className="pt-20  ">
          <div className="flex justify-start">
            {/* <span>Title</span>
        <span>/ Title</span>
        <span>/ Title</span> */}
            <h2 className="absolute mt-[30px] pl-[10%] py-3 rounded-full text-yellow-400 font-semibold text-900 text-5xl">
              {/* <div className=""></div> */}
              Artistas y Conciertos
            </h2>
            <p className="absolute mt-[100px] pl-[10%] py-3 rounded-full text-white font-semibold text-500 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio,
              excepturi.
            </p>
            <Image
              src="/Artist.png"
              alt="atoms-img"
              width={1285}
              height={204}
              className="w-[1280px] h-[204px]"
            ></Image>
            {/* <img
              className="w-[1285px] h-[204px] "
              src="/Artist.png"
              alt="atoms-img"
            /> */}
          </div>
        </div>
      </section>

      <section>
        <Search />
      </section>

      <section>
        <ArtistPopular />
      </section>

      <section>
        <ArtistSugestion />
      </section>

      <section>
        <Preferences />
      </section>

      <section>
        <ArtistRecent />
      </section>

      <section>
        <Footer />
      </section>
    </div>
  );
};

export default artist_id;
