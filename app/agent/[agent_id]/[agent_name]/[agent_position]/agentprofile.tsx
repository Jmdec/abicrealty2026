"use client";
import { formatPhoneNumber } from "@/utils/phoneformat";
import { Card, CardBody, Image } from "@nextui-org/react";
import Link from "next/link";
import React from "react";
import { FaInstagram, FaTelegram, FaViber, FaWhatsapp } from "react-icons/fa6";
import { MdFacebook, MdMail, MdOutlineWork, MdPhone } from "react-icons/md";
import { LuDownload } from "react-icons/lu"; // added icon

interface Profile {
  name: string;
  email: string;
  profile?: {
    position?: string;
    about?: string;
    image?: string;
    phone?: string;
    telegram?: string;
    facebook?: string;
    instagram?: string;
    viber?: string;
    whatsapp?: string;
  } | null;
}

interface ProfileProps {
  profile: Profile;
}

const AgentProfile: React.FC<ProfileProps> = ({ profile }) => {
  const isValidUrl = (url?: string | null) => {
    if (!url) return false;
    if (url.toLowerCase() === "n/a" || url.toLowerCase() === "none") return false;
    return url.includes(".");
  };

  // --- Save Contact Button Handler ---
  const handleSaveContact = () => {
    const name = profile.name || "Unknown";
    const phone = profile.profile?.phone ? `+63${profile.profile.phone}` : "";
    const email = profile.email || "";
    const position = profile.profile?.position || "Agent";
    const org = "ABIC Realty & Consultancy Corporation";

    const vcardData = `
BEGIN:VCARD
VERSION:3.0
N:${name};;;;
FN:${name}
ORG:${org}
TITLE:${position}
TEL;TYPE=CELL:${phone}
EMAIL;TYPE=INTERNET:${email}
END:VCARD
    `.trim();

    const blob = new Blob([vcardData], { type: "text/vcard" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `${name.replace(/\s+/g, "_")}.vcf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Card
      isBlurred
      shadow="sm"
      className="border-none bg-background/60"
    >
      <CardBody className="p-4 md:p-6">
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-6 items-start">

          {/* Profile Image */}
          <div className="w-full">
            <div className="relative md:w-[40vh] md:h-[50vh] lg:w-full lg:h-full overflow-hidden rounded-xl border border-foreground/10 shadow-md">
              <Image
                alt={profile.name}
                className="object-contain object-top"
                src={
                  profile.profile?.image
                    ? `https://abicrealtyphdianne.com/profiles/${profile.profile.image}`
                    : "/default-profile.jpg"
                }
              />
            </div>
          </div>

          {/* Profile Info */}
          <div className="flex flex-col gap-4">

            {/* Name & Position */}
            <div>
              <h1 className="text-2xl md:text-3xl font-bold uppercase">
                {profile.name}
              </h1>
              <p className="text-sm md:text-base uppercase text-foreground/70">
                {profile.profile?.position}
              </p>
            </div>

            <hr />

            {/* Contact Information */}
            <div>
              <h2 className="text-sm font-semibold text-foreground/70 mb-3">
                Contact Information
              </h2>

              <div className="flex flex-col gap-3 text-sm">

                {/* Address */}
                <div className="flex gap-3 items-start">
                  <div className="bg-violet-200 p-2 rounded-lg shrink-0">
                    <MdOutlineWork className="text-violet-700" size={18} />
                  </div>
                  <span className="leading-relaxed">
                    Unit 202, Campos Rueda Building, 101 Urban Ave, Makati, 1206 Metro Manila
                  </span>
                </div>

                {/* Email */}
                {profile.email && (
                  <div className="flex gap-3 items-center">
                    <div className="bg-violet-200 p-2 rounded-lg shrink-0">
                      <MdMail className="text-violet-700" size={18} />
                    </div>
                    <Link
                      href={`mailto:${profile.email}`}
                      className="text-blue-600 hover:underline break-all"
                    >
                      {profile.email}
                    </Link>
                  </div>
                )}

                {/* Phone */}
                {profile.profile?.phone && (
                  <div className="flex gap-3 items-center">
                    <div className="bg-violet-200 p-2 rounded-lg shrink-0">
                      <MdPhone className="text-violet-700" size={18} />
                    </div>
                    <Link
                      href={`tel:${profile.profile.phone}`}
                      className="text-blue-600 hover:underline"
                    >
                      {formatPhoneNumber(profile.profile.phone)}
                    </Link>
                  </div>
                )}
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h2 className="text-sm font-semibold text-foreground/70 mb-3">
                Social Media
              </h2>

              <div className="flex flex-col gap-3 text-sm">
                {isValidUrl(profile.profile?.facebook) && (
                  <div className="flex gap-3 items-center">
                    <div className="bg-violet-200 p-2 rounded-lg shrink-0">
                      <MdFacebook className="text-violet-700" size={18} />
                    </div>
                    <Link
                      href={profile.profile?.facebook as string}
                      target="_blank"
                      className="text-blue-600 hover:underline"
                    >
                      {profile.name}
                    </Link>
                  </div>
                )}

                {isValidUrl(profile.profile?.instagram) && (
                  <div className="flex gap-3 items-center">
                    <div className="bg-violet-200 p-2 rounded-lg shrink-0">
                      <FaInstagram className="text-violet-700" size={18} />
                    </div>
                    <Link
                      href={profile.profile?.instagram as string}
                      target="_blank"
                      className="text-blue-600 hover:underline"
                    >
                      {profile.name}
                    </Link>
                  </div>
                )}
              </div>
            </div>

            {/* Mobile Save Button */}
            <div className="flex justify-end md:hidden pt-2">
              <button
                onClick={handleSaveContact}
                className="flex items-center gap-2 bg-violet-600 text-white text-sm font-semibold px-4 py-2 rounded-lg shadow hover:bg-violet-700 transition"
              >
                <LuDownload className="w-4 h-4" />
                Save Contact
              </button>
            </div>

          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default AgentProfile;
