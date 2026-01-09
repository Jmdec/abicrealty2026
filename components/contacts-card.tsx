"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import {
  Globe,
  Mail,
  Phone,
  MessageSquare,
  MessageCircle,
  Facebook,
  Send,
  Download,
} from "lucide-react"

export default function ContactsCard() {
  const handleSaveContact = () => {
    const vcardData = `
BEGIN:VCARD
VERSION:3.0
N:Li;Zoe;;;
FN:Zoe Li
ORG:ABIC Realty & Consultancy Corporation
TITLE:President
TEL;TYPE=CELL:+639155800518
EMAIL;TYPE=INTERNET:abic.zoe@gmail.com
URL:https://abicrealtyph.com
END:VCARD
    `.trim()

    const blob = new Blob([vcardData], { type: "text/vcard" })
    const url = URL.createObjectURL(blob)
    const link = document.createElement("a")
    link.href = url
    link.download = "ZoeLi.vcf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <Card className="w-full max-w-3xl rounded-xl shadow-xl overflow-hidden flex flex-col md:flex-row">
      {/* Left section for the profile picture */}
      <div className="relative w-full md:w-1/2 flex items-center justify-center p-6 md:p-8">
        <Image
          src="/abic-removebg-preview.png"
          alt="ZOE LI profile picture"
          width={300}
          height={300}
          className="rounded-lg object-cover shadow-sm"
        />
      </div>

      {/* Right section for contact details */}
      <CardContent className="flex-1 p-6 md:p-8 md:w-1/2 flex flex-col justify-between">
        <div>
          <h2 className="text-xl font-bold text-gray-800 text-center md:text-left">
            ZOE LI
          </h2>
          <p className="text-base text-gray-600 mt-1 text-center md:text-left">
            PRESIDENT
          </p>

          {/* Contact Information Section */}
          <div className="mt-6 mb-4">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">
              Contact Information
            </h3>
            <hr className="border-gray-200" />
          </div>

          <div className="grid gap-4 text-left text-sm text-gray-600">
            <div className="flex items-center gap-4">
              <Mail className="w-5 h-5 text-purple-500 shrink-0" />
              <a
                href="mailto:abic.zoe@gmail.com"
                className="text-blue-600 hover:underline"
              >
                abic.zoe@gmail.com
              </a>
            </div>

            <div className="flex items-center gap-4">
              <Phone className="w-5 h-5 text-purple-500 shrink-0" />
              <a
                href="tel:+639155800518"
                className="text-blue-600 hover:underline"
              >
                +63 915 580 0518
              </a>
            </div>

            <div className="flex items-center gap-4">
              <MessageSquare className="w-5 h-5 text-purple-500 shrink-0" />
              <a
                href="sms:+639155800518"
                className="text-blue-600 hover:underline"
              >
                +63 915 580 0518 (SMS)
              </a>
            </div>

            <div className="flex items-center gap-4">
              <MessageCircle className="w-5 h-5 text-purple-500 shrink-0" />
              <a
                href="https://wa.me/639155800518"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                +63 915 580 0518 (WhatsApp)
              </a>
            </div>

            <div className="flex items-center gap-4">
              <Send className="w-5 h-5 text-purple-500 shrink-0" />
              <a
                href="https://t.me/639155800518"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                +63 915 580 0518 (Telegram)
              </a>
            </div>

            <div className="flex items-center gap-4">
              <Globe className="w-5 h-5 text-purple-500 shrink-0 mt-1" />
              <a
                href="https://abicrealtyph.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                abicrealtyph.com
              </a>
            </div>
          </div>

          {/* Social Media Section */}
          <div className="mt-6 mb-4">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">
              Social Media
            </h3>
            <hr className="border-gray-200" />
          </div>

          <div className="grid gap-4 text-left text-sm text-gray-600">
            <div className="flex items-center gap-4">
              <Facebook className="w-5 h-5 text-purple-500 shrink-0" />
              <a
                href="https://www.facebook.com/share/18T9jHVXjD/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                ABIC Realty & Consultancy Corporation
              </a>
            </div>
          </div>
        </div>

        {/* Save Contact Button — shown only on mobile */}
        <div className="flex justify-end mt-6 md:hidden">
          <button
            onClick={handleSaveContact}
            className="bg-purple-600 text-white text-sm font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-purple-700 transition"
          >
            <Download className="inline-block w-4 h-4 mr-1" />
            Save Contact
          </button>
        </div>
      </CardContent>
    </Card>
  )
}
