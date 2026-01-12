'use client'
import FAQ from '@/app/single/property/[id]/[name]/[description]/faq';
import Nearby from '@/app/single/property/[id]/[name]/[description]/nearby';
import { Tooltip } from '@nextui-org/react';
import React from 'react'
import toast from 'react-hot-toast';
import { BsCopy, BsHouseCheckFill } from 'react-icons/bs';
import { FaCalendarCheck, FaElevator } from 'react-icons/fa6';
import { LuBuilding2 } from 'react-icons/lu';
import { MdPayments } from 'react-icons/md';
import { TbRulerMeasure2 } from 'react-icons/tb';
import {
    MapPin,
    WavesLadder,
    Building,
    BedDouble,
    Home,
    Bell,
    ParkingCircle,
    Dumbbell,
    ShieldCheck,
    PawPrint,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { IconType } from "react-icons";

type Amenity = {
    key: string;
    label: string;
    icon?: LucideIcon | IconType;
};

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
    unit_furnish: string;
    sale: string;
    user_id: string;
    sale_type: string;
    unit_status: string;
    payment: string;
    area: number;
    unit_number: number;
    terms: string;
    title: string;
    turnover: string;
    amenities: string;
}

interface PropertyProps {
    properties: Property;
}

export const amenities = [
    { key: "Pool Area", label: "Pool Area", icon: WavesLadder },
    { key: "Balcony/Terrace", label: "Balcony/Terrace", icon: Building },
    { key: "Elevator", label: "Elevator", icon: FaElevator },
    { key: "Guest Suite", label: "Guest Suite", icon: BedDouble },
    { key: "Club House", label: "Club House", icon: Home },
    { key: "Concierge Services", label: "Concierge Services", icon: Bell },
    { key: "Underground Parking", label: "Underground Parking", icon: ParkingCircle },
    { key: "Gym/Fitness Center", label: "Gym/Fitness Center", icon: Dumbbell },
    { key: "Security", label: "Security", icon: ShieldCheck },
    { key: "Pet-Friendly Facilities", label: "Pet-Friendly Facilities", icon: PawPrint },
];


function getOrdinalSuffix(n: number): string {
    if (n % 100 >= 11 && n % 100 <= 13) return "th";
    switch (n % 10) {
        case 1:
            return "st";
        case 2:
            return "nd";
        case 3:
            return "rd";
        default:
            return "th";
    }
}

const PropertyDetails: React.FC<PropertyProps> = ({ properties }) => {
    const handleShare = () => {
        const shareableLink = window.location.href;
        toast.success('Link copied to clipboard!');
        navigator.clipboard.writeText(shareableLink);
    };

    const propertyAmenities: string[] = React.useMemo(() => {
        try {
            return JSON.parse(properties.amenities);
        } catch {
            return [];
        }
    }, [properties.amenities]);

    const resolvedAmenities = amenities.filter((item) =>
        propertyAmenities.includes(item.key)
    );

    return (
        <>
            {/* Property Status */}
            <div className="flex items-center gap-2 uppercase">
                <small className="px-1 py-0.5 text-tiny line-clamp-1 font-semibold rounded-md bg-green-200 text-green-700">
                    {properties.unit_status}
                </small>

                <span className="bg-blue-200 px-1 py-0.5 rounded-md font-medium text-blue-800 text-tiny">
                    {properties.status}
                </span>
            </div>

            {/* Property Name */}
            <div className="flex justify-between items-center">
                <h1 className="font-bold text-2xl md:text-3xl mt-2">
                    {properties.unit_type} | {properties.name}
                </h1>{" "}

                {/* Copy Link to Clipboard */}
                <Tooltip showArrow={true} content="Share link">
                    <div
                        onClick={handleShare}
                        className="relative cursor-pointer text-indigo-600 hover:text-indigo-400 hover:scale-125"
                    >
                        <BsCopy size={24} className="relative" />
                    </div>
                </Tooltip>
            </div>

            {/* Property Location */}
            <div className="flex text-default-500 text-lg gap-1 mt-2">
                <MapPin />
                <p>
                    {properties.location}
                </p>
            </div>

            {/* Listing Price */}
            <div className="mt-4">
                <p className=" text-xl font-bold ">
                    ₱{Number(properties.price).toLocaleString('en-PH', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </p>
            </div>

            <div className="flex flex-col gap-6 mt-4">
                {/* Description */}
                <div className="rounded-md border-2 p-5">
                    <h1 className="font-bold uppercase">Description</h1>
                    <p className="text-default-500 text-md mt-2">
                        {properties.description}
                    </p>
                
                    <div className="grid grid-cols-3 lg:grid-cols-6 gap-2 mt-3">

                        {properties.status === "For Sale" ? (
                            <>
                                <div className="flex items-center gap-2 bg-default-100 px-2 py-2 rounded-lg">
                                    <div className="bg-violet-100 text-violet-800 px-2 py-2 rounded-full">
                                        <BsHouseCheckFill />
                                    </div>
                                    <p className="text-base font-medium">
                                        {properties.status}
                                    </p>
                                </div>


                                {properties.sale_type === "RFO" ? (
                                    <>

                                        <div className="flex items-center gap-2 bg-default-100 px-2 py-2 rounded-lg">
                                            <div className="bg-violet-100 text-violet-800 px-2 py-2 rounded-lg">
                                                <BsHouseCheckFill />
                                            </div>
                                            <p className="text-base font-medium">
                                                {properties.sale_type}
                                            </p>
                                        </div>

                                        <div className="flex items-center gap-2 bg-default-100 px-2 py-2 rounded-lg">
                                            <div className="bg-violet-100 text-violet-800 px-2 py-2 rounded-lg">
                                                <MdPayments />
                                            </div>
                                            <p className="text-base font-medium">
                                                {properties.payment}
                                            </p>
                                        </div>

                                        <div className="flex items-center gap-2 bg-default-100 px-2 py-2 rounded-lg">
                                            <div className="bg-violet-100 text-violet-800 px-2 py-2 rounded-lg">
                                                <BsHouseCheckFill />
                                            </div>
                                            <p className="text-base font-medium">
                                                {properties.title}
                                            </p>
                                        </div>

                                    </>
                                ) : properties.sale_type === "Pre-Selling" ? (
                                    <>

                                        <div className="flex items-center gap-2 bg-default-100 px-2 py-2 rounded-lg">
                                            <div className="bg-violet-100 text-violet-800 px-2 py-2 rounded-lg">
                                                <BsHouseCheckFill />
                                            </div>
                                            <p className="text-base font-medium">
                                                {properties.sale_type}
                                            </p>
                                        </div>

                                        <div className="flex items-center gap-2 bg-default-100 px-2 py-2 rounded-lg">
                                            <div className="bg-violet-100 text-violet-800 px-2 py-2 rounded-lg">
                                                <FaCalendarCheck />
                                            </div>
                                            <p className="text-base font-medium">
                                                {new Date(properties.turnover).toLocaleDateString("en-US", {
                                                    weekday: 'long',
                                                    year: 'numeric',
                                                    month: 'long',
                                                    day: 'numeric'
                                                })}
                                            </p>
                                        </div>
                                    </>
                                ) : null}

                            </>
                        ) : properties.status === "For Rent" ? (
                            <>
                                <div className="flex items-center gap-2 bg-default-100 px-2 py-2 rounded-lg">
                                    <div className="bg-violet-100 text-violet-800 px-2 py-2 rounded-full">
                                        <BsHouseCheckFill />
                                    </div>
                                    <p className="text-base font-medium">
                                        {properties.status}
                                    </p>
                                </div>

                                <div className="text-base font-medium">
                                    <div className="flex items-center gap-2 bg-default-100 px-2 py-2 rounded-lg">
                                        <div className="bg-violet-100 text-violet-800 px-2 py-2 rounded-lg">
                                            <MdPayments />
                                        </div>
                                        <p className="text-base font-medium">
                                            {properties.terms}
                                        </p>
                                    </div>
                                </div>
                            </>

                        ) : null}

                        <div className="flex items-center gap-2 bg-default-100 px-2 py-2 rounded-lg">
                            <div className="bg-violet-100 text-violet-800 px-2 py-2 rounded-lg">
                                <TbRulerMeasure2 />
                            </div>
                            <p className="text-base font-medium">
                                {properties.area} sqm
                            </p>
                        </div>

                        <div className="flex items-center gap-2 bg-default-100 px-2 py-2 rounded-lg">
                            <div className="bg-violet-100 text-violet-800 px-2 py-2 rounded-lg">
                                <LuBuilding2 />
                            </div>
                            <p className="text-base font-medium">
                                {properties.unit_number}
                                {getOrdinalSuffix(properties.unit_number)} Floor
                            </p>
                        </div>
                    </div>
                </div>

                {/* Amenities */}
                <div className="rounded-md border-2 p-5">
                    <h1 className="font-bold uppercase">General Features</h1>
                        <div className="grid grid-cols-2 lg:grid-cols-5 gap-3 mt-2">
                            {resolvedAmenities.map((item) => {
                                const Icon = item.icon;

                                return (
                                <div
                                    key={item.key}
                                    className="flex items-center gap-2 px-3 py-1 text-sm"
                                >
                                    {Icon && <Icon className="w-7 h-7 text-violet-800" />}
                                    <span>{item.label}</span>
                                </div>
                                );
                            })}
                        </div>
                </div>

                <div className="w-full pb-10">
                    <h1 className="font-bold text-3xl text-violet-800">
                        Nearby Properties
                    </h1>
                    <p className="text-md my-2">
                        Discover your dream home from our curated collection of
                        luxurious properties.
                    </p>

                    <div className="rounded-md border-2 p-5">
                        <Nearby
                            currentPropertyId={properties.id}
                            properties={[properties]}
                        />
                    </div>
                </div>
                <div className="hidden md:hidden lg:block">
                    <FAQ />
                </div>
            </div>




        </>
    )
}

export default PropertyDetails
