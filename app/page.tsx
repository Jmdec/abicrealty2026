// app/view/property/page.tsx
import React from "react";

import HeroSection from "./home/herosection";
import PropertySection from "./home/propertysection";
import FAQSection from "./home/faqsection";
import RatingSection from "./home/ratingsection";
import ContactSection from "./home/contactsection";

import { getAuthHeaders } from "@/components/headers";

const fetchProperties = async () => {
  try {
    const endpoint = process.env.NEXT_PUBLIC_API_URL;

    const headers = getAuthHeaders();

    if (!endpoint) {
      throw new Error("API URL is not defined in the environment variables");
    }

    const res = await fetch(`${endpoint}/properties`, {
      headers: headers,
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch properties`);
    }

    const data = await res.json();

    // Get the last 5 properties
    return data.records.slice(-5) || [];
  } catch (error) {
    return [];
  }
};

export const dynamic = "force-dynamic";

export default async function SinglePropertyPage() {
  const properties = await fetchProperties();

  return (
    <section className="bg-gray-50 flex flex-col items-center w-full">
      <HeroSection />
      <PropertySection properties={properties} />
      <FAQSection />
      <RatingSection />
      <div className="w-full border-t my-5" />
      <ContactSection />
    </section>
  );
}
