import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const PostInfo = () => {
  //   const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);

  return (
    <div className="flex flex-col py-0 ml-[-79px]  ">
      <main className="flex flex-col  w-[1280] flex-1 px-20 ">
        <div className="bg-blue flex flex-row w-[1280px]">
          <div className="bg-blue-800 w-[255px] h-[832px]">
            <section className=" flex items-center justify-center">
              <Image
                src="/img/Frame@2x.png"
                width={187}
                height={187}
                alt="Frame@2x"
                className=" w-[137px] h-[127px] mt-[10rem] mb-[5rem] "
              ></Image>
            </section>
            <form className=" p-5">
              <h2 className="text-2xl   text-yellow-400 pb-[3rem] font-semibold">
                ¡Bienvenido, creador!
              </h2>
              <p className="pb-[1rem] text-white">
                A continuación puedes completar la info de la marca, artísta o
                torneo que quieres cerca.
              </p>

              <Link href={'/Help'}>
                <button className="text-sm  text-white mb-2 mt-[7rem] ">
                  Ayuda
                </button>
              </Link>
            </form>
          </div>

          {/* ------------------------Post Info--------------------- */}

          <div className="w-full mt-[5rem] ">
            <Link
              href={'/MyPosts'}
              className="text-blue-600 pl-[3rem] mb-[6rem]"
            >
              Back
            </Link>

            <form className=" w-[620px] h-[620px] pl-[15%]">
              <h2 className="text-2xl   text-black pt-[4rem] pb-[1rem] font-semibold">
                Publicación
              </h2>
              <p className=" pb-[1rem] text-slate-600">Información básica.</p>

              <div className="space-y-2 text-slate-600">
                <input
                  className=" w-[620px] h-[50px]  border border-spacing-6 border-slate-300 px-6 rounded active:border-blue-600 duration-300 active:text-blue-600"
                  placeholder="Tipo de publicación"
                  type="text"
                  id="text"
                />
              </div>
              {/* 
              //-----------------Dropdown------------------- */}
              <div className=" gap-3 flex items-center justify-center ">
                <div className="pt-[1.5rem]">
                  <div className=" gap-3 flex items-center justify-center ">
                    <div className="gap-3 flex items-center justify-center w-[295px]">
                      {/* <select
                        onClick={() => setIsOpen((prev) => !prev)}
                        className="text-slate-300 mt-[1rem] p-2 w-full items-center justify-between text-lg rounded-lg tracking-wider border-gray-300 active:border-blue-600 duration-300 active:text-blue-600"
                      >
                        Tipo
                      </select>
                      {isOpen && (
                        <div className="absolute top-20">
                          <ul>
                            <li>Marcas y Tiendas</li>
                            <li>Artístas y Conciertos</li>
                            <li>Torneos</li>
                          </ul>
                        </div>
                      )} */}
                      <select
                        name="Tipo"
                        className="text-slate-300 mt-[1rem] p-2 w-full items-center justify-between text-lg rounded-lg tracking-wider border active:border-blue-600 duration-300 active:text-blue-600 "
                      >
                        <option value="Tipo">cRT1</option>
                        <option value=""> cart2</option>
                        <option value="">cart3</option>
                      </select>
                    </div>

                    <div className="gap-3 flex items-center justify-center w-[295px]">
                      <button
                        onClick={() => setIsOpen2((prev) => !prev)}
                        className="text-slate-300 mt-[1rem] p-2 w-full items-center justify-between text-lg rounded-lg tracking-wider border active:border-blue-600 duration-300 active:text-blue-600"
                      >
                        Categoria
                      </button>
                      {isOpen2 && (
                        <div className="absolute top-[20]">
                          <ul>
                            <li>Ropa y Accesorios</li>
                            <li>Deportes</li>
                            <li>Conciertos</li>
                            <li>Meet & Greet</li>
                            <li>E-sport</li>
                            <li>Pop / Rock</li>
                            <li>Tecnología</li>
                            <li>Hogar / Decoración</li>
                            <li>Abastecimiento</li>
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </form>

            <Link
              href={'/PostPhoto.tsx'}
              className=" flex items-center justify-center"
            >
              <button className="rounded-full text-xl w-[124px] h-[47px] bg-blue-700 text-white mb-2 mt-4">
                Siguiente
              </button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PostInfo;
