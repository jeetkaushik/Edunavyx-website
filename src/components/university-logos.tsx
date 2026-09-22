import edinburghLogo from "@/assets/universities/edinburgh.svg";
import johnshopkinsLogo from "@/assets/universities/johnshopkins.svg";
import melbourneLogo from "@/assets/universities/melbourne.svg";
import nusLogo from "@/assets/universities/nus.svg";
import cambridgeLogo from "@/assets/universities/cambridge.svg";
import uclaLogo from "@/assets/universities/ucla.svg";
import unswLogo from "@/assets/universities/unsw.png";
import queenslandLogo from "@/assets/universities/queensland.svg";
import kingsLogo from "@/assets/universities/kings.svg";
import nyuLogo from "@/assets/universities/nyu.svg";
import sydneyLogo from "@/assets/universities/sydney.svg";
import aucklandLogo from "@/assets/universities/auckland.svg";
import bristolLogo from "@/assets/universities/bristol.svg";
import monashLogo from "@/assets/universities/monash.svg";
import uwaLogo from "@/assets/universities/uwa.svg";
import amsterdamLogo from "@/assets/universities/amsterdam.svg";

export interface UniversityPartner {
  id: string;
  name: string;
  country: string;
  rank?: string;
  featured?: boolean;
}

const officialLogos: Record<string, { src: string; name: string }> = {
  edinburgh: { src: edinburghLogo, name: "The University of Edinburgh" },
  johnshopkins: { src: johnshopkinsLogo, name: "Johns Hopkins University" },
  melbourne: { src: melbourneLogo, name: "The University of Melbourne" },
  nus: { src: nusLogo, name: "National University of Singapore" },
  cambridge: { src: cambridgeLogo, name: "University of Cambridge" },
  ucla: { src: uclaLogo, name: "UCLA" },
  unsw: { src: unswLogo, name: "UNSW Sydney" },
  queensland: { src: queenslandLogo, name: "The University of Queensland" },
  kings: { src: kingsLogo, name: "King's College London" },
  nyu: { src: nyuLogo, name: "New York University" },
  sydney: { src: sydneyLogo, name: "The University of Sydney" },
  auckland: { src: aucklandLogo, name: "The University of Auckland" },
  bristol: { src: bristolLogo, name: "University of Bristol" },
  monash: { src: monashLogo, name: "Monash University" },
  uwa: { src: uwaLogo, name: "The University of Western Australia" },
  amsterdam: { src: amsterdamLogo, name: "University of Amsterdam" },
};

export function UniversityLogo({
  id,
  className = "uni-partner-logo-svg",
}: {
  id: string;
  className?: string;
}) {
  const logo = officialLogos[id];
  if (!logo) {
    return (
      <span className="uni-partner-fallback-name font-semibold text-sm text-slate-800">
        {id}
      </span>
    );
  }

  return (
    <img
      src={logo.src}
      alt={`${logo.name} official logo`}
      className={className}
      loading="lazy"
      width={220}
      height={56}
    />
  );
}

// 16 Top Ranked Partner Universities
export const topRankedUniversities: UniversityPartner[] = [
  { id: "edinburgh", name: "The University of Edinburgh", country: "United Kingdom", rank: "QS #27", featured: true },
  { id: "johnshopkins", name: "Johns Hopkins University", country: "United States", rank: "QS #28", featured: true },
  { id: "melbourne", name: "The University of Melbourne", country: "Australia", rank: "QS #13", featured: true },
  { id: "nus", name: "National University of Singapore", country: "Singapore", rank: "QS #8", featured: true },
  { id: "cambridge", name: "University of Cambridge", country: "United Kingdom", rank: "QS #2", featured: true },
  { id: "ucla", name: "UCLA", country: "United States", rank: "QS #29", featured: true },
  { id: "unsw", name: "UNSW Sydney", country: "Australia", rank: "QS #19", featured: true },
  { id: "queensland", name: "The University of Queensland", country: "Australia", rank: "QS #40", featured: true },
  { id: "kings", name: "King's College London", country: "United Kingdom", rank: "QS #40", featured: true },
  { id: "nyu", name: "New York University", country: "United States", rank: "QS #38", featured: true },
  { id: "sydney", name: "The University of Sydney", country: "Australia", rank: "QS #18", featured: true },
  { id: "auckland", name: "The University of Auckland", country: "New Zealand", rank: "QS #65", featured: true },
  { id: "bristol", name: "University of Bristol", country: "United Kingdom", rank: "QS #54", featured: true },
  { id: "monash", name: "Monash University", country: "Australia", rank: "QS #37", featured: true },
  { id: "uwa", name: "The University of Western Australia", country: "Australia", rank: "QS #72", featured: true },
  { id: "amsterdam", name: "University of Amsterdam", country: "Netherlands", rank: "QS #53", featured: true },
];

export const stripUniversities: UniversityPartner[] = [
  { id: "melbourne", name: "The University of Melbourne", country: "Australia" },
  { id: "sydney", name: "The University of Sydney", country: "Australia" },
  { id: "unsw", name: "UNSW Sydney", country: "Australia" },
  { id: "edinburgh", name: "The University of Edinburgh", country: "United Kingdom" },
  { id: "cambridge", name: "University of Cambridge", country: "United Kingdom" },
];

export interface UniversityTheme {
  accent: string;
  bg: string;
  border: string;
}

export const universityThemes: Record<string, UniversityTheme> = {
  edinburgh: {
    accent: "#0284c7",
    bg: "linear-gradient(180deg, #ffffff 0%, #f0f9ff 100%)",
    border: "rgba(14, 165, 233, 0.25)",
  },
  johnshopkins: {
    accent: "#2563eb",
    bg: "linear-gradient(180deg, #ffffff 0%, #eff6ff 100%)",
    border: "rgba(59, 130, 246, 0.25)",
  },
  melbourne: {
    accent: "#1e40af",
    bg: "linear-gradient(180deg, #ffffff 0%, #f0f7ff 100%)",
    border: "rgba(30, 64, 175, 0.25)",
  },
  nus: {
    accent: "#16a34a",
    bg: "linear-gradient(180deg, #ffffff 0%, #f0fdf4 100%)",
    border: "rgba(34, 197, 94, 0.25)",
  },
  cambridge: {
    accent: "#d97706",
    bg: "linear-gradient(180deg, #ffffff 0%, #fffbeb 100%)",
    border: "rgba(245, 158, 11, 0.28)",
  },
  ucla: {
    accent: "#0891b2",
    bg: "linear-gradient(180deg, #ffffff 0%, #ecfeff 100%)",
    border: "rgba(6, 182, 212, 0.25)",
  },
  unsw: {
    accent: "#ea580c",
    bg: "linear-gradient(180deg, #ffffff 0%, #fff7ed 100%)",
    border: "rgba(249, 115, 22, 0.28)",
  },
  queensland: {
    accent: "#9333ea",
    bg: "linear-gradient(180deg, #ffffff 0%, #faf5ff 100%)",
    border: "rgba(168, 85, 247, 0.25)",
  },
  kings: {
    accent: "#e11d48",
    bg: "linear-gradient(180deg, #ffffff 0%, #fff1f2 100%)",
    border: "rgba(244, 63, 94, 0.25)",
  },
  nyu: {
    accent: "#7c3aed",
    bg: "linear-gradient(180deg, #ffffff 0%, #f5f3ff 100%)",
    border: "rgba(139, 92, 246, 0.25)",
  },
  sydney: {
    accent: "#b45309",
    bg: "linear-gradient(180deg, #ffffff 0%, #fffbf0 100%)",
    border: "rgba(217, 119, 6, 0.25)",
  },
  bristol: {
    accent: "#be123c",
    bg: "linear-gradient(180deg, #ffffff 0%, #fff1f2 100%)",
    border: "rgba(225, 29, 72, 0.25)",
  },
  monash: {
    accent: "#0f766e",
    bg: "linear-gradient(180deg, #ffffff 0%, #f0fdfa 100%)",
    border: "rgba(20, 184, 166, 0.25)",
  },
  uwa: {
    accent: "#1d4ed8",
    bg: "linear-gradient(180deg, #ffffff 0%, #eff6ff 100%)",
    border: "rgba(37, 99, 235, 0.25)",
  },
  auckland: {
    accent: "#0e7490",
    bg: "linear-gradient(180deg, #ffffff 0%, #ecfeff 100%)",
    border: "rgba(8, 145, 178, 0.25)",
  },
  amsterdam: {
    accent: "#475569",
    bg: "linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)",
    border: "rgba(100, 116, 139, 0.25)",
  },
};
