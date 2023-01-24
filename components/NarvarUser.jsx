import { Transition } from '@headlessui/react';
import Image from 'next/image';
import { useState } from 'react';
import { Link } from 'react-scroll';

function NarvarUser() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <nav className="bg-black shadow-sm fixed w-full z-10">
        <div className="w-full">
          <div className="flex items-center h-20 w-full">
            <div className="flex items items-center mx-20 justify-between w-full">
              <div className="flex justify-center items-center flex-shrink-0">
                {/* <h1 className="font-bold text-x1 cursor-pointer">
                  Stream<span className="text-blue-500">line</span>
                </h1> */}

                <Link
                  activeClass="/"
                  to="/"
                  smooth={true}
                  offset={50}
                  duration={500}
                  className="cursor-pointer"
                >
                  <Image
                    src="/img/Frame.png"
                    width={600 / 10}
                    height={600 / 10}
                    className="h9 t-rotate(9.5deg"
                    alt="Frame"
                  />
                </Link>
              </div>

              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <Link
                    activeClass="NewPost"
                    to="NewPost"
                    smooth={true}
                    offset={50}
                    duration={500}
                    className="cursor-pointer hover:bg-blue-600 text-blue-600 hover:text-white px-3 py-2"
                  >
                    + New Post
                  </Link>

                  <Link
                    activeClass="MyVotes"
                    to="MyVotes"
                    smooth={true}
                    offset={50}
                    duration={500}
                    className="cursor-pointer hover:bg-blue-600 text-white hover:text-white px-3 py-2"
                  >
                    <span className="cursor-pointer text-pink-600 hover:text-white px-3 py-2">
                      ♡
                    </span>
                    Mis votos
                  </Link>

                  <Link
                    activeClass="LoginById"
                    to="LoginById"
                    smooth={true}
                    offset={50}
                    duration={500}
                    className="cursor-pointer hover:bg-blue-600 text-white hover:text-white px-3 py-2"
                  >
                    <span className="cursor-pointer text-pink-600 hover:text-white px-3 py-2">
                      👤
                    </span>
                    LoginById
                  </Link>
                </div>
              </div>
            </div>
            <div className="mr-10 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-blue-600 inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-blue-600 focus: outline-none focus:ring-offset-2 focus:ring-offset-blue-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http:www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http:www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 13"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 ease-in duration-75"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden id=mobile-menu">
              <div
                ref={ref}
                className="bg-black px-2 pt-2 pb-3 space-y-1 sm:px-3"
              >
                <Link
                  href="/NewPost"
                  activeClass="newpost"
                  to="newpost"
                  smooth={true}
                  offset={50}
                  duration={500}
                  className="cursor-pointer hover:bg-blue-600 text-blue-600 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  + New Post
                </Link>
                <Link
                  href="/MyVotes"
                  activeClass="myvotes"
                  to="myvotes"
                  smooth={true}
                  offset={50}
                  duration={500}
                  className="cursor-pointer hover:bg-blue-600 text-white hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  <span className="cursor-pointer text-pink-600 hover:text-white px-3 py-2">
                    ♡
                  </span>
                  Mis votos
                </Link>
                <Link
                  href="/LoginById"
                  activeClass="loginbyid"
                  to="loginbyid"
                  smooth={true}
                  offset={50}
                  duration={500}
                  className="cursor-pointer hover:bg-blue-600 text-white hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  <span className="cursor-pointer text-pink-600 hover:text-white px-3 py-2">
                    👤
                  </span>
                  LoginById
                </Link>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
}

export default NarvarUser;
