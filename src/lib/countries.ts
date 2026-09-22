import irelandMonument from "@/assets/destination-ireland.jpg";

export type Program = {
  name: string;
  level: string;
  duration: string;
  intake: string;
};

export type CountryUniversity = {
  name: string;
  city: string;
  focus: string;
  tuition: string;
  overview: string;
  programs: Program[];
};

export type Country = {
  slug: string;
  name: string;
  region: string;
  flag: string;
  blurb: string;
  courses: string;
  tuition: string;
  work: string;
  monument: string;
  monumentAlt: string;
  overview: string;
  whyStudy: string[];
  universities: CountryUniversity[];
};

export const countries: Country[] = [
  {
    slug: "usa",
    name: "USA",
    region: "Americas",
    flag: "🇺🇸",
    blurb: "World-class research, innovation and diverse career opportunities.",
    courses: "STEM · Business",
    tuition: "$25k–55k",
    work: "Up to 3 years",
    monument: "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?auto=format&fit=crop&w=1400&q=80",
    monumentAlt: "Statue of Liberty in New York Harbor",
    overview: "The United States remains a leading destination for ambitious students seeking research excellence, flexible degree structures and strong post-study career pathways across technology, business, health and the arts.",
    whyStudy: [
      "Globally ranked universities with unmatched research and campus resources.",
      "Optional Practical Training (OPT) pathways for eligible graduates.",
      "A wide range of scholarships, assistantships and industry internships.",
      "Diverse campuses and cities that support international student life.",
    ],
    universities: [
      {
        name: "Massachusetts Institute of Technology",
        city: "Cambridge",
        focus: "Technology · Engineering",
        tuition: "$58k–62k",
        overview: "A world leader in science, engineering and entrepreneurship, with a culture of invention and industry collaboration.",
        programs: [
          { name: "Computer Science", level: "MS", duration: "1–2 years", intake: "Fall" },
          { name: "Electrical Engineering", level: "MS", duration: "1–2 years", intake: "Fall" },
        ],
      },
      {
        name: "Harvard University",
        city: "Cambridge",
        focus: "Business · Law",
        tuition: "$55k–60k",
        overview: "An iconic institution known for academic depth, global networks and highly selective graduate programs.",
        programs: [
          { name: "Business Administration", level: "MBA", duration: "2 years", intake: "Fall" },
          { name: "Public Policy", level: "MPP", duration: "2 years", intake: "Fall" },
        ],
      },
      {
        name: "Stanford University",
        city: "Stanford",
        focus: "Computer Science · MBA",
        tuition: "$56k–64k",
        overview: "Located in the heart of Silicon Valley, Stanford connects academic excellence with startup and research ecosystems.",
        programs: [
          { name: "Computer Science", level: "MS", duration: "1–2 years", intake: "Fall" },
          { name: "Management Science", level: "MS", duration: "18 months", intake: "Fall" },
        ],
      },
    ],
  },
  {
    slug: "canada",
    name: "Canada",
    region: "Americas",
    flag: "🇨🇦",
    blurb: "Welcoming campuses and exceptional post-study opportunities.",
    courses: "AI · Engineering",
    tuition: "C$20k–45k",
    work: "Up to 3 years",
    monument: "https://images.unsplash.com/photo-1517935706615-2717063c2225?auto=format&fit=crop&w=1400&q=80",
    monumentAlt: "Toronto skyline with the CN Tower",
    overview: "Canada offers high-quality education, a welcoming student environment and some of the most attractive post-study work and immigration pathways for international graduates.",
    whyStudy: [
      "Post-Graduation Work Permit options of up to three years for eligible programs.",
      "Strong public universities with competitive tuition compared with the US.",
      "Safe, multicultural cities with established Indian and international communities.",
      "Clear study-to-work routes in technology, engineering, healthcare and business.",
    ],
    universities: [
      {
        name: "University of Toronto",
        city: "Toronto",
        focus: "AI · Life Sciences",
        tuition: "C$45k–62k",
        overview: "Canada’s flagship research university, with exceptional strength in computer science, medicine and business.",
        programs: [
          { name: "Applied Computing", level: "MScAC", duration: "16 months", intake: "Fall" },
          { name: "Management", level: "MMA", duration: "1 year", intake: "Fall" },
        ],
      },
      {
        name: "University of British Columbia",
        city: "Vancouver",
        focus: "Engineering · Arts",
        tuition: "C$42k–58k",
        overview: "A globally ranked campus on the Pacific coast, known for sustainability, research and quality of life.",
        programs: [
          { name: "Electrical & Computer Engineering", level: "MEng", duration: "12–16 months", intake: "Fall / Jan" },
          { name: "Business Analytics", level: "MBAN", duration: "12 months", intake: "August" },
        ],
      },
    ],
  },
  {
    slug: "australia",
    name: "Australia",
    region: "Oceania",
    flag: "🇦🇺",
    blurb: "Globally ranked universities and an enviable student lifestyle.",
    courses: "Health · Data",
    tuition: "A$25k–50k",
    work: "2–4 years",
    monument: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=1400&q=80",
    monumentAlt: "Sydney Harbour and Opera House",
    overview: "Australia combines globally ranked universities with a high quality of life, strong research culture and generous post-study work rights for eligible graduates.",
    whyStudy: [
      "Group of Eight universities with internationally recognized degrees.",
      "Post-study work visas of two to four years, depending on qualification and location.",
      "World-class programs in health, data, engineering and business.",
      "Vibrant student cities with part-time work options during study.",
    ],
    universities: [
      {
        name: "University of Melbourne",
        city: "Melbourne",
        focus: "Medicine · Business",
        tuition: "A$38k–52k",
        overview: "Australia’s leading comprehensive university, with a graduate-school model and strong global rankings.",
        programs: [
          { name: "Information Technology", level: "MIT", duration: "2 years", intake: "Feb / Jul" },
          { name: "Management", level: "MMgt", duration: "18 months", intake: "Feb / Jul" },
        ],
      },
      {
        name: "University of Sydney",
        city: "Sydney",
        focus: "Architecture · Law",
        tuition: "A$42k–56k",
        overview: "A historic sandstone university in Australia’s global city, with broad research and professional programs.",
        programs: [
          { name: "Data Science", level: "MSc", duration: "1.5–2 years", intake: "Feb / Aug" },
          { name: "Engineering", level: "MPE", duration: "2 years", intake: "Feb / Aug" },
        ],
      },
    ],
  },
  {
    slug: "united-kingdom",
    name: "United Kingdom",
    region: "Europe",
    flag: "🇬🇧",
    blurb: "Iconic institutions and focused, career-ready degrees.",
    courses: "Finance · Law",
    tuition: "£18k–40k",
    work: "2 years",
    monument: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1400&q=80",
    monumentAlt: "Big Ben and the Houses of Parliament in London",
    overview: "The UK is known for intensive, high-quality degrees, historic universities and a Graduate Route that lets eligible students work after completing their studies.",
    whyStudy: [
      "One-year master’s programs that save time and living costs.",
      "A two-year Graduate Route for eligible international graduates.",
      "World-leading universities in London, Manchester, Edinburgh and beyond.",
      "Strong industry links in finance, law, design, health and technology.",
    ],
    universities: [
      {
        name: "University of Manchester",
        city: "Manchester",
        focus: "Engineering · Business",
        tuition: "£25k–38k",
        overview: "A major research university in a dynamic northern city, with strengths in science, engineering and business.",
        programs: [
          { name: "Advanced Computer Science", level: "MSc", duration: "1 year", intake: "September" },
          { name: "Business Analytics", level: "MSc", duration: "1 year", intake: "September" },
        ],
      },
      {
        name: "University of Edinburgh",
        city: "Edinburgh",
        focus: "Data Science · Arts",
        tuition: "£26k–40k",
        overview: "A historic capital-city university with global standing in informatics, medicine and the humanities.",
        programs: [
          { name: "Data Science", level: "MSc", duration: "1 year", intake: "September" },
          { name: "Finance", level: "MSc", duration: "1 year", intake: "September" },
        ],
      },
    ],
  },
  {
    slug: "new-zealand",
    name: "New Zealand",
    region: "Oceania",
    flag: "🇳🇿",
    blurb: "Future-focused learning in a safe, spectacular setting.",
    courses: "AgriTech · IT",
    tuition: "NZ$22k–38k",
    work: "Up to 3 years",
    monument: "https://images.unsplash.com/photo-1469521669194-babb45599def?auto=format&fit=crop&w=1400&q=80",
    monumentAlt: "New Zealand mountains reflected in a lake",
    overview: "New Zealand offers a safe, high-quality education system, stunning natural surroundings and practical post-study work options for international graduates.",
    whyStudy: [
      "Eight quality-assured universities with globally recognized qualifications.",
      "Post-study work visas of up to three years for eligible graduates.",
      "A welcoming, English-speaking environment with a strong quality of life.",
      "Growing strengths in IT, agritech, environmental science and tourism.",
    ],
    universities: [
      {
        name: "University of Auckland",
        city: "Auckland",
        focus: "Business · Engineering",
        tuition: "NZ$35k–48k",
        overview: "New Zealand’s highest-ranked university, located in the country’s largest and most international city.",
        programs: [
          { name: "Information Technology", level: "MProfStuds", duration: "1–1.5 years", intake: "Feb / Jul" },
          { name: "Engineering", level: "ME", duration: "1 year", intake: "Feb / Jul" },
        ],
      },
    ],
  },
  {
    slug: "ireland",
    name: "Ireland",
    region: "Europe",
    flag: "🇮🇪",
    blurb: "A thriving European hub for technology and business.",
    courses: "Tech · Pharma",
    tuition: "€14k–30k",
    work: "Up to 2 years",
    monument: irelandMonument,
    monumentAlt: "Coastal cliffs of Ireland",
    overview: "Ireland is an English-speaking EU destination with a booming technology and pharmaceutical sector, making it a strong choice for career-focused international students.",
    whyStudy: [
      "English-taught degrees inside the European Union.",
      "Stay Back options of up to two years for eligible master’s graduates.",
      "Home to major global employers in technology, finance and life sciences.",
      "Compact, student-friendly cities with a strong cultural identity.",
    ],
    universities: [
      {
        name: "Trinity College Dublin",
        city: "Dublin",
        focus: "Computing · Business",
        tuition: "€20k–35k",
        overview: "Ireland’s most historic university, combining academic prestige with a central Dublin campus.",
        programs: [
          { name: "Computer Science", level: "MSc", duration: "1 year", intake: "September" },
          { name: "Business Analytics", level: "MSc", duration: "1 year", intake: "September" },
        ],
      },
    ],
  },
  {
    slug: "germany",
    name: "Germany",
    region: "Europe",
    flag: "🇩🇪",
    blurb: "Rigorous academics, innovation and outstanding value.",
    courses: "Engineering · Auto",
    tuition: "€0–20k",
    work: "18 months",
    monument: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=1400&q=80",
    monumentAlt: "Brandenburg Gate in Berlin",
    overview: "Germany is known for research-led universities, low or no tuition at many public institutions, and a powerful engineering and manufacturing economy.",
    whyStudy: [
      "Low tuition at many public universities, even for international students.",
      "An 18-month job-seeker visa after graduation for eligible students.",
      "World-class engineering, automotive, computer science and applied sciences.",
      "A growing number of English-taught master’s programs.",
    ],
    universities: [
      {
        name: "Technical University of Munich",
        city: "Munich",
        focus: "Engineering · Computer Science",
        tuition: "€0–6k",
        overview: "Germany’s leading technical university, closely connected to industry and research institutes.",
        programs: [
          { name: "Informatics", level: "MSc", duration: "2 years", intake: "Winter / Summer" },
          { name: "Mechanical Engineering", level: "MSc", duration: "2 years", intake: "Winter" },
        ],
      },
    ],
  },
  {
    slug: "france",
    name: "France",
    region: "Europe",
    flag: "🇫🇷",
    blurb: "Creative culture, renowned schools and global business links.",
    courses: "Luxury · Business",
    tuition: "€10k–30k",
    work: "Up to 2 years",
    monument: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1400&q=80",
    monumentAlt: "Eiffel Tower in Paris",
    overview: "France offers prestigious business schools, public universities and a rich cultural experience, with growing English-taught options in management, luxury and technology.",
    whyStudy: [
      "Globally recognized grandes écoles and public universities.",
      "Competitive tuition and scholarships for international talent.",
      "Strength in luxury, business, hospitality, design and engineering.",
      "Post-study work options for eligible master’s graduates.",
    ],
    universities: [
      {
        name: "HEC Paris",
        city: "Paris",
        focus: "Business · Luxury",
        tuition: "€25k–50k",
        overview: "One of Europe’s most selective business schools, with exceptional corporate and alumni networks.",
        programs: [
          { name: "International Finance", level: "MSc", duration: "1 year", intake: "September" },
          { name: "Management", level: "MSc", duration: "1–2 years", intake: "September" },
        ],
      },
    ],
  },
  {
    slug: "netherlands",
    name: "Netherlands",
    region: "Europe",
    flag: "🇳🇱",
    blurb: "English-taught programs with an entrepreneurial outlook.",
    courses: "Design · Science",
    tuition: "€12k–25k",
    work: "1 year",
    monument: "https://images.unsplash.com/photo-1534351590666-13e3e96b5017?auto=format&fit=crop&w=1400&q=80",
    monumentAlt: "Amsterdam canal houses",
    overview: "The Netherlands is a compact, English-friendly destination known for innovative teaching, design thinking and a strong international student community.",
    whyStudy: [
      "One of the largest selections of English-taught degrees in continental Europe.",
      "A one-year orientation year visa for eligible graduates seeking work.",
      "Practical, project-based learning with close industry links.",
      "High quality of life in well-connected, bike-friendly cities.",
    ],
    universities: [
      {
        name: "Delft University of Technology",
        city: "Delft",
        focus: "Design · Engineering",
        tuition: "€18k–22k",
        overview: "A leading technical university recognized for architecture, engineering and industrial design.",
        programs: [
          { name: "Computer Science", level: "MSc", duration: "2 years", intake: "September" },
          { name: "Architecture", level: "MSc", duration: "2 years", intake: "September" },
        ],
      },
    ],
  },
  {
    slug: "singapore",
    name: "Singapore",
    region: "Asia",
    flag: "🇸🇬",
    blurb: "Asia's dynamic gateway for technology and finance.",
    courses: "Finance · Computing",
    tuition: "S$20k–50k",
    work: "Varies",
    monument: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=1400&q=80",
    monumentAlt: "Marina Bay Sands skyline in Singapore",
    overview: "Singapore is a compact global hub for finance, technology and research, offering world-ranked universities and a strategic base for careers across Asia.",
    whyStudy: [
      "Two of Asia’s highest-ranked universities in a safe, English-speaking city.",
      "A strategic location for internships and careers across the region.",
      "Excellence in computing, finance, engineering and public policy.",
      "A highly organized student experience with strong campus facilities.",
    ],
    universities: [
      {
        name: "National University of Singapore",
        city: "Singapore",
        focus: "Computing · Business",
        tuition: "S$35k–50k",
        overview: "Asia’s leading comprehensive university, with exceptional research output and global partnerships.",
        programs: [
          { name: "Computing", level: "MComp", duration: "1.5–2 years", intake: "August" },
          { name: "Business Analytics", level: "MSBA", duration: "1 year", intake: "August" },
        ],
      },
    ],
  },
];

export function getCountry(slug: string) {
  return countries.find((country) => country.slug === slug);
}
