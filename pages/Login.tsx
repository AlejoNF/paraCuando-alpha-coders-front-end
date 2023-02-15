import Image from 'next/image';
import Link from 'next/link';

const Login = () => {
  return (
    <div className="flex flex-col py-0 ml-[-79px] font-sans ">
      <main className="flex flex-col  w-[1280] flex-1 px-20 ">
        <div className="bg-blue flex flex-row w-[1280px]">
          <div className="w-1/2 ">
            <div>
              <Image
                src="/img/LoginImg.png"
                width={640}
                height={832}
                alt="Frame@2x"
                className=" w-[640px] h-[750px] brightness-50"
              ></Image>
              <Image
                src="/img/Group.png"
                width={250}
                height={250}
                // className={styles.header_title}
                alt="Group"
                className="absolute  w-[245px] h-[55px] mt-[-25%] ml-[10%]  bg-none"
              />
              <Image
                src="/img/Group(1).png"
                width={250}
                height={250}
                // className={styles.header_title}
                alt="Group(1)"
                className="absolute  w-[129px] h-[30px] mt-[-24%] ml-[28%]  bg-none"
              />
            </div>
          </div>
          <div className="w-1/2">
            <section className=" flex items-center justify-center">
              <Image
                src="/img/BlueFrame.png"
                width={187}
                height={187}
                alt="Frame@2x"
                className=" w-[187px] h-[187px] mt-[117px]  "
              ></Image>
            </section>
            <form className="ml-[17%] w-[487.16px] h-[352px] ">
              <h2 className="text-2xl   text-black pb-[21px] font-semibold font-sans">
                Login
              </h2>
              <p className="pb-[10px] text-slate-500 font-sans">
                Login with the data you entered during your registration.
              </p>

              <div className="space-y-[10px] text-slate-500">
                <label className="form-label font-sans" htmlFor="password">
                  Email
                </label>
                <input
                  className="w-[487.16px] h-[45px] border border-spacing-6 border-slate-400 px-4 font-sans"
                  placeholder="Enter your password"
                  type="password"
                  id="password"
                />
              </div>

              <div className="space-y-[10px] text-slate-500 font-sans">
                <label className="form-label font-sans" htmlFor="password">
                  Password
                </label>
                <input
                  className="w-[487.16px] h-[45px] border border-spacing-6 border-slate-400 px-4"
                  placeholder="Enter your password"
                  type="password"
                  id="password"
                />
              </div>
              <Link href={'/profile/profile_id'}>
                <button className="text-xl w-[487px] h-[45px] rounded bg-blue-700 text-white mb-2 mt-6 hover:brightness-150 font-sans">
                  Log in
                </button>
              </Link>

              <p className="text-gray-500  text-center hover:text-blue-600 font-sans">
                <Link href={'/Login'}>Did you forget your password?</Link>
              </p>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Login;
