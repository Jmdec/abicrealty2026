export interface ServiceRecord {
    id: string;
    name: string;
    description: string;
    image: string;
    benefit: string;
    support?: string;
    edge?: string;
}

export const servicesData: ServiceRecord[] = [
    {
        id: "financing",
        name: "Property Financing",
        description: "Whether you're facing a sudden financial need or planning for long-term stability, we’re here to guide and support you every step of the way. We offer flexible and reliable financing solutions designed to match your goals and lifestyle.",
        image: "/financing-loan.jpg",
        support: "Loan application processing?Document evaluation and verification?Credit and eligibility assessment?Loan approval and release coordination?Customer support before and after loan release",
        benefit: "Fast approval and release of funds?Flexible payment terms tailored to your budget?Transparent process with no hidden charges?Friendly, professional support from application to completion",
        edge: "Quality & Fast Service?Low Loan Interest?Minimal Requirements",
    },
    {
        id: "transfer",
        name: "Transfer of Title",
        description: "Transferring property ownership doesn’t have to be complicated. We provide reliable assistance to ensure your title transfer is processed smoothly, accurately, and on time—giving you peace of mind from start to finish.",
        image: "/transfer-of-title.jpg",
        support: "Transfer of Title?Transfer of Condominium Title?Transfer of Title for Sale, Donation or Inheritance?Correction of Title Details and Documentation",
        benefit: "Hassle-free title transfer with expert guidance?Reduced risk of errors and delays?Transparent process with clear updates?Trusted support until your new title is released",
        edge: "Fast & Efficient Processing?Complete Documentation Assistance?Accurate & Compliant",
    },
];
