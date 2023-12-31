import React, { useContext, useState } from 'react';
import { Transition } from "@headlessui/react";
import { BiDonateHeart } from "react-icons/bi";
import { GoSignOut } from "react-icons/go";
import { BsSearch } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { AuthContext } from '../../../context/AuthProvider';

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext)
  const handleLogOut = () => {
    logOut().then(res => {
      const user = res.user;
    })
  }
  const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -100;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
  }

  const [isOpen, setIsOpen] = useState(false);
  const styleObject = {
    button: {
      background: "#2A9D8F",
    },
    pColor: {
      background: "#EAF5F4",
    },
    primary: {
      color: "#2A9D8F",
    },
  };
  return (
    <div style={ { zIndex: '999' } } className='bg-nav bg-opacity-50 backdrop-filter sticky top-0 backdrop-blur-xl'>
      {/* firstblock */ }
      <nav
        className="md:block z-50 hidden shadow-sm w-full "
      >
        <div className="w-full">
          <div className="flex items-center h-20 w-full">
            <div className="flex items-center  md:mx-20  justify-between w-full">
              <div className="flex justify-center items-center flex-shrink-0 ">
                <HashLink to="/#home" scroll={ el => scrollWithOffset(el) }>
                  <h1 className="flex items-center button font-bold text-xl cursor-pointer">
                    <img
                      className="md:w-12 w-14"
                      src="https://i.ibb.co/Bw1TVQS/project-logo.png"
                      alt="project-logo"
                      border="0"
                    />
                    <p className="text-black">Organization Manager</p>
                  </h1>
                </HashLink>
              </div>
              <div className="flex items-center">
                <div className="relative  flex justify-end items-center md:mr-6 my-2">
                  <input
                    type="search"
                    className=" p-2 bg-white text-black rounded-md"
                    placeholder="Organization Search"
                  />
                  <div className="absolute text-black  pin-r pin-t mt-3 mr-4 ">
                    <p className="cursor-pointer mb-2">
                      <BsSearch />
                    </p>
                  </div>
                </div>
                <div>
                  {
                    user?.uid ?
                      <button
                        onClick={ handleLogOut }
                        className="cursor-pointer flex items-center text-white px-4 py-3 rounded-md text-sm bg-red-600  font-medium "
                      >
                        <GoSignOut className='mr-1 text-xl' /> LogOut
                      </button> : <Link
                        style={ styleObject.button }
                        to='/dashboard'
                        className="cursor-pointer flex items-center text-white px-4 py-3 rounded-md text-sm  font-medium "
                      >
                        <BiDonateHeart className='mr-1' /> Donate
                      </Link>
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      {/* responsive-mobile */ }
      <nav className="md:hidden shadow-sm w-full z-10">
        <div className="w-full">
          <div className="flex items-center h-20 w-full">
            <div className="flex bg-nav bg-opacity-60 z-20 top-0 backdrop-filter backdrop-blur-lg shadow-sm w-full fixed items-center md:mx-20 justify-between">
              <div className="flex justify-center items-center flex-shrink-0">
                <div className="mr-10 flex md:hidden ">
                  <button
                    onClick={ () => setIsOpen(!isOpen) }
                    type="button"

                    className=" inline-flex items-center justify-center p-2 rounded-md text-black  focus:outline-none  "
                    aria-controls="mobile-menu"
                    aria-expanded="false"
                  >
                    <span className="sr-only">Open main menu</span>
                    { !isOpen ? (
                      <svg
                        className="block h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
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
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    ) }
                  </button>
                </div>
                <Link to="/">
                  <h1 className="flex items-center button font-bold text-xl cursor-pointer">
                    <p className="text-black">Organization Manager</p>
                  </h1>
                </Link>
              </div>
              <div>
                <Link to='/' className="cursor-pointer flex items-center ">
                  <img
                    className="md:w-12 w-14"
                    src="https://i.ibb.co/Bw1TVQS/project-logo.png"
                    alt="project-logo"
                    border="0"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <nav className="shadow-sm w-full ">
        <Transition
          show={ isOpen }
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          { (ref) => (
            <div className="md:hidden flex justify-center items-center" id="mobile-menu">
              <div ref={ ref } className=" px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <HashLink
                  to="/#home" scroll={ el => scrollWithOffset(el) }
                  className="cursor-pointer text-black  block px-3 py-2 rounded-md text-base font-medium"
                >
                  Home
                </HashLink>
                <HashLink smooth
                  to="/#organization" scroll={ el => scrollWithOffset(el) }
                  className="cursor-pointer  text-black   block px-3 py-2 rounded-md text-base font-medium"
                >
                  Organization
                </HashLink>

                <HashLink smooth
                  to="/#vision" scroll={ el => scrollWithOffset(el) }

                  className="cursor-pointer  text-black  block px-3 py-2 rounded-md text-base font-medium"
                >
                  Vision
                </HashLink>
                <HashLink smooth
                  to='/#contact' scroll={ el => scrollWithOffset(el) }

                  className="cursor-pointer  text-black   block px-3 py-2 rounded-md text-base font-medium"
                >
                  Contact
                </HashLink>

                <Link
                  style={ styleObject.button }
                  to='/dashboard'
                  className="cursor-pointer flex items-center text-white text-center ml-4 w-24 px-3 py-2 rounded-md text-sm  font-medium hover:text-white hover:text-bold"
                >
                  <BiDonateHeart /> Donate
                </Link>
              </div>
            </div>
          ) }
        </Transition>
        <div className="flex justify-start">
          <div className="text-black mx-10">
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <HashLink
                  to="/#home" scroll={ el => scrollWithOffset(el) }
                  className="cursor-pointer text-black font-semibold px-3 py-2 text-md "
                >
                  Home
                </HashLink>
                <HashLink smooth
                  to="/#organization" scroll={ el => scrollWithOffset(el) }
                  className="cursor-pointer text-black  px-3 py-2 rounded-md text-sm font-medium"
                >
                  Organization
                </HashLink>
                <HashLink smooth
                  to="/#vision" scroll={ el => scrollWithOffset(el) }

                  className="cursor-pointer text-black   px-3 py-2 rounded-md text-sm font-medium"
                >
                  Vision
                </HashLink>

                <HashLink smooth
                  to='/#contact' scroll={ el => scrollWithOffset(el) }
                  className="cursor-pointer text-black px-3 py-2 rounded-md text-sm font-medium"
                >
                  Contact
                </HashLink>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;