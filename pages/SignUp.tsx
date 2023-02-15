import Image from 'next/image';
import Link from 'next/link';

const SignUp = () => {
  return (
    <div className="flex flex-col py-0 ml-[-79px]  ">
      <main className="flex flex-col  w-[1280] flex-1 px-20 ">
        <div className="bg-blue flex flex-row w-[1280px]">
          <div className="w-1/2 ">
            <div>
              <Image
                src="/img/LoginStore.png"
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
                className=" w-[187px] h-[187px] mt-[98px]  "
              ></Image>
            </section>

            <form className="ml-[17%] w-[487.16px] h-[432.3] ">
              <h2 className="text-2xl   text-black pb-[5px] font-semibold font-sans mt-[36.70px]">
                Sign Up
              </h2>
              <p className="pb-[5px] text-slate-500 font-sans">
                Login with the data you entered during your registration.
              </p>

              <div className="pt-[5px] text-slate-500">
                <label htmlFor="email">Email</label>
                <input
                  className=" w-[487.16px] h-[45.26px] border s border-slate-400 px-4 rounded "
                  placeholder="Enter your email"
                  type="email"
                  id="email"
                />
              </div>

              <div className="flex flex-col gap-[10px] flex-1 ">
                <div className="bg-blue flex flex-row  gap-[10px] ">
                  <div className="w-[238.5px]  gap-[10px] ">
                    <div className="pt-[5px] text-slate-500">
                      <label className="" htmlFor="name">
                        Nombre
                      </label>
                      <input
                        className=" w-[238.5px] h-[45.26px] border  border-slate-400 px-4 rounded"
                        placeholder="Enter your name"
                        type="text"
                        id="name"
                      />
                    </div>
                  </div>

                  <div className="w-[238.5px] gap-6 ">
                    <div className="pt-[5px] text-slate-500">
                      <label className="" htmlFor="lastName">
                        Lastname
                      </label>
                      <input
                        className=" w-[238.5px] h-[45.26px] border  border-slate-400 px-4 rounded"
                        placeholder="Enter your lastname"
                        type="text"
                        id="lastname"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-[5px] text-slate-500">
                <label className="form-label" htmlFor="password">
                  Password
                </label>
                <input
                  className="w-[487.16px] h-[45.26px] border  border-slate-400 px-4"
                  placeholder="Enter your password"
                  type="password"
                  id="password"
                />
              </div>
              <Link href={'/profile/profile_id'}>
                <button className="text-xl w-[487.16px] h-[45.26px] rounded bg-blue-700 text-white mb-[5px] mt-[30.26px] hover:brightness-150">
                  Crear Cuenta
                </button>
              </Link>

              <p className="text-gray-500  text-center hover:text-blue-600">
                <Link href={'/Login'}>or Log in</Link>
              </p>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SignUp;
