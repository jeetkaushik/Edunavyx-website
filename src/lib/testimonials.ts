import kanganaImg from "@/assets/testimonial-kangana.png";
import saloniImg from "@/assets/testimonial-saloni.png";
import navyaImg from "@/assets/testimonial-navya.png";
import adityaImg from "@/assets/testimonial-aditya.png";
import sahilImg from "@/assets/hero-student.jpeg"; // Ready to be replaced when user provides Sahil's headshot
import agastyaImg from "@/assets/hero-graduate1.jpg";

export interface TestimonialItem {
  id: string;
  name: string;
  programme: string;
  university: string;
  image: string;
  quote: string;
}

export const studentTestimonials: TestimonialItem[] = [
  {
    id: "kangana-singh",
    name: "Kangana Singh",
    programme: "MSc Psychology",
    university: "University of Southampton",
    image: kanganaImg,
    quote:
      "Choosing the right university for my Master’s in Psychology was an important decision, and Edunavyx made the entire journey much easier. From understanding my preferences and shortlisting universities to supporting my applications, the team guided me at every step. Their personalised approach helped me understand course structures and align with my academic goals, helping me confidently secure admission at the University of Southampton with full visa and documentation support.",
  },
  {
    id: "saloni-singh",
    name: "Saloni Singh",
    programme: "Master’s in Publishing",
    university: "University College London",
    image: saloniImg,
    quote:
      "I applied to universities across the UK and Ireland for my Master’s in Publishing, and with the guidance of Edunavyx, I was able to secure admission to University College London. From university applications and resume writing to SOP editing and refining my overall profile, the team supported me throughout. Their constant availability and structured advice made the entire application journey organized, stress-free, and successful.",
  },
  {
    id: "navya-gupta",
    name: "Navya Gupta",
    programme: "BBA",
    university: "ESSEC Business School, Singapore",
    image: navyaImg,
    quote:
      "I always wanted to study abroad, but my parents initially wanted me closer to home. Shalini Ma’am understood our aspirations and helped explore options that worked for both me and my family. She supported me through shortlisting universities, preparing applications, and evaluating offers, helping me choose ESSEC Business School in Singapore. Even today, I continue to reach out whenever I need academic guidance.",
  },
  {
    id: "aditya-gowda",
    name: "Aditya Gowda",
    programme: "MSc Sustainability",
    university: "University of Sussex",
    image: adityaImg,
    quote:
      "When I decided to pursue my Master’s in Sustainability in the UK, Shalini Ma’am guided me across university shortlisting and tailored applications. I received offers from several leading institutions. She helped me evaluate each option on program structure, career prospects, and research fit, leading me to choose Sussex with total confidence. Her personalized mentorship made all the difference.",
  },
  {
    id: "sahil-panjwani",
    name: "Sahil Panjwani",
    programme: "Bachelor of Science in Engineering",
    university: "Arizona State University",
    image: sahilImg,
    quote:
      "I was exploring undergraduate engineering options in the USA and wanted a university aligned with my career goals. Edunavyx guided me throughout—from university shortlisting and applications to resume building and supporting documentation. With their constant mentorship and structured support, I successfully secured admission to Arizona State University for my Bachelor of Science in Engineering.",
  },
  {
    id: "agastya-sharma",
    name: "Agastya Sharma",
    programme: "B.Sc. Economics",
    university: "Shiv Nadar University",
    image: agastyaImg,
    quote:
      "For my undergraduate studies, I wanted to explore leading universities in India. With the support of the Edunavyx team, I received offers from several top institutions. Since my long-term goal is research, the team explained the research curriculum and academic environment at Shiv Nadar University in detail, helping me make a well-informed and confident choice for my future.",
  },
];
