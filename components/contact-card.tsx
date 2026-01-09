"use client";
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import {
  MapPin,
  Mail,
  Phone,
  MessageSquare,
  MessageCircle,
  Facebook,
  Send, // Telegram icon
} from "lucide-react"
import { Button } from "@heroui/react" // ✅ Add this import

export default function ContactCard() {
  // ✅ Function to download the vCard
  const handleSaveContact = () => {
    const vcfUrl = "/contacts/baby-rose-hernandez.vcf"
    const link = document.createElement("a")
    link.href = vcfUrl
    link.download = "BabyRoseHernandez.vcf"
    link.click()
  }

  return (
    <Card className="w-full max-w-3xl rounded-xl shadow-xl overflow-hidden flex flex-col md:flex-row">
      {/* Left section for the profile picture */}
      <div className="relative w-full md:w-1/2 flex items-center justify-center p-6 md:p-8">
        <Image
          src="/mamrose.jpg"
          alt="Baby Rose Hernandez profile picture"
          width={300}
          height={300}
          className="rounded-lg object-cover shadow-sm"
        />
      </div>

      {/* Right section for contact details */}
      <CardContent className="flex-1 p-6 md:p-8 md:w-1/2">
        <h2 className="text-xl font-bold text-gray-800 text-center md:text-left">
          BABY ROSE HERNANDEZ
        </h2>
        <p className="text-base text-gray-600 mt-1 text-center md:text-left">
          VICE PRESIDENT | SALES DIRECTOR
        </p>

        {/* Contact Information Section */}
        <div className="mt-6 mb-4">
          <h3 className="text-lg font-semibold text-gray-700 mb-2">Contact Information</h3>
          <hr className="border-gray-200" />
        </div>

        <div className="grid gap-4 text-left text-sm text-gray-600">
          <a
            href="https://www.google.com/maps?q=Unit+202,+Campos+Rueda+Building,+101+Urban+Ave,+Makati,+1206+Metro+Manila"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start gap-4 text-blue-600 hover:underline"
          >
            <MapPin className="w-5 h-5 text-purple-500 shrink-0 mt-1" />
            <span>
              Unit 202, Campos Rueda Building, 101 Urban Ave, Makati, 1206 Metro Manila
            </span>
          </a>

          <div className="flex items-center gap-4">
            <Mail className="w-5 h-5 text-purple-500 shrink-0" />
            <a href="mailto:abicrealty.rose@gmail.com" className="text-blue-600 hover:underline">
              abicrealty.rose@gmail.com
            </a>
          </div>

          <div className="flex items-center gap-4">
            <Phone className="w-5 h-5 text-purple-500 shrink-0" />
            <a href="tel:+639651983796" className="text-blue-600 hover:underline">
              +63 965 198 3796
            </a>
          </div>

          <div className="flex items-center gap-4">
            <MessageSquare className="w-5 h-5 text-purple-500 shrink-0" />
            <a href="sms:+639651983796" className="text-blue-600 hover:underline">
              +63 965 198 3796 (SMS)
            </a>
          </div>

          <div className="flex items-center gap-4">
            <MessageCircle className="w-5 h-5 text-purple-500 shrink-0" />
            <a
              href="https://wa.me/639651983796"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              +63 965 198 3796 (WhatsApp)
            </a>
          </div>

          <div className="flex items-center gap-4">
            <Send className="w-5 h-5 text-purple-500 shrink-0" />
            <a
              href="https://t.me/639651983796"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              +63 965 198 3796 (Telegram)
            </a>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="mt-6 mb-4">
          <h3 className="text-lg font-semibold text-gray-700 mb-2">Social Media</h3>
          <hr className="border-gray-200" />
        </div>

        <div className="grid gap-4 text-left text-sm text-gray-600">
          <div className="flex items-center gap-4">
            <Facebook className="w-5 h-5 text-purple-500 shrink-0" />
            <a
              href="https://www.facebook.com/people/ABIC-Realty-Consultancy-Corporation/61576086213534/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              ABIC Realty & Consultancy Corporation
            </a>
          </div>
        </div>

        {/* ✅ Save Contact Button — visible only on mobile */}
        <div className="flex justify-center mt-6 md:hidden">
          <Button
            size="sm"
            color="primary"
            variant="solid"
            className="font-semibold text-white px-6"
            onPress={handleSaveContact}
          >
            Save Contact
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
