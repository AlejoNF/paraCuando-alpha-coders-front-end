import Link from 'next/link';

const Search = () => {
  return (
    <div>
      <section className="pt-6 pb-5 w-full pr-0 container border">
        <div className="flex gap-8 justify-center">
          <Link href={'/brand/brand_id'}>
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
      </section>
    </div>
  );
};

export default Search;
