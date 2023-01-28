import Artist from '@/components/artist/Artist';
import ArtistRecentInfo from '@/components/artist/ArtistRecentInfo';
import Footer from '@/components/Footer';
import Preferences from '@/components/Preferences';
import Search from '@/components/Search';
import NarvarUser from '../components/NarvarUser';

export default function artist_info() {
  return (
    <div>
      <section>
        <NarvarUser />
        <br />
        <br />
        <br />

        <Search />
      </section>

      <section>
        <Artist />
      </section>
      <section>
        <Preferences />
      </section>
      <section>
        <ArtistRecentInfo />
      </section>
      <section>
        <Footer />
      </section>

      {/* <section
        className="pt-24 pb-5 w-full pr-0 container border
  "
      >
        <div>
       
          <div>
            <div className="flex gap-8 justify-center">
              <Link href={'/stores'}>
                <button className="w-40 bg-white border cursor-pointer px-5 py-3 rounded-full text-gray-500 text-xs hover:bg-slate-300 hover:text-white">
                  Marcas y tiendas
                </button>
              </Link>
              <Link href={'/artist/artist_id'}>
                <button className="w-40 bg-white border cursor-pointer px-5 py-3 rounded-full text-gray-500 text-xs  hover:bg-slate-300 hover:text-white">
                  Artistas y conciertos
                </button>
              </Link>
              <Link href={'/tournament/tournament_id'}>
                <button className="bg-white border cursor-pointer px-5 py-3 rounded-full text-gray-500 text-xs  hover:bg-slate-300 hover:text-white">
                  Torneos
                </button>
              </Link>
              <div className="">
                <input
                  className="ml-36 w-[360px] border bg-white border-solid-[1px] border-gray-300 cursor-pointer px-5 py-3 rounded-full text-gray-500 text-xs"
                  type="text"
                  placeholder="¿Qué quieres ver en tu ciudad? 🔍"
                />
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* <section>
        <Artist />
        <Preferences />
      </section>
      <section>
        <CardRecent />
      </section>
      <section>
        <Footer />
      </section> */}
    </div>
  );
}
