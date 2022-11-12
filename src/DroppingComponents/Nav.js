import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { AiOutlineSearch } from "react-icons/ai";
import { CiUser, CiHeart, CiShoppingCart } from "react-icons/ci";
import {Link} from 'react-router-dom'

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <section>
      <nav className="pt-4 pb-4 lg:ml-6 lg:text-sm text-md">
        <div>
          <div className="flex items-center justify-between h-16">
            <div className="flex justify-between w-screen">
              <div className="flex-shrink-0">
                <h1 className="font-bold lg:text-sm text-2xl ml-4 lg:ml-4">
                  Good<span className="text-red ">Book</span>
                </h1>
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-b space-x-4">
                  <ul className="nav-links flex justify-around w-wt font-bold">
                    <li>
                      <Link to ="/">Home</Link>
                    </li>

                    <li>
                      <Link to="/community">Club</Link>
                    </li>

                    <li>
                      <a href="/sale">Sale</a>
                    </li>

                    <li>
                      <a href="/contact">Contact</a>
                    </li>
                    <li>
                      <Link to="/community">Register</Link>
                    </li>
                  </ul>

                  <section className="lg:flex items-center lg:block hidden">
                    <input className="border-2 w-64 h-8 border-black shadow-xl"></input>
                    <button className="w-8 h-8 text-xl bg-black text-white flex items-center justify-center">
                      <AiOutlineSearch />
                    </button>
                  </section>
                  <section className="flex justify-between text-2xl w-24 items-center">
                    <CiUser />
                    <CiHeart />
                    <CiShoppingCart />
                  </section>
                </div>
              </div>
            </div>
            <div className="mr-4 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className=" inline-flex items-center justify-center border-2 border-black p-2 rounded-md  focus:outline-none focus:ring-2 focus:ring-offset-2"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
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
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div
                ref={ref}
                className="px-0 pt-2 pb-3 space-y-1 bg-black h-screen text-white"
              >
                <ul className="nav-links flex flex-col items-center justify-between h-5/6 mt-10 font-medium ">
                    <li>
                      <a href="/">Home</a>
                    </li>

                    <li>
                      <Link to="/community">Club</Link>
                    </li>

                    <li>
                      <a href="/sale">Sale</a>
                    </li>

                    <li>
                      <a href="/contact">Contact</a>
                    </li>
                    <li>
                      <Link to="/community">Register</Link>
                    </li>
                </ul>
              </div>
            </div>
          )}
        </Transition>
      </nav>
      <hr className="border-black"/>
    </section>
  );
}

export default Nav;
