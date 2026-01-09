import { Metadata } from "next";

import CareersCard from "@/components/card/careerscard";
import NoData from "@/components/error/nodata";

export const metadata: Metadata = {
  title: "Career",
  description:
    "Explore exciting career opportunities at ABIC Realty. Join our team and contribute to delivering exceptional real estate solutions.",

  openGraph: {
    title: "Career | ABIC Realty",
    description:
      "Explore exciting career opportunities at ABIC Realty. Join our team and contribute to delivering exceptional real estate solutions.",
    url: "https://www.abic-website.vercel.app/career",
    siteName: "ABIC Realty",
    images: [
      {
        url: "https://abicrealtyphdianne.com/media/abic-realty-careers-banner.png", // Replace with the actual career page image
        width: 1200,
        height: 630,
        alt: "Join the ABIC Realty team",
      },
    ],
    type: "website",
    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",
    site: "@AbicRealty",
    creator: "@AbicRealty",
    title: "Career | ABIC Realty",
    description:
      "Discover career opportunities at ABIC Realty and become part of our mission to deliver top-tier real estate solutions.",
    images: [
      "https://abicrealtyphdianne.com/media/abic-realty-careers-banner.png", // Ensure this is a valid image
    ],
  },

  other: {
    "og:image:width": "1200",
    "og:image:height": "630",
  },
};

interface Career {
  id: string;
  position: string;
  slots: number;
  image: string;
}

const fetchCareers = async (): Promise<Career[]> => {
  try {
    const endpoint = `https://abicrealtyphdianne.com/api/main/careers`;
    const res = await fetch(endpoint, {
      cache: "no-store",
    });

    if (!res.ok) {
      console.error("Failed to fetch careers:", res.status, res.statusText);

      return [];
    }

    const data = await res.json();

    return data.records || [];
  } catch (error) {
    console.error(
      "Failed to fetch careers:",
      error instanceof Error ? error.message : error,
    );

    return [];
  }
};

export default async function CareersPage() {
  const careers = await fetchCareers();

  return (
    <section className="flex flex-col items-center w-full">
      <div className="container mx-auto px-6">
        <div className="flex flex-col">
          <h1 className="font-bold text-4xl md:text-4xl text-violet-700 dark:text-white uppercase">
            Careers
          </h1>
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed mt-2">
          Build a meaningful career with us. We’re looking for passionate individuals
          who want to grow, innovate, and make a real impact. Whether you’re just starting
          out or looking to take the next step in your professional journey, you’ll find
          opportunities here that challenge and inspire you.
        </p>

          <div className="flex justify-center items-center">
            <div className="max-w-sm py-8">
              {careers.length > 0 ? (
                <CareersCard career={careers} />
              ) : (
                <div className="col-span-full">
                  <NoData />
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="mt-10 py-5 bg-gray-50">
          <h1 className="font-semibold text-2xl md:text-3xl text-violet-700 dark:text-white mb-8 text-center">
            Why Join Us?
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="flex flex-col items-center text-center p-6 rounded-xl bg-white dark:bg-zinc-900 shadow-sm">
              <h2 className="font-medium text-lg text-gray-900 dark:text-white">
                Fast Growing Company
              </h2>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                Join a dynamic and rapidly expanding organization where your contributions make a real impact.
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-6 rounded-xl bg-white dark:bg-zinc-900 shadow-sm">
              <h2 className="font-medium text-lg text-gray-900 dark:text-white">
                Supportive Work Culture
              </h2>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                Work in a supportive and collaborative atmosphere that fosters creativity and innovation.
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-6 rounded-xl bg-white dark:bg-zinc-900 shadow-sm">
              <h2 className="font-medium text-lg text-gray-900 dark:text-white">
                Empowered to Lead
              </h2>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                Empower yourself with opportunities to lead projects and drive meaningful change.
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-6 rounded-xl bg-white dark:bg-zinc-900 shadow-sm">
              <h2 className="font-medium text-lg text-gray-900 dark:text-white">
                Lifelong Learning Culture
              </h2>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                Engage in continuous learning and professional development to enhance your skills.
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-6 rounded-xl bg-white dark:bg-zinc-900 shadow-sm">
              <h2 className="font-medium text-lg text-gray-900 dark:text-white">
                Cross-Domain Exposure
              </h2>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                Gain valuable experience by working across different domains and technologies.
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-6 rounded-xl bg-white dark:bg-zinc-900 shadow-sm">
              <h2 className="font-medium text-lg text-gray-900 dark:text-white">
                Work-Life Balance
              </h2>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                Enjoy flexible work arrangements that support both your personal and professional life.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
