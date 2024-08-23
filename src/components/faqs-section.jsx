"use client";

import useInView from "@/hooks/useInView";
import React, { useState } from "react";
import { twMerge } from "tailwind-merge";
import classNames from "classnames";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

const FAQSection = ({ data, className }) => {
  const [openIndex, setOpenIndex] = useState(null); // Tracks the currently open FAQ index
  const [ref, isInView] = useInView({
    threshold: 0.1, // Trigger when 10% of the component is visible
  });

  const toggleOpen = (index) => {
    setOpenIndex(openIndex === index ? null : index); // Toggle the open index
  };

  return (
    <div>
      <div
        className={twMerge(
          classNames("bg-white fill py-20 text-black", className)
        )}
      >
        <div
          ref={ref}
          className={`px-4 lg:px-0 md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl mx-auto flex flex-col gap-12 transform transition-all duration-700 ease-in-out  ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h3 className="text-center lg:text-left text-4xl sm:text-5xl">
            {data.title}
          </h3>
          <div className="flex flex-col gap-6">
            {data.faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <Disclosure key={index} as="div">
                  <div className="w-full flex flex-col gap-3">
                    <DisclosureButton
                      className="flex flex-row justify-between items-center w-full font-bold px-3 transition-colors duration-300"
                      onClick={() => toggleOpen(index)}
                    >
                      {faq.question}
                      <motion.div
                        initial={false}
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ChevronDownIcon className="w-4" />
                      </motion.div>
                    </DisclosureButton>
                    <motion.div
                      initial={false}
                      animate={{ height: isOpen ? "auto" : 0 }}
                      transition={{ duration: 0.2, ease: "easeInOut" }}
                      className="overflow-hidden"
                      style={{ opacity: isOpen ? 1 : 0 }}
                    >
                      <DisclosurePanel static>
                        <div className="bg-gray-100 p-3 rounded-md">
                          {faq.answer}
                        </div>
                      </DisclosurePanel>
                    </motion.div>
                  </div>
                </Disclosure>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
