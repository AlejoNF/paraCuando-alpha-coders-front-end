import NarvarUser from '@/components/NarvarUser';
import Image from 'next/image';

const EditProfile = () => {
  return (
    <div>
      <section>
        <NarvarUser />
      </section>
      <section className="pt-[71px] ">
        <div className="bg-blue-800 w-[1280px] h-[129px] pt-[2rem] pl-[10%]  text-white font-semibold text-5xl">
          Perfil
        </div>
      </section>
      <div className="flex flex-col py-0 ml-[-79px] w-[1280px] ">
        <main className="flex flex-col  flex-1 px-20 ">
          <div className="bg-blue flex flex-row ">
            <div className=" w-[517px] h-[716px] bg-purple-400">
              <h2 className="font-sans text-2xl flex items-center justify-center pt-[77px]">
                Foto de Perfil
              </h2>
              <p className="flex items-center justify-center">
                Agrega una foto para tu perfil.
              </p>
              <section className=" flex items-center justify-center">
                <Image
                  src="/Lady.png"
                  width={187}
                  height={187}
                  alt="Frame@2x"
                  className=" w-[177px] h-[206px] mt-[37px] mb-[5rem] "
                ></Image>
              </section>
            </div>

            {/* ------------------------Post Info--------------------- */}

            <div className="w-[763px] bg-blue-200 ">
              <form className=" w-[620px]  ">
                <h2 className="text-2xl   text-black  pb-[1rem] font-sans pt-[77px]">
                  Información de contacto.
                </h2>

                <div className="mt-[70.71px] text-slate-600">
                  <input
                    className=" w-[620px] h-[49.6px]  border border-spacing-6 border-slate-300 px-6 rounded active:border-blue-600 duration-300 active:text-blue-600"
                    placeholder="First Name"
                    type="text"
                    id="text"
                  />
                </div>

                <div className="mt-[53.37px] text-slate-600">
                  <input
                    className=" w-[620px] h-[49.6px]  border border-spacing-6 border-slate-300 px-6 rounded"
                    placeholder="Last Name"
                    type="text"
                    id="text"
                  />
                </div>
              </form>
            </div>
          </div>
        </main>
      </div>
      <section>
        <Image
          src="/img/editProfile.png"
          width={187}
          height={187}
          alt="Frame@2x"
          className=" w-[1280px] h-[182px]  "
        ></Image>
      </section>
    </div>
  );
};

export default EditProfile;
