"use client";

import { useEffect, useState } from "react";
import {
  Button,
  Popover,
  PopoverButton,
  PopoverPanel,
} from "@headlessui/react";
import {
  ChevronDownIcon,
  XMarkIcon,
  Bars3Icon,
} from "@heroicons/react/20/solid";
import Logo from "@/images/black-long.svg";
import Image from "next/image";
import CustomBtn from "./button";
import navData from "../json-files/nav-data.json";
import { twMerge } from "tailwind-merge";
import classNames from "classnames";
import Carousel from "./carousel";

function PopoverWithChevron({ buttonText, children }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Popover className="relative">
      <div
        className="group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <PopoverButton className="text-black hover:underline rounded-md text-sm flex items-center focus:outline-none focus:ring-0 focus:border-none">
          {buttonText}
          <ChevronDownIcon
            className={`ml-2 h-5 w-5 transition-transform duration-200 ${
              isHovered ? "rotate-180" : ""
            }`}
          />
        </PopoverButton>
        <PopoverPanel
          static
          className={`absolute z-50 left-0 -mt-border border-opacity-10 shadow-lg border-black text-black rounded-md transition-all duration-200 ease-in-out transform origin-top ${
            isHovered
              ? "opacity-100 scale-100 z-50"
              : "opacity-0 scale-95 pointer-events-none"
          }`}
        >
          {children}
        </PopoverPanel>
      </div>
    </Popover>
  );
}

function MobilePopover({ buttonText, children }) {
  return (
    <Popover>
      {({ open }) => (
        <>
          <PopoverButton
            className={`text-black hover:underline w-full border-b border-opacity-50 my-auto border-gray-300 flex justify-between items-center py-3 font-semibold text-xl ${
              open ? "underline" : ""
            }`}
          >
            {buttonText}
            <ChevronDownIcon
              className={`ml-2 h-5 w-5 transition-transform duration-200 ${
                open ? "rotate-180" : ""
              }`}
            />
          </PopoverButton>
          <PopoverPanel
            className={`lg:hidden overflow-hidden transition-all duration-200 ease-in-out ${
              open ? "opacity-100 " : "opacity-0"
            }`}
          >
            <div
              className={`flex flex-col text-black p-2 transition-all duration-300 ease-in-out ${
                open ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
              }`}
            >
              {children}
            </div>
          </PopoverPanel>
        </>
      )}
    </Popover>
  );
}

export default function Nav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 1);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [mobileMenuOpen]);

  return (
    <nav
      className={twMerge(
        "bg-white font-normal pb-3 lg:pb-4 fixed top-0 w-full z-40 transition-all duration-300 ease-in-out",
        classNames({ "border-b border-black/10 shadow-md": scrolled })
      )}
    >
      <div className="mx-4 lg:mx-24 xl:mx-36">
        <div className="max-w-7xl py-3 lg:py-4 mx-auto">
          <div className="flex justify-between items-end h-12 lg:h-16 mx-auto px-2">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Image
                  src={Logo}
                  width={180}
                  height={50}
                  alt="Logo"
                  className="w-32 sm:w-36 lg:w-[180px]"
                />
              </div>
            </div>
            <div className="hidden lg:flex items-center lg:gap-6">
              {navData.desktopLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-black hover:underline rounded-md text-sm"
                >
                  {link.text}
                </a>
              ))}
              {navData.dropdowns.map((dropdown, index) => (
                <PopoverWithChevron
                  key={index}
                  buttonText={dropdown.buttonText}
                >
                  <div className="p-4 flex flex-col gap-2 whitespace-nowrap">
                    {dropdown.links.map((link, linkIndex) => (
                      <a
                        key={linkIndex}
                        className="hover:underline"
                        href={link.href}
                      >
                        <p>{link.text}</p>
                      </a>
                    ))}
                  </div>
                </PopoverWithChevron>
              ))}
              <CustomBtn text={"Book Now"} />
            </div>
            <div className="lg:hidden flex items-end justify-end text-black">
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                <span className="sr-only">Open main menu</span>
                {mobileMenuOpen ? (
                  <XMarkIcon className="h-8 w-8" aria-hidden="true" />
                ) : (
                  <Bars3Icon className="h-8 w-8" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Full-screen mobile menu */}
        <div
          className={`fixed inset-0 z-40 bg-white transition-transform duration-300 ease-in-out mt-20 ${
            mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          } lg:hidden`}
        >
          <div className="flex flex-col h-full">
            <div className="flex-1 overflow-y-auto">
              <div className="flex flex-col pt-4 px-4">
                {navData.desktopLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="text-black hover:underline border-b border-opacity-50 border-gray-300 py-3 text-xl font-semibold"
                  >
                    {link.text}
                  </a>
                ))}
                {navData.dropdowns.map((dropdown, index) => (
                  <MobilePopover key={index} buttonText={dropdown.buttonText}>
                    {dropdown.links.map((link, linkIndex) => (
                      <a
                        key={linkIndex}
                        className="hover:underline py-3 border-b border-opacity-50 border-gray-300"
                        href={link.href}
                      >
                        <p>{link.text}</p>
                      </a>
                    ))}
                  </MobilePopover>
                ))}
              </div>

              {/* Get in touch section */}
              <Carousel/>
            </div>
            <div className="p-4 border-t border-gray-300">
              <Button className="w-full bg-black px-4 py-3 text-white rounded-md">
                Book Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}