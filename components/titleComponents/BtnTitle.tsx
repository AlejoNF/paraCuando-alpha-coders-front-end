import Link from 'next/link';
import styles from '../../styles/Layout.module.css';

export default function BtnTitle() {
  return (
    <div>
      <div>
        <input
          className={styles.header_search}
          type="text"
          placeholder="¿Qué quieres ver en tu ciudad? 🔍"
        />
      </div>
      <div className={styles.btn_search}>
        <div className="flex gap-8 justify-center">
          <Link href={'/brand/brand_id'}>
            <button className="w-40 bg-white cursor-pointer px-5 py-3 rounded-full text-gray-500 text-xs">
              Marcas y tiendas
            </button>
          </Link>
          <Link href={'/artist/artist_id'}>
            <button className="w-40 bg-white cursor-pointer px-5 py-3 rounded-full text-gray-500 text-xs">
              Artistas y conciertos
            </button>
          </Link>
          <Link href={'/tournament/tournament_id'}>
            <button className="bg-white cursor-pointer px-5 py-3 rounded-full text-gray-500 text-xs">
              Torneos
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
