import ServiceDeetsComponent from "./service-deets-component";
import { servicesData } from "../data";

const fetchData = async (service_id: string) => {
  const service = servicesData.find((s) => s.id === service_id);
  if (!service) return null;

  return { record: service };
};

// ✅ FIX 1: await params
export async function generateMetadata({
  params,
}: {
  params: Promise<{ service_id: string }>;
}) {
  const { service_id } = await params;
  const service = await fetchData(service_id);

  return {
    title: service
      ? `${service.record.name} - ABIC Realty`
      : "Service Not Found",
    description: service?.record.description,
  };
}

// ✅ FIX 2: await params
export default async function ServicePage({
  params,
}: {
  params: Promise<{ service_id: string }>;
}) {
  const { service_id } = await params;
  const service = await fetchData(service_id);

  if (!service) return <p>Service not found</p>;

  return <ServiceDeetsComponent service={service} />;
}
