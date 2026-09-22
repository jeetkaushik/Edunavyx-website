import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Check, Compass, Headphones, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import aboutImage from "@/assets/about-students.jpg";
import logoImage from "@/assets/edunavyx-logo.png";
import { getService } from "@/lib/services";

export const Route = createFileRoute("/services/$serviceSlug")({
  loader: ({ params }) => {
    const service = getService(params.serviceSlug);
    if (!service) throw notFound();
    return service;
  },
  head: ({ loaderData }) => {
    const title = loaderData ? `${loaderData.title} | EDUNAVYX` : "Service Not Found | EDUNAVYX";
    const description = loaderData?.summary ?? "Explore personalized study-abroad guidance from EDUNAVYX.";
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
  component: ServiceDetailPage,
  notFoundComponent: ServiceNotFound,
});

function ServiceLogo() {
  return (
    <Link to="/" className="brand-logo" aria-label="EDUNAVYX home">
      <img src={logoImage} alt="EDUNAVYX" className="brand-logo-img" width={651} height={196} />
    </Link>
  );
}

function ServiceDetailPage() {
  const service = Route.useLoaderData();

  return (
    <div className="service-page">
      <header className="service-page-header">
        <div className="container service-page-nav">
          <ServiceLogo />
          <div className="nav-actions">
            <Button asChild className="nav-cta"><Link to="/" hash="contact">Book Free Consultation <ArrowRight /></Link></Button>
            <a
              href="https://wa.me/919876543210?text=Hi%20EDUNAVYX%2C%20I%20would%20like%20to%20know%20more%20about%20studying%20abroad."
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
        <section className="service-detail-hero">
          <div className="container service-detail-hero-grid">
            <div className="service-detail-copy">
              <Link to="/" hash="services" className="service-back"><ArrowLeft /> All services</Link>
              <span className="eyebrow">SERVICE {service.number}</span>
              <h1>{service.title}</h1>
              <p style={{ fontSize: "20px", fontWeight: 700, color: "var(--navy)", margin: "0 0 14px", lineHeight: 1.35 }}>
                {service.headline}
              </p>
              <p>{service.introduction}</p>
              <Button size="lg" asChild><Link to="/" hash="contact">Talk to a Counsellor <ArrowRight /></Link></Button>
            </div>
            <div className="service-detail-visual">
              <img src={service.image} alt={service.imageAlt} width={1200} height={1000} />
              <div className="service-detail-badge"><Sparkles /><strong>Personalized support</strong><span>Built around your goals</span></div>
            </div>
          </div>
        </section>

        <section className="section service-includes">
          <div className="container service-content-grid">
            <div><span className="eyebrow">WHAT'S INCLUDED</span><h2>Guidance at every important decision.</h2><p>Clear advice, careful preparation and expert support—without making the process feel overwhelming.</p></div>
            <ul>{service.includes.map((item) => <li key={item}><Check /> <span>{item}</span></li>)}</ul>
          </div>
        </section>

        <section className="section service-process">
          <div className="container">
            <div className="service-section-heading"><span className="eyebrow">HOW WE HELP</span><h2>A clear, considered process.</h2></div>
            <div className="service-process-grid">{service.process.map((step, index) => <article key={step.title}><span>0{index + 1}</span><h3>{step.title}</h3><p>{step.copy}</p></article>)}</div>
          </div>
        </section>

        <section className="section service-outcomes">
          <div className="container service-outcomes-grid">
            <img src={aboutImage} alt="Students feeling confident about their international education plans" width={1200} height={900} />
            <div><span className="eyebrow">THE OUTCOME</span><h2>Move forward with confidence.</h2><ul>{service.outcomes.map((outcome) => <li key={outcome}><Check /> {outcome}</li>)}</ul></div>
          </div>
        </section>

        <section className="service-detail-cta"><div className="container"><Headphones /><span className="eyebrow">YOUR NEXT STEP</span><h2>Let’s make your study-abroad plan happen.</h2><p>Speak with an EDUNAVYX counsellor and get guidance tailored to your journey.</p><Button size="lg" asChild><Link to="/" hash="contact">Book Your Free Consultation <ArrowRight /></Link></Button></div></section>
      </main>
    </div>
  );
}

function ServiceNotFound() {
  return <main className="service-not-found"><Compass /><h1>Service not found</h1><p>The service you’re looking for may have moved.</p><Button asChild><Link to="/" hash="services"><ArrowLeft /> Explore our services</Link></Button></main>;
}