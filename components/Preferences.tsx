import PreferencesButton from './PreferencesButton';

export default function Preferences() {
  return (
    <div className="flex items-center justify-center ">
      <div className="container bg-slate-200 w-[940px] h-[250px] mt-[40px] justify-center">
        <h2 className="pl-20 mdfont-sans text-black-600 text-2xl title-font font-bold pb-0  pt-8">
          Title
        </h2>
        <h3 className="pb-7 pl-20 font-sans text-gray-400 text-1xl title-font font-bold">
          Subtitle
        </h3>

        <div className="flex gap-6 justify-center">
          <PreferencesButton />
        </div>
      </div>
    </div>
  );
}
