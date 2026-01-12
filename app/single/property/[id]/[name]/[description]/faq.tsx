import React from "react";

import FAQAccordion from "@/components/accordion/faq";

const FAQ = () => {
  return (
    <section className="flex gap-2 py-10 w-full border-t">
      <div className="container">
        <div className="flex flex-col">
          <h1 className="font-bold text-3xl text-violet-700 dark:text-white">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-default-500 dark:text-gray-300 mt-2">
            Find answers to common questions about buying, selling, and renting
            properties. Get all the information you need to make informed
            decisions.
          </p>
        </div>
        <div className="py-8">
          <FAQAccordion />
        </div>
      </div>
    </section>
  );
};

export default FAQ;
