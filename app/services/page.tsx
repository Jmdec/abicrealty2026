"use client";

import { Card, CardBody, Image, Link } from "@nextui-org/react";
import ContactSection from "../home/contactsection";
import { servicesData } from "./data";

export default function ServicesPage() {
  return (
    <section className="flex flex-col items-center w-full">
      <div className="container mx-auto px-4">
        <div className="flex flex-col">
          <h1 className="font-bold text-3xl lg:text-4xl text-violet-700 uppercase">
            Services
          </h1>
          <p className="text-base md:text-lg text-gray-600 mt-2">
            Professional services designed to make your real estate journey smooth and stress-free.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 py-12 justify-items-center">
          {servicesData.map((service) => (
            <Link key={service.id} href={`/services/${service.id}`}>
              <Card className="cursor-pointer hover:scale-105 transition-transform">
                <CardBody className="overflow-visible py-2 max-w-xs lg:max-w-lg">
                  <Image
                    isBlurred
                    isZoomed
                    alt={service.name}
                    className="rounded-xl object-cover"
                    src={`${service.image}`}
                    width={600}
                    height={400}
                  />
                  <div className="p-5 my-3">
                    <h4 className="font-bold text-2xl my-2">{service.name}</h4>
                    <small className="text-default-500 line-clamp-2">
                      {service.description}
                    </small>
                  </div>
                </CardBody>
              </Card>
            </Link>
          ))}
        </div>
      </div>

      <div className="w-full border-t my-5" />
      <ContactSection />
    </section>
  );
}
