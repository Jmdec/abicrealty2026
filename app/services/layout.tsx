import type { Metadata } from "next"

const metadata: Metadata = {
  title: "Our Services",
  description:
    "Explore ABIC Realty's professional real estate services, including property buying, selling, leasing, and investment advisory. Let us help you find the perfect property.",

  openGraph: {
    title: "Our Services | ABIC Realty",
    description:
      "ABIC Realty offers expert real estate services, including buying, selling, leasing, and investment advisory. Find your ideal property with us.",
    url: "https://www.abic-website.vercel.app/services",
    siteName: "ABIC Realty",
    images: [
      {
        url: "https://abicrealtyphdianne.com/media/abic-realty-services-banner.png",
        width: 1200,
        height: 630,
        alt: "ABIC Realty Services",
      },
    ],
    type: "website",
    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",
    site: "@AbicRealty",
    creator: "@AbicRealty",
    title: "Our Services | ABIC Realty",
    description:
      "Discover ABIC Realty’s expert real estate services. We assist with property buying, selling, leasing, and investment advisory.",
    images: ["https://abicrealtyphdianne.com/media/abic-realty-services-banner.png"],
  },

  other: {
    "og:image:width": "1200",
    "og:image:height": "630",
  },
}

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      {children}
    </section>
  );
}
