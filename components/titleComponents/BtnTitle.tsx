import Link from 'next/link';

export default function BtnTitle() {
  return (
    <div className="flex items-center justify-center ">
      <section className="absolute mt-[-16%] container border-none">
        <div className=" flex items-center justify-center ">
          <input
            className="mb-[15px] w-[465px] h-46px border bg-white border-solid-[1px] border-gray-300 cursor-pointer  rounded-full text-gray-500 text-xs px-[19px] py-[15px] "
            type="text"
            placeholder="¿Qué quieres ver en tu ciudad? 🔍"
          />
        </div>
        <div className="flex gap-[10px] justify-center">
          <Link href={'/brand/brand_id'}>
            <button className="w-[138px]  bg-white border cursor-pointer  px-[19px] py-[15px] rounded-full text-gray-500 text-xs hover:bg-slate-300 hover:text-white">
              Marcas y tiendas
            </button>
          </Link>
          <Link href={'/artist/artist_id'}>
            <button className="w-[159px]  bg-white border cursor-pointer  px-[19px] py-[15px] rounded-full text-gray-500 text-xs  hover:bg-slate-300 hover:text-white">
              Artistas y conciertos
            </button>
          </Link>
          <Link href={'/tournament/tournament_id'}>
            <button className="w-[86px]  bg-white border cursor-pointer  px-[19px] py-[15px] rounded-full text-gray-500 text-xs  hover:bg-slate-300 hover:text-white">
              Torneos
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
