import Link from 'next/link';
import styles from '../styles/Layout.module.css';

export default function Navbar() {
  return (
    <div className={styles.narvar_container}>
      <div className={styles.navbar_container}>
        <h2 className={styles.vector1}>PC?</h2>
        <h2 className="title_header">C</h2>
        <h2 className="title_header">?</h2>
        <div className={styles.link_create}>
          <Link href="/">+ Crear publicación</Link>
        </div>
        <div className={styles.link_login}>
          <Link href="/">Log in</Link>
        </div>
        <div className={styles.link_signup}>
          <Link href="/">Sign up</Link>
        </div>
      </div>
    </div>
  );
}
