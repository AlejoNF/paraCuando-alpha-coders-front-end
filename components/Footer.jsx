import Image from 'next/image';
import styles from '../styles/Layout.module.css';

export default function Footer() {
  return (
    <div>
      <Image
        src="/img/rectangle22.png"
        width={5184 / 10}
        height={3888 / 10}
        className={styles.footer_img}
        alt="rectanglefooter"
      />
      <input
        className={styles.footer_title}
        type="text"
        placeholder="¿Qué quieres ver en tu ciudad? 🔍"
      />
    </div>
  );
}
