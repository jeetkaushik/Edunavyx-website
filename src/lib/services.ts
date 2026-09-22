import universityShortlistingImg from "@/assets/service-university-shortlisting.jpg";

export type Service = {
  number: string;
  slug: string;
  title: string;
  headline: string;
  cardPreview: string;
  description: string;
  summary: string;
  introduction: string;
  image: string;
  imageAlt: string;
  includes: string[];
  process: { title: string; copy: string }[];
  outcomes: string[];
};

export const services: Service[] = [
  {
    number: "01",
    slug: "career-course-selection",
    title: "Career & Course Selection",
    headline: "Clarity begins with the right direction.",
    cardPreview:
      "Identify career pathways and course options aligned with your strengths, interests, and future industry opportunities.",
    description:
      "We help students identify career and course pathways by bringing together their interests, strengths, aptitude and aspirations. Our guidance also considers evolving industries and future opportunities, helping students make informed academic choices aligned with their potential and goals.",
    summary:
      "We help students identify career and course pathways by bringing together their interests, strengths, aptitude and aspirations. Our guidance also considers evolving industries and future opportunities, helping students make informed academic choices aligned with their potential and goals.",
    introduction:
      "We help students identify career and course pathways by bringing together their interests, strengths, aptitude and aspirations. Our guidance also considers evolving industries and future opportunities, helping students make informed academic choices aligned with their potential and goals.",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1400&q=80",
    imageAlt: "Counsellor guiding a student on career and course pathways",
    includes: [
      "Aptitude, interest and personality evaluation",
      "Emerging industry and future careers mapping",
      "Course curriculum and specialization comparison",
      "Long-term academic and career roadmap",
    ],
    process: [
      { title: "Discover", copy: "We explore your interests, strengths, academic background and aspirations." },
      { title: "Evaluate", copy: "We assess viable pathways against industry trends and future opportunities." },
      { title: "Plan", copy: "You receive a clear, personalized roadmap matching your goals and potential." },
    ],
    outcomes: [
      "Clear direction on suitable degree courses and specializations",
      "Understanding of future industry demands and career prospects",
      "Confidence in making informed academic decisions",
    ],
  },
  {
    number: "02",
    slug: "profile-building",
    title: "Profile Building",
    headline: "Build a profile that reflects who you are.",
    cardPreview:
      "Develop an authentic profile through impactful academic projects, competitions, leadership roles, and community initiatives.",
    description:
      "We help students develop authentic profiles through meaningful projects, competitions, internships, certifications, leadership initiatives and community engagement. Profile-building strategies are aligned with the student's intended course, university and long-term goals, with an emphasis on genuine engagement and personal growth.",
    summary:
      "We help students develop authentic profiles through meaningful projects, competitions, internships, certifications, leadership initiatives and community engagement. Profile-building strategies are aligned with the student's intended course, university and long-term goals, with an emphasis on genuine engagement and personal growth.",
    introduction:
      "We help students develop authentic profiles through meaningful projects, competitions, internships, certifications, leadership initiatives and community engagement. Profile-building strategies are aligned with the student's intended course, university and long-term goals, with an emphasis on genuine engagement and personal growth.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1400&q=80",
    imageAlt: "Students collaborating on impactful academic projects and leadership initiatives",
    includes: [
      "Extracurricular and leadership strategy",
      "Internship, research and project curation",
      "Competitions and academic olympiads roadmap",
      "Social impact and community engagement initiatives",
    ],
    process: [
      { title: "Assess", copy: "We identify your existing profile strengths and discover areas for meaningful growth." },
      { title: "Curate", copy: "We recommend targeted projects, internships and initiatives aligned with your chosen field." },
      { title: "Execute", copy: "We provide ongoing mentorship to help you build authentic, standout experiences." },
    ],
    outcomes: [
      "A distinctive, authentic profile tailored to selective universities",
      "Demonstrated leadership, initiative and subject curiosity",
      "Meaningful stories and evidence for applications and interviews",
    ],
  },
  {
    number: "03",
    slug: "university-shortlisting",
    title: "University Shortlisting",
    headline: "The right university is the right fit — not simply the highest ranked.",
    cardPreview:
      "Build a balanced, strategic shortlist of reach, target, and safe universities tailored to your profile and budget.",
    description:
      "We develop personalised university shortlists based on the student's academic profile, career goals, course preferences, destination and budget. University reputation, scholarships, industry exposure and overall fit are also considered to create a balanced and informed shortlist.",
    summary:
      "We develop personalised university shortlists based on the student's academic profile, career goals, course preferences, destination and budget. University reputation, scholarships, industry exposure and overall fit are also considered to create a balanced and informed shortlist.",
    introduction:
      "We develop personalised university shortlists based on the student's academic profile, career goals, course preferences, destination and budget. University reputation, scholarships, industry exposure and overall fit are also considered to create a balanced and informed shortlist.",
    image: universityShortlistingImg,
    imageAlt: "Historic and modern university campus buildings representing global institutions",
    includes: [
      "Balanced shortlist: Dream, Reach and Safe options",
      "Course curriculum, faculty and pedagogy assessment",
      "Location, campus culture and industry connection review",
      "Financial viability, tuition fees and living cost comparison",
    ],
    process: [
      { title: "Define", copy: "We establish your academic, career, geographic and financial priorities." },
      { title: "Compare", copy: "We evaluate universities across rankings, course fit, placement records and costs." },
      { title: "Shortlist", copy: "You receive a structured, balanced list of institutions with clear rationale." },
    ],
    outcomes: [
      "A well-calibrated, strategic university shortlist",
      "Maximized admission probability across selective institutions",
      "Clarity on deadlines, prerequisites and portfolio requirements",
    ],
  },
  {
    number: "04",
    slug: "applications-admissions",
    title: "Applications & Admissions",
    headline: "A strong application brings your story to life.",
    cardPreview:
      "Navigate application portals, verify prerequisites, and submit polished, deadline-compliant applications.",
    description:
      "We support students throughout the application process, from understanding eligibility and admission requirements to preparing and submitting applications. Our structured approach helps ensure that every stage is planned carefully for a smooth and well-organised admissions journey.",
    summary:
      "We support students throughout the application process, from understanding eligibility and admission requirements to preparing and submitting applications. Our structured approach helps ensure that every stage is planned carefully for a smooth and well-organised admissions journey.",
    introduction:
      "We support students throughout the application process, from understanding eligibility and admission requirements to preparing and submitting applications. Our structured approach helps ensure that every stage is planned carefully for a smooth and well-organised admissions journey.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1400&q=80",
    imageAlt: "Student completing an international university admission application online",
    includes: [
      "Application portal management (Common App, UCAS, Direct portals)",
      "Eligibility verification and document checklists",
      "Detailed application review and quality control",
      "Offer acceptance and deposit guidance",
    ],
    process: [
      { title: "Organise", copy: "We map all university intake deadlines and application requirements into a unified tracker." },
      { title: "Review", copy: "Every section of each application is rigorously vetted for accuracy and impact." },
      { title: "Submit", copy: "We oversee submissions ahead of deadlines and monitor application status." },
    ],
    outcomes: [
      "Error-free, thoroughly reviewed university submissions",
      "Smooth management of multiple university portals and deadlines",
      "Early submissions for optimal consideration and scholarship eligibility",
    ],
  },
  {
    number: "05",
    slug: "sop-lor-cv-guidance",
    title: "SOP, LOR & CV Guidance",
    headline: "Present your journey with authenticity and impact.",
    cardPreview:
      "Craft compelling Statements of Purpose, structured letters of recommendation, and academic CVs that stand out.",
    description:
      "We help students present their academic experiences, achievements, aspirations and personality through well-structured SOPs, LORs and CVs. Our guidance focuses on communicating each student's individual story clearly, authentically and effectively.",
    summary:
      "We help students present their academic experiences, achievements, aspirations and personality through well-structured SOPs, LORs and CVs. Our guidance focuses on communicating each student's individual story clearly, authentically and effectively.",
    introduction:
      "We help students present their academic experiences, achievements, aspirations and personality through well-structured SOPs, LORs and CVs. Our guidance focuses on communicating each student's individual story clearly, authentically and effectively.",
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1400&q=80",
    imageAlt: "Student writing a statement of purpose with editorial guidance",
    includes: [
      "Statement of Purpose (SOP) brainstorming and structural editing",
      "Letter of Recommendation (LOR) strategy and referee guidance",
      "Academic & extracurricular CV / resume formatting",
      "Supplemental essay strategy for selective universities",
    ],
    process: [
      { title: "Brainstorm", copy: "We unearth your defining personal experiences, motivations and academic milestones." },
      { title: "Draft", copy: "You develop structured drafts guided by university-specific prompts and frameworks." },
      { title: "Refine", copy: "Multiple rounds of thoughtful editorial feedback polish your voice and narrative clarity." },
    ],
    outcomes: [
      "Compelling, authentic essays that stand out to admissions committees",
      "Strategically complementary recommendation letters",
      "A polished academic CV highlighting relevant achievements",
    ],
  },
  {
    number: "06",
    slug: "scholarships-financial-guidance",
    title: "Scholarships & Financial Guidance",
    headline: "Make informed decisions about your investment in education.",
    cardPreview:
      "Identify merit and need-based scholarships, understand total costs, and plan your study investment with clarity.",
    description:
      "We help students and families identify relevant scholarship opportunities while understanding tuition fees, living costs and other financial considerations. This enables families to evaluate available options and plan their education investment with greater clarity.",
    summary:
      "We help students and families identify relevant scholarship opportunities while understanding tuition fees, living costs and other financial considerations. This enables families to evaluate available options and plan their education investment with greater clarity.",
    introduction:
      "We help students and families identify relevant scholarship opportunities while understanding tuition fees, living costs and other financial considerations. This enables families to evaluate available options and plan their education investment with greater clarity.",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1400&q=80",
    imageAlt: "Financial planning and scholarship application documents",
    includes: [
      "Merit-based and need-based scholarship identification",
      "Total cost-of-study projections (tuition, housing, health cover, living)",
      "Scholarship essay and financial aid application guidance",
      "Budget optimization and return-on-investment evaluation",
    ],
    process: [
      { title: "Calculate", copy: "We map comprehensive, transparent costs across each shortlisted destination." },
      { title: "Match", copy: "We identify applicable institutional, government and private scholarships." },
      { title: "Apply", copy: "We support competitive scholarship applications and financial documentation." },
    ],
    outcomes: [
      "Access to relevant merit-based funding opportunities",
      "Transparent, predictable budget planning for families",
      "Reduced overall cost of international education",
    ],
  },
  {
    number: "07",
    slug: "education-loan-insurance-forex",
    title: "Education Loan, Insurance & Forex Assistance",
    headline: "Plan your education investment with clarity and confidence.",
    cardPreview:
      "Access verified student loan options, required health insurance, and secure foreign exchange solutions.",
    description:
      "We connect students and families with relevant education loan providers, insurance partners and forex service providers to support the financial aspects of studying abroad. Guidance covers eligibility, documentation, loan options, insurance requirements and foreign exchange solutions to help families make informed decisions.",
    summary:
      "We connect students and families with relevant education loan providers, insurance partners and forex service providers to support the financial aspects of studying abroad. Guidance covers eligibility, documentation, loan options, insurance requirements and foreign exchange solutions to help families make informed decisions.",
    introduction:
      "We connect students and families with relevant education loan providers, insurance partners and forex service providers to support the financial aspects of studying abroad. Guidance covers eligibility, documentation, loan options, insurance requirements and foreign exchange solutions to help families make informed decisions.",
    image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1400&q=80",
    imageAlt: "Education loan consultation and financial service planning",
    includes: [
      "Secured and unsecured education loan comparison",
      "Mandatory student health and travel insurance coverage",
      "Competitive foreign exchange and international fee transfers",
      "Financial documentation verification for visa compliance",
    ],
    process: [
      { title: "Assess", copy: "We review your funding needs, collateral options and documentation readiness." },
      { title: "Connect", copy: "We connect you with trusted banking partners and authorized forex providers." },
      { title: "Disburse", copy: "We assist through sanction, compliance checks and timely fee disbursement." },
    ],
    outcomes: [
      "Timely loan sanctions with competitive interest rates",
      "Comprehensive insurance meeting destination immigration requirements",
      "Seamless, secure foreign currency remittance",
    ],
  },
  {
    number: "08",
    slug: "visa-immigration-assistance",
    title: "Visa & Immigration Assistance",
    headline: "Navigate your visa journey with confidence.",
    cardPreview:
      "Prepare compliant documentation, schedule biometrics, and build interview confidence with mock rehearsals.",
    description:
      "We support students throughout the visa process, from documentation and application preparation to interview readiness. Our team helps ensure that each stage is approached with accuracy, care and attention to detail.",
    summary:
      "We support students throughout the visa process, from documentation and application preparation to interview readiness. Our team helps ensure that each stage is approached with accuracy, care and attention to detail.",
    introduction:
      "We support students throughout the visa process, from documentation and application preparation to interview readiness. Our team helps ensure that each stage is approached with accuracy, care and attention to detail.",
    image: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=1400&q=80",
    imageAlt: "Passport, visa application papers and international travel documents",
    includes: [
      "Country-specific visa checklists and financial proof review",
      "Visa form filing and biometric appointment scheduling",
      "One-on-one mock visa interviews with personalized feedback",
      "Compliance and immigration policy adherence check",
    ],
    process: [
      { title: "Assemble", copy: "We compile all academic, financial and sponsor records into a compliant file." },
      { title: "File", copy: "We assist in submitting accurate visa applications to official embassies or high commissions." },
      { title: "Prepare", copy: "We conduct realistic mock interviews to build readiness, clarity and confidence." },
    ],
    outcomes: [
      "Meticulously organized, compliant visa documentation",
      "High visa confidence through realistic interview rehearsals",
      "Timely visa approvals without preventable delays",
    ],
  },
  {
    number: "09",
    slug: "pre-departure-accommodation-support",
    title: "Pre-Departure & Accommodation Support",
    headline: "Be prepared for life beyond the classroom.",
    cardPreview:
      "Shortlist safe housing, organize travel logistics, and receive comprehensive briefings for a seamless transition.",
    description:
      "We support students with essential pre-departure requirements, including accommodation, travel and documentation. This helps students prepare practically for their transition into a new academic and cultural environment.",
    summary:
      "We support students with essential pre-departure requirements, including accommodation, travel and documentation. This helps students prepare practically for their transition into a new academic and cultural environment.",
    introduction:
      "We support students with essential pre-departure requirements, including accommodation, travel and documentation. This helps students prepare practically for their transition into a new academic and cultural environment.",
    image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=1400&q=80",
    imageAlt: "Comfortable student accommodation and university dormitory room",
    includes: [
      "On-campus and verified off-campus accommodation shortlisting",
      "Flight bookings, baggage allowances and transit guidance",
      "Pre-departure briefing on campus culture, banking and local transit",
      "Connect with fellow students travelling to the same destination",
    ],
    process: [
      { title: "Locate", copy: "We help you compare secure, budget-friendly student housing near campus." },
      { title: "Brief", copy: "We host comprehensive pre-departure briefings covering academic and daily life." },
      { title: "Transition", copy: "We ensure you have essential contacts, SIM cards, currency and airport pickup arrangements." },
    ],
    outcomes: [
      "Safe, confirmed student housing before arrival",
      "Smooth airport transit, arrival logistics and initial settlement",
      "Peace of mind for families knowing the student is well-prepared",
    ],
  },
  {
    number: "10",
    slug: "post-study-guidance",
    title: "Post-Study Guidance",
    headline: "Think beyond graduation.",
    cardPreview:
      "Understand post-study work visa rights, emerging career sectors, and long-term global employment pathways.",
    description:
      "We help students understand potential post-study work opportunities, career pathways and relevant visa considerations. This longer-term perspective enables students to consider how their education choices may support their future goals beyond graduation.",
    summary:
      "We help students understand potential post-study work opportunities, career pathways and relevant visa considerations. This longer-term perspective enables students to consider how their education choices may support their future goals beyond graduation.",
    introduction:
      "We help students understand potential post-study work opportunities, career pathways and relevant visa considerations. This longer-term perspective enables students to consider how their education choices may support their future goals beyond graduation.",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1400&q=80",
    imageAlt: "Young graduate professional walking confidently into an international corporate office",
    includes: [
      "Post-Study Work Visa (PSWV / OPT) regulations by country",
      "High-demand career sectors and industry employability trends",
      "Professional networking and alumni network connection advice",
      "Long-term career transition and global mobility planning",
    ],
    process: [
      { title: "Analyze", copy: "We review post-study work visa rights and employability outlook in your field." },
      { title: "Align", copy: "We help align elective courses and internships during study to maximize employability." },
      { title: "Advance", copy: "We guide your transition into global graduate roles and career pathways." },
    ],
    outcomes: [
      "Strategic understanding of post-study work rights and pathways",
      "Better career readiness and alignment with international employers",
      "A clear long-term perspective from day one of university",
    ],
  },
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}