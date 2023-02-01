import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Card.module.css';

const Votes = () => {
  return (
    <div className="flex items-center justify-center mt-[7rem]">
      <div className=" flex items-center justify-center">
        <div className=" gap-6 flex items-center justify-center">
          <article className={styles.card}>
            <Link href={'/artist_info'}>
              <header className={styles.card__header}>
                <Image
                  width={373}
                  height={244}
                  src="/Bts.png"
                  alt="atoms-img"
                ></Image>
                {/* <img className="w-373 h-244" src="/Bts.png" alt="atoms-img" /> */}

                <div className={styles.card__container_status}>
                  <div className={styles.like}>
                    {/* <img
                      src="/img/2=like2.png"
                      alt="like-img"
                      className={styles.like_pink}
                    /> */}
                    <Image
                      src="/img/2=like2.png"
                      alt="like-img"
                      className={styles.like_pink}
                      width={51}
                      height={51}
                    ></Image>
                  </div>
                </div>
              </header>
            </Link>

            <section className={styles.card__body}>
              <h3 className=" text-slate-600 text-2xl title-font font-bold text-blue pb-2">
                Title 1
              </h3>
              <ul>
                <li>
                  <span className="text-gray-600 text-base pb-1 p-1">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sequi quo maxime, neque corrupti itaque animi.
                  </span>
                </li>
                <li>
                  <span className="no-underline text-blue-600 font-normal">
                    Texts 2
                  </span>
                </li>
                <li>
                  <span className="no-underline text-black font-normal">
                    Text 3
                  </span>
                </li>
              </ul>
            </section>
          </article>

          <article className={styles.card}>
            <header className={styles.card__header}>
              <Image
                width={373}
                height={244}
                src="/Zara.png"
                alt="atoms-img"
              ></Image>
              {/* <img className="w-373 h-244" src="/Zara.png" alt="atoms-img" /> */}

              <div className={styles.card__container_status}>
                <div className={styles.like}>
                  <Image
                    src="/img/2=like2.png"
                    alt="like-img"
                    className={styles.like_pink}
                    width={51}
                    height={51}
                  ></Image>
                  {/* <img
                    src="/img/2=like2.png"
                    alt="like-img"
                    className={styles.like_pink}
                  /> */}
                </div>
              </div>
            </header>

            <section className={styles.card__body}>
              <h3 className=" text-slate-600 text-2xl title-font font-bold text-blue pb-2">
                Title 1
              </h3>
              <ul>
                <li>
                  <span className="text-gray-600 text-base pb-1 p-1">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sequi quo maxime, neque corrupti itaque animi.
                  </span>
                </li>
                <li>
                  <span className="no-underline text-blue-600 font-normal">
                    Texts 2
                  </span>
                </li>
                <li>
                  <span className="no-underline text-black font-normal">
                    Text 3
                  </span>
                </li>
              </ul>
            </section>
          </article>

          <article className={styles.card}>
            <header className={styles.card__header}>
              <Image
                width={373}
                height={244}
                src="/Lady.png"
                alt="Zara-img"
              ></Image>
              {/* <img className="w-373 h-244" src="/Lady.png" alt="Zara-img" /> */}

              <div className={styles.card__container_status}>
                <div className={styles.like}>
                  <Image
                    src="/img/2=like2.png"
                    alt="like-img"
                    className={styles.like_pink}
                    width={51}
                    height={51}
                  ></Image>
                  {/* <img
                    src="/img/2=like2.png"
                    alt="like-img"
                    className={styles.like_pink}
                  /> */}
                </div>
              </div>
            </header>

            <section className={styles.card__body}>
              <h3 className=" text-slate-600 text-2xl title-font font-bold text-blue pb-2">
                Title 1
              </h3>
              <ul>
                <li>
                  <span className="text-gray-600 text-base pb-1 p-1">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sequi quo maxime, neque corrupti itaque animi.
                  </span>
                </li>
                <li>
                  <span className="no-underline text-blue-600 font-normal">
                    Texts 2
                  </span>
                </li>
                <li>
                  <span className="no-underline text-black font-normal">
                    Text 3
                  </span>
                </li>
              </ul>
            </section>
          </article>
        </div>
      </div>

      {/* <img src="/next.png" alt="btn-next" /> */}
    </div>
  );
};

export default Votes;
