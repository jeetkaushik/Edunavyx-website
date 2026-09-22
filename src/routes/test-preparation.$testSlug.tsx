import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Check,
  CheckCircle2,
  Clock,
  Compass,
  FileCheck,
  GraduationCap,
  Headphones,
  HelpCircle,
  Layers,
  Sparkles,
  Target,
  Trophy,
  Users,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import logoImage from "@/assets/edunavyx-logo.png";
import { getTestPrepItem, testPreparationData, type TestPrepItem } from "@/lib/test-preparation";

export const Route = createFileRoute("/test-preparation/$testSlug")({
  loader: ({ params }) => {
    const testItem = getTestPrepItem(params.testSlug);
    if (!testItem) throw notFound();
    return testItem;
  },
  head: ({ loaderData }) => {
    const title = loaderData
      ? `${loaderData.title} Preparation | EDUNAVYX`
      : "Test Preparation | EDUNAVYX";
    const description =
      loaderData?.heroSummary ??
      "Structured and focused test preparation with EDUNAVYX to achieve your target university admission scores.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: TestPrepDetailPage,
  notFoundComponent: TestNotFound,
});

function HeaderLogo() {
  return (
    <Link to="/" className="brand-logo" aria-label="EDUNAVYX home">
      <img src={logoImage} alt="EDUNAVYX" className="brand-logo-img" width={651} height={196} />
    </Link>
  );
}

const allTests = [
  { id: "cuet", label: "CUET & Indian Exams", accent: "blue" },
  { id: "sat", label: "SAT", accent: "orange" },
  { id: "ielts", label: "IELTS", accent: "teal" },
] as const;

function TestPrepDetailPage() {
  const currentTest = Route.useLoaderData();

  return (
    <div className="test-detail-page">
      {/* Top Header */}
      <header className="service-page-header">
        <div className="container service-page-nav">
          <HeaderLogo />
          <div className="nav-actions">
            <Button asChild className="nav-cta">
              <Link to="/" hash="contact">
                Book Free Consultation <ArrowRight />
              </Link>
            </Button>
            <a
              href="https://wa.me/919876543210?text=Hi%20EDUNAVYX%2C%20I%20would%20like%20to%20know%20more%20about%20Test%20Preparation."
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-nav-btn"
              aria-label="Chat on WhatsApp"
              title="Chat on WhatsApp"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.18-2.587-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.634.077-1.748-.387-1.393-.58-2.316-2.008-2.386-2.102-.07-.094-.564-.75-.564-1.429 0-.679.352-1.014.477-1.155.125-.141.272-.176.363-.176.091 0 .182.001.261.006.083.004.195-.031.305.234.114.276.39.951.424 1.021.034.07.057.151.011.242-.045.091-.068.147-.136.226-.068.079-.143.176-.205.237-.068.068-.139.141-.06.277.079.136.35.577.751.935.516.46 1.018.665 1.154.733.136.068.215.057.295-.034.08-.091.341-.397.432-.533.091-.136.182-.114.307-.068.125.045.795.375.932.443.136.068.227.102.261.159.034.057.034.329-.11.734zM12 2C6.477 2 2 6.477 2 12c0 1.891.524 3.66 1.434 5.176L2 22l4.981-1.307A9.957 9.957 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18.167c-1.688 0-3.256-.497-4.577-1.353l-.328-.214-2.956.775.789-2.882-.213-.339A8.134 8.134 0 0 1 3.833 12c0-4.503 3.664-8.167 8.167-8.167 4.503 0 8.167 3.664 8.167 8.167 0 4.503-3.664 8.167-8.167 8.167z"/>
              </svg>
            </a>
          </div>
        </div>
      </header>

      <main>
        {/* Detail Hero Section */}
        <section className={`test-detail-hero hero-accent-${currentTest.accent}`}>
          <div className="container test-detail-hero-grid">
            <div className="test-detail-hero-copy">
              <Link to="/" hash="test-preparation" className="service-back">
                <ArrowLeft className="w-4 h-4" /> All Test Preparation
              </Link>
              <div className="test-detail-badge-row">
                <span className={`test-service-badge badge-${currentTest.id}`}>
                  {currentTest.categoryBadge}
                </span>
              </div>
              <h1 className="test-detail-hero-title">{currentTest.title}</h1>
              <blockquote className="test-detail-hero-headline">
                “{currentTest.headline}”
              </blockquote>
              <p className="test-detail-hero-intro">{currentTest.heroSummary}</p>

              {/* Fast Test Switching Tabs in Hero */}
              <div className="test-switcher-container">
                <span className="test-switcher-label">Select Examination:</span>
                <nav className="test-switcher-nav" aria-label="Test selection">
                  {allTests.map((t) => {
                    const isActive = t.id === currentTest.id;
                    return (
                      <Link
                        key={t.id}
                        to="/test-preparation/$testSlug"
                        params={{ testSlug: t.id }}
                        className={`test-switcher-pill pill-${t.id} ${isActive ? "is-active" : ""}`}
                      >
                        <span>{t.label}</span>
                        {isActive && <Check className="w-3.5 h-3.5" />}
                      </Link>
                    );
                  })}
                </nav>
              </div>

              <div className="test-detail-cta-row">
                <Button size="lg" asChild className="test-detail-primary-btn">
                  <Link to="/" hash="contact">
                    Get Free Test Strategy Session <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </div>

            <div className="test-detail-hero-visual">
              <div className="test-detail-img-wrapper">
                <img
                  src={currentTest.cardImage}
                  alt={currentTest.cardImageAlt}
                  className="test-detail-hero-img"
                  width={1200}
                  height={900}
                />
                <div className="test-detail-badge-overlay">
                  <Sparkles className="w-4 h-4 text-orange" />
                  <div>
                    <strong>Structured Guidance</strong>
                    <span>Personalized to your target cut-offs</span>
                  </div>
                </div>
              </div>

              {/* Quick Exam Metrics Card */}
              <div className="test-metrics-grid">
                <div className="test-metric-item">
                  <Clock className="w-4 h-4" />
                  <div>
                    <span className="test-metric-label">Duration</span>
                    <strong>{currentTest.testFormat.duration}</strong>
                  </div>
                </div>
                <div className="test-metric-item">
                  <Trophy className="w-4 h-4" />
                  <div>
                    <span className="test-metric-label">Scoring Format</span>
                    <strong>{currentTest.testFormat.scoring}</strong>
                  </div>
                </div>
                <div className="test-metric-item full-width">
                  <GraduationCap className="w-4 h-4" />
                  <div>
                    <span className="test-metric-label">Recognized By</span>
                    <strong>{currentTest.testFormat.acceptedBy}</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION: WHO SHOULD TAKE THIS TEST */}
        <section className="section test-audience-section">
          <div className="container">
            <div className="test-section-header">
              <span className="eyebrow">TARGET AUDIENCE</span>
              <h2>Who Should Prepare For {currentTest.shortTitle}?</h2>
              <p>Designed for focused aspirants targeting verified admissions and scholarships.</p>
            </div>

            <div className="test-audience-grid">
              {currentTest.whoShouldTake.map((point, index) => (
                <div key={index} className="test-audience-card">
                  <div className={`test-audience-icon-bubble icon-${currentTest.id}`}>
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <p>{point}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION: CURRICULUM & KEY MODULES COVERED */}
        <section className="section test-curriculum-section">
          <div className="container">
            <div className="test-section-header">
              <span className="eyebrow">EXAM CURRICULUM</span>
              <h2>What Does The Preparation Cover?</h2>
              <p>Complete syllabus breakdown, module by module, with targeted question solving.</p>
            </div>

            <div className="test-modules-grid">
              {currentTest.keyModules.map((module, idx) => (
                <article key={idx} className="test-module-card">
                  <div className="test-module-header">
                    <span className="test-module-number">0{idx + 1}</span>
                    <h3>{module.title}</h3>
                  </div>
                  <p>{module.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION: PREPARATION APPROACH & METHODOLOGY */}
        <section className="section test-approach-section">
          <div className="container">
            <div className="test-section-header">
              <span className="eyebrow">OUR METHODOLOGY</span>
              <h2>A 4-Step Strategic Preparation Roadmap</h2>
              <p>How we help you bridge the gap between initial assessment and your dream score.</p>
            </div>

            <div className="test-approach-timeline">
              {currentTest.preparationApproach.map((step) => (
                <div key={step.step} className="test-approach-step">
                  <div className={`test-step-badge badge-${currentTest.id}`}>{step.step}</div>
                  <div className="test-step-content">
                    <h3>{step.title}</h3>
                    <p>{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION: WHY PREPARE WITH EDUNAVYX */}
        <section className="section test-why-section">
          <div className="container">
            <div className="test-why-box">
              <div className="test-why-copy">
                <span className="eyebrow">THE EDUNAVYX ADVANTAGE</span>
                <h2>Why Prepare with Edunavyx?</h2>
                <p>
                  Our coaching goes beyond traditional rote learning. We pair diagnostic analytics
                  with verified university admissions consulting to ensure your hard work directly
                  translates into competitive admissions.
                </p>
                <ul className="test-why-list">
                  {currentTest.whyEdunavyx.map((benefit, i) => (
                    <li key={i}>
                      <Check className={`w-4 h-4 text-${currentTest.accent === "blue" ? "blue-600" : currentTest.accent === "orange" ? "orange" : "teal"}`} />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="test-why-aside">
                <div className="test-aside-card">
                  <Users className="w-8 h-8 text-orange" />
                  <h3>Personalized Mentorship</h3>
                  <p>
                    Work closely with experienced faculty who understand test psychology, pacing
                    tactics, and your individual university aspirations.
                  </p>
                  <Button size="lg" asChild className="test-aside-btn">
                    <Link to="/" hash="contact">
                      Schedule 1-on-1 Assessment <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION: FAQS */}
        <section className="section test-faqs-section">
          <div className="container test-faqs-container">
            <div className="test-section-header">
              <span className="eyebrow">COMMON QUESTIONS</span>
              <h2>Frequently Asked Questions</h2>
            </div>
            <div className="test-faqs-list">
              {currentTest.faqs.map((faq, i) => (
                <div key={i} className="test-faq-card">
                  <h3>
                    <HelpCircle className="w-4 h-4 text-orange flex-shrink-0" />
                    <span>{faq.question}</span>
                  </h3>
                  <p>{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* BOTTOM FULL CTA */}
        <section className="service-detail-cta">
          <div className="container">
            <Headphones />
            <span className="eyebrow">YOUR JOURNEY BEGINS HERE</span>
            <h2>Prepare with Purpose. Perform with Confidence.</h2>
            <p>
              Connect with our test preparation mentors today for a free diagnostic assessment and
              personalized preparation strategy.
            </p>
            <div className="test-cta-actions">
              <Button size="lg" asChild>
                <Link to="/" hash="contact">
                  Start Your Preparation <ArrowRight />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="test-cta-secondary">
                <Link to="/" hash="test-preparation">
                  Explore All Programs
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

function TestNotFound() {
  return (
    <main className="service-not-found">
      <Compass />
      <h1>Test Preparation Program Not Found</h1>
      <p>The test preparation program you are looking for is not listed.</p>
      <Button asChild>
        <Link to="/" hash="test-preparation">
          <ArrowLeft /> Back to Test Preparation Overview
        </Link>
      </Button>
    </main>
  );
}
