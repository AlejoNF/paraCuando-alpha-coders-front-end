import PreferencesButton from './PreferencesButton';

export default function Preferences() {
  return (
    <div className=" bg-purple-500">
      <div className="  flex items-center justify-center">
        <div className="container bg-slate-200 max-w-[941px] h-[250px] my-[40px] justify-center">
          <h2 className="pl-20 font-sans text-black text-2xl title-font font-semibold  pt-8">
            ¡Hagamóslo más personal!
          </h2>
          <h3 className="pb-7 pl-20 font-sans text-slate-500 text-1xl title-font ">
            Selecciona tus intereses para bridarte sugerencia deacuerdo a tus
            gustos.
          </h3>

          <div className="flex gap-6 justify-center">
            <PreferencesButton />
          </div>
          <p className=" pt-7 pl-20 font-sans text-blue-500 text-1xl title-font">
            Ver todos los intereses
          </p>
        </div>
      </div>
    </div>
  );
}
