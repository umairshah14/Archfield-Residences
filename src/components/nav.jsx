"use client";

import { useEffect, useState, useRef } from "react";
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
  HomeIcon,
  InformationCircleIcon,
  UserGroupIcon,
  KeyIcon,
} from "@heroicons/react/24/outline";
import Logo from "../../public/images/archfield-logos/black-long.svg";
import Image from "next/image";
import CustomBtn from "./button";
import navData from "../json-files/nav-data.json";
import { twMerge } from "tailwind-merge";
import classNames from "classnames";
import Carousel from "./carousel";
import { motion } from "framer-motion";


const iconComponents = {
  HomeIcon: HomeIcon,
  InformationCircleIcon: InformationCircleIcon,
  UserGroupIcon: UserGroupIcon,
  KeyIcon: KeyIcon
};

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
          className={`absolute left-0 -mt-border border-opacity-10 shadow-lg border-black text-black rounded-md transition-all duration-200 ease-in-out transform origin-top ${
            isHovered
              ? "opacity-100 scale-100 bg-white"
              : "opacity-0 scale-95 pointer-events-none"
          }`}
        >
          {children}
        </PopoverPanel>
      </div>
    </Popover>
  );
}

function MobilePopover({ buttonText, children, icon }) {
  const IconComponent = iconComponents[icon];
  return (
    <Popover>
      {({ open }) => (
        <>
          <PopoverButton
            className={`text-black hover:underline w-full border-b border-opacity-50 my-auto border-gray-300 flex justify-between items-center py-3 font-semibold text-xl ${
              open ? "underline" : ""
            }`}
          >
            <span className="flex items-center">
              {IconComponent && <IconComponent className="h-6 w-6 mr-2" />}
              {buttonText}
            </span>
            <ChevronDownIcon
              className={`ml-2 h-5 w-5 transition-transform duration-200 ${
                open ? "rotate-180" : ""
              }`}
            />
          </PopoverButton>
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <PopoverPanel
              className={`lg:hidden transition-all duration-300 ease-in-out`}
            >
              <div
                className={`flex flex-col text-black p-2 transition-all duration-300 ease-in-out ${
                  open ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
                }`}
              >
                {children}
              </div>
            </PopoverPanel>
          </motion.div>
        </>
      )}
    </Popover>
  );
}


export default function Nav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef(null);

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

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMobileMenuOpen(false);
      }
    };

    if (mobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
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
            <div className="lg:hidden flex items-end justify-end text-black z-50">
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

        {/* Overlay for darkening the background */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 bg-black opacity-50 z-30"></div>
        )}

        {/* Full-screen mobile menu */}
        <div
          ref={menuRef}
          className={`fixed inset-y-0 right-0 z-40 bg-white transition-transform duration-200 ease-in-out shadow-lg border-l border-black/40 w-10/12 ${
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          } lg:hidden`}
        >
          <div className="flex flex-col h-full mx-6">
            <div className="flex-1 overflow-y-auto">
              <Image
                src={Logo}
                width={30}
                height={30}
                alt="Logo"
                className="w-32  mt-4"
              />
              <div className="flex flex-col mt-10">
                {navData.desktopLinks.map((link, index) => {
                  const IconComponent = iconComponents[link.icon];
                  return (
                    <a
                      key={index}
                      href={link.href}
                      className="text-black hover:underline border-b border-opacity-50 border-gray-300 py-3 text-xl font-semibold flex items-center"
                    >
                      {IconComponent && (
                        <IconComponent className="h-6 w-6 mr-2" />
                      )}
                      {link.text}
                    </a>
                  );
                })}
                {navData.dropdowns.map((dropdown, index) => (
                  <MobilePopover
                    key={index}
                    buttonText={dropdown.buttonText}
                    icon={dropdown.icon}
                  >
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

              <div className="flex flex-col text-center my-8">
                <p className="text-4xl font-trirong">FIND US ON</p>
                <Carousel />
              </div>
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
