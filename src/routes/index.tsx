import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useState, type FormEvent } from "react";
import {
  ArrowRight,
  ArrowUp,
  BookOpen,
  Building2,
  Check,
  ChevronLeft,
  ChevronRight,
  Compass,
  GraduationCap,
  Headphones,
  MapPin,
  Menu,
  Plane,
  Quote,
  Search,
  Sparkles,
  X,
} from "lucide-react";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import heroImage from "@/assets/edunavyx-hero.jpg";
import aboutImage from "@/assets/about-students.jpg";
import destinationImage from "@/assets/destinations.jpg";
import serviceImage from "@/assets/services-advisor.jpg";
import successImage from "@/assets/student-success.jpg";
import ctaImage from "@/assets/cta-student.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "EDUNAVYX | Study Abroad Consultants & Global Education Experts" },
      { name: "description", content: "Explore universities, countries, scholarships and study-abroad opportunities with EDUNAVYX. Get personalized guidance for your global education journey." },
      { property: "og:title", content: "EDUNAVYX | Global Education Experts" },
      { property: "og:description", content: "Personalized guidance for your global education journey." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

const countries = [
  { name: "USA", region: "Americas", flag: "🇺🇸", blurb: "World-class research, innovation and diverse career opportunities.", courses: "STEM · Business", tuition: "$25k–55k", work: "Up to 3 years", pos: "0% 50%" },
  { name: "Canada", region: "Americas", flag: "🇨🇦", blurb: "Welcoming campuses and exceptional post-study opportunities.", courses: "AI · Engineering", tuition: "C$20k–45k", work: "Up to 3 years", pos: "33% 50%" },
  { name: "Australia", region: "Oceania", flag: "🇦🇺", blurb: "Globally ranked universities and an enviable student lifestyle.", courses: "Health · Data", tuition: "A$25k–50k", work: "2–4 years", pos: "66% 50%" },
  { name: "United Kingdom", region: "Europe", flag: "🇬🇧", blurb: "Iconic institutions and focused, career-ready degrees.", courses: "Finance · Law", tuition: "£18k–40k", work: "2 years", pos: "100% 50%" },
  { name: "New Zealand", region: "Oceania", flag: "🇳🇿", blurb: "Future-focused learning in a safe, spectacular setting.", courses: "AgriTech · IT", tuition: "NZ$22k–38k", work: "Up to 3 years", pos: "62% 50%" },
  { name: "Ireland", region: "Europe", flag: "🇮🇪", blurb: "A thriving European hub for technology and business.", courses: "Tech · Pharma", tuition: "€14k–30k", work: "Up to 2 years", pos: "92% 50%" },
  { name: "Germany", region: "Europe", flag: "🇩🇪", blurb: "Rigorous academics, innovation and outstanding value.", courses: "Engineering · Auto", tuition: "€0–20k", work: "18 months", pos: "72% 50%" },
  { name: "France", region: "Europe", flag: "🇫🇷", blurb: "Creative culture, renowned schools and global business links.", courses: "Luxury · Business", tuition: "€10k–30k", work: "Up to 2 years", pos: "85% 50%" },
  { name: "Netherlands", region: "Europe", flag: "🇳🇱", blurb: "English-taught programs with an entrepreneurial outlook.", courses: "Design · Science", tuition: "€12k–25k", work: "1 year", pos: "78% 50%" },
  { name: "Singapore", region: "Asia", flag: "🇸🇬", blurb: "Asia's dynamic gateway for technology and finance.", courses: "Finance · Computing", tuition: "S$20k–50k", work: "Varies", pos: "46% 50%" },
];

const universities = [
  ["MIT", "Massachusetts Institute of Technology", "USA", "Cambridge", "Technology · Engineering", "$58k–62k"],
  ["HU", "Harvard University", "USA", "Cambridge", "Business · Law", "$55k–60k"],
  ["SU", "Stanford University", "USA", "Stanford", "Computer Science · MBA", "$56k–64k"],
  ["UofT", "University of Toronto", "Canada", "Toronto", "AI · Life Sciences", "C$45k–62k"],
  ["UBC", "University of British Columbia", "Canada", "Vancouver", "Engineering · Arts", "C$42k–58k"],
  ["UM", "University of Melbourne", "Australia", "Melbourne", "Medicine · Business", "A$38k–52k"],
  ["USyd", "University of Sydney", "Australia", "Sydney", "Architecture · Law", "A$42k–56k"],
  ["UoM", "University of Manchester", "UK", "Manchester", "Engineering · Business", "£25k–38k"],
  ["UoE", "University of Edinburgh", "UK", "Edinburgh", "Data Science · Arts", "£26k–40k"],
  ["TCD", "Trinity College Dublin", "Ireland", "Dublin", "Computing · Business", "€20k–35k"],
];

const services = [
  ["01", "Study Abroad Consultation", "Personal guidance based on your academic profile and career goals."],
  ["02", "University & Course Selection", "Find the university and program that match your ambitions."],
  ["03", "Application Assistance", "Support with applications, SOPs, LORs and documentation."],
  ["04", "Scholarship & Finance", "Discover scholarships and make your study plan financially sound."],
  ["05", "Visa & Accommodation", "Guidance through visa documentation and finding your new home."],
  ["06", "Interview Preparation", "Prepare confidently for university and visa interviews."],
];

const faqs = [
  ["Which countries does EDUNAVYX help students apply to?", "We support applications across the USA, Canada, UK, Australia, New Zealand, Ireland, Germany, France, the Netherlands, Singapore and other leading destinations."],
  ["How do I choose the right country for my studies?", "We compare academic fit, budget, lifestyle, visa pathways and career outcomes to create a destination shortlist built around you."],
  ["How do I choose the right university?", "Your counsellor evaluates course strength, entry requirements, location, cost and outcomes—not just brand names."],
  ["Can EDUNAVYX help with scholarships?", "Yes. We identify relevant university and external scholarships, review eligibility and help strengthen your submission."],
  ["Do you help with SOP and LOR preparation?", "Yes. We guide the structure, clarity and positioning of your documents while keeping your voice authentic."],
  ["Do you provide visa assistance?", "Yes. Our team supports document preparation, application reviews and interview readiness."],
  ["Do you help students find accommodation?", "Yes. We help compare verified university and private accommodation options near your campus."],
  ["When should I start my study-abroad application?", "Ideally 12–18 months before your intended intake, especially if scholarships or competitive programs are a priority."],
  ["How much does studying abroad cost?", "It varies by destination and program. We create a transparent estimate covering tuition, living costs, insurance and travel."],
  ["How can I book a consultation?", "Use any consultation button on this page, complete the short form and our team will contact you."],
];

function Logo({ inverse = false }: { inverse?: boolean }) {
  return <a href="#top" className={`brand-logo ${inverse ? "brand-logo-inverse" : ""}`} aria-label="EDUNAVYX home"><span className="brand-mark"><Compass /></span><span><b>EDU</b>NAVYX<small>GLOBAL EDUCATION</small></span></a>;
}

function Counter({ value, suffix = "+" }: { value: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const [node, setNode] = useState<HTMLSpanElement | null>(null);
  useEffect(() => {
    if (!node) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry?.isIntersecting) return;
      const start = performance.now();
      const tick = (now: number) => {
        const progress = Math.min((now - start) / 1100, 1);
        setCount(Math.round(value * (1 - Math.pow(1 - progress, 3))));
        if (progress < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
      observer.disconnect();
    });
    observer.observe(node);
    return () => observer.disconnect();
  }, [node, value]);
  return <span ref={setNode}>{count.toLocaleString()}{suffix}</span>;
}

function SectionHeading({ eyebrow, title, copy, center = false }: { eyebrow: string; title: string; copy?: string; center?: boolean }) {
  return <div className={`section-heading reveal ${center ? "section-heading-center" : ""}`}><span className="eyebrow">{eyebrow}</span><h2>{title}</h2>{copy && <p>{copy}</p>}</div>;
}

function HomePage() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const [countryFilter, setCountryFilter] = useState("All");
  const [universityQuery, setUniversityQuery] = useState("");
  const [universityCountry, setUniversityCountry] = useState("All");
  const [testimonial, setTestimonial] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const [formError, setFormError] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    onScroll();
    const items = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("is-visible")), { threshold: 0.12 });
    items.forEach((item) => observer.observe(item));
    return () => { window.removeEventListener("scroll", onScroll); observer.disconnect(); };
  }, []);

  const visibleCountries = countryFilter === "All" ? countries : countries.filter((country) => country.region === countryFilter);
  const visibleUniversities = useMemo(() => universities.filter((university) => {
    const textMatch = `${university[1]} ${university[3]} ${university[4]}`.toLowerCase().includes(universityQuery.toLowerCase());
    return textMatch && (universityCountry === "All" || university[2] === universityCountry);
  }).slice(0, 6), [universityQuery, universityCountry]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    if (!data.get("firstName") || !data.get("lastName") || !data.get("email") || !data.get("mobile") || !agreed) {
      setFormError("Please complete the required fields and confirm your consent.");
      return;
    }
    setFormError("");
    setSubmitted(true);
  };

  const nav = ["About", "Countries", "Universities", "Services", "Stories", "Resources", "Contact"];

  return <div id="top" className="site-shell">
    <header className={`site-header ${scrolled ? "site-header-scrolled" : ""}`}>
      <div className="container nav-inner">
        <Logo />
        <nav className="desktop-nav" aria-label="Main navigation">
          <a href="#top">Home</a>{nav.map((item) => <a key={item} href={`#${item.toLowerCase()}`}>{item === "Stories" ? "Success Stories" : item}</a>)}
        </nav>
        <Button asChild size="lg" className="nav-cta"><a href="#contact">Book Free Consultation <ArrowRight /></a></Button>
        <Button variant="ghost" size="icon" className="mobile-menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">{menuOpen ? <X /> : <Menu />}</Button>
      </div>
      {menuOpen && <nav className="mobile-nav" aria-label="Mobile navigation"><a href="#top" onClick={() => setMenuOpen(false)}>Home</a>{nav.map((item) => <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)}>{item === "Stories" ? "Success Stories" : item}</a>)}<Button asChild><a href="#contact" onClick={() => setMenuOpen(false)}>Book Free Consultation</a></Button></nav>}
    </header>

    <main>
      <section className="hero-section">
        <div className="hero-grid container">
          <div className="hero-copy reveal is-visible">
            <span className="eyebrow">YOUR JOURNEY. YOUR FUTURE.</span>
            <h1>Your Global <span>Education Journey</span> Starts Here.</h1>
            <p>Discover the right university, country and career path with expert guidance from EDUNAVYX.</p>
            <div className="hero-actions"><Button size="lg" asChild><a href="#countries">Explore Destinations <ArrowRight /></a></Button><Button size="lg" variant="outline" asChild><a href="#contact">Book Free Consultation</a></Button></div>
            <div className="hero-proof"><div className="avatar-stack"><span>A</span><span>M</span><span>S</span></div><p><strong>4.9/5</strong> from ambitious students worldwide</p></div>
          </div>
          <div className="hero-visual reveal is-visible">
            <div className="route-line"><Plane /></div>
            <img src={heroImage} alt="Indian students beginning their international education journey" width={1400} height={1200} />
            <div className="floating-card floating-card-top"><MapPin /><span><strong>50+</strong> Countries</span></div>
            <div className="floating-card floating-card-bottom"><GraduationCap /><span><strong>10,000+</strong> Students guided</span></div>
          </div>
        </div>
      </section>

      <section className="trust-strip" aria-label="EDUNAVYX results"><div className="container stats-grid">
        {[{v:10,s:"K+",l:"Students Guided"},{v:500,s:"+",l:"University Partners"},{v:50,s:"+",l:"Global Destinations"},{v:95,s:"%+",l:"Application Success"}].map((item) => <div key={item.l}><strong><Counter value={item.v} suffix={item.s} /></strong><span>{item.l}</span></div>)}
      </div></section>

      <section id="about" className="section about-section"><div className="container about-grid">
        <div className="about-visual reveal"><img loading="lazy" src={aboutImage} alt="International students walking through a university campus" width={1200} height={1400} /><div className="experience-stamp"><Sparkles /><strong>15+</strong><span>years of trusted guidance</span></div></div>
        <div className="about-copy"><SectionHeading eyebrow="WHO WE ARE" title="We Make Global Education Feel Simple." copy="EDUNAVYX transforms international education ambitions into a clear, achievable journey—from destination and university selection to scholarships, visas and interview preparation." />
          <ul className="check-list reveal">{["Personalized University Selection","Expert Application Guidance","Scholarship & Financial Guidance","End-to-End Visa Support"].map((item) => <li key={item}><Check />{item}</li>)}</ul>
          <Button variant="link" asChild className="text-link"><a href="#services">Discover EDUNAVYX <ArrowRight /></a></Button>
        </div>
      </div></section>

      <section className="section why-section"><div className="container"><SectionHeading eyebrow="THE EDUNAVYX DIFFERENCE" title="Why Students Choose EDUNAVYX" center />
        <div className="feature-grid">
          {[[Compass,"Personalized Guidance","Every student's academic background, goals and budget are different."],[Building2,"Global University Network","Access opportunities across leading universities worldwide."],[GraduationCap,"Career-Focused Approach","Choose programs that align with long-term career ambitions."],[Headphones,"End-to-End Support","From the first consultation to departure, we're with you."]].map(([Icon,title,copy], index) => { const I = Icon as typeof Compass; return <article className="feature-card reveal" key={String(title)}><span>0{index+1}</span><I /><h3>{String(title)}</h3><p>{String(copy)}</p></article>; })}
        </div>
      </div></section>

      <section className="numbers-section"><div className="container"><SectionHeading eyebrow="OUR IMPACT" title="Numbers That Speak For Us" />
        <div className="numbers-grid">{[{v:10000,s:"+",l:"Students Guided"},{v:500,s:"+",l:"Universities"},{v:50,s:"+",l:"Countries"},{v:95,s:"%+",l:"Application Success"},{v:15,s:"+",l:"Years of Expertise"}].map((item) => <div className="reveal" key={item.l}><strong><Counter value={item.v} suffix={item.s} /></strong><span>{item.l}</span></div>)}</div>
      </div></section>

      <section id="countries" className="section destinations-section"><div className="container"><SectionHeading eyebrow="STUDY DESTINATIONS" title="Explore Your Dream Destination" copy="Find the country that matches your ambitions, lifestyle and career goals." />
        <div className="filter-row" role="group" aria-label="Filter destinations">{["All","Americas","Europe","Oceania","Asia"].map((region) => <Button key={region} variant={countryFilter === region ? "default" : "outline"} size="sm" onClick={() => setCountryFilter(region)}>{region}</Button>)}</div>
        <div className="country-scroller">{visibleCountries.map((country) => <article className="country-card reveal" key={country.name}><img loading="lazy" src={destinationImage} alt={`${country.name} study destination`} width={1400} height={900} style={{ objectPosition: country.pos }} /><div className="country-overlay"><span className="country-flag">{country.flag}</span><div className="country-content"><h3>{country.name}</h3><p>{country.blurb}</p><dl><div><dt>Popular</dt><dd>{country.courses}</dd></div><div><dt>Tuition</dt><dd>{country.tuition}</dd></div><div><dt>Post-study work</dt><dd>{country.work}</dd></div></dl><Button size="sm" className="round-arrow" aria-label={`Explore ${country.name}`}><ArrowRight /></Button></div></div></article>)}</div>
      </div></section>

      <section id="universities" className="section university-section"><div className="container"><SectionHeading eyebrow="UNIVERSITY FINDER" title="Find Your Perfect University" copy="Explore leading universities and discover programs built around your ambitions." />
        <div className="university-toolbar"><label className="search-field"><Search /><Input value={universityQuery} onChange={(event) => setUniversityQuery(event.target.value)} placeholder="Search university, city or program" aria-label="Search universities" /></label><div className="filter-row">{["All","USA","Canada","Australia","UK","Ireland"].map((country) => <Button key={country} variant={universityCountry === country ? "default" : "outline"} size="sm" onClick={() => setUniversityCountry(country)}>{country}</Button>)}</div></div>
        <div className="university-grid">{visibleUniversities.map((university) => <article className="university-card reveal" key={university[1]}><div className="university-top"><span className="uni-mark">{university[0]}</span><span className="verified"><Check /> Partner profile</span></div><h3>{university[1]}</h3><p><MapPin /> {university[3]}, {university[2]}</p><div className="uni-details"><span><small>Popular programs</small>{university[4]}</span><span><small>Indicative tuition</small>{university[5]}</span></div><Button variant="outline" className="card-button">View University <ArrowRight /></Button></article>)}</div>
        {visibleUniversities.length === 0 && <p className="empty-state">No universities match your current search.</p>}
        <p className="data-note">Program and tuition details are indicative and structured for future live-data connection.</p>
      </div></section>

      <section id="services" className="section services-section"><div className="container"><SectionHeading eyebrow="END-TO-END SUPPORT" title="Everything You Need. One Journey." />
        <div className="services-grid">{services.map((service, index) => <article className="service-card reveal" key={service[0]}><img loading="lazy" src={index % 2 === 0 ? serviceImage : aboutImage} alt="EDUNAVYX education guidance service" width={1200} height={900} /><div className="service-shade" /><span className="service-number">{service[0]}</span><Button size="icon" className="round-arrow" aria-label={`Learn about ${service[1]}`}><ArrowRight /></Button><div><h3>{service[1]}</h3><p>{service[2]}</p></div></article>)}</div>
      </div></section>

      <section className="section journey-section"><div className="container"><SectionHeading eyebrow="HOW IT WORKS" title="Your Journey. Simplified." center /><div className="journey-line">{[["01","Discover","Tell us about your goals."],["02","Shortlist","Find universities and courses that fit."],["03","Apply","Build a strong application."],["04","Secure","Navigate offers, scholarships and visas."],["05","Fly","Start your global education journey."]].map((step) => <div className="journey-step reveal" key={step[0]}><span>{step[0]}</span><div className="journey-dot" /><h3>{step[1]}</h3><p>{step[2]}</p></div>)}</div></div></section>

      <section className="section cta-wrap"><div className="container"><div className="premium-cta reveal"><div className="cta-copy"><span className="eyebrow">YOUR NEXT CHAPTER</span><h2>Your Dream University Could Be Closer Than You Think.</h2><p>Take the first step toward studying abroad with expert guidance from EDUNAVYX.</p><Button size="lg" asChild><a href="#contact">Book Your Free Consultation <ArrowRight /></a></Button></div><img loading="lazy" src={ctaImage} alt="Student looking toward her international education future" width={1400} height={900} /></div></div></section>

      <section id="stories" className="section testimonials-section"><div className="container"><div className="testimonial-head"><SectionHeading eyebrow="STUDENT VOICES" title="Dreams That Became Destinations" /><div className="carousel-controls"><Button variant="outline" size="icon" onClick={() => setTestimonial((testimonial + 2) % 3)} aria-label="Previous testimonial"><ChevronLeft /></Button><Button size="icon" onClick={() => setTestimonial((testimonial + 1) % 3)} aria-label="Next testimonial"><ChevronRight /></Button></div></div>
        <div className="testimonial-grid">{[["Aarav Sharma","MS Computer Science","University of Toronto · Canada","EDUNAVYX helped me shortlist the right universities and guided me through every stage. The process felt incredibly simple."],["Meera Iyer","MSc Business Analytics","University of Manchester · UK","They saw beyond my scores and helped me tell a clear, authentic story. I received an offer from my first-choice university."],["Rohan Patel","Master of Engineering","University of Melbourne · Australia","From documentation to my visa interview, I always knew the next step. That clarity made all the difference."]].map((story, index) => <article className={`testimonial-card reveal ${index === testimonial ? "testimonial-active" : ""}`} key={story[0]}><Quote /><div className="stars">★★★★★</div><blockquote>“{story[3]}”</blockquote><div className="student-profile"><img loading="lazy" src={successImage} alt={`${story[0]}, EDUNAVYX student`} width={1400} height={1000} /><div><strong>{story[0]}</strong><span>{story[1]}</span><small>{story[2]}</small></div></div></article>)}</div>
      </div></section>

      <section className="section story-gallery"><div className="container"><SectionHeading eyebrow="REAL OUTCOMES" title="From Ambition to Achievement" copy="The decisions, breakthroughs and destinations behind every offer letter." />
        <div className="story-grid">{[["Naina's London chapter","MA International Relations","London, UK"],["Kabir builds in Toronto","MEng Mechanical","Toronto, Canada"],["Anika finds her future","MSc Data Science","Melbourne, Australia"]].map((story, index) => <article className="story-card reveal" key={story[0]}><img loading="lazy" src={successImage} alt={`Successful EDUNAVYX student in ${story[2]}`} width={1400} height={1000} style={{ objectPosition: `${20 + index * 30}% center` }} /><div><span>{story[2]}</span><h3>{story[0]}</h3><p>{story[1]}</p><Button variant="link">Read Their Story <ArrowRight /></Button></div></article>)}</div>
      </div></section>

      <section id="resources" className="section resources-section"><div className="container"><SectionHeading eyebrow="KNOWLEDGE HUB" title="Stay Ahead of Your Study Abroad Journey" /><div className="resource-grid">{[[BookOpen,"Study Abroad Guides","Practical roadmaps for every major decision."],[Sparkles,"Scholarship Updates","New funding opportunities, clearly explained."],[Building2,"University Insights","Explore programs, campuses and outcomes."],[Plane,"Visa Updates","Timely guidance for a confident application."]].map(([Icon,title,copy]) => { const I = Icon as typeof BookOpen; return <article className="resource-card reveal" key={String(title)}><I /><h3>{String(title)}</h3><p>{String(copy)}</p><ArrowRight /></article>; })}</div></div></section>

      <section className="section faq-section"><div className="container faq-grid"><SectionHeading eyebrow="ANSWERS, CLEARLY" title="Frequently Asked Questions" copy="Everything you need to move forward with confidence." /><Accordion type="single" collapsible className="faq-list">{faqs.map((faq, index) => <AccordionItem value={`item-${index}`} key={faq[0]} className="faq-item"><AccordionTrigger>{faq[0]}</AccordionTrigger><AccordionContent>{faq[1]}</AccordionContent></AccordionItem>)}</Accordion></div></section>

      <section id="contact" className="section contact-section"><div className="container contact-grid"><div className="contact-image reveal"><img loading="lazy" src={serviceImage} alt="EDUNAVYX counsellor planning a student's global education journey" width={1200} height={900} /><div className="contact-badge"><Headphones /><strong>Free Consultation</strong><span>No obligation. Just expert guidance.</span></div></div>
        <div className="form-panel reveal">{submitted ? <div className="success-state"><span><Check /></span><h2>Your journey starts now.</h2><p>Thanks for reaching out. An EDUNAVYX counsellor will contact you shortly.</p><Button onClick={() => setSubmitted(false)}>Send another enquiry</Button></div> : <><span className="eyebrow">LET'S TALK</span><h2>Let's Plan Your Global Future</h2><p>Tell us a little about your plans and our counsellors will help you take the next step.</p><form onSubmit={handleSubmit} noValidate><div className="form-grid"><div><Label htmlFor="firstName">First Name *</Label><Input id="firstName" name="firstName" placeholder="Your first name" /></div><div><Label htmlFor="lastName">Last Name *</Label><Input id="lastName" name="lastName" placeholder="Your last name" /></div><div><Label htmlFor="email">Email Address *</Label><Input id="email" name="email" type="email" placeholder="you@email.com" /></div><div><Label htmlFor="mobile">Mobile Number *</Label><Input id="mobile" name="mobile" type="tel" placeholder="+91 98765 43210" /></div><div><Label htmlFor="destination">Preferred Destination</Label><select id="destination" name="destination"><option value="">Choose a country</option>{countries.map((country) => <option key={country.name}>{country.name}</option>)}</select></div><div><Label htmlFor="course">Preferred Course</Label><Input id="course" name="course" placeholder="e.g. Data Science" /></div><div><Label htmlFor="timeline">When do you plan to study?</Label><select id="timeline" name="timeline"><option>Within 6 months</option><option>6–12 months</option><option>12–18 months</option><option>Still exploring</option></select></div><div><Label htmlFor="intake">Preferred Intake / Year</Label><Input id="intake" name="intake" placeholder="e.g. Fall 2027" /></div></div><label className="consent"><Checkbox checked={agreed} onCheckedChange={(value) => setAgreed(value === true)} /> <span>I agree to receive calls, WhatsApp messages and emails from EDUNAVYX regarding my enquiry.</span></label>{formError && <p className="form-error" role="alert">{formError}</p>}<Button type="submit" size="lg">Get Free Consultation <ArrowRight /></Button></form></>}</div>
      </div></section>

      <section className="final-cta"><div className="container"><span className="eyebrow">READY WHEN YOU ARE</span><h2>One conversation can change your direction.</h2><Button size="lg" asChild><a href="#contact">Start Your Journey <ArrowRight /></a></Button></div></section>
    </main>

    <footer className="site-footer"><div className="container footer-grid"><div className="footer-brand"><Logo inverse /><p>Your trusted partner for global education.</p></div>{[["Explore","Countries","Universities","Courses","Scholarships"],["Services","Counselling","Applications","Visa Assistance","Interview Preparation"],["Company","About Us","Success Stories","Careers","Contact"],["Connect","Instagram","LinkedIn","YouTube","Facebook","X"]].map((column) => <div key={column[0]}><strong>{column[0]}</strong>{column.slice(1).map((item) => <a key={item} href={item === "Contact" ? "#contact" : "#top"}>{item}</a>)}</div>)}</div><div className="container footer-bottom"><span>© 2026 EDUNAVYX. All rights reserved.</span><div><a href="#top">Privacy Policy</a><a href="#top">Terms & Conditions</a><a href="#top">Cookie Policy</a></div></div></footer>

    <div className="floating-help">{chatOpen && <div className="help-popover"><Button variant="ghost" size="icon" onClick={() => setChatOpen(false)} aria-label="Close consultation help"><X /></Button><Headphones /><strong>Need help choosing your destination?</strong><p>Talk to an EDUNAVYX counsellor.</p><Button asChild><a href="#contact" onClick={() => setChatOpen(false)}>Book Free Consultation</a></Button></div>}<Button size="icon" className="help-button" onClick={() => setChatOpen(!chatOpen)} aria-label="Open consultation help"><Headphones /></Button></div>
    {scrolled && <Button variant="outline" size="icon" className="back-to-top" asChild><a href="#top" aria-label="Back to top"><ArrowUp /></a></Button>}
  </div>;
}