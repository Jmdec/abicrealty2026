'use client';
import { Card, CardBody, CardFooter } from "@nextui-org/react";
import { toSlug } from "@/utils/slug";
import { useRouter } from "next/navigation";
import Image from 'next/image';

interface TeamMember {
  id: string;
  name: string;
  image?: string;
  position?: string;
  email?: string;
  phone?: string;
  facebook?: string;
  profile?: {
    image?: string;
    position?: string;
  };
}

interface TeamCardProps {
  team: TeamMember[];
}

// Custom order for sorting positions
const positionOrder: { [key: string]: number } = {
  "sales manager": 1,
  "senior property specialist": 2,
  "property specialist": 3,
};

const sortByPosition = (a: TeamMember, b: TeamMember) => {
  const positionA = a.profile?.position?.toLowerCase() || "";
  const positionB = b.profile?.position?.toLowerCase() || "";

  const orderA = positionOrder[positionA] || 999;
  const orderB = positionOrder[positionB] || 999;

  return orderA - orderB;
};

export default function TeamCard({ team }: TeamCardProps) {
  const router = useRouter();
  const sortedTeam = [...team].sort(sortByPosition);

  const handleCardClick = (member: TeamMember) => {
    router.push(
      `/agent/${member.id}/${toSlug(member.name)}/${toSlug(member.profile?.position || "agent")}`
    );
  };

  return (
    <>
      {sortedTeam.map((member) => {
        // ✅ Fix: Safe image fallback
        const profileImage =
          member.profile?.image && member.profile.image.trim() !== ""
            ? `https://abicrealtyphdianne.com/profiles/${member.profile.image}`
            : "/default-profile.png";

        return (
          <Card
            key={member.id}
            isPressable
            shadow="sm"
            className="w-full cursor-pointer"
            onPress={() => handleCardClick(member)}
          >
            <CardBody className="overflow-hidden p-0">
              <Image
                alt={member.name}
                className="w-full h-72 object-cover object-top"
                src={profileImage}
                width={500}
                height={300}
                loading="lazy"
              />
            </CardBody>
            <CardFooter className="flex flex-col text-center">
              <h1 className="text-base font-bold uppercase">{member.name}</h1>
              <p className="text-default-500 text-sm capitalize">
                {member.profile?.position || "Property Specialist"}
              </p>
            </CardFooter>
          </Card>
        );
      })}
    </>
  );
}
