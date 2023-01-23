import Image from 'next/image';
import styles from '../styles/Atoms.module.css';

export default function Atoms() {
  return (
    <div>
      <div className={styles.atom_search_container}>
        <p>atom/search</p>
        <input
          className={styles.title_search}
          type="text"
          placeholder="¿Qué quieres ver en tu ciudad? 🔍"
        />
      </div>

      <br />

      <div className="atom_title1">
        <h1 className={styles.title1}>Title 1</h1>
        <h3 className={styles.subtitle1}>subtitle</h3>
      </div>
      <br />
      <div className="atom_title2>">
        <h2 className={styles.title2}>Title 2</h2>
        <a className={styles.subtitle2}>Subtitle</a>
      </div>
      <br />
      <div className="atom_title3">
        <h3 className={styles.title3}>Title 3</h3>
      </div>
      <br />
      <div className={styles.text1}>Text 1</div>
      <br />
      <div className={styles.atom_text2_container}>
        <div className={styles.text2_2}>Text2</div>
        <br />
        <div className={styles.text2}>Text2</div>
      </div>
      <br />
      <p>atom marcas</p>
      <div className={styles.component1}>Marcas y tiendas</div>

      <p>botton next</p>
      <div className={styles.atom_btn_next}>
        <button className="btn_next">
          <Image
            src="/img/next.png"
            width={500 / 10}
            height={500 / 10}
            alt="btn_next"
          />
        </button>
      </div>
      <br />
      <br />

      <p>Atom like</p>
      <div className={styles.atom_icon_like_container}>
        <button className="btn_like1">
          <Image
            src="/img/2=like2.png"
            width={500 / 10}
            height={500 / 10}
            alt="like2"
          />
        </button>
        <br />
        <button className="btn_like2">
          <Image
            src="/img/2=like.png"
            width={500 / 10}
            height={500 / 10}
            alt="like2"
          />
        </button>
      </div>
      <br />
      <br />

      <div>
        <p>person atom</p>
        <Image
          src="/img/person.png"
          width={300 / 10}
          height={300 / 10}
          alt="person"
        />
      </div>

      <article>
        <p>btn Siguiente</p>
        <div className={styles.atom_siguiente_container}>
          <button className={styles.btn_principal_siguiente}>Siguiente</button>
          <br />
          <button className={styles.btn_enable_siguiente}>Siguiente</button>
        </div>
      </article>
    </div>
  );
}
