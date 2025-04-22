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
  level?: string;
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
      description: "Entry-level certification covering AWS Cloud concepts, security, technology, and billing/pricing.",
      link: "https://aws.amazon.com/certification/certified-cloud-practitioner/",
      options: ["Foundational (CLF-C02)"],
      badgeUrl: "https://d1.awsstatic.com/training-and-certification/certification-badges/AWS-Certified-Cloud-Practitioner_badge.634f8a21af2e0e956ed8905a72366146ba22b74c.png",
      tags: ["AWS", "Foundational"],
      level: "Foundational"
    },
    {
      id: "aws-ai-practitioner",
      title: "AWS Certified AI Practitioner",
      provider: "Amazon Web Services",
      description: "Entry-level certification for AI/ML fundamentals on AWS.",
      link: "https://aws.amazon.com/certification/ai-practitioner/",
      options: ["Foundational (AIP-C01)"],
      badgeUrl: "https://d1.awsstatic.com/training-and-certification/certification-badges/AWS-Certified-AI-Practitioner_badge.e0ba67a5112e5e91a48a7f1672018683aa3dcb4f.png",
      tags: ["AWS", "AI", "ML", "Foundational"],
      level: "Foundational"
    },
    {
      id: "aws-sysops-admin-associate",
      title: "AWS Certified SysOps Administrator – Associate",
      provider: "Amazon Web Services",
      description: "Validates technical expertise in deployment, management, and operations on AWS.",
      link: "https://aws.amazon.com/certification/certified-sysops-admin-associate/",
      options: ["Associate (SOA-C02)"],
      badgeUrl: "https://d1.awsstatic.com/training-and-certification/certification-badges/AWS-Certified-SysOps-Administrator-Associate_badge.c3586b02748654fb588633314dd66a1d6841893b.png",
      tags: ["AWS", "SysOps", "Associate"],
      level: "Associate"
    },
    {
      id: "aws-developer-associate",
      title: "AWS Certified Developer – Associate",
      provider: "Amazon Web Services",
      description: "Demonstrates knowledge of core AWS services, uses, and basic AWS architecture best practices.",
      link: "https://aws.amazon.com/certification/certified-developer-associate/",
      options: ["Associate (DVA-C02)"],
      badgeUrl: "https://d1.awsstatic.com/training-and-certification/certification-badges/AWS-Certified-Developer-Associate_badge.5c083fa855fe82c1cf2d0c8b883c265ec72a17c0.png",
      tags: ["AWS", "Developer", "Associate"],
      level: "Associate"
    },
    {
      id: "aws-solutions-architect-associate",
      title: "AWS Certified Solutions Architect – Associate",
      provider: "Amazon Web Services",
      description: "Validates ability to design and implement distributed systems on AWS.",
      link: "https://aws.amazon.com/certification/certified-solutions-architect-associate/",
      options: ["Associate (SAA-C03)"],
      badgeUrl: "https://d1.awsstatic.com/training-and-certification/certification-badges/AWS-Certified-Solutions-Architect-Associate_badge.3419559c682629072f1eb968d59dea0741772c0f.png",
      tags: ["AWS", "Architecture", "Associate"],
      level: "Associate"
    },
    {
      id: "aws-data-engineer-associate",
      title: "AWS Certified Data Engineer – Associate",
      provider: "Amazon Web Services",
      description: "Validates expertise in data engineering and analytics on AWS.",
      link: "https://aws.amazon.com/certification/certified-data-engineer-associate/",
      options: ["Associate (DAS-C01)"],
      badgeUrl: "https://d1.awsstatic.com/training-and-certification/certification-badges/AWS-Certified-Data-Engineer-Associate_badge.a1d24cb26463d57a979ef86ad1567bd68e186f26.png",
      tags: ["AWS", "Data", "Associate"],
      level: "Associate"
    },
    {
      id: "aws-machine-learning-associate",
      title: "AWS Certified Machine Learning Engineer – Associate",
      provider: "Amazon Web Services",
      description: "Validates expertise in developing machine learning solutions on AWS.",
      link: "https://aws.amazon.com/certification/certified-machine-learning-specialty/",
      options: ["Associate (MLE-C01)"],
      badgeUrl: "https://d1.awsstatic.com/training-and-certification/certification-badges/AWS-Certified-Machine-Learning-Specialty_badge.e5d66b60af4e74c5ad50ab6c09b32695d2cc0cf5.png",
      tags: ["AWS", "Machine Learning", "Associate"],
      level: "Associate"
    },
    {
      id: "aws-solutions-architect-pro",
      title: "AWS Certified Solutions Architect – Professional",
      provider: "Amazon Web Services",
      description: "Advanced certification for designing distributed applications and systems on AWS.",
      link: "https://aws.amazon.com/certification/certified-solutions-architect-professional/",
      options: ["Professional (SAP-C02)"],
      badgeUrl: "https://d1.awsstatic.com/training-and-certification/certification-badges/AWS-Certified-Solutions-Architect-Professional_badge.d1905866b10ccb7f47790ee0a4d97042a6e3ee49.png",
      tags: ["AWS", "Architecture", "Professional"],
      level: "Professional"
    },
    {
      id: "aws-devops-engineer-pro",
      title: "AWS Certified DevOps Engineer – Professional",
      provider: "Amazon Web Services",
      description: "Advanced certification for implementing continuous delivery systems and automation on AWS.",
      link: "https://aws.amazon.com/certification/certified-devops-engineer-professional/",
      options: ["Professional (DOP-C02)"],
      badgeUrl: "https://d1.awsstatic.com/training-and-certification/certification-badges/AWS-Certified-DevOps-Engineer-Professional_badge.d5407d292fd9daec190835ca4b1b90ace4468f92.png",
      tags: ["AWS", "DevOps", "Professional"],
      level: "Professional"
    },
    {
      id: "aws-advanced-networking-specialty",
      title: "AWS Certified Advanced Networking – Specialty",
      provider: "Amazon Web Services",
      description: "Validates expertise in designing and maintaining network architecture for AWS cloud services.",
      link: "https://aws.amazon.com/certification/certified-advanced-networking-specialty/",
      options: ["Specialty (ANS-C01)"],
      badgeUrl: "https://d1.awsstatic.com/training-and-certification/certification-badges/AWS-Certified-Advanced-Networking-Specialty_badge.bd89ce77d6654d9c56635ea683c9ec4fe1bce871.png",
      tags: ["AWS", "Networking", "Specialty"],
      level: "Specialty"
    },
    {
      id: "aws-security-specialty",
      title: "AWS Certified Security – Specialty",
      provider: "Amazon Web Services",
      description: "Validates expertise in security and compliance on AWS.",
      link: "https://aws.amazon.com/certification/certified-security-specialty/",
      options: ["Specialty (SCS-C01)"],
      badgeUrl: "https://d1.awsstatic.com/training-and-certification/certification-badges/AWS-Certified-Security-Specialty_badge.b45f0774ecb2d5a557df13dd405e8cd28f16d91c.png",
      tags: ["AWS", "Security", "Specialty"],
      level: "Specialty"
    },
    {
      id: "aws-machine-learning-specialty",
      title: "AWS Certified Machine Learning – Specialty",
      provider: "Amazon Web Services",
      description: "Validates expertise in designing, implementing, and maintaining machine learning solutions on AWS.",
      link: "https://aws.amazon.com/certification/certified-machine-learning-specialty/",
      options: ["Specialty (MLS-C01)"],
      badgeUrl: "https://d1.awsstatic.com/training-and-certification/certification-badges/AWS-Certified-Machine-Learning-Specialty_badge.e5d66b60af4e74c5ad50ab6c09b32695d2cc0cf5.png",
      tags: ["AWS", "Machine Learning", "Specialty"],
      level: "Specialty"
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
      badgeUrl: "https://learn.microsoft.com/en-us/media/learn/certification/badges/microsoft-certified-fundamentals-badge.svg?branch=main",
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
      badgeUrl: "https://learn.microsoft.com/en-us/media/learn/certification/badges/microsoft-certified-associate-badge.svg?branch=main",
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
      badgeUrl: "https://learn.microsoft.com/en-us/media/learn/certification/badges/microsoft-certified-expert-badge.svg?branch=main",
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
      badgeUrl: "https://images.credly.com/size/340x340/images/a31c0301-ff96-4cee-9435-0a4b40ce6e66/cisco_ccna_R_26S.png",
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
      badgeUrl: "https://images.credly.com/size/340x340/images/e1fc05b2-959b-45a4-8d20-124b1df121fe/CompTIA_Network_2Bce.png",
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
      badgeUrl: "https://d1.awsstatic.com/training-and-certification/certification-badges/AWS-Certified_DevOps-Engineer_Professional_512x512.53db4e4bcf335a75f062cc9f887fecf0b5efa93c.png",
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
      badgeUrl: "https://learn.microsoft.com/en-us/media/learn/certification/badges/microsoft-certified-associate-badge.svg?branch=main",
      tags: ["Data Analysis", "Power BI", "Microsoft"],
    },
    {
      id: "google-cloud-data-engineer",
      title: "Google Cloud Certified - Professional Data Engineer",
      provider: "Google Cloud",
      description: "Engineering data processing systems on Google Cloud.",
      link: "https://cloud.google.com/certification/data-engineer",
      options: ["Professional Data Engineer"],
      badgeUrl: "https://api.accredible.com/v1/frontend/credential_website_embed_image/badge/52142352",
      tags: ["Google Cloud", "Data Engineer"],
    }
  ],

  // More subjects/categories can be added here
};
