"use client";

import { Image } from "@nextui-org/react";
import { BsCheckCircle } from "react-icons/bs";
import { Toaster } from "react-hot-toast";
import type { ServiceRecord } from "../data";

interface ServiceDeetsComponentProps {
  service: {
    record: ServiceRecord; // ✅ USE THE SAME TYPE
  };
}

export default function ServiceDeetsComponent({
  service,
}: ServiceDeetsComponentProps) {
  if (!service?.record) {
    return <p>Something went wrong</p>;
  }

  const { name, description, support, benefit, image, edge } = service.record;

  const benefits = benefit
    ?.split("?")
    .map((b) => b.trim())
    .filter(Boolean);

  const supports =
    service.record.support?.split("?").map((s) => s.trim()).filter(Boolean) ?? [];

  const edges =
    service.record.edge?.split("?").map((e) => e.trim()).filter(Boolean) ?? [];

  return (
    <div>
      <Toaster position="top-center" />

      <div className="flex items-center justify-center mx-auto px-4 lg:px-8">
        <div className="flex">
          <div>
            {supports.length > 0 && (
              <div className="mt-8">
                <h3 className="text-sm font-semibold uppercase text-indigo-600">
                  What We Handle
                </h3>
                <h2 className="font-bold text-3xl text-violet-700 uppercase">
                  {name}
                </h2>
                <p className="my-2 text-default-500 text-justify">
                  {description}
                </p>
                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-5 my-4">
                  {supports.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <BsCheckCircle className="h-5 w-5 text-green-400 mt-1" />
                      <p className="ml-3 text-sm">{item}</p>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="flex items-center justify-center">
              {benefits?.length > 0 && (
                <div className="mt-8">
                  <h3 className="text-center text-sm font-semibold uppercase text-indigo-600">
                    Key Benefits
                  </h3>
                  <h2 className="text-center font-bold text-3xl text-violet-700 uppercase">
                    Why Client Trust Us
                  </h2>
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-5 my-4">
                    {benefits.map((item, index) => (
                      <div className="border rounded-xl p-4">
                        <li key={index} className="flex items-start">
                          <h1 className="font-semibold ml-3 text-md">{item}</h1>
                        </li>
                      </div>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <div>
              {edges?.length > 0 && (
                <div className="mt-8">
                  <h3 className="text-sm font-semibold uppercase text-indigo-600 mb-4">
                    Why Choose Us
                  </h3>
                  <ul className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                    {edges.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <BsCheckCircle className="h-5 w-5 text-green-400 mt-1" />
                        <p className="ml-3 text-sm">{item}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="mt-10 lg:mt-0">
          <Image
            isBlurred
            isZoomed
            src={image}
            alt={name}
            width={400}
            height={300}
            className="rounded-xl"
          />
        </div>
      </div>
    </div>
  );
}
