import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Check, Compass, GraduationCap, Headphones } from "lucide-react";

import { Button } from "@/components/ui/button";
import { BackButton } from "@/components/back-button";
import logoImage from "@/assets/edunavyx-logo.png";
import { getCountry } from "@/lib/countries";

export const Route = createFileRoute("/countries/$countrySlug")({
  loader: ({ params }) => {
    const country = getCountry(params.countrySlug);
    if (!country) throw notFound();
    return country;
  },
  head: ({ loaderData }) => {
    const title = loaderData ? `${loaderData.title} | EDUNAVYX` : "Country Not Found | EDUNAVYX";
    const description = loaderData?.intro ?? "Explore study-abroad destinations with EDUNAVYX.";
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
  component: CountryDetailPage,
  notFoundComponent: CountryNotFound,
});

function CountryLogo() {
  return (
    <Link to="/" className="brand-logo" aria-label="EDUNAVYX home">
      <img src={logoImage} alt="EDUNAVYX" className="brand-logo-img" width={651} height={196} />
    </Link>
  );
}

function CountryDetailPage() {
  const country = Route.useLoaderData();

  return (
    <div className="country-page">
      <header className="service-page-header">
        <div className="container service-page-nav">
          <CountryLogo />
          <div className="nav-actions">
            <Button asChild className="nav-cta">
              <Link to="/" hash="contact">
                Book Free Consultation <ArrowRight />
              </Link>
            </Button>
            <a
              href="https://wa.me/918796556462?text=Hi%20EDUNAVYX%2C%20I%20would%20like%20to%20know%20more%20about%20studying%20abroad."
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
        {/* HERO SECTION */}
        <section className="country-detail-hero">
          <img
            className="country-detail-hero-img"
            src={country.monument}
            alt={country.monumentAlt}
            width={1600}
            height={900}
          />
          <div className="country-detail-hero-shade" aria-hidden="true" />
          <div className="container country-detail-hero-copy">
            <BackButton to="/" hash="countries" label="All destinations" className="country-back-wrapper" />
            <div className="country-hero-badge-wrap">
              <span className="country-hero-flag">{country.flag}</span>
              <span className="eyebrow">{country.name.toUpperCase()}</span>
            </div>
            <h1>{country.title}</h1>
            <p className="country-hero-intro">{country.intro}</p>
            <div className="country-hero-actions">
              <Button size="lg" asChild className="country-hero-cta">
                <Link to="/" hash="contact">
                  Book Free Consultation <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* KEY HIGHLIGHTS SECTION */}
        <section className="section country-highlights-section">
          <div className="container">
            <div className="service-section-heading">
              <span className="eyebrow">KEY HIGHLIGHTS</span>
              <h2>Why Study in {country.name}</h2>
              <p>Key advantages, academic excellence, and career opportunities for international students.</p>
            </div>
            <div className="country-highlights-grid">
              {country.highlights.map((highlight, idx) => (
                <article className="country-highlight-card" key={idx}>
                  <div className="country-highlight-icon-wrap" aria-hidden="true">
                    <Check className="w-5 h-5" />
                  </div>
                  <div className="country-highlight-body">
                    <h3>{highlight.title}</h3>
                    <p>{highlight.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* UNIVERSITIES & INSTITUTIONS SECTION */}
        <section className="section country-institutions-section">
          <div className="container">
            <div className="service-section-heading">
              <span className="eyebrow">UNIVERSITIES & INSTITUTIONS</span>
              <h2>Top Institutions in {country.name}</h2>
              <p>{country.institutionsLead}</p>
            </div>
            <div className="country-institutions-grid">
              {country.institutions.map((inst, idx) => (
                <div className="country-institution-card" key={idx}>
                  <div className="country-institution-top">
                    <GraduationCap className="country-institution-icon" aria-hidden="true" />
                    <span className="country-institution-badge">{country.name}</span>
                  </div>
                  <h3>{inst}</h3>
                  <div className="country-institution-footer">
                    <Button asChild size="sm" variant="ghost" className="country-institution-btn">
                      <Link to="/" hash="contact">
                        Admissions Guidance <ArrowRight className="w-3.5 h-3.5 ml-1" />
                      </Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="service-detail-cta">
          <div className="container">
            <Headphones />
            <span className="eyebrow">YOUR NEXT STEP</span>
            <h2>Let’s plan your {country.name} application.</h2>
            <p>Speak with an EDUNAVYX counsellor for university shortlisting, scholarships and visa guidance.</p>
            <Button size="lg" asChild className="service-detail-cta-btn">
              <Link to="/" hash="contact">
                Book Your Free Consultation <ArrowRight />
              </Link>
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
}

function CountryNotFound() {
  return (
    <main className="service-not-found">
      <Compass />
      <h1>Destination not found</h1>
      <p>The country you’re looking for may have moved.</p>
      <Button asChild>
        <Link to="/" hash="countries">
          <ArrowLeft /> Explore destinations
        </Link>
      </Button>
    </main>
  );
}
