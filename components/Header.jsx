import Image from 'next/image';
import styles from '../styles/Layout.module.css';

export default function Header() {
  return (
    <div>
      Header
      <Image
        src="/img/Rectangle21.png"
        width={5184 / 10}
        height={3888 / 10}
        className={styles.header_img}
        alt="rectangle21"
      />
      <input
        className={styles.header}
        type="text"
        placeholder="¿Qué quieres ver en tu ciudad? 🔍"
      />
      <button className={styles.btn_marcas}>Marcas y tiendas</button>
      <button className={styles.btn_artistas}>Artistas y conciertos</button>
      <button className={styles.btn_torneos}>Torneos</button>
    </div>
  );
}
