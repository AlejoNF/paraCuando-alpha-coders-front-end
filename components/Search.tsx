import Link from 'next/link';

const Search = () => {
  return (
    <div className="">
      <section className="pt-6 pb-5 bg-pink-700 max-w-max flex before:justify-center pr-[17%] pl-[15%]  border">
        <div className="flex gap-[10px] justify-center">
          <Link href={'/brand/brand_id'}>
            <button className="w-[138px] h-[42px] bg-white border cursor-pointer px-[19px]  rounded-full text-gray-500 text-xs hover:bg-slate-300 hover:text-white font-sans ">
              Marcas y tiendas
            </button>
          </Link>
          <Link href={'/artist/artist_id'}>
            <button className="w-[159px] h-[42px] bg-white border cursor-pointer font-sans px-[19px] rounded-full text-gray-500 text-xs  hover:bg-slate-300 hover:text-white ">
              Artistas y conciertos
            </button>
          </Link>
          <Link href={'/tournament/tournament_id'}>
            <button className="w-[86px] h-[42px] bg-white border cursor-pointer px-[19px] rounded-full text-gray-500 text-xs  hover:bg-slate-300 hover:text-white font-sans">
              Torneos
            </button>
          </Link>
          <div className="">
            <input
              className="ml-[166px] w-[373px] h-[46px] border bg-white border-solid-[1px] border-gray-300 cursor-pointer px-5  rounded-full text-gray-500 text-base font-sans"
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
