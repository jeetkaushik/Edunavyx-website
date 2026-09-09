export type Service = {
  number: string;
  slug: string;
  title: string;
  summary: string;
  introduction: string;
  includes: string[];
  process: { title: string; copy: string }[];
  outcomes: string[];
};

export const services: Service[] = [
  {
    number: "01",
    slug: "study-abroad-consultation",
    title: "Study Abroad Consultation",
    summary: "Personal guidance based on your academic profile and career goals.",
    introduction: "Your first conversation with EDUNAVYX turns broad ambitions into a practical study-abroad plan. We look at your academic background, interests, budget and long-term career goals before recommending a direction.",
    includes: ["One-to-one profile evaluation", "Destination and intake guidance", "Career and course alignment", "Budget and timeline planning"],
    process: [
      { title: "Understand", copy: "We discuss your education, experience, interests and priorities." },
      { title: "Evaluate", copy: "Our counsellor assesses realistic opportunities and potential gaps." },
      { title: "Plan", copy: "You receive a clear roadmap with destinations, courses and next actions." },
    ],
    outcomes: ["A focused international education strategy", "Clarity on suitable countries and intakes", "A realistic preparation timeline"],
  },
  {
    number: "02",
    slug: "university-course-selection",
    title: "University & Course Selection",
    summary: "Find the university and program that match your ambitions.",
    introduction: "The right choice goes beyond rankings. We compare curriculum, entry requirements, location, costs, graduate outcomes and career relevance to build a shortlist that fits you.",
    includes: ["Course and specialization research", "University comparison", "Entry requirement review", "Balanced application shortlist"],
    process: [
      { title: "Define", copy: "We establish the academic, career and lifestyle criteria that matter most." },
      { title: "Compare", copy: "We assess universities and programs using relevant, practical factors." },
      { title: "Shortlist", copy: "You receive ambitious, target and secure options with clear reasoning." },
    ],
    outcomes: ["A balanced university shortlist", "Better alignment with career goals", "Confident, evidence-led decisions"],
  },
  {
    number: "03",
    slug: "application-assistance",
    title: "Application Assistance",
    summary: "Support with applications, SOPs, LORs and documentation.",
    introduction: "We help you present your strongest, most authentic application. From document planning to final submission, every detail is reviewed for clarity, consistency and university requirements.",
    includes: ["Application form support", "SOP and personal statement guidance", "LOR planning", "Document and deadline tracking"],
    process: [
      { title: "Prepare", copy: "We create a checklist for every university and application deadline." },
      { title: "Strengthen", copy: "Your story and supporting documents are refined with expert feedback." },
      { title: "Submit", copy: "We complete final checks and help you submit accurate applications on time." },
    ],
    outcomes: ["Complete and consistent applications", "A clear, authentic personal narrative", "Fewer avoidable delays or errors"],
  },
  {
    number: "04",
    slug: "scholarship-finance",
    title: "Scholarship & Finance",
    summary: "Discover scholarships and make your study plan financially sound.",
    introduction: "A strong financial plan makes your overseas education sustainable. We identify suitable scholarships, explain total costs and help you prepare a realistic funding strategy.",
    includes: ["Scholarship matching", "Eligibility and deadline review", "Cost-of-study planning", "Funding document guidance"],
    process: [
      { title: "Estimate", copy: "We map tuition, living costs, insurance, travel and other expenses." },
      { title: "Discover", copy: "We identify relevant university and external funding opportunities." },
      { title: "Prepare", copy: "We guide scholarship submissions and organize financial documentation." },
    ],
    outcomes: ["A transparent total-cost estimate", "Relevant scholarship opportunities", "A stronger financial readiness plan"],
  },
  {
    number: "05",
    slug: "visa-accommodation",
    title: "Visa & Accommodation",
    summary: "Guidance through visa documentation and finding your new home.",
    introduction: "Once your offer arrives, we guide the transition from applicant to international student. Our team supports your visa preparation and helps you compare safe, practical accommodation options.",
    includes: ["Visa checklist and document review", "Application guidance", "Accommodation comparison", "Pre-departure preparation"],
    process: [
      { title: "Organize", copy: "We prepare a destination-specific visa and compliance checklist." },
      { title: "Review", copy: "Documents are checked for completeness before submission." },
      { title: "Settle", copy: "We help compare accommodation and prepare you for arrival." },
    ],
    outcomes: ["Organized visa documentation", "Greater confidence before submission", "A smoother move to your study destination"],
  },
  {
    number: "06",
    slug: "interview-preparation",
    title: "Interview Preparation",
    summary: "Prepare confidently for university and visa interviews.",
    introduction: "Focused practice helps you communicate clearly under pressure. We prepare you for likely questions, strengthen your answers and give practical feedback through realistic mock interviews.",
    includes: ["University interview preparation", "Visa interview preparation", "Personalized mock sessions", "Answer and presentation feedback"],
    process: [
      { title: "Prepare", copy: "We cover likely questions and help structure clear, honest responses." },
      { title: "Practice", copy: "A realistic mock interview builds familiarity and confidence." },
      { title: "Improve", copy: "You receive focused feedback on content, clarity and delivery." },
    ],
    outcomes: ["Clearer and more confident answers", "Better understanding of interview expectations", "Practical strategies for managing nerves"],
  },
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}