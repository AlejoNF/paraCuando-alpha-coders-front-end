import Footer from '@/components/Footer';
import NarvarUser from '@/components/NarvarUser';
import Preferences from '@/components/Preferences';
import Search from '@/components/Search';
import TournamentPopular from '@/components/tournament/TournamentPopular';
import TournamentSugestions from '@/components/tournament/TournamentSugestions';
import TournametRecent from '@/components/tournament/TournametRecent';
import Image from 'next/image';

const tournament_id = () => {
  return (
    <div>
      <section>
        <NarvarUser />
      </section>
      <section className="">
        <div className="pt-[71px] ">
          <div className="flex justify-start">
            {/* <span>Title</span>
        <span>/ Title</span>
        <span>/ Title</span> */}
            <h2 className="absolute mt-[30px] pl-[10%] py-3 rounded-full text-yellow-400 font-semibold text-900 text-5xl">
              {/* <div className=""></div> */}
              Torneos y Eventos
            </h2>
            <p className="absolute mt-[100px] pl-[10%] py-3 rounded-full text-white font-semibold text-500 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio,
              excepturi.
            </p>
            <Image
              width={1285}
              height={204}
              src="/Concers.png"
              alt="atoms-img"
              className="w-full h-[204px]"
            ></Image>
            {/* <img
              className="w-[1285px] h-[204px] "
              src="/Concers.png"
              alt="atoms-img"
            /> */}
          </div>
        </div>
      </section>

      <section>
        <Search />
      </section>

      <section>
        <TournamentPopular />
      </section>

      <section>
        <TournamentSugestions />
      </section>

      <section>
        <Preferences />
      </section>

      <section>
        <TournametRecent />
      </section>

      <section>
        <Footer />
      </section>
    </div>
  );
};

export default tournament_id;
