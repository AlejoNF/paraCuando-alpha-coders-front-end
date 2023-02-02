import Image from 'next/image';
import Link from 'next/link';

const PostInfo = () => {
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

            <form className=" w-[620px]  pl-[15%]">
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
              <div className="flex flex-col gap-6  flex-1 py-8">
                <div className="bg-blue flex flex-row  gap-6">
                  <div className="w-[300px] gap-6">
                    <div className="space-y-2 text-slate-300">
                      <select
                        className=" w-[300px] h-[45px] border border-spacing-6 border-slate-300 px-4 rounded"
                        placeholder="Enter your name"
                        id="name"
                      >
                        <option value="Tipo">cRT1</option>
                        <option value=""> cart2</option>
                        <option value="">cart3</option>
                      </select>
                    </div>
                  </div>

                  <div className="w-[300px] gap-6 ">
                    <div className="space-y-2 text-slate-300">
                      <select
                        name="categoria"
                        id="Categoría"
                        className=" w-[300px] h-[45px] border border-spacing-6 border-slate-300 px-4 rounded "
                      >
                        <option value="">Cart1</option>
                        <option value="">Cart2</option>
                        <option value="">Cart3</option>
                        <option value="">Cart4</option>
                        <option value="">Cart5</option>
                        <option value="">Cart6</option>
                        <option value="">Cart7</option>
                        <option value="">Cart8</option>
                        <option value="">Cart9</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-2 text-slate-600">
                <input
                  className=" w-[620px] h-[115.98px]  border border-spacing-6 border-slate-300 px-6 rounded "
                  placeholder="¿Porqué lo recomiendas?"
                  type="text"
                  id="text"
                />
              </div>

              <div className="mt-8 text-slate-600">
                <input
                  className=" w-[620px] h-[50px]  border border-spacing-6 border-slate-300 px-6 rounded"
                  placeholder="Link de referencia"
                  type="text"
                  id="text"
                />
              </div>

              <Link
                href={'/NextPost'}
                className=" flex items-center justify-center pl-[35%]"
              >
                <button className="rounded-full text-xl w-[124px] h-[47px] bg-blue-700 text-white mb-2  mt-20 hover:brightness-125">
                  Siguiente
                </button>
              </Link>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PostInfo;
