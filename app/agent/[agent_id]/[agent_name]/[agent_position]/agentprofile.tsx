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
    <Card isBlurred className="border-none bg-background/60" shadow="sm">
      <CardBody>
        <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center">
          {/* Profile Image */}
          <div className="relative col-span-6 md:col-span-3">
            <Image
              alt={profile.name}
              className="object-cover object-top w-full h-full"
              src={
                profile.profile?.image
                  ? `https://abicrealtyphdianne.com/profiles/${profile.profile.image}`
                  : "/default-profile.jpg"
              }
            />
            <h2 className="text-md uppercase text-foreground/80">
              {profile.profile?.position || "Agent"}
            </h2>
          </div>

          {/* Profile Info */}
          <div className="flex flex-col col-span-6 md:col-span-9">
            <div className="flex justify-between items-start">
              <div className="flex flex-col gap-0">
                <h1 className="text-3xl font-bold mt-2 uppercase">
                  {profile.name}
                </h1>
                <h2 className="text-md uppercase text-foreground/80">
                  {profile.profile?.position || ""}
                </h2>

                <hr className="my-4" />

                {/* Contact Information */}
                <div className="py-2">
                  <h1 className="text-sm text-foreground/70">
                    Contact Information
                  </h1>
                  <div className="flex flex-col py-4 gap-2">
                    {/* Address */}
                    <div className="flex items-center gap-2">
                      <div className="bg-violet-200 px-2 py-2 rounded-lg">
                        <MdOutlineWork className="text-violet-700" size={18} />
                      </div>
                      <span>
                        Unit 202, Campos Rueda Building, 101 Urban Ave, Makati,
                        1206 Metro Manila
                      </span>
                    </div>

                    {/* Email */}
                    {profile.email && (
                      <div className="flex items-center gap-2">
                        <div className="bg-violet-200 px-2 py-2 rounded-lg">
                          <MdMail className="text-violet-700" size={18} />
                        </div>
                        <Link
                          className="text-blue-600 hover:underline"
                          href={`mailto:${profile.email}`}
                        >
                          {profile.email}
                        </Link>
                      </div>
                    )}

                    {/* Phone */}
                    {profile.profile?.phone && (
                      <div className="flex items-center gap-2">
                        <div className="bg-violet-200 px-2 py-2 rounded-lg">
                          <MdPhone className="text-violet-700" size={18} />
                        </div>
                        <Link
                          className="text-blue-600 hover:underline"
                          href={`tel:${profile.profile.phone}`}
                        >
                          <span className="text-blue-600">
                            +63 {formatPhoneNumber(profile.profile.phone)}
                          </span>
                        </Link>
                      </div>
                    )}

                    {/* Telegram */}
                    {profile.profile?.telegram && (
                      <div className="flex items-center gap-2">
                        <div className="bg-violet-200 px-2 py-2 rounded-lg">
                          <FaTelegram className="text-violet-700" size={18} />
                        </div>
                        <Link
                          className="text-blue-600 hover:underline"
                          target="_blank"
                          href={`https://t.me/+63${profile.profile.telegram}`}
                        >
                          <span className="text-blue-600">
                            +63 {formatPhoneNumber(profile.profile.telegram)}
                          </span>
                        </Link>
                      </div>
                    )}

                    {/* Viber */}
                    {profile.profile?.viber && (
                      <div className="flex items-center gap-2">
                        <div className="bg-violet-200 px-2 py-2 rounded-lg">
                          <FaViber className="text-violet-700" size={18} />
                        </div>
                        <Link
                          className="text-blue-600 hover:underline"
                          target="_blank"
                          href={`viber://chat?number=${profile.profile.viber}`}
                        >
                          <span className="text-blue-600">
                            +63 {formatPhoneNumber(profile.profile.viber)}
                          </span>
                        </Link>
                      </div>
                    )}

                    {/* WhatsApp */}
                    {profile.profile?.whatsapp && (
                      <div className="flex items-center gap-2">
                        <div className="bg-violet-200 px-2 py-2 rounded-lg">
                          <FaWhatsapp className="text-violet-700" size={18} />
                        </div>
                        <Link
                          className="text-blue-600 hover:underline"
                          target="_blank"
                          href={`https://wa.me/63${profile.profile.whatsapp}`}
                        >
                          <span className="text-blue-600">
                            +63 {formatPhoneNumber(profile.profile.whatsapp)}
                          </span>
                        </Link>
                      </div>
                    )}
                  </div>
                </div>

                {/* Social Media */}
                <div className="py-2 z-50">
                  <h1 className="text-sm text-foreground/70">Social Media</h1>
                  <div className="flex flex-col py-4 gap-2">
                    {/* Facebook */}
                    {isValidUrl(profile.profile?.facebook) && (
                      <div className="flex items-center gap-2">
                        <div className="bg-violet-200 px-2 py-2 rounded-lg">
                          <MdFacebook className="text-violet-700" size={18} />
                        </div>
                        <Link
                          target="_blank"
                          href={profile.profile?.facebook as string}
                        >
                          <span className="text-blue-600">{profile.name}</span>
                        </Link>
                      </div>
                    )}

                    {/* Instagram */}
                    {isValidUrl(profile.profile?.instagram) && (
                      <div className="flex items-center gap-2">
                        <div className="bg-violet-200 px-2 py-2 rounded-lg">
                          <FaInstagram className="text-violet-700" size={18} />
                        </div>
                        <Link
                          target="_blank"
                          href={profile.profile?.instagram as string}
                        >
                          <span className="text-blue-600">{profile.name}</span>
                        </Link>
                      </div>
                    )}
                  </div>

                  {/* Save Contact Button - bottom right, mobile only */}
                  <div className="flex justify-end mt-4 md:hidden">
                    <button
                      onClick={handleSaveContact}
                      className="flex items-center bg-violet-600 text-white text-sm font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-violet-700 transition"
                    >
                      <LuDownload className="w-4 h-4 mr-1" />
                      Save Contact
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default AgentProfile;
