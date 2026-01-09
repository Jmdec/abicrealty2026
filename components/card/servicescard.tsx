"use client"
import { Card, CardBody, Image, Link } from "@nextui-org/react"
import useSWR from "swr"
import Loading from "../loaders/loading"

const fetcher = (url: string) => fetch(url).then((res) => res.json())

const ServicesCard = () => {
  const { data, error, isLoading } = useSWR("https://abicrealtyphdianne.com/api/main/services", fetcher)

  const services: any[] = data?.records || []

  if (isLoading) {
    return (
      <div className="py-12">
        <Loading label="Loading Services.." />
      </div>
    )
  }

  if (error) {
    return <p>Error loading services.</p>
  }

  return (
    <div className="flex py-12 gap-2">
      {services.map((service: any, index: number) => (
        <Link key={index} href={`/services/${service.id}`}>
          <Card>
            <CardBody className="overflow-visible py-2">
              <div className="flex justify-center items-center">
                <Image
                  isBlurred
                  isZoomed
                  alt="Card background"
                  className="rounded-xl"
                  fallbackSrc="https://abicrealtyphdianne.com/media/abic-fallback1.png"
                  height={300}
                  width={500}
                  src={`https://abicrealtyphdianne.com/services/${service.image}`}
                />
              </div>
              <div className="p-5 my-3">
                <h4 className="font-bold text-2xl my-2">{service.name}</h4>
                <small className="text-default-500 line-clamp-2">{service.description}</small>

                
              </div>
            </CardBody>
          </Card>
        </Link>
      ))}
      
    </div>
  )
}

export default ServicesCard
