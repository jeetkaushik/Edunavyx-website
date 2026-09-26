import testCardCuet from "@/assets/test-card-cuet.jpg";
import testCardSat from "@/assets/test-card-sat.jpg";
import testCardIelts from "@/assets/test-card-ielts.jpg";

export interface TestPrepItem {
  id: "cuet" | "sat" | "ielts";
  title: string;
  shortTitle: string;
  categoryBadge: string;
  headline: string;
  conciseDescription: string;
  cardImage: string;
  cardImageAlt: string;
  accent: "blue" | "orange" | "teal";
  accentColor: string;
  accentBg: string;
  accentBorder: string;
  ctaLabel: string;
  highlights: string[];
  
  // Detailed page information
  heroSummary: string;
  whoShouldTake: string[];
  testFormat: {
    duration: string;
    sections: string;
    scoring: string;
    acceptedBy: string;
  };
  keyModules: {
    title: string;
    desc: string;
  }[];
  preparationApproach: {
    step: string;
    title: string;
    desc: string;
  }[];
  whyEdunavyx: string[];
  faqs: {
    question: string;
    answer: string;
  }[];
}

export const testPreparationData: Record<string, TestPrepItem> = {
  cuet: {
    id: "cuet",
    title: "CUET & Indian University Entrance Exams",
    shortTitle: "CUET & Indian Exams",
    categoryBadge: "Indian University Admissions",
    headline: "Open the door to India's leading universities.",
    conciseDescription:
      "Structured preparation for CUET-UG and university entrance exams, combining subject mastery, mock testing, and strategy for top Indian universities.",
    cardImage: testCardCuet,
    cardImageAlt: "Indian university heritage campus architecture",
    accent: "blue",
    accentColor: "#2563eb",
    accentBg: "rgba(37, 99, 235, 0.08)",
    accentBorder: "rgba(37, 99, 235, 0.22)",
    ctaLabel: "Explore CUET Guidance",
    highlights: [
      "CUET-UG & Domain Subjects",
      "Exam Strategy & Mock Tests",
      "Central & Leading Universities",
    ],
    heroSummary:
      "The Common University Entrance Test (CUET-UG) has transformed undergraduate admissions across India. Edunavyx provides structured and focused preparation across Language, Domain Subjects, and the General Test to help students secure admissions into top central, state, and premier universities with confidence.",
    whoShouldTake: [
      "Class 12 students and high-school graduates aiming for top Central Universities (Delhi University, BHU, JMI, JNU, AMU)",
      "Applicants targeting premier state, deemed, and leading private universities accepting CUET scores",
      "Students looking for strategic, NCERT-aligned subject revision alongside competitive exam test-taking techniques",
    ],
    testFormat: {
      duration: "Variable (based on subjects chosen)",
      sections: "Section IA/IB (Languages), Section II (Domain Subjects), Section III (General Test)",
      scoring: "Percentile and Normalized NTA scores",
      acceptedBy: "250+ Central, State, Deemed, and Private Universities across India",
    },
    keyModules: [
      {
        title: "Section IA & IB: Languages",
        desc: "Comprehensive coverage of Reading Comprehension, Literary Aptitude, Vocabulary, Synonyms/Antonyms, Idioms, and Verbal Reasoning.",
      },
      {
        title: "Section II: Domain Specific Subjects",
        desc: "Specialized coaching in Commerce (Accountancy, Economics, Business Studies), Humanities (History, Political Science, Psychology, Sociology), and Sciences (Physics, Chemistry, Mathematics, Biology) strictly aligned with the latest syllabus.",
      },
      {
        title: "Section III: General Test",
        desc: "Mastery of General Knowledge, Current Affairs, General Mental Ability, Numerical Ability, Quantitative Reasoning, and Logical & Analytical Reasoning.",
      },
      {
        title: "NTA Computer-Based Testing (CBT) Practice",
        desc: "Extensive online mock tests simulating the actual NTA user interface, clock management, and question-navigation strategies.",
      },
    ],
    preparationApproach: [
      {
        step: "01",
        title: "Diagnostic Profile & Subject Mapping",
        desc: "We analyze your academic baseline, chosen university target courses, and the specific subject combinations required for maximum eligibility.",
      },
      {
        step: "02",
        title: "Concept Clarification & High-Yield Revision",
        desc: "Focused revision covering core NCERT fundamentals, formula sheets, key case studies, and high-frequency problem types.",
      },
      {
        step: "03",
        title: "Speed, Accuracy & Negative Marking Strategy",
        desc: "Targeted drills to improve question selection, speed of elimination, and tactical avoidance of negative marking.",
      },
      {
        step: "04",
        title: "Full-Length Mocks & Detailed Performance Analytics",
        desc: "Simulated mock examinations with detailed question-by-question post-test reviews, identifying strengths and weak zones.",
      },
    ],
    whyEdunavyx: [
      "Subject-matter experts with deep insights into NTA testing formats and NCERT question trends",
      "Personalized preparation plans aligned with your target degree programs and university cut-offs",
      "Curated test banks featuring previous year questions (PYQs) and high-probability problem sets",
      "End-to-end guidance encompassing subject selection, exam strategy, and CSAS portal counseling support",
    ],
    faqs: [
      {
        question: "How does CUET scoring work?",
        answer: "CUET uses a computer-based test format with normalized percentile scores. Each correct answer earns 5 marks, while 1 mark is deducted for each incorrect answer.",
      },
      {
        question: "How many domain subjects should I prepare for?",
        answer: "Most leading universities recommend choosing 3 to 4 domain subjects aligned with your Class 12 stream plus at least one language subject to maximize degree options.",
      },
      {
        question: "When should I begin CUET preparation?",
        answer: "Beginning preparation 4–6 months ahead allows students to balance school board examinations while building speed for the MCQ computer-based format.",
      },
    ],
  },

  sat: {
    id: "sat",
    title: "SAT",
    shortTitle: "SAT",
    categoryBadge: "Global Standardized Test",
    headline: "98 Questions | 2 hr 14 min | Adaptive | Score: 400–1600 | 2 Sections",
    conciseDescription:
      "Recognised by universities across the USA, Canada, UK, Australia, India, Singapore, Hong Kong and several other countries worldwide.",
    cardImage: testCardSat,
    cardImageAlt: "Academic study and SAT test preparation",
    accent: "orange",
    accentColor: "#ea580c",
    accentBg: "rgba(249, 115, 22, 0.09)",
    accentBorder: "rgba(249, 115, 22, 0.24)",
    ctaLabel: "Explore SAT Guidance",
    highlights: [
      "SAT Curriculum",
      "Reading, Writing & Mathematics",
      "Targeted Score Optimization",
    ],
    heroSummary:
      "Recognised by universities across the USA, Canada, UK, Australia, India, Singapore, Hong Kong and several other countries worldwide.",
    whoShouldTake: [
      "High school students in Grades 10, 11, and 12 planning for international undergraduate study",
      "Applicants aiming for competitive merit scholarships and top-tier university admissions",
      "Students seeking to strengthen holistic application profiles with competitive standardized test scores",
    ],
    testFormat: {
      duration: "2 hr 14 min",
      sections: "2 Sections (98 Questions, Adaptive)",
      scoring: "400–1600",
      acceptedBy:
        "Universities across the USA, Canada, UK, Australia, India, Singapore, Hong Kong and several other countries worldwide.",
    },
    keyModules: [
      {
        title: "Reading & Writing: Craft, Structure & Rhetoric",
        desc: "Mastering words in context, text structure, author's perspective, rhetorical synthesis, and effective cross-text transitions.",
      },
      {
        title: "Reading & Writing: Information, Ideas & Conventions",
        desc: "Analyzing central claims, quantitative evidence tables, logical inferences, and standard English punctuation and grammar rules.",
      },
      {
        title: "Mathematics: Algebra & Advanced Math",
        desc: "Linear equations, systems of inequalities, quadratic functions, polynomials, exponential curves, and nonlinear expressions.",
      },
      {
        title: "Mathematics: Problem Solving & Desmos Mastery",
        desc: "Rates, ratios, percentages, scatterplots, probability, and leveraging the built-in Desmos graphing calculator for rapid problem solving.",
      },
    ],
    preparationApproach: [
      {
        step: "01",
        title: "Initial Diagnostic Baseline",
        desc: "Complete an adaptive baseline test to map current skill proficiencies and benchmark target scoring milestones (e.g., 1450+ / 1500+).",
      },
      {
        step: "02",
        title: "Targeted Content & Strategy Drills",
        desc: "Focus on high-frequency question patterns, speed-reading strategies for short passages, and mathematical shortcuts.",
      },
      {
        step: "03",
        title: "Multistage Adaptive Test Simulation",
        desc: "Practice handling the second-stage difficulty jump to ensure you unlock and conquer the higher-scoring module bracket.",
      },
      {
        step: "04",
        title: "Error-Log Tracking & 1-on-1 Strategy Reviews",
        desc: "Review every missed question, categorize errors by conceptual or pacing issues, and refine testing instincts.",
      },
    ],
    whyEdunavyx: [
      "Instructors with proven 99th-percentile personal test scores and years of mentorship experience",
      "Thorough training on built-in digital tools including the interactive Desmos graphing environment",
      "Extensive proprietary question banks reflecting the latest SAT test question evolutions",
      "Strategic integration with your international university list to ensure target scores match your dream colleges",
    ],
    faqs: [
      {
        question: "How does the SAT's adaptive nature work?",
        answer: "The SAT has two stages per section. Your performance on the first module determines whether you receive an easier or more challenging second module, which affects your maximum possible score.",
      },
      {
        question: "Is a calculator allowed on the entire Math section?",
        answer: "Yes! A built-in Desmos graphing calculator is available throughout the Math section, or you can bring your own approved calculator.",
      },
      {
        question: "How many times can I take the SAT?",
        answer: "There is no limit on test attempts, but most students achieve their peak scores within 2 to 3 attempts with focused preparation.",
      },
    ],
  },

  ielts: {
    id: "ielts",
    title: "IELTS",
    shortTitle: "IELTS Academic",
    categoryBadge: "English Language Proficiency",
    headline: "Build your English proficiency. Strengthen your global opportunities.",
    conciseDescription:
      "Comprehensive coaching across Listening, Reading, Writing, and Speaking with personalized feedback to meet global university requirements.",
    cardImage: testCardIelts,
    cardImageAlt: "Prestigious international university campus",
    accent: "teal",
    accentColor: "#0d9488",
    accentBg: "rgba(13, 148, 136, 0.09)",
    accentBorder: "rgba(13, 148, 136, 0.24)",
    ctaLabel: "Explore IELTS Guidance",
    highlights: [
      "All 4 Modules (L, R, W, S)",
      "Personalised Feedback",
      "Worldwide University Recognition",
    ],
    heroSummary:
      "The International English Language Testing System (IELTS Academic) is the world's most recognized English proficiency examination. Accepted by over 11,500 institutions in 140+ countries, an exceptional IELTS score is your passport to top global universities and seamless student visa approval.",
    whoShouldTake: [
      "Students planning undergraduate or postgraduate degrees in the UK, Australia, Canada, USA, Ireland, and New Zealand",
      "Applicants needing to satisfy student visa language requirements (e.g., UK Student Visa, Australia Subclass 500, Canada SDS)",
      "Professionals seeking international career credentials, registrations, or global work permits",
    ],
    testFormat: {
      duration: "Approx. 2 hours 45 minutes",
      sections: "Listening (30 min), Reading (60 min), Writing (60 min), Speaking (11-14 min)",
      scoring: "Band Scores 1.0 to 9.0 (Overall and per skill)",
      acceptedBy: "11,500+ universities, immigration authorities, and employers globally",
    },
    keyModules: [
      {
        title: "Listening Module",
        desc: "Techniques for understanding diverse accents (British, Australian, North American), anticipating answers, note completion, and table filling.",
      },
      {
        title: "Reading Module",
        desc: "Mastering Skimming, Scanning, True/False/Not Given, Yes/No/Not Given, Paragraph Matching, and managing 3 dense academic passages in 60 minutes.",
      },
      {
        title: "Writing Task 1 (Academic)",
        desc: "Structuring professional reports summarizing graphs, bar charts, tables, maps, process flowcharts, and comparative visual data.",
      },
      {
        title: "Writing Task 2 (Discursive Essay)",
        desc: "Developing coherent, structured academic essays addressing Opinion, Discussion, Problem-Solution, and Direct Question prompts with high lexical resource.",
      },
      {
        title: "Speaking Module",
        desc: "1-on-1 interview practice covering Part 1 (Introduction), Part 2 (Long Turn / Cue Card), and Part 3 (Abstract Discussion) with live pronunciation and fluency feedback.",
      },
    ],
    preparationApproach: [
      {
        step: "01",
        title: "Comprehensive 4-Skill Diagnostic",
        desc: "We assess your current Band baseline across Listening, Reading, Writing, and Speaking against official band descriptors.",
      },
      {
        step: "02",
        title: "Strategy & Template Training",
        desc: "Learn tested essay frameworks, cohesive paragraphing, and vocabulary expansion to elevate your Lexical Resource and Grammatical Range.",
      },
      {
        step: "03",
        title: "One-on-One Mock Speaking Interviews",
        desc: "Engage in simulated speaking tests with experienced trainers who provide actionable corrections on fluency, coherence, and pronunciation.",
      },
      {
        step: "04",
        title: "Detailed Writing Corrections & Full Mocks",
        desc: "Get line-by-line essay evaluations highlighting coherence, task achievement, and grammatical accuracy to secure Band 7.5+.",
      },
    ],
    whyEdunavyx: [
      "Certified IELTS mentors with extensive experience guiding students to Band 7.5 and Band 8+",
      "Individualized writing feedback with detailed rubric breakdown for Task 1 and Task 2",
      "Extensive audio listening drills and curated academic reading question sets with full explanations",
      "Coordinated with your study-abroad timeline to meet strict university conditional offer deadlines",
    ],
    faqs: [
      {
        question: "What is the minimum IELTS score required for top universities?",
        answer: "Most leading global universities require an overall band score of 6.5 to 7.5, with no individual component band below 6.0 or 6.5.",
      },
      {
        question: "Can I choose between computer-delivered and paper-based IELTS?",
        answer: "Yes, both formats share identical questions, scoring, and speaking tests. Computer-delivered IELTS offers faster results (typically 3–5 days).",
      },
      {
        question: "How long is my IELTS test score valid?",
        answer: "IELTS test report forms (TRFs) are valid for 2 years from the date of the examination.",
      },
    ],
  },
};

export const getTestPrepItem = (slug: string): TestPrepItem | undefined => {
  return testPreparationData[slug.toLowerCase()];
};
