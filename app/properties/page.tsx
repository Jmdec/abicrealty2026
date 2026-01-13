"use client";

import React, { useState, useEffect } from "react";
import PropertyCard from "@/components/card/propertycard";
import NoData from "@/components/error/nodata";
import { Trash, X } from "lucide-react";

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
  const [minPrice, setMinPrice] = useState<number | "">("");
  const [maxPrice, setMaxPrice] = useState<number | "">("");

  const ITEMS_PER_PAGE = 10;
  
  const [currentPage, setCurrentPage] = useState(1);


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
    let filtered = [...properties];

    // 🔍 Search
    if (search.trim()) {
      const searchLower = normalizeSearchTerm(search);

      filtered = filtered.filter((p) => {
        const propertyData = normalizeSearchTerm(
          `${p.name} ${p.location} ${p.description} ${p.unit_status} ${p.unit_type} ${p.status} ${p.price}`
        );
        return propertyData.includes(searchLower);
      });
    }

    // 🏷 Sale / Rent
    if (filter === "for-sale") {
      filtered = filtered.filter((p) => p.status === "For Sale");
    } else if (filter === "for-rent") {
      filtered = filtered.filter((p) => p.status === "For Rent");
    }

    // 💰 PRICE FILTER (NEW)
    filtered = filtered.filter((p) => {
      const price = p.price ?? 0;
      const max = p.max_price ?? price;

      if (minPrice !== "" && max < minPrice) return false;
      if (maxPrice !== "" && price > maxPrice) return false;

      return true;
    });

    // 🔀 Sorting
    filtered.sort((a, b) => {
      if (filter === "") {
        if (a.status === "For Sale" && b.status === "For Rent") return -1;
        if (a.status === "For Rent" && b.status === "For Sale") return 1;
      }
      return a.name.localeCompare(b.name);
    });

    setFilteredProperties(filtered);
    setCurrentPage(1); // reset pagination
  }, [properties, search, filter, minPrice, maxPrice]);


  const totalPages = Math.ceil(filteredProperties.length / ITEMS_PER_PAGE);

  const paginatedProperties = filteredProperties.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <section className="flex flex-col items-center w-full min-h-screen py-10 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 max-w-7xl">
        <header className="text-center mb-8">
          <h1 className="font-bold text-4xl lg:text-5xl text-violet-700 uppercase">
            Properties
          </h1>
          <p className="text-base text-default-500 dark:text-gray-300 leading-relaxed">
            Discover the perfect property with unmatched quality, dedication,
            and personalized guidance.
          </p>
        </header>

        {/* Filter & Search bar container */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-3 mb-10">
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
              Sale
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
              Rent
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

          <div className="lg:border lg:border-l lg:border-gray-200 lg:h-10"/>

          {/* Price Filter */}
          <div className="flex gap-2 w-full max-w-md">
            <input
              type="number"
              placeholder="Min Price"
              value={minPrice}
              onChange={(e) =>
                setMinPrice(e.target.value ? Number(e.target.value) : "")
              }
              className="w-full rounded-lg border px-4 py-2 dark:bg-gray-800 dark:text-white"
            />

            <input
              type="number"
              placeholder="Max Price"
              value={maxPrice}
              onChange={(e) =>
                setMaxPrice(e.target.value ? Number(e.target.value) : "")
              }
              className="w-full rounded-lg border px-4 py-2 dark:bg-gray-800 dark:text-white"
            />

            <button
              onClick={() => {
                setMinPrice("");
                setMaxPrice("");
              }}
              className="px-4 py-2 rounded-lg bg-gray-300 dark:bg-gray-700 text-sm"
            >
              <Trash className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Properties grid */}
        <div className="grid grid-cols-2 gap-6 lg:grid-cols-4 xl:grid-cols-5">
          {filteredProperties.length > 0 ? (
            paginatedProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))
          ) : (
            <div className="col-span-full flex justify-center">
              <NoData />
            </div>
          )}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2 mt-10 flex-wrap">

            {/* Previous */}
            <button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              className="px-4 py-2 rounded-lg bg-gray-200 dark:bg-gray-700 disabled:opacity-50"
            >
              Prev
            </button>

            {/* Page Numbers */}
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`px-4 py-2 rounded-lg font-semibold transition ${
                  page === currentPage
                    ? "bg-violet-700 text-white"
                    : "bg-gray-200 dark:bg-gray-700 hover:bg-violet-600 hover:text-white"
                }`}
              >
                {page}
              </button>
            ))}

            {/* Next */}
            <button
              disabled={currentPage === totalPages}
              onClick={() =>
                setCurrentPage((p) => Math.min(totalPages, p + 1))
              }
              className="px-4 py-2 rounded-lg bg-gray-200 dark:bg-gray-700 disabled:opacity-50"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
