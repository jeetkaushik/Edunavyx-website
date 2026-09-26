import irelandMonument from "@/assets/destination-ireland.jpg";

export type DestinationHighlight = {
  title: string;
  description: string;
};

export type Destination = {
  slug: string;
  name: string;
  title: string;
  region: string;
  flag: string;
  blurb: string;
  monument: string;
  monumentAlt: string;
  intro: string;
  institutionsLead: string;
  institutionsText: string;
  institutions: string[];
  highlights: DestinationHighlight[];
  // Compatibility fields for homepage slider
  courses?: string;
  tuition?: string;
  work?: string;
  overview?: string;
  whyStudy?: string[];
};

export const destinationData: Record<string, Destination> = {
  canada: {
    slug: "canada",
    name: "Canada",
    title: "Study in Canada",
    region: "Americas",
    flag: "🇨🇦",
    blurb: "High-quality education, practical learning, and strong opportunities for academic and professional growth.",
    monument: "https://images.unsplash.com/photo-1517935706615-2717063c2225?auto=format&fit=crop&w=1400&q=80",
    monumentAlt: "Toronto skyline with the CN Tower",
    intro:
      "Home to globally recognised universities and institutions, Canada offers high-quality education, practical learning, a multicultural environment and strong opportunities for academic and professional growth.",
    institutionsLead: "Some well-known universities include:",
    institutionsText:
      "University of Toronto, McGill University, University of British Columbia, University of Alberta, University of Waterloo, Western University, Queen’s University, McMaster University and University of Ottawa.",
    institutions: [
      "University of Toronto",
      "McGill University",
      "University of British Columbia",
      "University of Alberta",
      "University of Waterloo",
      "Western University",
      "Queen’s University",
      "McMaster University",
      "University of Ottawa",
    ],
    highlights: [
      {
        title: "Globally Recognised Education",
        description: "Choose from a wide range of undergraduate and postgraduate programmes.",
      },
      {
        title: "Career-Focused Learning",
        description: "Benefit from co-op programmes, internships, industry projects and experiential learning.",
      },
      {
        title: "Research & Innovation",
        description: "Access advanced research facilities and opportunities across diverse disciplines.",
      },
      {
        title: "Diverse Study Options",
        description: "Explore universities, colleges, polytechnics and specialised institutions.",
      },
      {
        title: "Multicultural Environment",
        description: "Experience an inclusive and internationally connected campus community.",
      },
      {
        title: "Scholarships & Funding",
        description: "Explore merit-based scholarships, entrance awards and institution-specific funding opportunities.",
      },
      {
        title: "Global Career Exposure",
        description: "Develop practical and transferable skills through international academic and industry exposure.",
      },
    ],
  },

  usa: {
    slug: "usa",
    name: "USA",
    title: "Study in the USA",
    region: "Americas",
    flag: "🇺🇸",
    blurb: "Exceptional academic opportunities, diverse study options, global exposure and strong career pathways.",
    monument: "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?auto=format&fit=crop&w=1400&q=80",
    monumentAlt: "Statue of Liberty in New York Harbor",
    intro:
      "Home to many of the world’s top-ranked universities, including prestigious Ivy League institutions, the USA offers exceptional academic opportunities, diverse study options, global exposure and strong career pathways.",
    institutionsLead: "Some universities include:",
    institutionsText:
      "Harvard University, Stanford University, Massachusetts Institute of Technology (MIT), Princeton University, Yale University, Columbia University, University of Pennsylvania, Cornell University, University of Michigan–Ann Arbor, University of California, Davis, Purdue University, Pennsylvania State University, University of Massachusetts Amherst, Arizona State University, Northeastern University, University of Illinois Chicago, University of South Florida and University of Colorado Boulder.",
    institutions: [
      "Harvard University",
      "Stanford University",
      "Massachusetts Institute of Technology (MIT)",
      "Princeton University",
      "Yale University",
      "Columbia University",
      "University of Pennsylvania",
      "Cornell University",
      "University of Michigan–Ann Arbor",
      "University of California, Davis",
      "Purdue University",
      "Pennsylvania State University",
      "University of Massachusetts Amherst",
      "Arizona State University",
      "Northeastern University",
      "University of Illinois Chicago",
      "University of South Florida",
      "University of Colorado Boulder",
    ],
    highlights: [
      {
        title: "World-Class Education",
        description: "Access globally recognised universities and colleges offering a wide range of undergraduate and postgraduate programmes.",
      },
      {
        title: "Flexible Academic Options",
        description: "Choose from diverse majors, minors, electives and interdisciplinary programmes to personalise your academic journey.",
      },
      {
        title: "Research & Innovation",
        description: "Benefit from a strong ecosystem of cutting-edge research, technology, entrepreneurship and innovation.",
      },
      {
        title: "Industry Exposure",
        description: "Gain practical experience through internships, research projects, co-op opportunities and industry engagement.",
      },
      {
        title: "Multiple University Choices",
        description: "Explore research universities, liberal arts colleges, state universities, private universities and specialised institutions.",
      },
      {
        title: "Holistic Campus Experience",
        description: "Enjoy vibrant campus life, student clubs, sports, cultural activities and a diverse international community.",
      },
      {
        title: "Scholarships & Financial Aid",
        description: "Explore merit-based scholarships, need-based aid and university-specific funding opportunities.",
      },
      {
        title: "Global Career Opportunities",
        description: "Develop critical thinking, leadership, communication and problem-solving skills valued by employers worldwide.",
      },
    ],
  },

  australia: {
    slug: "australia",
    name: "Australia",
    title: "Study in Australia",
    region: "Oceania",
    flag: "🇦🇺",
    blurb: "High-quality education, practical learning, global exposure and strong career opportunities.",
    monument: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=1400&q=80",
    monumentAlt: "Sydney Harbour and Opera House",
    intro:
      "Australia is home to globally recognised universities, including several institutions ranked among the world’s top universities, offering high-quality education, practical learning, global exposure and strong career opportunities.",
    institutionsLead: "Some universities include:",
    institutionsText:
      "University of Melbourne, University of Sydney, Australian National University (ANU), UNSW Sydney, Monash University, University of Queensland, University of Western Australia, University of Adelaide, University of Technology Sydney (UTS), RMIT University, Macquarie University, Deakin University, Queensland University of Technology (QUT), University of Wollongong, La Trobe University, Curtin University and Swinburne University of Technology.",
    institutions: [
      "University of Melbourne",
      "University of Sydney",
      "Australian National University (ANU)",
      "UNSW Sydney",
      "Monash University",
      "University of Queensland",
      "University of Western Australia",
      "University of Adelaide",
      "University of Technology Sydney (UTS)",
      "RMIT University",
      "Macquarie University",
      "Deakin University",
      "Queensland University of Technology (QUT)",
      "University of Wollongong",
      "La Trobe University",
      "Curtin University",
      "Swinburne University of Technology",
    ],
    highlights: [
      {
        title: "Globally Recognised Education",
        description: "Choose from internationally recognised universities and a wide range of undergraduate and postgraduate programmes.",
      },
      {
        title: "Industry-Focused Learning",
        description: "Benefit from practical teaching, internships, industry projects and strong university-industry connections.",
      },
      {
        title: "Research & Innovation",
        description: "Access world-class research facilities and opportunities across diverse academic disciplines.",
      },
      {
        title: "Flexible Study Options",
        description: "Explore undergraduate, postgraduate, pathway and specialised programmes aligned with your academic and career goals.",
      },
      {
        title: "Multicultural Environment",
        description: "Experience an inclusive and diverse society with students from across the world.",
      },
      {
        title: "Vibrant Student Life",
        description: "Enjoy modern campuses, student clubs, sporting activities and a rich cultural experience.",
      },
      {
        title: "Scholarships",
        description: "Explore university-specific merit scholarships and other funding opportunities available to international students.",
      },
      {
        title: "Career Opportunities",
        description: "Develop practical, professional and transferable skills through industry exposure and experiential learning.",
      },
      {
        title: "Global Exposure",
        description: "Gain an internationally recognised qualification and experience living and studying in a globally connected country.",
      },
    ],
  },

  uk: {
    slug: "uk",
    name: "United Kingdom",
    title: "Study in the UK",
    region: "Europe",
    flag: "🇬🇧",
    blurb: "Internationally recognised education, rich academic heritage, innovative teaching and excellent global exposure.",
    monument: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1400&q=80",
    monumentAlt: "Tower Bridge and River Thames in London",
    intro:
      "Home to some of the world’s most prestigious and highly ranked universities, the UK offers internationally recognised education, a rich academic heritage, innovative teaching and excellent global exposure.",
    institutionsLead: "Some universities include:",
    institutionsText:
      "University of Oxford, University of Cambridge, Imperial College London, UCL, King’s College London, London School of Economics and Political Science (LSE), University of Edinburgh, University of Manchester, University of Bristol, University of Warwick, University of Glasgow, University of Birmingham, University of Leeds, University of Southampton, University of Nottingham, Queen Mary University of London, University of Exeter, University of Sheffield, University of Surrey and Newcastle University.",
    institutions: [
      "University of Oxford",
      "University of Cambridge",
      "Imperial College London",
      "UCL",
      "King’s College London",
      "London School of Economics and Political Science (LSE)",
      "University of Edinburgh",
      "University of Manchester",
      "University of Bristol",
      "University of Warwick",
      "University of Glasgow",
      "University of Birmingham",
      "University of Leeds",
      "University of Southampton",
      "University of Nottingham",
      "Queen Mary University of London",
      "University of Exeter",
      "University of Sheffield",
      "University of Surrey",
      "Newcastle University",
    ],
    highlights: [
      {
        title: "World-Class Education",
        description: "Gain internationally recognised qualifications from universities with strong academic and research reputations.",
      },
      {
        title: "Shorter Course Duration",
        description: "Many UK bachelor’s degrees can be completed in three years and master’s programmes in one year, helping students save time and costs.",
      },
      {
        title: "Academic Flexibility",
        description: "Choose from a wide range of disciplines, specialisations and interdisciplinary programmes.",
      },
      {
        title: "Research & Innovation",
        description: "Access strong research ecosystems, modern facilities and opportunities to work on innovative projects.",
      },
      {
        title: "Industry Exposure",
        description: "Benefit from internships, placements, employer engagement and career-focused learning.",
      },
      {
        title: "Multicultural Environment",
        description: "Study alongside students from diverse backgrounds and develop a truly global perspective.",
      },
      {
        title: "Scholarships & Funding",
        description: "Explore university-specific scholarships, merit awards and other funding opportunities for eligible international students.",
      },
      {
        title: "Global Career Opportunities",
        description: "Develop analytical, communication, leadership and professional skills valued by employers worldwide.",
      },
      {
        title: "Vibrant Student Life",
        description: "Experience historic university cities, modern campuses, student societies, sports and cultural activities.",
      },
    ],
  },

  "new-zealand": {
    slug: "new-zealand",
    name: "New Zealand",
    title: "Study in New Zealand",
    region: "Oceania",
    flag: "🇳🇿",
    blurb: "High-quality, internationally recognised education system, welcoming communities and practical learning.",
    monument: "https://images.unsplash.com/photo-1507699622108-4be3abd695ad?auto=format&fit=crop&w=1400&q=80",
    monumentAlt: "Auckland skyline and coastal landscape in New Zealand",
    intro:
      "New Zealand offers a high-quality, internationally recognised education system, welcoming communities and a strong focus on practical learning, innovation and student experience.",
    institutionsLead: "Some universities include:",
    institutionsText:
      "University of Auckland, University of Otago, Massey University, Victoria University of Wellington, University of Canterbury, University of Waikato, Auckland University of Technology (AUT) and Lincoln University.",
    institutions: [
      "University of Auckland",
      "University of Otago",
      "Massey University",
      "Victoria University of Wellington",
      "University of Canterbury",
      "University of Waikato",
      "Auckland University of Technology (AUT)",
      "Lincoln University",
    ],
    highlights: [
      {
        title: "Globally Recognised Education",
        description: "Study at internationally recognised universities and institutions across a wide range of disciplines.",
      },
      {
        title: "Quality Learning",
        description: "Benefit from innovative teaching methods, smaller learning environments and strong academic support.",
      },
      {
        title: "Practical & Career-Focused",
        description: "Gain hands-on experience through industry projects, internships and applied learning.",
      },
      {
        title: "Research & Innovation",
        description: "Explore opportunities in research, technology, sustainability, agriculture, engineering and other emerging fields.",
      },
      {
        title: "Safe & Welcoming Environment",
        description: "Experience a friendly, multicultural and student-oriented society.",
      },
      {
        title: "Beautiful Study Destination",
        description: "Enjoy a unique combination of vibrant cities, stunning landscapes and outdoor activities.",
      },
      {
        title: "Flexible Study Options",
        description: "Choose from undergraduate, postgraduate, pathway and specialised programmes.",
      },
      {
        title: "Scholarships",
        description: "Explore university-specific scholarships and funding opportunities available to eligible international students.",
      },
      {
        title: "Global Exposure",
        description: "Develop international perspectives, professional skills and cross-cultural competencies in a globally connected environment.",
      },
    ],
  },

  ireland: {
    slug: "ireland",
    name: "Ireland",
    title: "Study in Ireland",
    region: "Europe",
    flag: "🇮🇪",
    blurb: "Globally recognised universities, innovative education system, strong industry connections and European exposure.",
    monument: irelandMonument,
    monumentAlt: "Trinity College Dublin historic campus in Ireland",
    intro:
      "Ireland is a leading European study destination, known for its globally recognised universities, innovative education system, strong industry connections and vibrant international student community.",
    institutionsLead: "Some universities include:",
    institutionsText:
      "Trinity College Dublin, University College Dublin (UCD), University College Cork (UCC), University of Galway, University of Limerick, Dublin City University (DCU), Maynooth University, Technological University Dublin (TU Dublin) and Munster Technological University (MTU).",
    institutions: [
      "Trinity College Dublin",
      "University College Dublin (UCD)",
      "University College Cork (UCC)",
      "University of Galway",
      "University of Limerick",
      "Dublin City University (DCU)",
      "Maynooth University",
      "Technological University Dublin (TU Dublin)",
      "Munster Technological University (MTU)",
    ],
    highlights: [
      {
        title: "Globally Recognised Education",
        description: "Choose from internationally recognised universities and institutions offering diverse programmes.",
      },
      {
        title: "Industry-Focused Learning",
        description: "Benefit from strong connections with global companies, internships, projects and practical learning.",
      },
      {
        title: "Technology & Innovation",
        description: "Ireland has a strong presence of leading technology, pharmaceutical, financial services and multinational companies.",
      },
      {
        title: "Wide Range of Programmes",
        description: "Explore programmes across business, technology, engineering, data science, healthcare, finance, humanities and more.",
      },
      {
        title: "English-Speaking Destination",
        description: "Study in an English-speaking European country while gaining international academic exposure.",
      },
      {
        title: "Multicultural Environment",
        description: "Experience a welcoming student community with learners from across the globe.",
      },
      {
        title: "Career Opportunities",
        description: "Develop practical and professional skills through industry engagement and career-focused programmes.",
      },
      {
        title: "Scholarships",
        description: "Explore university-specific scholarships and other funding opportunities for eligible international students.",
      },
      {
        title: "European Exposure",
        description: "Study in Ireland while experiencing the culture, travel opportunities and professional environment of Europe.",
      },
    ],
  },

  germany: {
    slug: "germany",
    name: "Germany",
    title: "Study in Germany",
    region: "Europe",
    flag: "🇩🇪",
    blurb: "High-quality education, strong research ecosystem, advanced technology and close links with industry.",
    monument: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=1400&q=80",
    monumentAlt: "Brandenburg Gate in Berlin, Germany",
    intro:
      "Germany is one of Europe’s leading study destinations, renowned for its high-quality education, strong research ecosystem, advanced technology and close links with industry.",
    institutionsLead: "Some universities include:",
    institutionsText:
      "Technical University of Munich (TUM), LMU Munich, Heidelberg University, RWTH Aachen University, Humboldt University of Berlin, Free University of Berlin, Karlsruhe Institute of Technology (KIT), University of Freiburg, University of Bonn, University of Hamburg, University of Cologne, University of Mannheim and TU Berlin.",
    institutions: [
      "Technical University of Munich (TUM)",
      "LMU Munich",
      "Heidelberg University",
      "RWTH Aachen University",
      "Humboldt University of Berlin",
      "Free University of Berlin",
      "Karlsruhe Institute of Technology (KIT)",
      "University of Freiburg",
      "University of Bonn",
      "University of Hamburg",
      "University of Cologne",
      "University of Mannheim",
      "TU Berlin",
    ],
    highlights: [
      {
        title: "Globally Recognised Education",
        description: "Study at internationally respected universities with strong academic and research credentials.",
      },
      {
        title: "Affordable Education",
        description: "Many public universities offer programmes with low or no tuition fees, although semester contributions and other costs may apply.",
      },
      {
        title: "Research & Innovation",
        description: "Benefit from Germany’s strong focus on scientific research, engineering, technology and innovation.",
      },
      {
        title: "Industry Connections",
        description: "Gain exposure to leading industries through internships, practical projects and university-industry collaborations.",
      },
      {
        title: "Wide Range of Programmes",
        description: "Choose from programmes in engineering, technology, business, sciences, humanities, design and other disciplines.",
      },
      {
        title: "English-Taught Options",
        description: "A growing number of programmes, particularly at postgraduate level, are available in English.",
      },
      {
        title: "Practical Learning",
        description: "Experience an education system that combines academic knowledge with applied and industry-oriented learning.",
      },
      {
        title: "International Environment",
        description: "Study alongside students from around the world and develop valuable cross-cultural skills.",
      },
      {
        title: "Career Opportunities",
        description: "Germany’s strong industrial and technology sectors provide opportunities for graduates to build international professional experience.",
      },
    ],
  },

  france: {
    slug: "france",
    name: "France",
    title: "Study in France",
    region: "Europe",
    flag: "🇫🇷",
    blurb: "Globally recognised institutions, innovative programmes, strong industry connections and a rich multicultural experience.",
    monument: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1400&q=80",
    monumentAlt: "Eiffel Tower and Paris cityscape in France",
    intro:
      "France is a leading European study destination, offering globally recognised institutions, innovative programmes, strong industry connections and a rich multicultural experience.",
    institutionsLead: "Some universities and institutions include:",
    institutionsText:
      "Sorbonne University, Université Paris-Saclay, Institut Polytechnique de Paris, Université PSL, Université Paris Cité, HEC Paris, ESSEC Business School, ESCP Business School, emlyon business school and Grenoble INP - UGA.",
    institutions: [
      "Sorbonne University",
      "Université Paris-Saclay",
      "Institut Polytechnique de Paris",
      "Université PSL",
      "Université Paris Cité",
      "HEC Paris",
      "ESSEC Business School",
      "ESCP Business School",
      "emlyon business school",
      "Grenoble INP - UGA",
    ],
    highlights: [
      {
        title: "Globally Recognised Education",
        description: "Choose from prestigious universities, grandes écoles and specialised institutions.",
      },
      {
        title: "Business & Management Excellence",
        description: "France is particularly well known for internationally recognised business and management education.",
      },
      {
        title: "Affordable Study Options",
        description: "Compared with several other major study destinations, public higher education can offer relatively competitive tuition fees, subject to programme and student status.",
      },
      {
        title: "Innovation & Research",
        description: "Benefit from strong research ecosystems across technology, engineering, science, business and sustainability.",
      },
      {
        title: "Industry Exposure",
        description: "Gain practical experience through internships, projects and strong connections with French and international companies.",
      },
      {
        title: "English-Taught Programmes",
        description: "A growing number of programmes, particularly at postgraduate level, are available in English.",
      },
      {
        title: "Multicultural Experience",
        description: "Study in an internationally diverse environment while experiencing French culture and European life.",
      },
      {
        title: "Career Opportunities",
        description: "Build professional skills and gain exposure to sectors such as luxury, business, technology, engineering, finance, hospitality and design.",
      },
      {
        title: "European Exposure",
        description: "France provides an excellent base for experiencing Europe’s academic, cultural and professional landscape.",
      },
    ],
  },

  netherlands: {
    slug: "netherlands",
    name: "Netherlands",
    title: "Study in the Netherlands",
    region: "Europe",
    flag: "🇳🇱",
    blurb: "Internationally recognised universities, innovative teaching, English-taught programmes and strong connections with industry.",
    monument: "https://images.unsplash.com/photo-1534351590666-13e3e96b5017?auto=format&fit=crop&w=1400&q=80",
    monumentAlt: "Amsterdam historic canal and architecture in the Netherlands",
    intro:
      "The Netherlands is a popular European study destination, known for its internationally recognised universities, innovative teaching, English-taught programmes and strong connections with industry.",
    institutionsLead: "Some universities include:",
    institutionsText:
      "Delft University of Technology (TU Delft), University of Amsterdam, Utrecht University, Leiden University, Erasmus University Rotterdam, Vrije Universiteit Amsterdam, Wageningen University & Research, Eindhoven University of Technology, University of Groningen, Maastricht University, University of Twente and Radboud University.",
    institutions: [
      "Delft University of Technology (TU Delft)",
      "University of Amsterdam",
      "Utrecht University",
      "Leiden University",
      "Erasmus University Rotterdam",
      "Vrije Universiteit Amsterdam",
      "Wageningen University & Research",
      "Eindhoven University of Technology",
      "University of Groningen",
      "Maastricht University",
      "University of Twente",
      "Radboud University",
    ],
    highlights: [
      {
        title: "Globally Recognised Education",
        description: "Choose from respected research universities and universities of applied sciences.",
      },
      {
        title: "English-Taught Programmes",
        description: "Benefit from a wide selection of programmes taught entirely in English, particularly at postgraduate level.",
      },
      {
        title: "Innovative Teaching",
        description: "Experience interactive, student-centred and problem-based learning approaches.",
      },
      {
        title: "Industry Exposure",
        description: "Gain practical experience through internships, industry projects and strong university-business connections.",
      },
      {
        title: "Research & Innovation",
        description: "Explore opportunities across technology, engineering, sustainability, business, agriculture and life sciences.",
      },
      {
        title: "Wide Range of Programmes",
        description: "Choose from diverse disciplines and specialised programmes aligned with future career goals.",
      },
      {
        title: "International Environment",
        description: "Study in a highly multicultural environment with students from across the world.",
      },
      {
        title: "Career-Focused Education",
        description: "Develop practical, analytical, communication and problem-solving skills valued internationally.",
      },
      {
        title: "European Exposure",
        description: "Enjoy the opportunity to study in a centrally located European country with easy access to other European destinations.",
      },
      {
        title: "Scholarships",
        description: "Explore university-specific scholarships and other funding opportunities available to eligible international students.",
      },
    ],
  },

  singapore: {
    slug: "singapore",
    name: "Singapore",
    title: "Study in Singapore",
    region: "Asia",
    flag: "🇸🇬",
    blurb: "Globally ranked universities, high-quality education, strong industry connections and strategic location in Asia.",
    monument: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=1400&q=80",
    monumentAlt: "Marina Bay Sands skyline in Singapore",
    intro:
      "Singapore is a leading education hub in Asia, known for its globally ranked universities, high-quality education, strong industry connections and strategic location at the heart of Asia.",
    institutionsLead: "Some universities and institutions include:",
    institutionsText:
      "National University of Singapore (NUS), Nanyang Technological University (NTU), Singapore Management University (SMU), Singapore University of Technology and Design (SUTD), Singapore Institute of Technology (SIT), Singapore University of Social Sciences (SUSS), James Cook University Singapore and Singapore Institute of Management (SIM).",
    institutions: [
      "National University of Singapore (NUS)",
      "Nanyang Technological University (NTU)",
      "Singapore Management University (SMU)",
      "Singapore University of Technology and Design (SUTD)",
      "Singapore Institute of Technology (SIT)",
      "Singapore University of Social Sciences (SUSS)",
      "James Cook University Singapore",
      "Singapore Institute of Management (SIM)",
    ],
    highlights: [
      {
        title: "Globally Recognised Education",
        description: "Study at internationally recognised universities and institutions with strong academic and industry reputations.",
      },
      {
        title: "Strong Academic Standards",
        description: "Benefit from rigorous programmes, modern facilities and innovative teaching methodologies.",
      },
      {
        title: "Industry Exposure",
        description: "Gain practical experience through internships, industry projects and strong connections with global companies.",
      },
      {
        title: "Business & Technology Hub",
        description: "Access opportunities in finance, technology, business, engineering, logistics, healthcare and other high-growth sectors.",
      },
      {
        title: "English-Medium Education",
        description: "Most higher education programmes are delivered in English, making Singapore accessible to international students.",
      },
      {
        title: "Multicultural Environment",
        description: "Experience a diverse, safe and cosmopolitan society with students from across the world.",
      },
      {
        title: "Strategic Location",
        description: "Study in a major Asian business hub with strong connections to India, China and Southeast Asia.",
      },
      {
        title: "Career-Focused Learning",
        description: "Develop practical, analytical and professional skills aligned with evolving industry requirements.",
      },
      {
        title: "Scholarships & Funding",
        description: "Explore university-specific scholarships, merit awards and other funding opportunities.",
      },
      {
        title: "Global Exposure",
        description: "Gain an internationally recognised qualification while experiencing Asia’s dynamic economic and cultural environment.",
      },
    ],
  },
};

export const countries: Destination[] = Object.values(destinationData);

export function getCountry(slug: string): Destination | undefined {
  return destinationData[slug];
}
