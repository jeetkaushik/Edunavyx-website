import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Check, Compass, Headphones, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import serviceImage from "@/assets/services-advisor.jpg";
import aboutImage from "@/assets/about-students.jpg";
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
      <span className="brand-mark"><Compass /></span>
      <span><b>EDU</b>NAVYX<small>GLOBAL EDUCATION</small></span>
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
          <Button asChild className="nav-cta"><Link to="/" hash="contact">Book Free Consultation <ArrowRight /></Link></Button>
        </div>
      </header>

      <main>
        <section className="service-detail-hero">
          <div className="container service-detail-hero-grid">
            <div className="service-detail-copy">
              <Link to="/" hash="services" className="service-back"><ArrowLeft /> All services</Link>
              <span className="eyebrow">SERVICE {service.number}</span>
              <h1>{service.title}</h1>
              <p>{service.introduction}</p>
              <Button size="lg" asChild><Link to="/" hash="contact">Talk to a Counsellor <ArrowRight /></Link></Button>
            </div>
            <div className="service-detail-visual">
              <img src={serviceImage} alt={`EDUNAVYX counsellor providing ${service.title.toLowerCase()}`} width={1200} height={1000} />
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