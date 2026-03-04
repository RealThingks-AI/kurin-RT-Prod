import sukhwaniConstructions from "@/assets/clients/sukhwani-constructions.png";
import privetDrive from "@/assets/clients/privet-drive.png";
import namrataGroup from "@/assets/clients/namrata-group.png";
import millenniumConstruction from "@/assets/clients/millennium-construction.png";
import sukhwaniPacific from "@/assets/clients/sukhwani-pacific.png";
import shyamaBuilders from "@/assets/clients/shyama-builders.png";
import bhandariAssociates from "@/assets/clients/bhandari-associates.png";
import rohitInfra from "@/assets/clients/rohit-infra.png";
import niramayaHospital from "@/assets/clients/niramaya-hospital.png";
import seawindDevelopers from "@/assets/clients/seawind-developers.png";
import kia from "@/assets/clients/kia.png";
import saiSagarVentures from "@/assets/clients/sai-sagar-ventures.png";
import millenniumEngineers from "@/assets/clients/millennium-engineers.png";
import koltePatil from "@/assets/clients/kolte-patil.png";
import sealtechEngineers from "@/assets/clients/sealtech-engineers.png";
import millenniumParamount from "@/assets/clients/millennium-paramount.png";
import savali from "@/assets/clients/savali.png";

export interface Client {
  name: string;
  logo: string;
  industry?: string;
  description?: string;
}

export const clients: Client[] = [
  { name: "Sukhwani Constructions", logo: sukhwaniConstructions, industry: "Real Estate & Construction", description: "One of Pune's leading real estate developers, trusted partner since 2019 for housekeeping and security staffing across multiple residential projects." },
  { name: "43 Privet Drive", logo: privetDrive, industry: "Hospitality", description: "Premium hospitality establishment where we provide trained housekeeping and maintenance staff, ensuring exceptional guest experiences." },
  { name: "Namrata Group", logo: namrataGroup, industry: "Real Estate", description: "Renowned real estate developer in Pune, partnering with us for comprehensive facility management and security services." },
  { name: "Millennium Construction", logo: millenniumConstruction, industry: "Construction", description: "Major construction company relying on our skilled labor workforce for various construction projects across Maharashtra." },
  { name: "Sukhwani Pacific", logo: sukhwaniPacific, industry: "Commercial Real Estate", description: "Commercial property development company utilizing our security and maintenance staffing services for their commercial complexes." },
  { name: "Shyama Builders", logo: shyamaBuilders, industry: "Construction", description: "Growing construction firm benefiting from our workforce solutions for both skilled and unskilled labor requirements." },
  { name: "Bhandari Associates", logo: bhandariAssociates, industry: "Engineering", description: "Engineering consultancy firm where we provide administrative and support staff to enhance operational efficiency." },
  { name: "Rohit Infra", logo: rohitInfra, industry: "Infrastructure", description: "Infrastructure development company partnering with us for project-based staffing needs and facility management." },
  { name: "Niramaya Hospital", logo: niramayaHospital, industry: "Healthcare", description: "Healthcare facility where we provide trained housekeeping, pantry, and support staff maintaining highest hygiene standards." },
  { name: "Seawind Developers", logo: seawindDevelopers, industry: "Real Estate", description: "Real estate developer trusting our workforce solutions for property management and maintenance services." },
  { name: "KIA", logo: kia, industry: "Automotive", description: "Global automotive manufacturer utilizing our skilled workforce for their manufacturing and facility management needs." },
  { name: "Sai Sagar Ventures", logo: saiSagarVentures, industry: "Real Estate", description: "Real estate venture company relying on our security and housekeeping staff for their residential projects." },
  { name: "Millennium Engineers", logo: millenniumEngineers, industry: "Engineering", description: "Engineering services firm benefiting from our technical and administrative staffing solutions." },
  { name: "Kolte-Patil", logo: koltePatil, industry: "Real Estate", description: "One of India's leading real estate companies, long-term partner for comprehensive facility management services across their properties." },
  { name: "Sealtech Engineers", logo: sealtechEngineers, industry: "Engineering", description: "Specialized engineering company where we provide trained technical support and facility maintenance staff." },
  { name: "Millennium Paramount", logo: millenniumParamount, industry: "Real Estate", description: "Premium real estate developer utilizing our complete workforce solutions including security, housekeeping, and maintenance." },
  { name: "Savali", logo: savali, industry: "Hospitality", description: "Hospitality business relying on our trained service staff to deliver exceptional customer experiences." },
];
