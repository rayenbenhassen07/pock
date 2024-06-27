"use client";
import useNavbar from "@/hooks/store/useNavbar";
import { signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React, { useCallback, useState } from "react";
import { CgClose } from "react-icons/cg";
import { DiVim } from "react-icons/di";
import { FiMenu } from "react-icons/fi";
import { MenuItem } from "./MenuItem";
import { useRouter } from "next/navigation";

interface User {
  id: string;
  username?: string;
  email: string;
  password: string;
}

interface NavbarProps {
  currentUser: User | undefined | null;
}

const Navbar: React.FC<NavbarProps> = ({ currentUser }) => {
  const storeNavbar: any = useNavbar();

  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  return (
    <header className=" w-full p-3 md:px-10 ">
      <nav className="flex justify-between items-center">
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

        <div className="lg:hidden flex justify-between items-center gap-4 cursor-pointer">
          <FiMenu
            size={25}
            onClick={() => {
              storeNavbar.isOpen ? storeNavbar.onClose() : storeNavbar.onOpen();
            }}
          />
          {currentUser && (
            <Image
              src="/images/avatar.png"
              width={30}
              height={30}
              alt="avatar"
              className="rounded-full w-8 cursor-pointer"
              onClick={toggleOpen}
            />
          )}

          {isOpen && (
            <div
              className="
                      absolute 
                      rounded-xl 
                      shadow-md
                      w-40
                      bg-white 
                      overflow-hidden 
                      right-5
                      top-14
                      text-sm
                    "
            >
              <div className="flex flex-col cursor-pointer">
                {currentUser ? (
                  <>
                    <MenuItem
                      label="My account"
                      onClick={() => router.push("/trips")}
                    />
                    <MenuItem
                      label="Dashboard"
                      onClick={() => router.push("/favorites")}
                    />
                    <MenuItem
                      label="Settings"
                      onClick={() => router.push("/settings")}
                    />

                    <hr />
                    <MenuItem label="Sign out" onClick={() => signOut()} />
                  </>
                ) : (
                  <>
                    <MenuItem
                      onClick={() => {
                        router.push("/login");
                      }}
                      label="Connexion"
                    />
                    <MenuItem
                      onClick={() => {
                        router.push("/login");
                      }}
                      label="Inscription"
                    />
                  </>
                )}
              </div>
            </div>
          )}
        </div>

        <div
          className={` ${
            storeNavbar.isOpen ? "block" : "hidden"
          }  absolute left-0 top-0 w-full h-screen bg-neutral-800/70`}
        >
          <div
            className={` ${
              storeNavbar.isOpen ? "block" : "hidden"
            }  absolute left-0 top-0 w-60`}
          >
            <div className="relative h-screen shadow-xl bg-neutral-800 text-white rounded-r-lg z-20 pt-20 ">
              <CgClose
                size={30}
                className="absolute top-5 right-4 cursor-pointer"
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
              {!currentUser && (
                <div className="flex justify-center items-center mt-20 ">
                  <ul className="flex space-x-4">
                    <li>
                      <Link
                        href="/signin"
                        onClick={() => {
                          storeNavbar.onClose();
                        }}
                        className=" "
                      >
                        Login
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/signup"
                        onClick={() => {
                          storeNavbar.onClose();
                        }}
                        className="text-black p-2 rounded-md bg-white hover:bg-neutral-100"
                      >
                        Sign in
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="hidden lg:block">
          <ul className="flex justify-center items-center gap-4">
            {!currentUser && (
              <li>
                <Link href="/signin" className="text-black  ">
                  sign in
                </Link>
              </li>
            )}
            {!currentUser && (
              <li>
                <Link
                  href="/signup"
                  className="text-white p-2 rounded-md bg-neutral-700 hover:bg-neutral-800"
                >
                  sign up
                </Link>
              </li>
            )}
            <li>
              {currentUser && (
                <Image
                  src="/images/avatar.png"
                  width={30}
                  height={30}
                  alt="avatar"
                  className="rounded-full w-10 cursor-pointer"
                  onClick={toggleOpen}
                />
              )}

              {isOpen && (
                <div
                  className="
                      absolute 
                      rounded-xl 
                      shadow-md
                      w-40
                      bg-white 
                      overflow-hidden 
                      right-10
                      top-14
                      text-sm
                    "
                >
                  <div className="flex flex-col cursor-pointer">
                    {currentUser ? (
                      <>
                        <MenuItem
                          label="My account"
                          onClick={() => router.push("/trips")}
                        />
                        <MenuItem
                          label="Dashboard"
                          onClick={() => router.push("/favorites")}
                        />
                        <MenuItem
                          label="Settings"
                          onClick={() => router.push("/settings")}
                        />

                        <hr />
                        <MenuItem label="Sign out" onClick={() => signOut()} />
                      </>
                    ) : (
                      <>
                        <MenuItem
                          onClick={() => {
                            router.push("/login");
                          }}
                          label="Connexion"
                        />
                        <MenuItem
                          onClick={() => {
                            router.push("/login");
                          }}
                          label="Inscription"
                        />
                      </>
                    )}
                  </div>
                </div>
              )}
            </li>
          </ul>
        </div>
      </nav>
      <hr className="mt-3 w-[95%] mx-auto" />
    </header>
  );
};

export default Navbar;
