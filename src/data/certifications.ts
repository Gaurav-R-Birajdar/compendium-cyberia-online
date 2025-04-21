
export interface Certification {
  id: string;
  title: string;
  provider: string;
  description: string;
  link: string;
  options?: string[]; // Different exam tracks/options
  roadmap?: string[]; // Ordered path for certifications
  badgeUrl?: string;
  tags?: string[];
}

interface CategoryCerts {
  [category: string]: Certification[];
}

export const certificationsByCategory: CategoryCerts = {
  "cloud-computing": [
    {
      id: "aws-cloud-practitioner",
      title: "AWS Certified Cloud Practitioner",
      provider: "Amazon Web Services",
      description: "Entry-level AWS foundational certification for cloud basics.",
      link: "https://aws.amazon.com/certification/certified-cloud-practitioner/",
      options: [
        "Foundational (CLF-C02)"
      ],
      roadmap: [
        "AWS Certified Cloud Practitioner",
        "AWS Certified Solutions Architect – Associate",
        "AWS Certified Solutions Architect – Professional",
        "AWS Certified DevOps Engineer – Professional"
      ],
      badgeUrl: "https://d1.awsstatic.com/training-and-certification/Certification%20Badges/AWS-Certified-Cloud-Practitioner_512x512.png",
      tags: ["AWS", "Foundational"],
    },
    {
      id: "aws-solutions-architect-associate",
      title: "AWS Certified Solutions Architect – Associate",
      provider: "Amazon Web Services",
      description: "Design distributed systems on AWS. Skill level: Associate.",
      link: "https://aws.amazon.com/certification/certified-solutions-architect-associate/",
      options: [
        "Associate Level (SAA-C03)"
      ],
      roadmap: [
        "AWS Certified Cloud Practitioner",
        "AWS Certified Solutions Architect – Associate",
        "AWS Certified Solutions Architect – Professional"
      ],
      badgeUrl: "https://d1.awsstatic.com/training-and-certification/Certification%20Badges/AWS-Certified-Solutions-Architect-Associate_512x512.png",
      tags: ["AWS", "Associate"],
    },
    {
      id: "aws-solutions-architect-pro",
      title: "AWS Certified Solutions Architect – Professional",
      provider: "Amazon Web Services",
      description: "Advanced skill certification for designing cloud architectures on AWS.",
      link: "https://aws.amazon.com/certification/certified-solutions-architect-professional/",
      options: [
        "Professional Level (SAP-C02)"
      ],
      roadmap: [
        "AWS Certified Cloud Practitioner",
        "AWS Certified Solutions Architect – Associate",
        "AWS Certified Solutions Architect – Professional"
      ],
      badgeUrl: "https://d1.awsstatic.com/training-and-certification/Certification%20Badges/AWS-Certified-Solutions-Architect-Professional_512x512.png",
      tags: ["AWS", "Professional"],
    },
    {
      id: "aws-devops-engineer-pro",
      title: "AWS Certified DevOps Engineer – Professional",
      provider: "Amazon Web Services",
      description: "Professional certification for DevOps roles (automation, CI/CD, ops on AWS).",
      link: "https://aws.amazon.com/certification/certified-devops-engineer-professional/",
      options: [
        "Professional Level (DOP-C02)"
      ],
      roadmap: [
        "AWS Certified Cloud Practitioner",
        "AWS Certified DevOps Engineer – Professional"
      ],
      badgeUrl: "https://d1.awsstatic.com/training-and-certification/Certification%20Badges/AWS-Certified-DevOps-Engineer-Professional_512x512.png",
      tags: ["AWS", "DevOps"],
    },
    {
      id: "azure-fundamentals",
      title: "Microsoft Certified: Azure Fundamentals",
      provider: "Microsoft Azure",
      description: "Entry-level certification for understanding Microsoft Azure basics.",
      link: "https://learn.microsoft.com/en-us/certifications/azure-fundamentals/",
      options: [
        "AZ-900: Microsoft Azure Fundamentals"
      ],
      roadmap: [
        "Azure Fundamentals (AZ-900)",
        "Azure Administrator Associate (AZ-104)",
        "Solutions Architect Expert (AZ-305)"
      ],
      badgeUrl: "https://learn.microsoft.com/en-us/media/learn/certification/badges/microsoft-certified-fundamentals-badge.svg",
      tags: ["Azure", "Foundational"],
    },
    {
      id: "azure-administrator-associate",
      title: "Microsoft Certified: Azure Administrator Associate",
      provider: "Microsoft Azure",
      description: "Administer Azure resources, virtual networks, compute, and storage.",
      link: "https://learn.microsoft.com/en-us/certifications/azure-administrator/",
      options: [
        "AZ-104: Microsoft Azure Administrator"
      ],
      roadmap: [
        "Azure Fundamentals (AZ-900)",
        "Azure Administrator Associate (AZ-104)",
        "Solutions Architect Expert (AZ-305)"
      ],
      badgeUrl: "https://learn.microsoft.com/en-us/media/learn/certification/badges/microsoft-certified-associate-badge.svg",
      tags: ["Azure", "Associate"],
    },
    {
      id: "azure-solutions-architect-expert",
      title: "Microsoft Certified: Azure Solutions Architect Expert",
      provider: "Microsoft Azure",
      description: "Advanced Azure architecture & infrastructure role certification.",
      link: "https://learn.microsoft.com/en-us/certifications/azure-solutions-architect/",
      options: [
        "AZ-305: Designing Microsoft Azure Infrastructure Solutions"
      ],
      roadmap: [
        "Azure Fundamentals (AZ-900)",
        "Azure Administrator Associate (AZ-104)",
        "Solutions Architect Expert (AZ-305)"
      ],
      badgeUrl: "https://learn.microsoft.com/en-us/media/learn/certification/badges/microsoft-certified-expert-badge.svg",
      tags: ["Azure", "Expert"],
    }
  ],

  "networking": [
    {
      id: "ccna",
      title: "Cisco Certified Network Associate (CCNA)",
      provider: "Cisco",
      description: "Entry-level networking certification from Cisco. Covers network fundamentals, IP connectivity, security, automation.",
      link: "https://www.cisco.com/c/en/us/training-events/training-certifications/certifications/associate/ccna.html",
      options: ["CCNA 200-301"],
      roadmap: ["CCNA (Associate Level)", "CCNP (Professional Level)", "CCIE (Expert Level)"],
      badgeUrl: "https://images.credly.com/images/56ab34de-294b-4d90-b016-683e8a1c302e/ccna.png",
      tags: ["Cisco", "Networking", "Associate"],
    },
    {
      id: "network-plus",
      title: "CompTIA Network+",
      provider: "CompTIA",
      description: "Industry-standard vendor-neutral networking certification.",
      link: "https://www.comptia.org/certifications/network",
      options: ["N10-008"],
      roadmap: ["CompTIA IT Fundamentals", "CompTIA Network+", "CompTIA Security+"],
      badgeUrl: "https://images.credly.com/images/aa41ad45-7883-4a08-8c87-d47bc0448fe3/networkce-certification-badge.png",
      tags: ["CompTIA", "Networking", "Vendor Neutral"],
    }
  ],

  "devops": [
    {
      id: "aws-devops-engineer-pro",
      title: "AWS Certified DevOps Engineer – Professional",
      provider: "AWS",
      description: "DevOps lifecycle on AWS: provisioning, operating, managing distributed application systems.",
      link: "https://aws.amazon.com/certification/certified-devops-engineer-professional/",
      options: ["Professional Level (DOP-C02)"],
      roadmap: [
        "AWS Cloud Practitioner",
        "AWS Certified Developer – Associate",
        "AWS DevOps Engineer – Professional"
      ],
      badgeUrl: "https://d1.awsstatic.com/training-and-certification/Certification%20Badges/AWS-Certified-DevOps-Engineer-Professional_512x512.png",
      tags: ["DevOps", "AWS", "Professional"],
    }
  ],

  "data-science": [
    {
      id: "microsoft-data-analyst",
      title: "Microsoft Certified: Data Analyst Associate",
      provider: "Microsoft",
      description: "Certification for proficiency in data analysis using Power BI.",
      link: "https://learn.microsoft.com/en-us/certifications/power-bi-data-analyst-associate/",
      options: ["PL-300: Power BI Data Analyst"],
      roadmap: ["Azure Fundamentals", "Data Analyst Associate", "Data Scientist Associate"],
      badgeUrl: "https://learn.microsoft.com/en-us/media/learn/certification/badges/microsoft-certified-associate-badge.svg",
      tags: ["Data Analysis", "Power BI", "Microsoft"],
    },
    {
      id: "google-cloud-data-engineer",
      title: "Google Cloud Certified - Professional Data Engineer",
      provider: "Google Cloud",
      description: "Engineering data processing systems on Google Cloud.",
      link: "https://cloud.google.com/certification/data-engineer",
      options: ["Professional Data Engineer"],
      badgeUrl: "https://cloud.google.com/images/certification/badges/professional-data-engineer.svg",
      tags: ["Google Cloud", "Data Engineer"],
    }
  ],

  // More subjects/categories can be added here
};
