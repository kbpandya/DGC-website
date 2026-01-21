export interface Service {
  title: string;
  href: string;
  icon: string;
  shortDesc: string;
  description: string;
}

export interface ServiceCategory {
  title: string;
  description: string;
  services: Service[];
}

export const servicesData: ServiceCategory[] = [
  {
    title: "Screening & Prevention",
    description: "Proactive tests to detect issues before they become serious problems.",
    services: [
      { 
        title: "Colon Cancer Screening", 
        href: "services/colon-cancer-screening",
        icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
        shortDesc: "Screening for colon cancer and evaluation of intestinal symptoms.",
        description: "Learn more about colon cancer screening, how to prepare, and what to expect during your visit."
      },
      { 
        title: "GI Cancer Screening", 
        href: "services/gi-cancer-screening",
        icon: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z",
        shortDesc: "Comprehensive screening for various gastrointestinal cancers.",
        description: "Learn more about gi cancer screening, how to prepare, and what to expect during your visit."
      }
    ]
  },
  {
    title: "Diagnostic Procedures",
    description: "Advanced imaging and endoscopic techniques to identify the root cause of symptoms.",
    services: [
      { 
        title: "Colonoscopy", 
        href: "services/colonoscopy",
        icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z",
        shortDesc: "The gold standard for colon cancer screening and prevention.",
        description: "Learn more about colonoscopy, how to prepare, and what to expect during your visit."
      },
      { 
        title: "Upper Endoscopy", 
        href: "services/upper-endoscopy",
        icon: "M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01",
        shortDesc: "Examination of the upper digestive tract to diagnose issues.",
        description: "Learn more about upper endoscopy, how to prepare, and what to expect during your visit."
      },
      { 
        title: "Capsule Endoscopy", 
        href: "services/capsule-endoscopy",
        icon: "M15 12a3 3 0 11-6 0 3 3 0 016 0z M2 12a10 10 0 1120 0 10 10 0 01-20 0z",
        shortDesc: "Non-invasive imaging of the small intestine using a pill camera.",
        description: "Learn more about capsule endoscopy, how to prepare, and what to expect during your visit."
      }
    ]
  },
  {
    title: "Disease Management",
    description: "Expert long-term care for chronic liver and digestive conditions.",
    services: [
      { 
        title: "Hepatitis C Management", 
        href: "services/hepatitis-c",
        icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z",
        shortDesc: "Advanced treatment and long-term care for Hepatitis C.",
        description: "Learn more about hepatitis c management, how to prepare, and what to expect during your visit."
      },
      { 
        title: "Liver Disease", 
        href: "services/liver-disease",
        icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
        shortDesc: "Management of hepatitis, fatty liver, and other hepatic conditions.",
        description: "Learn more about liver disease, how to prepare, and what to expect during your visit."
      },
      { 
        title: "Gallbladder Disease", 
        href: "services/gall-bladder",
        icon: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4",
        shortDesc: "Diagnosis and treatment of gallbladder and biliary tract issues.",
        description: "Learn more about gallbladder disease, how to prepare, and what to expect during your visit."
      },
      { 
        title: "Feeding Tube (PEG)", 
        href: "services/peg",
        icon: "M13 10V3L4 14h7v7l9-11h-7z",
        shortDesc: "Placement and management of percutaneous endoscopic gastrostomy tubes.",
        description: "Learn more about feeding tube (peg), how to prepare, and what to expect during your visit."
      }
    ]
  }
];

export const allServices = servicesData.flatMap(category => category.services);