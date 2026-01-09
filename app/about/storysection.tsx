"use client";
import React from "react";
import { Image } from "@nextui-org/react";
import { Card, CardBody } from "@nextui-org/react";

const StorySection = () => {
  return (
    <section className="w-full py-8 md:py-12 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8 space-y-12">

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="font-bold text-2xl md:text-3xl text-violet-700 uppercase mb-4">
              Our Story
            </h1>

            <p className="text-base text-default-500 dark:text-gray-300 leading-relaxed text-justify max-w-2xl">
              ABIC Realty Corporation and Consultancy is a leading real estate
              firm established in early 2018, offering property sales, leasing,
              project development, and consultancy services.
              <br /><br />
              With a strong focus on transparency, professionalism, and
              sustainable development, ABIC has built a trusted reputation in
              the industry. Over the years, the company has expanded to serve
              both individual clients and large corporations, providing expert
              guidance on real estate investments and development.
            </p>
          </div>

          {/* Image */}
          <div className="w-full">
            <Image
              isBlurred
              isZoomed
              alt="ABIC Realty Story"
              src="https://abicrealtyphdianne.com/media/abic-ou-story.jpg"
              className="w-full rounded-lg"
            />
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="w-full">
            <CardBody className="text-center p-6">
              <h2 className="font-bold text-violet-700 uppercase text-xl md:text-2xl mb-4">
                Vision
              </h2>
              <p className="text-default-500 text-base md:text-lg">
                We strive to develop collaborative partnerships based on transparency and mutual trust, 
                fostering enduring client relationships. As we grow, we remain committed to these principles, 
                which have guided our company and clients through the years.
              </p>
            </CardBody>
          </Card>

          <Card className="w-full">
            <CardBody className="text-center p-6">
              <h2 className="font-bold text-violet-700 uppercase text-xl md:text-2xl mb-4">
                Mission
              </h2>
              <p className="text-default-500 text-base md:text-lg">
                Our ethics are built on a commitment to superior customer service, blending an entrepreneurial 
                mindset with the personalized service of a dynamic organization. We measure success by the 
                results we deliver to clients.
              </p>
            </CardBody>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
