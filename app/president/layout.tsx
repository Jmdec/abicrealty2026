import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"

import { Navbar } from "@/components/navbar" // Corrected: Import Navbar as a named export
import Footer from "@/components/footer" // Import Footer component

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Zoe Li - President",
  description: "Contact information for Zoe Li, Presiden.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen bg-gray-50">
          <Navbar />
          <main className="flex-1 flex flex-col items-center justify-center p-4 md:p-24 mt-16">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
