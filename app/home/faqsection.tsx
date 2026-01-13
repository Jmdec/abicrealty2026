"use client";
import React from "react";
import { Image } from "@nextui-org/react";

import FAQAccordion from "@/components/accordion/faq";

const FAQSection = () => {
  return (
    <section className="flex flex-col items-center gap-6 py-6 md:py-8 w-full">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center text-center">
          <h1 className="font-bold text-3xl lg:text-4xl text-violet-700">
            Frequently Asked Questions
          </h1>
          <p className="text-sm md:text-lg text-default-500 max-w-2xl dark:text-gray-300 leading-4">
            Find answers to common questions about buying, selling, and renting
            properties. 
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center">
          <div className="flex items-center justify-center">
            <Image
              alt="HeroUI hero Image"
              src="https://abicrealtyphdianne.com/media/Questions-rafiki.png"
              className="h-[30vh] lg:h-[40vh] xl:h-[70vh] w-full"
            />
          </div>
          <div>
            <FAQAccordion />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
