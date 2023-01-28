import Link from 'next/link';

export default function BtnTitle() {
  return (
    <div>
      <section className="absolute mt-[-13%] container border-none">
        <div className="flex gap-3 justify-center">
          <input
            className="mb-5 w-[360px] border bg-white border-solid-[1px] border-gray-300 cursor-pointer px-5 py-3 rounded-full text-gray-500 text-xs"
            type="text"
            placeholder="¿Qué quieres ver en tu ciudad? 🔍"
          />
        </div>
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
        </div>
      </section>
    </div>
  );
}
