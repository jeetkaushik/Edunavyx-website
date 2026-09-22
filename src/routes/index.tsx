import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState, type FormEvent } from "react";
import {
  ArrowRight,
  ArrowUp,
  BookOpen,
  Building2,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  Compass,
  Globe,
  GraduationCap,
  Headphones,
  Languages,
  Layers,
  MapPin,
  Menu,
  Plane,
  Quote,
  ShieldCheck,
  Sparkles,
  Target,
  X,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { CountrySlider } from "@/components/country-slider";
import { ServicesCarousel } from "@/components/services-carousel";
import useEmblaCarousel from "embla-carousel-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import heroBackground from "@/assets/hero-background.png";
import heroImage from "@/assets/hero-image.jpeg";
import heroStudentPng from "@/assets/hero-student.jpeg";
import heroGraduate1 from "@/assets/hero-graduate1.jpg";
import heroStudentJpg from "@/assets/hero-student.jpg";
import edunavyxHero from "@/assets/edunavyx-hero.jpg";
import aboutImage from "@/assets/about-students.jpg";
import serviceImage from "@/assets/services-advisor.jpg";
import successImage from "@/assets/student-success.jpg";
import ctaImage from "@/assets/cta-student.jpg";
import logoImage from "@/assets/edunavyx-logo.png";
import compassDiscover from "@/assets/compass-discover.jpg";
import compassChoose from "@/assets/compass-choose.jpg";
import compassDefine from "@/assets/compass-define.jpg";
import compassNavigate from "@/assets/compass-navigate.jpg";
import compassBgPassport from "@/assets/compass-bg-passport.jpg";
import worldMapDots from "@/assets/world-map-dots.svg";
import testPrepBg from "@/assets/test-prep-bg.jpg";
import testCardCuet from "@/assets/test-card-cuet.jpg";
import testCardSat from "@/assets/test-card-sat.jpg";
import testCardIelts from "@/assets/test-card-ielts.jpg";
import { countries } from "@/lib/countries";
import { services } from "@/lib/services";
import { studentTestimonials } from "@/lib/testimonials";
import uniDomeImg from "@/assets/compass-bg-architecture.jpg";
import uniCambridgeGothic from "@/assets/uni-cambridge-gothic.jpg";
import uniLondonDecor from "@/assets/uni-london-decor.jpg";
import uniMelbourneDecor from "@/assets/uni-melbourne-decor.jpg";
import {
  UniversityLogo,
  topRankedUniversities,
  universityThemes,
} from "@/components/university-logos";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "EDUNAVYX | Study Abroad Consultants & Global Education Experts" },
      {
        name: "description",
        content:
          "Explore universities, countries, scholarships and study-abroad opportunities with EDUNAVYX. Get personalized guidance for your global education journey.",
      },
      { property: "og:title", content: "EDUNAVYX | Global Education Experts" },
      {
        property: "og:description",
        content: "Personalized guidance for your global education journey.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

const WHATSAPP_NUMBER = "919876543210";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Hi EDUNAVYX, I would like to know more about studying abroad."
)}`;

function WhatsAppIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.18-2.587-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.634.077-1.748-.387-1.393-.58-2.316-2.008-2.386-2.102-.07-.094-.564-.75-.564-1.429 0-.679.352-1.014.477-1.155.125-.141.272-.176.363-.176.091 0 .182.001.261.006.083.004.195-.031.305.234.114.276.39.951.424 1.021.034.07.057.151.011.242-.045.091-.068.147-.136.226-.068.079-.143.176-.205.237-.068.068-.139.141-.06.277.079.136.35.577.751.935.516.46 1.018.665 1.154.733.136.068.215.057.295-.034.08-.091.341-.397.432-.533.091-.136.182-.114.307-.068.125.045.795.375.932.443.136.068.227.102.261.159.034.057.034.329-.11.734zM12 2C6.477 2 2 6.477 2 12c0 1.891.524 3.66 1.434 5.176L2 22l4.981-1.307A9.957 9.957 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18.167c-1.688 0-3.256-.497-4.577-1.353l-.328-.214-2.956.775.789-2.882-.213-.339A8.134 8.134 0 0 1 3.833 12c0-4.503 3.664-8.167 8.167-8.167 4.503 0 8.167 3.664 8.167 8.167 0 4.503-3.664 8.167-8.167 8.167z" />
    </svg>
  );
}

const heroForegroundImages = [
  { src: heroImage, alt: "Student starting an international education journey near Tower Bridge" },
  { src: heroStudentPng, alt: "International student preparing for university study abroad" },
  { src: heroGraduate1, alt: "Proud graduate of world-renowned partner university" },
  { src: heroStudentJpg, alt: "Student walking through international campus" },
  { src: edunavyxHero, alt: "Student celebrating admission offer with EDUNAVYX" },
];


const heroHeadlines = [
  {
    prefix: "NAVIGATE YOUR GLOBAL FUTURE.\n",
    accent: "BEYOND BOUNDARIES.",
    suffix: "",
    subheading:
      "Personalised guidance to help you discover the right career, course, university and destination.",
  },
  {
    prefix: "YOUR FUTURE.\nYOUR PATH.\n",
    accent: "YOUR WORLD.",
    suffix: "",
    subheading:
      "Discover your potential. Make informed choices. Build a future without boundaries.",
  },
  {
    prefix: "WHERE AMBITION\n",
    accent: "MEETS OPPORTUNITY.",
    suffix: "",
    subheading:
      "Connecting ambitious students with the right global education opportunities.",
  },
] as const;


// Career Compass 4-Stage Guidance Pathway
const careerCompassStages = [
  {
    number: "01",
    stage: "DISCOVER",
    title: "Psychometric Assessment",
    gradeBadge: "Class 9 onwards",
    tagline: "Understand yourself before choosing your future.",
    description:
      "Discover your natural aptitude, personality and core strengths through scientific assessment, backed by personalized counselling to unlock your academic potential.",
    icon: Sparkles,
    image: compassDiscover,
    angle: -135,
  },
  {
    number: "02",
    stage: "CHOOSE",
    title: "Stream Selection",
    gradeBadge: "Grades 9–10",
    tagline: "Choose your direction with confidence.",
    description:
      "Identify the ideal academic stream and subject combinations tailored to your strengths, performance and long-term career aspirations with expert clarity.",
    icon: Layers,
    image: compassChoose,
    angle: 135,
  },
  {
    number: "03",
    stage: "DEFINE",
    title: "Career Selection",
    gradeBadge: "Grades 11–12",
    tagline: "From Interests to Direction. From Potential to Possibility.",
    description:
      "Explore high-growth career pathways, emerging global fields and requisite skills matched precisely to your unique profile and aspirations.",
    icon: Compass,
    image: compassDefine,
    angle: 45,
  },
  {
    number: "04",
    stage: "NAVIGATE",
    title: "University & Course Shortlisting",
    gradeBadge: "Bachelor's & Master's",
    tagline: "Find the right course. Find the right university.",
    description:
      "Translate your career goals into shortlisted global universities and degree programs aligned with your profile, preferred destination and budget.",
    icon: GraduationCap,
    image: compassNavigate,
    angle: -45,
  },
] as const;

function Logo({ inverse = false }: { inverse?: boolean }) {
  return (
    <a
      href="#top"
      className={`brand-logo ${inverse ? "brand-logo-inverse" : ""}`}
      aria-label="EDUNAVYX home"
    >
      <img src={logoImage} alt="EDUNAVYX" className="brand-logo-img" width={800} height={196} />
    </a>
  );
}

function Counter({
  value,
  suffix = "+",
  active,
}: {
  value: number;
  suffix?: string;
  active?: boolean;
}) {
  const [count, setCount] = useState(0);
  const [node, setNode] = useState<HTMLSpanElement | null>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    // If active prop is provided, run when active becomes true
    if (active !== undefined) {
      if (!active || hasAnimated) return;
      triggerCount();
      return;
    }

    // Fallback: observe DOM node directly if active prop is omitted
    if (!node || hasAnimated) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting && !hasAnimated) {
          observer.disconnect();
          triggerCount();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(node);
    return () => observer.disconnect();

    function triggerCount() {
      setHasAnimated(true);
      if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        setCount(value);
        return;
      }
      let cancelled = false;
      let frame = 0;
      const duration = 1800; // 1.8s smooth count animation
      const begin = performance.now();
      const tick = (now: number) => {
        if (cancelled) return;
        const progress = Math.min((now - begin) / duration, 1);
        // easeOutCubic: swift start, ultra-smooth deceleration to final target
        const ease = 1 - Math.pow(1 - progress, 3);
        setCount(Math.round(value * ease));
        if (progress < 1) {
          frame = requestAnimationFrame(tick);
        }
      };
      frame = requestAnimationFrame(tick);
    }
  }, [active, hasAnimated, node, value]);

  return (
    <span ref={setNode} className="stat-counter-val">
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

function TypewriterHeadline() {
  const [index, setIndex] = useState(0);
  const [chars, setChars] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const headline = heroHeadlines[index] ?? heroHeadlines[0];
  const full = `${headline.prefix}${headline.accent}${headline.suffix}`;

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setChars(full.length);
      const timer = window.setTimeout(
        () => setIndex((current) => (current + 1) % heroHeadlines.length),
        3500
      );
      return () => window.clearTimeout(timer);
    }
    const atEnd = chars === full.length;
    const atStart = chars === 0;
    const delay = deleting ? 24 : atEnd ? 2600 : 38;
    const timer = window.setTimeout(() => {
      if (!deleting && atEnd) {
        setDeleting(true);
        return;
      }
      if (deleting && atStart) {
        setDeleting(false);
        setIndex((current) => (current + 1) % heroHeadlines.length);
        return;
      }
      setChars((current) => current + (deleting ? -1 : 1));
    }, delay);
    return () => window.clearTimeout(timer);
  }, [chars, deleting, full.length, index]);

  const typed = full.slice(0, chars);
  const prefix = typed.slice(0, Math.min(typed.length, headline.prefix.length));
  const accent = typed.slice(
    headline.prefix.length,
    Math.min(typed.length, headline.prefix.length + headline.accent.length)
  );
  const suffix = typed.slice(headline.prefix.length + headline.accent.length);

  return (
    <>
      <h1 className="hero-typewriter" aria-live="polite">
        <span
          className="hero-typewriter-sizer"
          key={full}
          aria-hidden="true"
        >
          {headline.prefix}
          <span>{headline.accent}</span>
          {headline.suffix}
        </span>
        <span className="hero-typewriter-live">
          {prefix}
          <span>{accent}</span>
          {suffix}
          <span className="hero-caret" aria-hidden="true" />
        </span>
      </h1>
      <div className="hero-subheading-wrap">
        <p key={index} className="hero-subheading-live">
          {headline.subheading}
        </p>
      </div>
    </>
  );
}

function SectionHeading({
  eyebrow,
  title,
  copy,
  center = false,
  isMainHeading = false,
}: {
  eyebrow: string;
  title: string;
  copy?: string;
  center?: boolean;
  isMainHeading?: boolean;
}) {
  return (
    <div className={`section-heading reveal ${center ? "section-heading-center" : ""}`}>
      <span className="eyebrow">{eyebrow}</span>
      <h2 className={isMainHeading ? "section-main-heading" : "section-subheading"}>{title}</h2>
      {copy && <p>{copy}</p>}
    </div>
  );
}

function CareerCompassSection() {
  const [activeStage, setActiveStage] = useState<string>("01");

  const currentStage =
    careerCompassStages.find((s) => s.number === activeStage) || careerCompassStages[0];

  // Map each stage to needle rotation angle (in degrees)
  // Stage 01 (Discover): -135deg (Northwest)
  // Stage 02 (Choose): 135deg (Southwest)
  // Stage 03 (Define): 45deg (Southeast)
  // Stage 04 (Navigate): -45deg (Northeast)
  const stageAngles: Record<string, number> = {
    "01": -135,
    "02": 135,
    "03": 45,
    "04": -45,
  };
  const needleAngle = stageAngles[activeStage] ?? -135;

  return (
    <section id="career-compass" className="section career-compass-section">
      {/* Soft Ambient Background Decoration Layer */}
      <div className="compass-decor-backdrop" aria-hidden="true">
        {/* Soft Organic Cyan/Sky Ambient Wave Gradients */}
        <div className="compass-decor-wave" />

        {/* Central Radial Atmospheric Glow */}
        <div className="compass-decor-center-glow" />

        {/* Right Side: Dotted World Map, Curved Flight Arc, Airplane Silhouette, Tagline & Passport */}
        <div className="compass-decor-right">
          {/* Subtle Dotted World Map */}
          <img
            src={worldMapDots}
            alt=""
            className="compass-decor-worldmap"
            loading="lazy"
            width={700}
            height={380}
          />

          {/* Dotted Flight Path & Airplane Silhouette */}
          <div className="compass-flight-path">
            <svg viewBox="0 0 340 190" className="compass-flight-svg" fill="none">
              <path
                d="M 15 170 C 85 145, 175 85, 305 30"
                stroke="oklch(0.68 0.14 198)"
                strokeWidth="2.2"
                strokeDasharray="5 7"
                strokeLinecap="round"
              />
            </svg>
            <div className="compass-flight-plane">
              <Plane className="w-5 h-5 text-teal-600" />
            </div>
          </div>

          {/* Elegant Script Tagline: "Better Guidance. Brighter Futures." */}
          <div className="compass-tagline-script">
            Better Guidance.
            <br />
            <span>Brighter Futures.</span>
          </div>

          {/* Bottom Right Travel Documents (Passport & Boarding Pass) */}
          <img
            src={compassBgPassport}
            alt=""
            className="compass-decor-img compass-decor-passport"
            loading="lazy"
            width={380}
            height={285}
          />
        </div>
      </div>

      <div className="container compass-container">
        {/* SECTION INTRO */}
        <div className="compass-header reveal">
          <div className="compass-eyebrow-row">
            <span className="eyebrow">CAREER COMPASS</span>
            <div className="compass-stages-badge" aria-label="Journey stages">
              <span>DISCOVER</span>
              <span className="badge-arrow">→</span>
              <span>CHOOSE</span>
              <span className="badge-arrow">→</span>
              <span>DEFINE</span>
              <span className="badge-arrow">→</span>
              <span>NAVIGATE</span>
            </div>
          </div>
          <h2 className="section-subheading">
            Your Guided Pathway from <span>Class 9 to Master’s</span>
          </h2>
          <div className="compass-intro-box">
            <p className="compass-intro-lead">
              Your career journey begins long before you choose a university. The right decisions at each
              stage can help you build a future that reflects your strengths, interests, aspirations and
              potential.
            </p>
            <p className="compass-intro-sub">
              Career Compass by Edunavyx is a personalized career and education guidance journey that
              supports students from Class 9 to Master's, helping them understand themselves, explore
              possibilities and make informed academic and career decisions.
            </p>
          </div>
        </div>

        {/* DESKTOP & TABLET: RADIAL JOURNEY INFOGRAPHIC */}
        <div className="radial-journey-wrapper reveal" aria-label="Career Compass Interactive Radial Journey">
          <div className="radial-compass-layout">
            {/* LEFT COLUMN: Stages 01 (Discover) & 02 (Choose) */}
            <div className="radial-cards-column radial-cards-left">
              {/* STAGE 01 — DISCOVER */}
              {(() => {
                const stage = careerCompassStages[0];
                const Icon = stage.icon;
                const isActive = activeStage === stage.number;
                return (
                  <article
                    className={`radial-stage-card radial-card-tl ${isActive ? "is-active" : "is-inactive"}`}
                    onMouseEnter={() => setActiveStage(stage.number)}
                    onClick={() => setActiveStage(stage.number)}
                    tabIndex={0}
                    role="button"
                    aria-pressed={isActive}
                    aria-label={`Stage 01: ${stage.stage} - ${stage.title}`}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        setActiveStage(stage.number);
                      }
                    }}
                  >
                    <div className="radial-card-header">
                      <div className="radial-card-number-badge">
                        <span className="radial-number">{stage.number}</span>
                        <span className="radial-badge-dot" />
                        <span className="radial-badge-tag">{stage.stage}</span>
                      </div>
                      <span className="radial-grade-pill">{stage.gradeBadge}</span>
                    </div>

                    <div className="radial-card-image-wrap">
                      <img
                        src={stage.image}
                        alt={`${stage.stage} - ${stage.title}`}
                        className="radial-card-img"
                        loading="lazy"
                        width={400}
                        height={225}
                      />
                    </div>

                    <div className="radial-card-title-row">
                      <div className="radial-card-icon-wrap" aria-hidden="true">
                        <Icon className="w-4 h-4" />
                      </div>
                      <h3 className="radial-stage-title">{stage.title}</h3>
                    </div>

                    <blockquote className="radial-tagline">
                      “{stage.tagline}”
                    </blockquote>

                    <p className="radial-description">{stage.description}</p>

                    <div className="radial-card-connector connector-right" aria-hidden="true">
                      <span className="connector-line" />
                      <span className="connector-dot" />
                    </div>
                  </article>
                );
              })()}

              {/* STAGE 02 — CHOOSE */}
              {(() => {
                const stage = careerCompassStages[1];
                const Icon = stage.icon;
                const isActive = activeStage === stage.number;
                return (
                  <article
                    className={`radial-stage-card radial-card-bl ${isActive ? "is-active" : "is-inactive"}`}
                    onMouseEnter={() => setActiveStage(stage.number)}
                    onClick={() => setActiveStage(stage.number)}
                    tabIndex={0}
                    role="button"
                    aria-pressed={isActive}
                    aria-label={`Stage 02: ${stage.stage} - ${stage.title}`}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        setActiveStage(stage.number);
                      }
                    }}
                  >
                    <div className="radial-card-header">
                      <div className="radial-card-number-badge">
                        <span className="radial-number">{stage.number}</span>
                        <span className="radial-badge-dot" />
                        <span className="radial-badge-tag">{stage.stage}</span>
                      </div>
                      <span className="radial-grade-pill">{stage.gradeBadge}</span>
                    </div>

                    <div className="radial-card-image-wrap">
                      <img
                        src={stage.image}
                        alt={`${stage.stage} - ${stage.title}`}
                        className="radial-card-img"
                        loading="lazy"
                        width={400}
                        height={225}
                      />
                    </div>

                    <div className="radial-card-title-row">
                      <div className="radial-card-icon-wrap" aria-hidden="true">
                        <Icon className="w-4 h-4" />
                      </div>
                      <h3 className="radial-stage-title">{stage.title}</h3>
                    </div>

                    <blockquote className="radial-tagline">
                      “{stage.tagline}”
                    </blockquote>

                    <p className="radial-description">{stage.description}</p>

                    <div className="radial-card-connector connector-right" aria-hidden="true">
                      <span className="connector-line" />
                      <span className="connector-dot" />
                    </div>
                  </article>
                );
              })()}
            </div>

            {/* CENTER COLUMN: Central Circular Career Compass Hub & Radial SVG Track */}
            <div className="radial-center-column">
              <div className="radial-hub-container">
                {/* SVG Visual Canvas for Circular Track, Arcs, and Directional Arrows */}
                <svg
                  className="radial-compass-svg"
                  viewBox="0 0 600 600"
                  aria-hidden="true"
                >
                  <defs>
                    <linearGradient id="orbitGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="oklch(0.72 0.12 193)" />
                      <stop offset="50%" stopColor="oklch(0.72 0.17 54)" />
                      <stop offset="100%" stopColor="oklch(0.34 0.07 270)" />
                    </linearGradient>
                    <linearGradient id="activeArcGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="oklch(0.72 0.17 54)" />
                      <stop offset="100%" stopColor="oklch(0.72 0.12 193)" />
                    </linearGradient>
                  </defs>

                  {/* Concentric Decorative Rings */}
                  <circle cx="300" cy="300" r="265" className="radial-svg-ring-outer" />
                  <circle cx="300" cy="300" r="210" className="radial-svg-track-base" />
                  <circle cx="300" cy="300" r="162" className="radial-svg-ring-inner" />

                  {/* Decorative Degree Ticks around the Compass perimeter */}
                  <g className="radial-compass-ticks" opacity="0.35">
                    {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg) => (
                      <line
                        key={deg}
                        x1="300"
                        y1="45"
                        x2="300"
                        y2={deg % 90 === 0 ? "35" : "41"}
                        transform={`rotate(${deg} 300 300)`}
                        stroke="oklch(0.34 0.07 270)"
                        strokeWidth={deg % 90 === 0 ? "2" : "1"}
                      />
                    ))}
                  </g>

                  {/* 4 Connected Arc Segments with Progression Arrows */}
                  {/* Arc 1: Stage 01 (Top-Left) -> Stage 02 (Bottom-Left) */}
                  <path
                    d="M 151.5 151.5 A 210 210 0 0 0 151.5 448.5"
                    className={`radial-path-arc ${activeStage === "01" ? "arc-highlighted" : ""}`}
                  />
                  {/* Arc 2: Stage 02 (Bottom-Left) -> Stage 03 (Bottom-Right) */}
                  <path
                    d="M 151.5 448.5 A 210 210 0 0 0 448.5 448.5"
                    className={`radial-path-arc ${activeStage === "02" ? "arc-highlighted" : ""}`}
                  />
                  {/* Arc 3: Stage 03 (Bottom-Right) -> Stage 04 (Top-Right) */}
                  <path
                    d="M 448.5 448.5 A 210 210 0 0 0 448.5 151.5"
                    className={`radial-path-arc ${activeStage === "03" ? "arc-highlighted" : ""}`}
                  />
                  {/* Arc 4: Stage 04 (Top-Right) -> Loop back to Stage 01 & Center */}
                  <path
                    d="M 448.5 151.5 A 210 210 0 0 0 151.5 151.5"
                    className={`radial-path-arc ${activeStage === "04" ? "arc-highlighted" : ""}`}
                  />

                  {/* Directional Chevrons / Flow Arrows along the Circular Track */}
                  {/* Left Arc Flow Arrow (pointing downwards: 01 -> 02) */}
                  <g transform="translate(90, 300) rotate(90)" className="radial-flow-arrow">
                    <polygon points="-6,-6 6,0 -6,6" fill="oklch(0.72 0.17 54)" />
                  </g>
                  {/* Bottom Arc Flow Arrow (pointing rightwards: 02 -> 03) */}
                  <g transform="translate(300, 510) rotate(0)" className="radial-flow-arrow">
                    <polygon points="-6,-6 6,0 -6,6" fill="oklch(0.72 0.17 54)" />
                  </g>
                  {/* Right Arc Flow Arrow (pointing upwards: 03 -> 04) */}
                  <g transform="translate(510, 300) rotate(-90)" className="radial-flow-arrow">
                    <polygon points="-6,-6 6,0 -6,6" fill="oklch(0.72 0.17 54)" />
                  </g>
                  {/* Top Arc Flow Arrow (pointing leftwards: 04 -> 01) */}
                  <g transform="translate(300, 90) rotate(180)" className="radial-flow-arrow">
                    <polygon points="-6,-6 6,0 -6,6" fill="oklch(0.72 0.17 54)" />
                  </g>
                </svg>

                {/* 4 Interactive Milestone Station Buttons positioned on the circle */}
                <div className="radial-milestones-layer" aria-hidden="true">
                  {careerCompassStages.map((stage) => {
                    const Icon = stage.icon;
                    const isActive = activeStage === stage.number;
                    const posClass =
                      stage.number === "01"
                        ? "pos-tl"
                        : stage.number === "02"
                          ? "pos-bl"
                          : stage.number === "03"
                            ? "pos-br"
                            : "pos-tr";

                    return (
                      <button
                        key={stage.number}
                        type="button"
                        className={`radial-milestone-node ${posClass} ${isActive ? "is-active" : ""}`}
                        onClick={() => setActiveStage(stage.number)}
                        title={`Stage ${stage.number}: ${stage.stage} - ${stage.title}`}
                      >
                        <span className="milestone-pulse" />
                        <span className="milestone-badge">{stage.number}</span>
                        <div className="milestone-icon-bubble">
                          <Icon className="w-4 h-4" />
                        </div>
                      </button>
                    );
                  })}
                </div>

                {/* Central Career Compass Circular Core */}
                <div className="radial-hub-core">
                  {/* Dynamic Rotating Compass Needle */}
                  <div
                    className="radial-compass-needle"
                    style={{
                      transform: `translate(-50%, -50%) rotate(${needleAngle}deg)`,
                    }}
                    aria-hidden="true"
                  >
                    <div className="needle-pointer-north" />
                    <div className="needle-center-pivot" />
                    <div className="needle-pointer-south" />
                  </div>

                  {/* Center Hub Content */}
                  <div className="radial-hub-content">
                    <div className="radial-hub-title-wrap">
                      <span className="hub-title-main">CAREER</span>
                      <span className="hub-title-accent">COMPASS</span>
                    </div>

                    <div className="radial-hub-stage-indicator">
                      <span className="stage-indicator-dot" />
                      <span className="stage-indicator-text">
                        STAGE {activeStage} • {currentStage.stage}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: Stages 04 (Navigate) & 03 (Define) */}
            <div className="radial-cards-column radial-cards-right">
              {/* STAGE 04 — NAVIGATE */}
              {(() => {
                const stage = careerCompassStages[3];
                const Icon = stage.icon;
                const isActive = activeStage === stage.number;
                return (
                  <article
                    className={`radial-stage-card radial-card-tr ${isActive ? "is-active" : "is-inactive"}`}
                    onMouseEnter={() => setActiveStage(stage.number)}
                    onClick={() => setActiveStage(stage.number)}
                    tabIndex={0}
                    role="button"
                    aria-pressed={isActive}
                    aria-label={`Stage 04: ${stage.stage} - ${stage.title}`}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        setActiveStage(stage.number);
                      }
                    }}
                  >
                    <div className="radial-card-connector connector-left" aria-hidden="true">
                      <span className="connector-dot" />
                      <span className="connector-line" />
                    </div>

                    <div className="radial-card-header">
                      <div className="radial-card-number-badge">
                        <span className="radial-number">{stage.number}</span>
                        <span className="radial-badge-dot" />
                        <span className="radial-badge-tag">{stage.stage}</span>
                      </div>
                      <span className="radial-grade-pill">{stage.gradeBadge}</span>
                    </div>

                    <div className="radial-card-image-wrap">
                      <img
                        src={stage.image}
                        alt={`${stage.stage} - ${stage.title}`}
                        className="radial-card-img"
                        loading="lazy"
                        width={400}
                        height={225}
                      />
                    </div>

                    <div className="radial-card-title-row">
                      <div className="radial-card-icon-wrap" aria-hidden="true">
                        <Icon className="w-4 h-4" />
                      </div>
                      <h3 className="radial-stage-title">{stage.title}</h3>
                    </div>

                    <blockquote className="radial-tagline">
                      “{stage.tagline}”
                    </blockquote>

                    <p className="radial-description">{stage.description}</p>
                  </article>
                );
              })()}

              {/* STAGE 03 — DEFINE */}
              {(() => {
                const stage = careerCompassStages[2];
                const Icon = stage.icon;
                const isActive = activeStage === stage.number;
                return (
                  <article
                    className={`radial-stage-card radial-card-br ${isActive ? "is-active" : "is-inactive"}`}
                    onMouseEnter={() => setActiveStage(stage.number)}
                    onClick={() => setActiveStage(stage.number)}
                    tabIndex={0}
                    role="button"
                    aria-pressed={isActive}
                    aria-label={`Stage 03: ${stage.stage} - ${stage.title}`}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        setActiveStage(stage.number);
                      }
                    }}
                  >
                    <div className="radial-card-connector connector-left" aria-hidden="true">
                      <span className="connector-dot" />
                      <span className="connector-line" />
                    </div>

                    <div className="radial-card-header">
                      <div className="radial-card-number-badge">
                        <span className="radial-number">{stage.number}</span>
                        <span className="radial-badge-dot" />
                        <span className="radial-badge-tag">{stage.stage}</span>
                      </div>
                      <span className="radial-grade-pill">{stage.gradeBadge}</span>
                    </div>

                    <div className="radial-card-image-wrap">
                      <img
                        src={stage.image}
                        alt={`${stage.stage} - ${stage.title}`}
                        className="radial-card-img"
                        loading="lazy"
                        width={400}
                        height={225}
                      />
                    </div>

                    <div className="radial-card-title-row">
                      <div className="radial-card-icon-wrap" aria-hidden="true">
                        <Icon className="w-4 h-4" />
                      </div>
                      <h3 className="radial-stage-title">{stage.title}</h3>
                    </div>

                    <blockquote className="radial-tagline">
                      “{stage.tagline}”
                    </blockquote>

                    <p className="radial-description">{stage.description}</p>
                  </article>
                );
              })()}
            </div>
          </div>
        </div>

        {/* MOBILE: CONNECTED CIRCULAR JOURNEY FLOW (< 768px) */}
        <div className="mobile-journey-wrapper reveal" aria-label="Career Compass Mobile Journey">
          {/* Mobile Central Focal Hub */}
          <div className="mobile-hub-card">
            <h3>
              CAREER <span>COMPASS</span>
            </h3>

            {/* Mobile quick-stage tabs */}
            <div className="mobile-stage-selector" role="tablist" aria-label="Select stage">
              {careerCompassStages.map((stage) => (
                <button
                  key={stage.number}
                  type="button"
                  role="tab"
                  aria-selected={activeStage === stage.number}
                  className={`mobile-tab-btn ${activeStage === stage.number ? "is-active" : ""}`}
                  onClick={() => setActiveStage(stage.number)}
                >
                  <span className="tab-num">{stage.number}</span>
                  <span className="tab-name">{stage.stage}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Mobile Connected Stages Pathway */}
          <div className="mobile-stages-timeline">
            {careerCompassStages.map((stage, idx) => {
              const Icon = stage.icon;
              const isActive = activeStage === stage.number;
              const isLast = idx === careerCompassStages.length - 1;

              return (
                <div key={stage.number} className="mobile-stage-row">
                  {/* Left circular node & connecting vertical spline */}
                  <div className="mobile-timeline-spine">
                    <button
                      type="button"
                      className={`mobile-milestone-circle ${isActive ? "is-active" : ""}`}
                      onClick={() => setActiveStage(stage.number)}
                      aria-label={`Select stage ${stage.number}`}
                    >
                      <span className="spine-num">{stage.number}</span>
                      <Icon className="spine-icon w-3.5 h-3.5" />
                    </button>
                    {!isLast && (
                      <div className="mobile-spine-track">
                        <span className={`spine-fill ${activeStage === stage.number ? "is-active-fill" : ""}`} />
                        <span className="spine-arrow">↓</span>
                      </div>
                    )}
                  </div>

                  {/* Stage card content */}
                  <article
                    className={`mobile-stage-card ${isActive ? "is-active" : ""}`}
                    onClick={() => setActiveStage(stage.number)}
                  >
                    <div className="radial-card-header">
                      <div className="radial-card-number-badge">
                        <span className="radial-number">{stage.number}</span>
                        <span className="radial-badge-dot" />
                        <span className="radial-badge-tag">{stage.stage}</span>
                      </div>
                      <span className="radial-grade-pill">{stage.gradeBadge}</span>
                    </div>

                    <div className="radial-card-image-wrap">
                      <img
                        src={stage.image}
                        alt={`${stage.stage} - ${stage.title}`}
                        className="radial-card-img"
                        loading="lazy"
                        width={400}
                        height={225}
                      />
                    </div>

                    <h4 className="mobile-card-title">{stage.title}</h4>

                    <blockquote className="radial-tagline">
                      “{stage.tagline}”
                    </blockquote>

                    <p className="radial-description">{stage.description}</p>
                  </article>
                </div>
              );
            })}
          </div>
        </div>

        {/* SECTION FOOTER CTA */}
        <div className="compass-footer-cta reveal">
          <div className="compass-footer-cta-card">
            <div>
              <h4>Start Your Career Compass Journey</h4>
              <p>
                Book a personalized session with an Edunavyx counsellor to map your academic strengths, stream choices and university goals.
              </p>
            </div>
            <Button size="lg" asChild className="compass-cta-btn">
              <a href="#contact">
                Book Career Consultation <ArrowRight />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

// Test Preparation Services (Three Independent Offerings)
const testPrepServices = [
  {
    id: "cuet" as const,
    title: "CUET & Indian University Entrance Exams",
    headline: "Open the door to India's leading universities.",
    conciseDescription:
      "Structured preparation for CUET-UG and university entrance exams, combining subject mastery, mock testing, and strategy for top Indian universities.",
    icon: BookOpen,
    categoryBadge: "INDIAN UNIVERSITY ADMISSIONS",
    cardImage: testCardCuet,
    cardImageAlt: "Indian university heritage campus architecture",
    ctaLabel: "Explore CUET Guidance",
    highlights: [
      "CUET-UG & Domain Subjects",
      "Exam Strategy & Mock Tests",
      "Central & Leading Universities",
    ],
  },
  {
    id: "sat" as const,
    title: "SAT",
    headline: "Build the skills that strengthen your university application.",
    conciseDescription:
      "Focused training in Digital SAT Math, Reading and Writing with targeted question strategies, time management, and score optimization.",
    icon: Target,
    categoryBadge: "GLOBAL STANDARDIZED TEST",
    cardImage: testCardSat,
    cardImageAlt: "Academic study and SAT test preparation",
    ctaLabel: "Explore SAT Guidance",
    highlights: [
      "Digital SAT Curriculum",
      "Reading, Writing & Mathematics",
      "Targeted Score Optimization",
    ],
  },
  {
    id: "ielts" as const,
    title: "IELTS",
    headline: "Build your English proficiency. Strengthen your global opportunities.",
    conciseDescription:
      "Comprehensive coaching across Listening, Reading, Writing, and Speaking with personalized feedback to meet global university requirements.",
    icon: Languages,
    categoryBadge: "ENGLISH LANGUAGE PROFICIENCY",
    cardImage: testCardIelts,
    cardImageAlt: "Prestigious international university campus",
    ctaLabel: "Explore IELTS Guidance",
    highlights: [
      "All 4 Modules (L, R, W, S)",
      "Personalised Feedback",
      "Worldwide University Recognition",
    ],
  },
] as const;

function TestPreparationSection() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  return (
    <section id="test-preparation" className="section test-prep-section">
      {/* 100% Natural Campus Background Image - NO OVERLAY */}
      <div className="test-prep-bg-layer" aria-hidden="true">
        <img
          src={testPrepBg}
          alt=""
          className="test-prep-bg-photo"
          loading="lazy"
        />
      </div>

      <div className="container relative z-10">
        {/* SECTION HEADER & BRAND TAGLINE */}
        <div className="test-prep-header-wrap reveal">
          <div className="test-prep-header">
            <div className="test-prep-eyebrow-row">
              <span className="test-prep-eyebrow-dash" aria-hidden="true" />
              <span className="eyebrow">TEST PREPARATION</span>
            </div>
            <h2 className="test-prep-heading">
              <span className="test-prep-heading-line1">Prepare with Purpose.</span>
              <span className="test-prep-heading-line2">Perform with Confidence.</span>
            </h2>
            <div className="test-prep-intro-box">
              <p className="test-prep-intro-lead">
                The right preparation can make a meaningful difference to your university journey.
                Edunavyx provides structured and focused test preparation to help students approach university
                entrance examinations and international admission tests with greater confidence, clarity and
                strategic preparation.
              </p>
            </div>
          </div>

          <div className="test-prep-tagline-flourish" aria-hidden="true">
            <span className="tagline-handwriting">Your Global Education Partner</span>
            <svg className="tagline-underline-svg" viewBox="0 0 160 14" fill="none">
              <path
                d="M 4 8 Q 80 14 156 4"
                stroke="var(--orange)"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>

        {/* 3-SERVICE COMPACT FLOATING CARDS (FULLY CLICKABLE) */}
        <div className="test-prep-grid reveal" aria-label="Test Preparation Options">
          {testPrepServices.map((service) => {
            const Icon = service.icon;
            const isHovered = hoveredCard === service.id;

            return (
              <Link
                key={service.id}
                to="/test-preparation/$testSlug"
                params={{ testSlug: service.id }}
                className={`test-prep-card-anchor card-${service.id} ${isHovered ? "is-hovered" : ""}`}
                onMouseEnter={() => setHoveredCard(service.id)}
                onMouseLeave={() => setHoveredCard(null)}
                aria-label={`Detailed guidance for ${service.title}`}
              >
                <article className="test-prep-card-inner">
                  {/* Top Bar: Badge & Minimal Icon */}
                  <div className="test-card-top-bar">
                    <span className={`test-service-badge badge-${service.id}`}>
                      {service.categoryBadge}
                    </span>
                    <div className={`test-card-icon-bubble icon-${service.id}`} aria-hidden="true">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Body */}
                  <div className="test-card-body">
                    <h3 className="test-service-title">{service.title}</h3>
                    <blockquote className="test-service-headline">
                      “{service.headline}”
                    </blockquote>
                    <p className="test-service-description">{service.conciseDescription}</p>

                    {/* 3-Point Checklist with Solid Colored Circles */}
                    <ul className="test-highlights-list" aria-label="Key features">
                      {service.highlights.map((item) => (
                        <li key={item} className="test-highlight-row">
                          <span className={`test-check-circle check-${service.id}`} aria-hidden="true">
                            <Check className="w-3 h-3 text-white" strokeWidth={3} />
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Footer with CTA and Contextual Corner Image */}
                  <div className="test-card-footer">
                    <div className={`test-card-action-btn action-${service.id}`}>
                      <span className="test-card-action-text">{service.ctaLabel}</span>
                      <ArrowRight className="w-4 h-4 test-card-arrow" />
                    </div>

                    {/* Organic Curved Bottom-Right Image Anchor */}
                    <div className="test-card-visual-anchor" aria-hidden="true">
                      <img
                        src={service.cardImage}
                        alt={service.cardImageAlt}
                        className="test-card-visual-img"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </article>
              </Link>
            );
          })}
        </div>

        {/* SECTION FOOTER CTA */}
        <div className="test-prep-footer-cta reveal">
          <div className="test-prep-footer-card">
            <div className="test-prep-footer-copy">
              <h3>The Right Preparation. A Stronger Start.</h3>
              <p>
                Whether you're preparing for an Indian university entrance examination or an
                international test, Edunavyx helps you prepare with the right strategy, structured support
                and confidence.
              </p>
            </div>
            <Button size="lg" asChild className="test-prep-cta-btn">
              <Link to="/" hash="contact">
                START YOUR PREPARATION <ArrowRight />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

function MovingRibbon() {
  const renderRibbonUnit = (keyPrefix: string) => (
    <div className="moving-ribbon-unit" key={keyPrefix}>
      <span className="ribbon-icon-pill" title="Education">
        <GraduationCap className="ribbon-icon ribbon-icon-education" aria-hidden="true" />
      </span>
      <span className="ribbon-text ribbon-future">YOUR FUTURE.</span>
      <span className="ribbon-icon-pill" title="Career">
        <Compass className="ribbon-icon ribbon-icon-career" aria-hidden="true" />
      </span>
      <span className="ribbon-text ribbon-path">YOUR PATH.</span>
      <span className="ribbon-icon-pill" title="Global Destinations">
        <Globe className="ribbon-icon ribbon-icon-destinations" aria-hidden="true" />
      </span>
      <span className="ribbon-text ribbon-world">YOUR WORLD.</span>
      <span className="ribbon-bullet" aria-hidden="true">✦</span>
    </div>
  );

  return (
    <div
      className="moving-ribbon-section"
      role="region"
      aria-label="Your Future. Your Path. Your World."
    >
      <div className="moving-ribbon-track-wrapper">
        <div className="moving-ribbon-track">
          <div className="moving-ribbon-segment">
            {[1, 2, 3, 4].map((num) => renderRibbonUnit(`track-a-${num}`))}
          </div>
          <div className="moving-ribbon-segment" aria-hidden="true">
            {[1, 2, 3, 4].map((num) => renderRibbonUnit(`track-b-${num}`))}
          </div>
        </div>
      </div>
    </div>
  );
}

function TestimonialsSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
    skipSnaps: false,
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
      setCanScrollPrev(emblaApi.canScrollPrev());
      setCanScrollNext(emblaApi.canScrollNext());
    };
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi]);

  return (
    <section
      id="testimonials"
      className="section testimonials-section"
      aria-labelledby="testimonials-heading"
    >
      <span id="stories" className="sr-only" aria-hidden="true" />
      <div className="container">
        {/* Header row: Left heading with brush underline, Right rounded-square navigation buttons */}
        <div className="success-head">
          <div className="success-heading-wrap">
            <h2 id="testimonials-heading" className="success-heading">
              Success Stories
            </h2>
            <svg
              className="success-heading-brush"
              viewBox="0 0 220 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M 4 10 C 65 14, 145 15, 216 6"
                stroke="var(--orange)"
                strokeWidth="4"
                strokeLinecap="round"
              />
              <path
                d="M 18 14 C 75 17, 155 17, 200 11"
                stroke="var(--orange)"
                strokeWidth="2.2"
                strokeLinecap="round"
                opacity="0.65"
              />
            </svg>
          </div>

          <div className="success-controls" aria-label="Success stories carousel navigation">
            <button
              type="button"
              onClick={() => emblaApi?.scrollPrev()}
              disabled={!canScrollPrev}
              className={`carousel-btn-squircle ${!canScrollPrev ? "is-disabled" : "is-active"}`}
              aria-label="Previous success story"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={() => emblaApi?.scrollNext()}
              disabled={!canScrollNext}
              className={`carousel-btn-squircle ${!canScrollNext ? "is-disabled" : "is-active"}`}
              aria-label="Next success story"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Embla Carousel Viewport with Peek on Desktop */}
        <div
          className="testimonials-embla"
          ref={emblaRef}
          tabIndex={0}
          role="region"
          aria-roledescription="carousel"
          aria-label="Student success stories carousel"
          onKeyDown={(e) => {
            if (e.key === "ArrowLeft") {
              e.preventDefault();
              emblaApi?.scrollPrev();
            } else if (e.key === "ArrowRight") {
              e.preventDefault();
              emblaApi?.scrollNext();
            }
          }}
        >
          <div className="testimonials-track">
            {studentTestimonials.map((story, index) => (
              <div
                className="testimonials-slide"
                key={story.id}
                role="group"
                aria-roledescription="slide"
                aria-label={`Story ${index + 1} of ${studentTestimonials.length}: ${story.name}`}
              >
                <article className={`success-story-card ${index === selectedIndex ? "is-current" : ""}`}>
                  {/* Left Column: Student Image (40-45% width) */}
                  <div className="success-story-image-wrap">
                    <img
                      src={story.image}
                      alt={`${story.name}, studying ${story.programme} at ${story.university}`}
                      className="success-story-img"
                      loading="lazy"
                    />
                  </div>

                  {/* Right Column: Testimonial Quote and Author Details */}
                  <div className="success-story-content">
                    <p className="success-story-quote">
                      “{story.quote}”
                    </p>

                    <div className="success-story-author">
                      <img
                        src={story.image}
                        alt=""
                        className="success-author-avatar"
                        aria-hidden="true"
                        loading="lazy"
                      />
                      <div className="success-author-details">
                        <h3 className="success-author-name">{story.name}</h3>
                        <p className="success-author-meta">
                          <span className="success-author-programme">{story.programme}</span>
                          <span className="success-author-separator" aria-hidden="true">|</span>
                          <span className="success-author-university">{story.university}</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>

        {/* Subtle slide indicator dots */}
        <div className="success-dots" role="tablist" aria-label="Success stories slide indicators">
          {studentTestimonials.map((story, dotIdx) => (
            <button
              key={story.id}
              type="button"
              role="tab"
              aria-selected={dotIdx === selectedIndex}
              aria-label={`Jump to slide ${dotIdx + 1}: ${story.name}`}
              className={`success-dot ${dotIdx === selectedIndex ? "is-active" : ""}`}
              onClick={() => emblaApi?.scrollTo(dotIdx)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function DestinationsSection() {
  const [hoveredSlug, setHoveredSlug] = useState<string | null>(null);
  const [mobileActiveSlug, setMobileActiveSlug] = useState<string | null>(null);
  const [isTouch, setIsTouch] = useState(false);
  const leaveTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const hasInteractedRef = useRef(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsTouch(window.matchMedia("(pointer: coarse)").matches);
    }
    return () => {
      if (leaveTimerRef.current) {
        clearTimeout(leaveTimerRef.current);
      }
    };
  }, []);

  const handleCardHover = (slug: string) => {
    if (isTouch) return;
    if (leaveTimerRef.current) {
      clearTimeout(leaveTimerRef.current);
      leaveTimerRef.current = null;
    }
    setHoveredSlug(slug);
  };

  const handleCardLeave = () => {
    if (isTouch) return;
    if (leaveTimerRef.current) {
      clearTimeout(leaveTimerRef.current);
    }
    // 140ms debounce to avoid flicker when moving between adjacent cards
    leaveTimerRef.current = setTimeout(() => {
      setHoveredSlug(null);
    }, 140);
  };

  const handleActiveCountryChange = (slug: string) => {
    if (!hasInteractedRef.current) {
      hasInteractedRef.current = true;
      return;
    }
    setMobileActiveSlug(slug);
  };

  // Canada is default; on hover use hoveredSlug; on touch devices after swipe use mobileActiveSlug
  const currentBgSlug = hoveredSlug || (isTouch && mobileActiveSlug ? mobileActiveSlug : "canada");

  return (
    <section id="destinations" className="section destinations-section">
      <span id="countries" className="sr-only" aria-hidden="true" />

      {/* Dynamic Background Crossfade Layer */}
      <div className="destinations-bg-layer" aria-hidden="true">
        {countries.map((country) => (
          <div
            key={country.slug}
            className={`destinations-bg-img ${country.slug === currentBgSlug ? "is-active" : ""}`}
            style={{ backgroundImage: `url(${country.monument})` }}
          />
        ))}
        <div className="destinations-bg-overlay" />
      </div>

      <div className="container destinations-container">
        <SectionHeading
          eyebrow="DESTINATIONS"
          title="Explore Your Dream Study Destination"
          copy="From the UK, USA and Canada to Australia, Germany and beyond — discover world-class educational pathways tailored to your academic potential and career aspirations."
          isMainHeading
        />
        <CountrySlider
          onHoverCountry={handleCardHover}
          onLeaveCountry={handleCardLeave}
          onActiveCountryChange={handleActiveCountryChange}
        />
      </div>
    </section>
  );
}

function HomePage() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const [testimonial, setTestimonial] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const [formError, setFormError] = useState("");
  const [heroImgIndex, setHeroImgIndex] = useState(0);

  // Hero foreground image cycles every 2 seconds smoothly
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }
    const timer = window.setInterval(() => {
      setHeroImgIndex((prev) => (prev + 1) % heroForegroundImages.length);
    }, 2000);
    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    onScroll();
    const items = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("is-visible")),
      { threshold: 0.12 }
    );
    items.forEach((item) => observer.observe(item));
    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = String(data.get("email") ?? "").trim();
    const phone = String(data.get("phone") ?? data.get("mobile") ?? "").replace(/\D/g, "");
    const name = String(data.get("fullName") ?? data.get("name") ?? `${data.get("firstName") ?? ""} ${data.get("lastName") ?? ""}`).trim();
    if (
      !name ||
      !/^\S+@\S+\.\S+$/.test(email) ||
      phone.length < 8 ||
      !agreed
    ) {
      setFormError("Please complete the required fields and confirm your consent.");
      return;
    }
    setFormError("");
    setSubmitted(true);
  };

  const navItems = [
    { label: "Home", href: "#top" },
    { label: "About Us", href: "#about" },
    { label: "Career Compass", href: "#career-compass" },
    { label: "Test Preparation", href: "#test-preparation" },
    { label: "Our Expertise", href: "#our-expertise" },
    { label: "Destinations", href: "#destinations" },
    { label: "Connect", href: "#contact" },
  ];

  return (
    <div id="top" className="site-shell">
      <header className={`site-header ${scrolled ? "site-header-scrolled" : ""}`}>
        <div className="container nav-inner">
          <Logo />
          <nav className="desktop-nav" aria-label="Main navigation">
            {navItems.map((item) => (
              <a key={item.label} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>
          <div className="nav-actions">
            <Button asChild size="lg" className="nav-cta">
              <a href="#contact">
                Book Free Consultation <ArrowRight />
              </a>
            </Button>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-nav-btn"
              aria-label="Chat on WhatsApp"
              title="Chat on WhatsApp"
            >
              <WhatsAppIcon />
            </a>
          </div>

          <div className="mobile-header-actions">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-header-mobile-btn"
              aria-label="Chat on WhatsApp"
              title="Chat on WhatsApp"
            >
              <WhatsAppIcon />
            </a>
            <Button
              variant="ghost"
              size="icon"
              className="mobile-menu-button"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle navigation"
            >
              {menuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>

        {menuOpen && (
          <nav className="mobile-nav" aria-label="Mobile navigation">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} onClick={() => setMenuOpen(false)}>
                {item.label}
              </a>
            ))}
            <div className="mobile-nav-cta-stack">
              <Button asChild className="w-full">
                <a href="#contact" onClick={() => setMenuOpen(false)}>
                  Book Free Consultation
                </a>
              </Button>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-mobile-row-btn"
                aria-label="Chat on WhatsApp"
              >
                <WhatsAppIcon className="w-5 h-5" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </nav>
        )}
      </header>

      <main>
        {/* HERO SECTION */}
        <section className="hero-section">
          <img
            className="hero-bg"
            src={heroBackground}
            alt=""
            width={1920}
            height={800}
            aria-hidden="true"
            fetchPriority="high"
          />
          <div className="hero-overlay" aria-hidden="true" />
          <div className="hero-grid container">
            <div className="hero-copy reveal is-visible">
              <span className="eyebrow">YOUR JOURNEY. YOUR FUTURE.</span>
              <TypewriterHeadline />
              <div className="hero-actions">
                <Button size="lg" asChild>
                  <a href="#destinations">
                    Explore Destinations <ArrowRight />
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="#contact">Book Free Consultation</a>
                </Button>
              </div>

              {/* 3. 4.9/5 RATING WITH REAL STUDENT AVATARS */}
              <div className="hero-proof">
                <div className="avatar-stack">
                  <img
                    src={successImage}
                    alt="EDUNAVYX student Aarav"
                    width={40}
                    height={40}
                    className="proof-avatar"
                  />
                  <img
                    src={aboutImage}
                    alt="EDUNAVYX student Meera"
                    width={40}
                    height={40}
                    className="proof-avatar"
                  />
                  <img
                    src={ctaImage}
                    alt="EDUNAVYX student Anika"
                    width={40}
                    height={40}
                    className="proof-avatar"
                  />
                  <img
                    src={heroGraduate1}
                    alt="EDUNAVYX graduate Rohan"
                    width={40}
                    height={40}
                    className="proof-avatar"
                  />
                </div>
                <div className="proof-text-wrap">
                  <div className="proof-stars" aria-hidden="true">
                    ★★★★★
                  </div>
                  <p>
                    <strong>4.9/5</strong> from ambitious students worldwide
                  </p>
                </div>
              </div>
            </div>

            {/* 2. HERO FOREGROUND IMAGE CAROUSEL (CYCLES EVERY 2 SECONDS) */}
            <div className="hero-visual reveal is-visible">
              <div className="route-line">
                <Plane />
              </div>
              <div className="hero-carousel-container" aria-live="off">
                {heroForegroundImages.map((img, index) => (
                  <img
                    key={img.src}
                    src={img.src}
                    alt={img.alt}
                    width={1600}
                    height={1200}
                    className={`hero-carousel-image ${index === heroImgIndex ? "is-active" : ""}`}
                    loading={index === 0 ? "eager" : "lazy"}
                  />
                ))}
              </div>
              <div className="floating-card floating-card-top">
                <MapPin />
                <span>
                  <strong>50+</strong> Countries
                </span>
              </div>
              <div className="floating-card floating-card-bottom">
                <GraduationCap />
                <span>
                  <strong>10,000+</strong> Students guided
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* 3. ABOUT US */}
        <section id="about" className="section about-section">
          <div className="container about-grid">
            <div className="about-visual reveal">
              <div className="about-image-wrapper">
                <img
                  loading="lazy"
                  src={aboutImage}
                  alt="International university students walking together on campus"
                  width={1200}
                  height={1400}
                />
                <div className="about-experience-stamp">
                  <div className="stamp-icon-wrap" aria-hidden="true">
                    <Sparkles />
                  </div>
                  <strong className="stamp-value">
                    <Counter value={90} suffix="+" />
                  </strong>
                  <span className="stamp-label">Years of Collective Experience</span>
                </div>
              </div>

              {/* Founder Stats Highlight Strip */}
              <div className="about-stats-strip">
                <div className="about-stat-box">
                  <strong className="stat-number">
                    <Counter value={500} suffix="+" />
                  </strong>
                  <span className="stat-text">Students Counselled</span>
                </div>
                <div className="about-stat-divider" aria-hidden="true" />
                <div className="about-stat-box">
                  <strong className="stat-number">
                    <Counter value={100} suffix="+" />
                  </strong>
                  <span className="stat-text">Guided to Higher Education</span>
                </div>
              </div>
            </div>

            <div className="about-copy reveal">
              <SectionHeading
                eyebrow="ABOUT US"
                title="Founded on Experience. Driven by Purpose."
              />

              <div className="about-text-content">
                <p className="about-lead">
                  Edunavyx was created with a simple belief: education decisions should begin with the student, not with a country, university or course.
                </p>
                <p>
                  With 90+ years of collective experience across overseas education and the corporate sector, our founders bring together deep industry knowledge, professional expertise and a strong understanding of evolving career opportunities. Having counselled 500+ students and guided 100+ students towards higher education, we understand that every student has a unique combination of strengths, interests, aspirations and potential.
                </p>
                <p>
                  Our approach is personalised, transparent and student-centric, helping students make informed decisions at every stage, from career discovery and psychometric assessment to profile building, test preparation, university selection, admissions and international education support.
                </p>
                <p>
                  At Edunavyx, we partner with students and families to bring clarity, confidence and purpose to an increasingly complex global education landscape.
                </p>
              </div>

              {/* Closing statement */}
              <div className="about-closing-card">
                <p className="about-closing-tagline">
                  Experience that guides. Purpose that inspires.
                </p>
                <p className="about-closing-brand">
                  Edunavyx — Navigate Your Global Future. Beyond Boundaries.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 4. MOVING HORIZONTAL RIBBON (INSTANCE 1) */}
        <MovingRibbon />

        {/* 5. CAREER COMPASS SECTION */}
        <CareerCompassSection />

        {/* 6. TEST PREPARATION SECTION */}
        <TestPreparationSection />

        {/* 7. OUR EXPERTISE SECTION */}
        <section id="our-expertise" className="section services-section">
          <span id="services" className="sr-only" aria-hidden="true" />
          <div className="container">
            <SectionHeading
              eyebrow="OUR EXPERTISE"
              title="From First Decision to Final Destination."
              copy="Choosing the right educational pathway involves more than selecting a course or submitting an application. Edunavyx brings together career guidance, profile building, university selection, admissions and international education expertise to support students and families through every important stage of their journey."
            />
          </div>

          {/* Continuous Horizontal Services Carousel */}
          <ServicesCarousel />

          <div className="container">
            {/* CLOSING LINE */}
            <div className="services-closing-wrap reveal">
              <p className="services-closing-text">
                One Point of Guidance. Every Step of the Way.
              </p>
            </div>
          </div>
        </section>

        {/* 8. DESTINATIONS */}
        <DestinationsSection />

        {/* 9. TESTIMONIALS SECTION */}
        <TestimonialsSection />

        {/* 10. MOVING HORIZONTAL RIBBON (INSTANCE 2) */}
        <MovingRibbon />

        {/* 11. PARTNERED UNIVERSITIES */}
        {/* 11. PARTNERED UNIVERSITIES */}
        <section
          className="section universities-section"
          id="universities"
          aria-labelledby="universities-heading"
        >
          {/* Subtle decorative background wave / glow */}
          <div className="uni-bg-ambient-glow" aria-hidden="true" />
          
          <div className="container universities-container">
            {/* HERO / HEADER AREA: Two-Column Composition */}
            <div className="universities-hero-grid reveal">
              {/* Left Column: Heading, Badge, Subcopy, Doodle Annotation */}
              <div className="universities-hero-left">
                <div className="uni-header-badge">
                  <Globe className="w-3.5 h-3.5 text-teal-600 mr-2 shrink-0" />
                  <span>GLOBAL ACADEMIC EXCELLENCE</span>
                </div>

                <h2 id="universities-heading" className="universities-main-headline">
                  Partnered with<br />
                  <span className="universities-gradient-text">World-Class Universities</span>
                </h2>

                <p className="universities-subcopy">
                  Collaborating with world-leading universities across the globe to bring world-class
                  education and global career pathways within your reach.
                </p>

                {/* Hand-drawn annotation arrow pointing to university montage */}
                <div className="uni-doodle-annotation" aria-hidden="true">
                  <span className="uni-doodle-text">
                    Top Universities.<br />
                    Global Opportunities.
                  </span>
                  <svg className="uni-doodle-arrow-svg" width="68" height="42" viewBox="0 0 68 42" fill="none">
                    <path d="M4 6 C 18 30, 42 36, 56 18" stroke="#06b6d4" strokeWidth="2.2" strokeLinecap="round" />
                    <path d="M48 15 L 57 18 L 55 26" stroke="#06b6d4" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>

              {/* Right Column: Global Education & Campus Architecture Visual Montage */}
              <div className="universities-hero-right" aria-hidden="true">
                <div className="uni-montage-wrapper">
                  {/* Subtle Globe / Earth backdrop */}
                  <div className="uni-globe-backdrop">
                    <div className="uni-globe-circle" />
                    <div className="uni-globe-atmosphere" />
                  </div>

                  {/* Arched flight trajectory with Airplane */}
                  <svg className="uni-flight-path-svg" viewBox="0 0 320 200" fill="none">
                    <path
                      d="M20 180 C 80 80, 200 40, 290 20"
                      stroke="#38bdf8"
                      strokeWidth="2"
                      strokeDasharray="5 5"
                      strokeLinecap="round"
                    />
                  </svg>
                  <div className="uni-plane-wrapper">
                    <Plane className="w-5 h-5 text-sky-600 transform -rotate-12" />
                  </div>

                  {/* Campus Architecture 1: Cambridge Gothic Chapel / Tower Layer */}
                  <div className="uni-arch-layer-left">
                    <img
                      src={uniCambridgeGothic}
                      alt="Cambridge Gothic architecture"
                      className="uni-arch-gothic-img"
                    />
                  </div>

                  {/* Campus Architecture 2: Radcliffe Camera Oxford Dome Card */}
                  <div className="uni-arch-card-dome">
                    <img
                      src={uniDomeImg}
                      alt="Oxford Radcliffe Camera dome"
                      className="uni-arch-dome-img"
                    />
                  </div>

                  {/* Floating "Dream Study Build Your Future" Card */}
                  <div className="uni-floating-badge-card">
                    <span className="uni-dream-line">Dream</span>
                    <span className="uni-dream-line">Study</span>
                    <span className="uni-dream-line">Build Your</span>
                    <span className="uni-dream-line font-bold text-teal-700">Future</span>
                  </div>
                </div>
              </div>
            </div>

            {/* UNIVERSITY PARTNER GRID (5 Columns Desktop) */}
            <div className="universities-partner-grid reveal">
              {topRankedUniversities.map((uni) => {
                const theme = universityThemes[uni.id] || {
                  accent: "#0ea5e9",
                  bg: "linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)",
                  border: "rgba(226, 232, 240, 0.9)",
                };
                return (
                  <div
                    key={uni.id}
                    className="university-partner-card group"
                    style={
                      {
                        "--uni-accent": theme.accent,
                        "--uni-bg": theme.bg,
                        "--uni-border": theme.border,
                      } as React.CSSProperties
                    }
                    title={`${uni.name} · ${uni.country} (${uni.rank ?? ""})`}
                  >
                    <div className="uni-card-inner">
                      <div className="uni-card-logo-area">
                        <UniversityLogo id={uni.id} className="uni-partner-logo-svg" />
                      </div>
                      <div className="uni-card-footer">
                        <span className="uni-card-country">
                          <MapPin
                            className="uni-card-pin-icon"
                            style={{ color: theme.accent }}
                          />
                          <span className="uni-card-country-name">{uni.country}</span>
                        </span>
                        <span className="uni-card-arrow-circle" aria-hidden="true">
                          <ArrowRight className="w-3.5 h-3.5" />
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA BUTTON WITH DIAMOND FLANKING LINES */}
            <div className="universities-cta-container reveal">
              <div className="uni-cta-flank-line left" aria-hidden="true">
                <span className="uni-flank-bar" />
                <span className="uni-flank-diamond">◆</span>
                <span className="uni-flank-bar short" />
              </div>

              <Button size="lg" className="universities-explore-btn group" asChild>
                <a href="#destinations">
                  <span>Explore All Destinations</span>
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </Button>

              <div className="uni-cta-flank-line right" aria-hidden="true">
                <span className="uni-flank-bar short" />
                <span className="uni-flank-diamond">◆</span>
                <span className="uni-flank-bar" />
              </div>
            </div>

            {/* BOTTOM VALUE STRIP (4 Compact Value Pillars) */}
            <div className="universities-value-strip reveal">
              <div className="uni-value-item">
                <div className="uni-value-icon-box">
                  <Globe className="w-5 h-5 text-teal-600" />
                </div>
                <span className="uni-value-label">Top Global Universities</span>
              </div>
              <div className="uni-value-separator" />

              <div className="uni-value-item">
                <div className="uni-value-icon-box">
                  <GraduationCap className="w-5 h-5 text-teal-600" />
                </div>
                <span className="uni-value-label">Multiple Countries</span>
              </div>
              <div className="uni-value-separator" />

              <div className="uni-value-item">
                <div className="uni-value-icon-box">
                  <ShieldCheck className="w-5 h-5 text-teal-600" />
                </div>
                <span className="uni-value-label">Career-Focused Programs</span>
              </div>
              <div className="uni-value-separator" />

              <div className="uni-value-item">
                <div className="uni-value-icon-box">
                  <Compass className="w-5 h-5 text-teal-600" />
                </div>
                <span className="uni-value-label">Your Global Future, Our Priority</span>
              </div>
            </div>
          </div>

          {/* DESTINATION FRAMING CORNERS: London & Melbourne */}
          <div className="uni-decor-corner uni-decor-london" aria-hidden="true">
            <img
              src={uniLondonDecor}
              alt="London Westminster architecture"
              className="uni-corner-img"
              loading="lazy"
            />
            <div className="uni-corner-tag london">
              <span className="uni-tag-handwritten">London</span>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M4 18 C 10 14, 16 10, 20 4" stroke="#0d9488" strokeWidth="1.8" strokeLinecap="round"/>
                <path d="M14 4 L 20 4 L 20 10" stroke="#0d9488" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>

          <div className="uni-decor-corner uni-decor-melbourne" aria-hidden="true">
            <img
              src={uniMelbourneDecor}
              alt="Melbourne skyline"
              className="uni-corner-img"
              loading="lazy"
            />
            <div className="uni-corner-tag melbourne">
              <span className="uni-tag-handwritten">Melbourne</span>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M4 20 C 8 12, 14 8, 20 5" stroke="#0d9488" strokeWidth="1.8" strokeLinecap="round"/>
                <path d="M14 4 L 20 5 L 18 12" stroke="#0d9488" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>

          {/* Bottom Teal Wave Silhouette */}
          <div className="uni-bottom-wave-strip" aria-hidden="true">
            <svg
              className="uni-bottom-wave-svg"
              viewBox="0 0 1440 64"
              fill="none"
              preserveAspectRatio="none"
            >
              <path
                d="M0 40 C 240 10, 480 50, 720 30 C 960 10, 1200 45, 1440 25 L 1440 64 L 0 64 Z"
                fill="url(#uni-wave-gradient)"
                opacity="0.18"
              />
              <path
                d="M0 50 C 320 25, 640 55, 960 35 C 1200 20, 1360 45, 1440 38 L 1440 64 L 0 64 Z"
                fill="url(#uni-wave-gradient)"
                opacity="0.25"
              />
              <defs>
                <linearGradient id="uni-wave-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#0284c7" />
                  <stop offset="50%" stopColor="#0d9488" />
                  <stop offset="100%" stopColor="#06b6d4" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </section>

        {/* 10. CONTACT SECTION */}
        <section id="contact" className="section contact-section" aria-labelledby="contact-heading">
          <div className="container contact-grid">
            <div className="contact-visual-col reveal">
              <div className="contact-image-wrap">
                <img
                  loading="lazy"
                  src={serviceImage}
                  alt="EDUNAVYX counsellor planning a student's global education journey"
                  width={1200}
                  height={900}
                />
                <div className="contact-badge">
                  <Headphones />
                  <div>
                    <strong>Free Consultation</strong>
                    <span>No obligation. Expert advice.</span>
                  </div>
                </div>
              </div>

              {/* High-visibility WhatsApp Advisory CTA Card */}
              <div className="contact-whatsapp-card">
                <div className="whatsapp-card-head">
                  <div className="whatsapp-card-icon" aria-hidden="true">
                    <WhatsAppIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="whatsapp-card-title">Prefer to Chat Directly?</h3>
                    <p className="whatsapp-card-subtitle">Connect with our counsellors on WhatsApp</p>
                  </div>
                </div>
                <p className="whatsapp-card-copy">
                  Have quick questions about courses, university shortlisting, intake deadlines, or test preparation?
                  Contact Edunavyx directly on WhatsApp for prompt, personalized guidance.
                </p>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="whatsapp-card-cta-btn"
                  aria-label="Chat with Edunavyx on WhatsApp"
                >
                  <WhatsAppIcon className="w-5 h-5" />
                  <span>Chat on WhatsApp Now</span>
                </a>
              </div>
            </div>

            <div className="form-panel reveal">
              {submitted ? (
                <div className="success-state">
                  <span>
                    <Check />
                  </span>
                  <h2>Your journey starts now.</h2>
                  <p>Thanks for reaching out. An EDUNAVYX counsellor will contact you shortly.</p>
                  <Button onClick={() => setSubmitted(false)}>Send another enquiry</Button>
                </div>
              ) : (
                <>
                  <span className="eyebrow">CONNECT</span>
                  <h2 id="contact-heading">Let's Plan Your Global Future</h2>
                  <p className="contact-panel-intro">
                    Tell us a little about your academic aspirations and our expert advisors will
                    map out your personalized pathway.
                  </p>
                  <form onSubmit={handleSubmit} noValidate>
                    <div className="form-grid">
                      <div>
                        <Label htmlFor="fullName">Name *</Label>
                        <Input
                          id="fullName"
                          name="fullName"
                          maxLength={120}
                          placeholder="Your full name"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          maxLength={255}
                          placeholder="you@email.com"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone">Phone / WhatsApp *</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          maxLength={20}
                          placeholder="+91 98765 43210"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="educationLevel">Current Grade / Education Level</Label>
                        <select id="educationLevel" name="educationLevel" className="form-select">
                          <option value="">Select your education level</option>
                          <option value="High School (Grade 9–10)">High School (Grade 9–10)</option>
                          <option value="High School (Grade 11–12)">High School (Grade 11–12)</option>
                          <option value="Undergraduate / Bachelor's">Undergraduate / Bachelor's</option>
                          <option value="Postgraduate / Master's">Postgraduate / Master's</option>
                          <option value="Working Professional">Working Professional</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                      <div>
                        <Label htmlFor="interest">Area of Interest</Label>
                        <select id="interest" name="interest" className="form-select">
                          <option value="">Select area of interest</option>
                          <option value="STEM & Computer Science">STEM & Computer Science</option>
                          <option value="Business, Economics & Finance">Business, Economics & Finance</option>
                          <option value="Engineering & Technology">Engineering & Technology</option>
                          <option value="Medicine & Health Sciences">Medicine & Health Sciences</option>
                          <option value="Arts, Design & Architecture">Arts, Design & Architecture</option>
                          <option value="Law & Social Sciences">Law & Social Sciences</option>
                          <option value="Test Preparation (SAT / CUET / IELTS)">Test Preparation (SAT / CUET / IELTS)</option>
                          <option value="Career Compass Mentorship">Career Compass Mentorship</option>
                          <option value="Other / Undecided">Other / Undecided</option>
                        </select>
                      </div>
                      <div>
                        <Label htmlFor="destination">Preferred Destination</Label>
                        <select id="destination" name="destination" className="form-select">
                          <option value="">Choose a destination</option>
                          {countries.map((country) => (
                            <option key={country.name} value={country.name}>
                              {country.name}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="form-full-width">
                        <Label htmlFor="message">Message / Requirement</Label>
                        <textarea
                          id="message"
                          name="message"
                          rows={3}
                          className="form-textarea"
                          maxLength={1000}
                          placeholder="Tell us about your target course, timeline, universities of interest, or any questions..."
                        />
                      </div>
                    </div>
                    <label className="consent">
                      <Checkbox
                        checked={agreed}
                        onCheckedChange={(value) => setAgreed(value === true)}
                      />{" "}
                      <span>
                        I agree to receive calls, WhatsApp messages and emails from EDUNAVYX regarding
                        my enquiry.
                      </span>
                    </label>
                    {formError && (
                      <p className="form-error" role="alert">
                        {formError}
                      </p>
                    )}
                    <Button type="submit" size="lg" className="contact-submit-btn">
                      Get Free Consultation <ArrowRight />
                    </Button>
                  </form>
                </>
              )}
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="site-footer">
        <div className="container footer-grid">
          {/* Brand Column */}
          <div className="footer-brand">
            <Logo inverse />
            <p className="footer-brand-statement">
              Empowering students with personalised career discovery, comprehensive test
              preparation, and expert global university admissions.
            </p>
            <div className="footer-whatsapp-wrap">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-whatsapp-btn"
                aria-label="Contact Edunavyx on WhatsApp"
              >
                <WhatsAppIcon className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Navigation Column */}
          <div className="footer-col">
            <strong className="footer-col-title">Navigation</strong>
            <a href="#top">Home</a>
            <a href="#about">About Us</a>
            <a href="#career-compass">Career Compass</a>
            <a href="#test-preparation">Test Preparation</a>
            <a href="#our-expertise">Our Expertise</a>
            <a href="#destinations">Destinations</a>
            <a href="#contact">Connect</a>
          </div>

          {/* Pathways / Services Column */}
          <div className="footer-col">
            <strong className="footer-col-title">Our Pathways</strong>
            <a href="#career-compass">Career Guidance & Profiling</a>
            <a href="#test-preparation">SAT, CUET & IELTS Prep</a>
            <a href="#our-expertise">University Shortlisting</a>
            <a href="#our-expertise">Admissions & SOP Guidance</a>
            <a href="#our-expertise">Visa & Immigration Support</a>
            <a href="#our-expertise">Pre-Departure Assistance</a>
          </div>

          {/* Connect Column */}
          <div className="footer-col">
            <strong className="footer-col-title">Connect</strong>
            <a href="#contact">Book Free Consultation</a>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              WhatsApp Advisory
            </a>
            <div className="footer-socials-block">
              <span className="footer-social-label">Follow Us</span>
              <div className="footer-social-links">
                {["Instagram", "LinkedIn", "YouTube", "Facebook", "X"].map((item) => (
                  <a key={item} href="#top" className="footer-social-tag" title={item}>
                    {item}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="container footer-bottom">
          <span>© 2026 EDUNAVYX. All rights reserved.</span>
          <div className="footer-legal-links">
            <a href="#top">Privacy Policy</a>
            <a href="#top">Terms & Conditions</a>
            <a href="#top">Cookie Policy</a>
          </div>
        </div>
      </footer>

      {/* FLOATING HELP & BACK TO TOP */}
      <div className="floating-help">
        {chatOpen && (
          <div className="help-popover">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setChatOpen(false)}
              aria-label="Close consultation help"
            >
              <X />
            </Button>
            <Headphones />
            <strong>Need help choosing your destination?</strong>
            <p>Talk to an EDUNAVYX counsellor.</p>
            <Button asChild>
              <a href="#contact" onClick={() => setChatOpen(false)}>
                Book Free Consultation
              </a>
            </Button>
          </div>
        )}
        <Button
          size="icon"
          className="help-button"
          onClick={() => setChatOpen(!chatOpen)}
          aria-label="Open consultation help"
        >
          <Headphones />
        </Button>
      </div>
      {scrolled && (
        <Button variant="outline" size="icon" className="back-to-top" asChild>
          <a href="#top" aria-label="Back to top">
            <ArrowUp />
          </a>
        </Button>
      )}
    </div>
  );
}