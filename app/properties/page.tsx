"use client";

import React, { useState, useEffect } from "react";
import PropertyCard from "@/components/card/propertycard";
import NoData from "@/components/error/nodata";

interface Property {
  id: string;
  name: string;
  images: string;
  description: string;
  location: string;
  price: number;
  max_price: number;
  status: string;
  unit_type: string;
  unit_status: string;
  sale: string;
  sale_type: string;
}

async function fetchProperties(): Promise<Property[]> {
  const endpoint = `${process.env.NEXT_PUBLIC_API_URL}/properties`;
  const res = await fetch(endpoint);
  if (!res.ok) {
    throw new Error(`Failed to fetch properties: ${res.statusText}`);
  }
  const data = await res.json();
  return data.records || [];
}

export default function PropertiesPage() {
  const [properties, setProperties] = useState<Property[]>([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<"" | "for-sale" | "for-rent">("");
  const [filteredProperties, setFilteredProperties] = useState<Property[]>([]);

  React.useEffect(() => {
    fetchProperties()
      .then((data) => setProperties(data))
      .catch((err) => {
        console.error(err);
        setProperties([]);
      });
  }, []);

 function normalizeSearchTerm(term: string): string {
  return term
    .toLowerCase()
    .replace(/\s+/g, " ")
    .replace(/\b1\s*bed(room)?s?\b/g, "1br")
    .replace(/\b2\s*bed(room)?s?\b/g, "2br")
    .replace(/\b3\s*bed(room)?s?\b/g, "3br")
    .replace(/\b4\s*bed(room)?s?\b/g, "4br")
    .replace(/\b(\d)\s*br\b/g, "$1br")
    .trim();
}
  useEffect(() => {
    let filtered = properties;

   if (search.trim()) {
    const searchLower = normalizeSearchTerm(search);

    filtered = filtered.filter((p) => {
      const propertyData = normalizeSearchTerm(
        `${p.name} ${p.location} ${p.description} ${p.unit_status} ${p.unit_type} ${p.status} ${p.price}`
      );

      return propertyData.includes(searchLower);
    });
  }

    if (filter === "for-sale") {
      filtered = filtered.filter((p) => p.status === "For Sale");
    } else if (filter === "for-rent") {
      filtered = filtered.filter((p) => p.status === "For Rent");
    }

    filtered = filtered.sort((a, b) => a.name.localeCompare(b.name));

    setFilteredProperties(filtered);
  }, [properties, search, filter]);

  

  return (
    <section className="flex flex-col items-center w-full min-h-screen py-10 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 max-w-7xl">
        <header className="text-center mb-8">
          <h1 className="font-extrabold text-4xl md:text-5xl text-violet-700 dark:text-violet-400 uppercase mb-2">
            Properties
          </h1>
          <p className="text-md md:text-lg text-gray-600 dark:text-gray-300 max-w-xl mx-auto">
            Discover the perfect property with unmatched quality, dedication,
            and personalized guidance.
          </p>
        </header>

        {/* Filter & Search bar container */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 mb-10">
          {/* Filter buttons */}
          <div className="flex space-x-4">
            <button
              onClick={() => setFilter("")}
              className={`px-5 py-2 rounded-full font-semibold transition ${
                filter === ""
                  ? "bg-violet-700 text-white shadow-lg"
                  : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-violet-600 hover:text-white"
              }`}
              aria-pressed={filter === ""}
            >
              All
            </button>
            <button
              onClick={() => setFilter("for-sale")}
              className={`px-5 py-2 rounded-full font-semibold transition ${
                filter === "for-sale"
                  ? "bg-violet-700 text-white shadow-lg"
                  : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-violet-600 hover:text-white"
              }`}
              aria-pressed={filter === "for-sale"}
            >
              For Sale
            </button>
            <button
              onClick={() => setFilter("for-rent")}
              className={`px-5 py-2 rounded-full font-semibold transition ${
                filter === "for-rent"
                  ? "bg-violet-700 text-white shadow-lg"
                  : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-violet-600 hover:text-white"
              }`}
              aria-pressed={filter === "for-rent"}
            >
              For Rent
            </button>
          </div>

          {/* Search input */}
          <div className="w-full max-w-sm">
            <input
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search properties..."
              className="w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-900 dark:bg-gray-800 dark:text-white dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-violet-600 transition"
              aria-label="Search properties"
            />
          </div>
        </div>

        {/* Properties grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {filteredProperties.length > 0 ? (
            filteredProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))
          ) : (
            <div className="col-span-full flex justify-center">
              <NoData />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
