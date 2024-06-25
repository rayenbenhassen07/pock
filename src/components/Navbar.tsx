"use client";
import useNavbar from "@/hooks/store/useNavbar";
import Link from "next/link";
import React from "react";
import { CgClose } from "react-icons/cg";
import { FiMenu } from "react-icons/fi";

const Navbar = () => {
  const storeNavbar: any = useNavbar();

  return (
    <header className=" w-full p-3 ">
      <nav className="flex justify-between items-center w-[90%] mx-auto ">
        <div className="flex justify-between items-center gap-8">
          <Link
            href="/"
            className="text-black text-2xl font-extrabold font-sans"
          >
            Pocktify
          </Link>
          <div className="hidden lg:block">
            <ul className="  flex space-x-4">
              <li>
                <Link href="/" className="text-black  ">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/" className="text-black  ">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/" className="text-black  ">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div
          className="lg:hidden"
          onClick={() => {
            storeNavbar.isOpen ? storeNavbar.onClose() : storeNavbar.onOpen();
          }}
        >
          <FiMenu size={25} />
        </div>

        <div
          className={` ${
            storeNavbar.isOpen ? "block" : "hidden"
          }  absolute left-2 top-16 w-full mx-auto `}
        >
          <div className="relative w-[95%]  shadow-xl bg-neutral-800 text-white rounded-lg p-4 z-20 ">
            <CgClose
              size={30}
              className="absolute -top-12 right-4  bg-neutral-800 rounded-xl "
              onClick={() => {
                storeNavbar.onClose();
              }}
            />

            <div className="join join-vertical w-full">
              <div className="collapse  join-item  ">
                <div className="collapse-title">Pricing</div>
              </div>

              <div className="collapse  join-item  ">
                <div className="collapse-title">Blog</div>
              </div>

              <div className="collapse collapse-arrow join-item  ">
                <input type="radio" name="my-accordion-4" />
                <div className="collapse-title ">Services</div>
                <div className="collapse-content">
                  <ul className="ml-4 text-sm ">
                    <li>artificial intelligence</li>
                    <li>SEO </li>
                    <li>Website builder </li>
                  </ul>
                </div>
              </div>

              <div className="collapse collapse-arrow join-item  ">
                <input type="radio" name="my-accordion-4" />
                <div className="collapse-title ">Company</div>
                <div className="collapse-content">
                  <ul className="ml-4 text-sm">
                    <li>Careers</li>
                    <li>About </li>
                    <li>Shop</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center mt-20 ">
              <ul className="flex space-x-4">
                <li>
                  <Link href="/login" className=" ">
                    Login
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="text-black p-2 rounded-md bg-white hover:bg-neutral-100"
                  >
                    Sign in
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="hidden lg:block">
          <ul className="flex space-x-4">
            <li>
              <Link href="/login" className="text-black  ">
                Login
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="text-white p-2 rounded-md bg-neutral-700 hover:bg-neutral-800"
              >
                Sign in
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <hr className="mt-3 w-[95%] mx-auto" />
    </header>
  );
};

export default Navbar;
