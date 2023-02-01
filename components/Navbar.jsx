// import Link from 'next/link';

import Image from 'next/image';
import Link from 'next/link';

function Navbar() {
  return (
    <div>
      <nav className="shadow-sm fixed w-full z-10 bg-black">
        <div className="w-full">
          <div className="flex items-center h-20 w-full">
            <div className="flex items items-center mx-20 justify-between w-full">
              <div className="flex justify-center items-center flex-shrink-0">
                <Image
                  src="/img/Frame.png"
                  width={600 / 10}
                  height={600 / 10}
                  className="h9 t-rotate(9.5deg"
                  alt="Frame"
                />
              </div>

              <div>
                <div className="ml-10 flex items-baseline space-x-4">
                  <Link
                    // activeClass="NewPost"
                    // to="NewPost"
                    href="NewPost"
                    smooth={true}
                    offset={50}
                    duration={500}
                    className="cursor-pointer hover:bg-blue-600 text-blue-600 hover:text-white px-3 py-2"
                  >
                    + New Post
                  </Link>

                  <Link
                    // activeClass="Login"
                    // to="Login"
                    href="/Login"
                    smooth={true}
                    offset={50}
                    duration={500}
                    className="cursor-pointer hover:bg-blue-600 text-white hover:text-white px-3 py-2"
                  >
                    Log In
                  </Link>

                  <Link
                    // activeClass="SignUp"
                    // to="SignUp"
                    href="SignUp"
                    smooth={true}
                    offset={50}
                    duration={500}
                    className="cursor-pointer hover:bg-blue-600 text-white hover:text-white px-3 py-2"
                  >
                    Sign Up
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
