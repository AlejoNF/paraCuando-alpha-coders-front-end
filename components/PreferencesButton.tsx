import Link from 'next/link';

export default function PreferencesButton() {
  return (
    <div>
      <div className="flex gap-8 justify-center">
        <Link href={'/brand/brand_id'}>
          <button className="bg-white cursor-pointer px-5 py-3 rounded-full text-gray-500 text-xs  hover:bg-slate-300 hover:text-white">
            Tiendas
          </button>
        </Link>
        <Link href={'/artist_info'}>
          <button className="bg-white cursor-pointer px-5 py-3 rounded-full text-gray-500 text-xs  hover:bg-slate-300 hover:text-white">
            Artistas
          </button>
        </Link>
        <Link href={'/brand/brand_id'}>
          <button className="bg-white cursor-pointer px-5 py-3 rounded-full text-gray-500 text-xs  hover:bg-slate-300 hover:text-white">
            Marcas
          </button>
        </Link>
        <Link href={'/tournament/tournament_id'}>
          <button className="bg-white cursor-pointer px-5 py-3 rounded-full text-gray-500 text-xs  hover:bg-slate-300 hover:text-white">
            Torneos
          </button>
        </Link>
        <Link href={'/artist/artist_id'}>
          <button className="bg-white cursor-pointer px-5 py-3 rounded-full text-gray-500 text-xs  hover:bg-slate-300 hover:text-white">
            Conciertos
          </button>
        </Link>
      </div>
    </div>
  );
}
