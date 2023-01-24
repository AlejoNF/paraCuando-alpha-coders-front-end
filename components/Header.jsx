import Image from 'next/image';
import styles from '../styles/Layout.module.css';

export default function Header() {
  return (
    <div className="bg-black">
      <div>
        <Image
          src="/img/Rectangle21.png"
          width={1280}
          height={488}
          className={styles.header_img}
          alt="rectangle21"
        />
        <Image
          src="/img/Frame@2x.png"
          width={250}
          height={250}
          top={200}
          left={157}
          className={styles.header_title}
          alt="Frame@2x"
        />
      </div>
      <div>
        <input
          className={styles.header_search}
          type="text"
          placeholder="¿Qué quieres ver en tu ciudad? 🔍"
        />
      </div>

      <button className={styles.btn_marcas}>Marcas y tiendas</button>
      <button className={styles.btn_artistas}>Artistas y conciertos</button>
      <button className={styles.btn_torneos}>Torneos</button>
    </div>
  );
}
