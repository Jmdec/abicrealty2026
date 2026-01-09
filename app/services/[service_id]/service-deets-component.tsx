"use client"
import { Image } from "@nextui-org/react"
import { BsCheckCircle } from "react-icons/bs"
import { Toaster } from "react-hot-toast"

interface ServiceDeetsComponentProps {
  service: {
    record: {
      id: string
      name: string
      description: string
      image: string
    }
  }
}

export default function ServiceDeetsComponent({ service }: ServiceDeetsComponentProps) {
  if (!service) {
    return <p>Something went wrong</p>
  }
  return (
    <div>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8">
          <div>
            <div className="flex justify-between items-center">
              <h2 className="font-bold text-2xl md:text-3xl text-violet-700 uppercase ">{service.record.name}</h2>
            </div>
            <p className="text-base text-default-500 dark:text-gray-300 leading-relaxed text-justify mt-2">
              {service.record.description.split("?").map((part, index) => (
                <span key={index}>
                  {part.trim()}
                  <br />
                </span>
              ))}
            </p>
            <div className="mt-8">
              <div className="flex items-center">
                <h3 className="flex-shrink-0 pr-4 text-sm font-semibold uppercase tracking-wider text-indigo-600">
                  Key Benefits
                </h3>
                <div className="flex-1 border-t-2 border-gray-200"></div>
              </div>
              <ul className="mt-8 space-y-5 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-5">
                {["Benefit 1", "Benefit 2", "Benefit 3", "Benefit 4"].map((benefit, index) => (
                  <li key={index} className="flex items-start lg:col-span-1">
                    <div className="flex-shrink-0">
                      <BsCheckCircle className="h-5 w-5 text-green-400" aria-hidden="true" />
                    </div>
                    <p className="ml-3 text-sm text-gray-700">{benefit}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-12 relative text-base max-w-prose mx-auto lg:mt-0 lg:max-w-none">
            <div className="aspect-w-12 aspect-h-7 lg:aspect-none">
              <Image
                isBlurred
                isZoomed
                src={`https://abicrealtyphdianne.com/services/${service.record.image}`}
                alt={service.record.name}
                width={300}
                height={200}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
