'use client'
import Image from "next/image";
import { useEffect, useState } from "react";
import { Link as ScrollLink } from "react-scroll"

import { NavLink } from "@components/atom";

export const Header = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  const scrollStateClass = hasScrolled ? "py-2 bg-black-100 backdrop-blur-[8px]" : "";

  const handleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 32);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 w-full py-10 transition-all duration-500 max-lg:py-4 ${scrollStateClass}`}>
      <div className="container flex h-14 items-center max-lg:px-5">
        <a className="lg:hidden flex-1 cursor-pointer z-2">
          <Image src="/images/xora.svg" alt="logo" width={115} height={55} />
        </a>

        <div className={`w-full max-lg:fixed max-lg:top-0 max-lg:left-0 max-lg:w-full max-lg:bg-s2 ${isMobileNavOpen ? "max-lg:opacity-100" : "max-lg:opacity-0 max-lg:pointer-events-none"}`}>
          <div className="w-full max-lg:relative max-lg:flex max-lg:flex-col max-lg:min-h-screen max-lg:p-6 max-lg:overflow-hidden sidebar-before max-md:px-4">
            <nav className="max-lg: relative max-lg:z-2 max-lg:my-auto">
              <ul className="flex max-lg:block max-lg:px-12">
                <li className="nav-li">
                  <NavLink title="features" to="features" onClick={handleMobileNav} />
                  <div className="dot"></div>
                  <NavLink title="pricing" to="pricing" onClick={handleMobileNav} />
                </li>

                <li className="nav-logo">
                  <ScrollLink
                    to="hero"
                    offset={-250}
                    spy
                    smooth
                    className="max-lg:hidden transition-transform duration-500 cursor-pointer"
                  >
                    <Image src="/images/xora.svg" alt="logo" width={160} height={55} />
                  </ScrollLink>
                </li>

                <li className="nav-li">
                  <NavLink title="faq" to="faq" onClick={handleMobileNav} />
                  <div className="dot"></div>
                  <NavLink title="download" to="download" onClick={handleMobileNav} />
                </li>
              </ul>
            </nav>

            <div className="lg:hidden block absolute top-1/2 left-0 w-[960px] h-[380px] translate-x-[-290px] -translate-y-1/2 rotate-90">
              <Image
                src="/images/bg-outlines.svg"
                width={960}
                height={380}
                alt="outline"
                className="relative z-2"
              />

              <Image
                src="/images/bg-outlines-fill.png"
                width={960}
                height={380}
                alt="outline"
                className="absolute inset-0 mix-blend-soft-light opacity-5"
              />
            </div>
          </div>
        </div>

        <button onClick={handleMobileNav} className="lg:hidden z-2 size-10 border-2 border-s4/25 rounded-full flex justify-center items-center">
          <Image className={isMobileNavOpen ? "hidden" : "block"} src="/images/magic.svg" alt="logo" width={20} height={20} />
          <Image className={isMobileNavOpen ? "block" : "hidden"} src="/images/close.svg" alt="logo" width={20} height={20} />
        </button>
      </div>
    </header>
  );
}

export default Header
