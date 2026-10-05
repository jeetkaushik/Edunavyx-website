// Official Destination Universities Logo Catalog
// Sourced from official institutional vector SVG and high-resolution transparent assets

// CANADA
import mcgillLogo from "@/assets/universities/mcgill.png";
import torontoLogo from "@/assets/universities/toronto.svg";
import ubcLogo from "@/assets/universities/ubc.svg";
import albertaLogo from "@/assets/universities/alberta.svg";
import waterlooLogo from "@/assets/universities/waterloo.svg";
import westernLogo from "@/assets/universities/western.svg";
import montrealLogo from "@/assets/universities/montreal.svg";
import mcmasterLogo from "@/assets/universities/mcmaster.svg";
import queensLogo from "@/assets/universities/queens.svg";
import ottawaLogo from "@/assets/universities/ottawa.svg";

// USA
import mitLogo from "@/assets/universities/mit.svg";
import stanfordLogo from "@/assets/universities/stanford.svg";
import harvardLogo from "@/assets/universities/harvard.svg";
import caltechLogo from "@/assets/universities/caltech.svg";
import upennLogo from "@/assets/universities/upenn.svg";
import cornellLogo from "@/assets/universities/cornell.svg";
import yaleLogo from "@/assets/universities/yale.svg";
import johnshopkinsLogo from "@/assets/universities/johnshopkins.svg";
import berkeleyLogo from "@/assets/universities/berkeley.svg";
import uchicagoLogo from "@/assets/universities/uchicago.svg";

// AUSTRALIA
import melbourneLogo from "@/assets/universities/melbourne.svg";
import unswLogo from "@/assets/universities/unsw.png";
import sydneyLogo from "@/assets/universities/sydney.svg";
import anuLogo from "@/assets/universities/anu.svg";
import monashLogo from "@/assets/universities/monash.svg";
import queenslandLogo from "@/assets/universities/queensland.svg";
import utsLogo from "@/assets/universities/uts.svg";
import adelaideLogo from "@/assets/universities/adelaide.svg";
import uwaLogo from "@/assets/universities/uwa.svg";
import macquarieLogo from "@/assets/universities/macquarie.svg";

// UK
import oxfordLogo from "@/assets/universities/oxford.svg";
import cambridgeLogo from "@/assets/universities/cambridge.svg";
import imperialLogo from "@/assets/universities/imperial.png";
import uclLogo from "@/assets/universities/ucl.svg";
import kingsLogo from "@/assets/universities/kings.svg";
import edinburghLogo from "@/assets/universities/edinburgh.svg";
import manchesterLogo from "@/assets/universities/manchester.svg";
import bristolLogo from "@/assets/universities/bristol.svg";
import warwickLogo from "@/assets/universities/warwick.svg";
import glasgowLogo from "@/assets/universities/glasgow.svg";

// NEW-ZEALAND
import aucklandLogo from "@/assets/universities/auckland.svg";
import otagoLogo from "@/assets/universities/otago.svg";
import masseyLogo from "@/assets/universities/massey.svg";
import victoriaWellingtonLogo from "@/assets/universities/victoria-wellington.svg";
import canterburyLogo from "@/assets/universities/canterbury.png";
import waikatoLogo from "@/assets/universities/waikato.svg";
import lincolnNzLogo from "@/assets/universities/lincoln-nz.svg";
import autLogo from "@/assets/universities/aut.svg";

// IRELAND
import trinityLogo from "@/assets/universities/trinity.svg";
import ucdLogo from "@/assets/universities/ucd.svg";
import uccLogo from "@/assets/universities/ucc.png";
import galwayLogo from "@/assets/universities/galway.png";
import limerickLogo from "@/assets/universities/limerick.svg";
import dcuLogo from "@/assets/universities/dcu.png";
import maynoothLogo from "@/assets/universities/maynooth.png";
import tuDublinLogo from "@/assets/universities/tu-dublin.svg";
import mtuLogo from "@/assets/universities/mtu.svg";

// GERMANY
import tumLogo from "@/assets/universities/tum.svg";
import lmuLogo from "@/assets/universities/lmu.png";
import heidelbergLogo from "@/assets/universities/heidelberg.svg";
import fuBerlinLogo from "@/assets/universities/fu-berlin.svg";
import huBerlinLogo from "@/assets/universities/hu-berlin.svg";
import rwthAachenLogo from "@/assets/universities/rwth-aachen.png";
import kitLogo from "@/assets/universities/kit.svg";
import freiburgLogo from "@/assets/universities/freiburg.png";
import tuBerlinLogo from "@/assets/universities/tu-berlin.svg";
import goettingenLogo from "@/assets/universities/goettingen.svg";

// FRANCE
import pslLogo from "@/assets/universities/psl.png";
import ipParisLogo from "@/assets/universities/ip-paris.svg";
import sorbonneLogo from "@/assets/universities/sorbonne.svg";
import parisSaclayLogo from "@/assets/universities/paris-saclay.svg";
import ensLyonLogo from "@/assets/universities/ens-lyon.svg";
import polytechniqueLogo from "@/assets/universities/polytechnique.svg";
import sciencesPoLogo from "@/assets/universities/sciences-po.svg";
import parisCiteLogo from "@/assets/universities/paris-cite.svg";
import grenobleAlpesLogo from "@/assets/universities/grenoble-alpes.svg";
import aixMarseilleLogo from "@/assets/universities/aix-marseille.png";

// NETHERLANDS
import tudelftLogo from "@/assets/universities/tudelft.svg";
import amsterdamLogo from "@/assets/universities/amsterdam.png";
import utrechtLogo from "@/assets/universities/utrecht.svg";
import leidenLogo from "@/assets/universities/leiden.svg";
import erasmusLogo from "@/assets/universities/erasmus.svg";
import wageningenLogo from "@/assets/universities/wageningen.png";
import tueLogo from "@/assets/universities/tue.svg";
import groningenLogo from "@/assets/universities/groningen.svg";
import vuAmsterdamLogo from "@/assets/universities/vu-amsterdam.png";
import twenteLogo from "@/assets/universities/twente.svg";

// SINGAPORE
import nusLogo from "@/assets/universities/nus.svg";
import ntuLogo from "@/assets/universities/ntu.svg";
import smuLogo from "@/assets/universities/smu.svg";
import sutdLogo from "@/assets/universities/sutd.svg";
import sitLogo from "@/assets/universities/sit.svg";
import sussLogo from "@/assets/universities/suss.svg";
import uasLogo from "@/assets/universities/uas.svg";
import inseadLogo from "@/assets/universities/insead.svg";
import essecLogo from "@/assets/universities/essec.svg";
import jcuSingaporeLogo from "@/assets/universities/jcu-singapore.svg";

export interface DestinationInstitute {
  id: string;
  name: string;
  src: string;
  rank?: string;
}

export const countryInstitutionsData: Record<string, DestinationInstitute[]> = {
  "canada": [
    { id: "mcgill", name: "McGill University", src: mcgillLogo },
    { id: "toronto", name: "University of Toronto", src: torontoLogo },
    { id: "ubc", name: "University of British Columbia (UBC)", src: ubcLogo },
    { id: "alberta", name: "University of Alberta", src: albertaLogo },
    { id: "waterloo", name: "University of Waterloo", src: waterlooLogo },
    { id: "western", name: "Western University", src: westernLogo },
    { id: "montreal", name: "Université de Montréal", src: montrealLogo },
    { id: "mcmaster", name: "McMaster University", src: mcmasterLogo },
    { id: "queens", name: "Queen’s University", src: queensLogo },
    { id: "ottawa", name: "University of Ottawa", src: ottawaLogo },
  ],
  "usa": [
    { id: "mit", name: "MIT", src: mitLogo },
    { id: "stanford", name: "Stanford University", src: stanfordLogo },
    { id: "harvard", name: "Harvard University", src: harvardLogo },
    { id: "caltech", name: "Caltech", src: caltechLogo },
    { id: "upenn", name: "University of Pennsylvania", src: upennLogo },
    { id: "cornell", name: "Cornell University", src: cornellLogo },
    { id: "yale", name: "Yale University", src: yaleLogo },
    { id: "johnshopkins", name: "Johns Hopkins University", src: johnshopkinsLogo },
    { id: "berkeley", name: "UC Berkeley", src: berkeleyLogo },
    { id: "uchicago", name: "University of Chicago", src: uchicagoLogo },
  ],
  "australia": [
    { id: "melbourne", name: "University of Melbourne", src: melbourneLogo },
    { id: "unsw", name: "UNSW Sydney", src: unswLogo },
    { id: "sydney", name: "University of Sydney", src: sydneyLogo },
    { id: "anu", name: "Australian National University", src: anuLogo },
    { id: "monash", name: "Monash University", src: monashLogo },
    { id: "queensland", name: "University of Queensland", src: queenslandLogo },
    { id: "uts", name: "UTS", src: utsLogo },
    { id: "adelaide", name: "University of Adelaide", src: adelaideLogo },
    { id: "uwa", name: "University of Western Australia", src: uwaLogo },
    { id: "macquarie", name: "Macquarie University", src: macquarieLogo },
  ],
  "uk": [
    { id: "oxford", name: "University of Oxford", src: oxfordLogo },
    { id: "cambridge", name: "University of Cambridge", src: cambridgeLogo },
    { id: "imperial", name: "Imperial College London", src: imperialLogo },
    { id: "ucl", name: "UCL", src: uclLogo },
    { id: "kings", name: "King’s College London", src: kingsLogo },
    { id: "edinburgh", name: "University of Edinburgh", src: edinburghLogo },
    { id: "manchester", name: "University of Manchester", src: manchesterLogo },
    { id: "bristol", name: "University of Bristol", src: bristolLogo },
    { id: "warwick", name: "University of Warwick", src: warwickLogo },
    { id: "glasgow", name: "University of Glasgow", src: glasgowLogo },
  ],
  "new-zealand": [
    { id: "auckland", name: "University of Auckland", src: aucklandLogo },
    { id: "otago", name: "University of Otago", src: otagoLogo },
    { id: "massey", name: "Massey University", src: masseyLogo },
    { id: "victoria-wellington", name: "Victoria University of Wellington", src: victoriaWellingtonLogo },
    { id: "canterbury", name: "University of Canterbury", src: canterburyLogo },
    { id: "waikato", name: "University of Waikato", src: waikatoLogo },
    { id: "lincoln-nz", name: "Lincoln University", src: lincolnNzLogo },
    { id: "aut", name: "Auckland University of Technology", src: autLogo },
  ],
  "ireland": [
    { id: "trinity", name: "Trinity College Dublin", src: trinityLogo },
    { id: "ucd", name: "University College Dublin", src: ucdLogo },
    { id: "ucc", name: "University College Cork", src: uccLogo },
    { id: "galway", name: "University of Galway", src: galwayLogo },
    { id: "limerick", name: "University of Limerick", src: limerickLogo },
    { id: "dcu", name: "Dublin City University", src: dcuLogo },
    { id: "maynooth", name: "Maynooth University", src: maynoothLogo },
    { id: "tu-dublin", name: "Technological University Dublin", src: tuDublinLogo },
    { id: "mtu", name: "Munster Technological University", src: mtuLogo },
  ],
  "germany": [
    { id: "tum", name: "Technical University of Munich", src: tumLogo },
    { id: "lmu", name: "LMU Munich", src: lmuLogo },
    { id: "heidelberg", name: "Heidelberg University", src: heidelbergLogo },
    { id: "fu-berlin", name: "Freie Universität Berlin", src: fuBerlinLogo },
    { id: "hu-berlin", name: "Humboldt University of Berlin", src: huBerlinLogo },
    { id: "rwth-aachen", name: "RWTH Aachen University", src: rwthAachenLogo },
    { id: "kit", name: "Karlsruhe Institute of Technology", src: kitLogo },
    { id: "freiburg", name: "University of Freiburg", src: freiburgLogo },
    { id: "tu-berlin", name: "TU Berlin", src: tuBerlinLogo },
    { id: "goettingen", name: "University of Göttingen", src: goettingenLogo },
  ],
  "france": [
    { id: "psl", name: "Université PSL", src: pslLogo },
    { id: "ip-paris", name: "Institut Polytechnique de Paris", src: ipParisLogo },
    { id: "sorbonne", name: "Sorbonne University", src: sorbonneLogo },
    { id: "paris-saclay", name: "Université Paris-Saclay", src: parisSaclayLogo },
    { id: "ens-lyon", name: "ENS de Lyon", src: ensLyonLogo },
    { id: "polytechnique", name: "École Polytechnique", src: polytechniqueLogo },
    { id: "sciences-po", name: "Sciences Po", src: sciencesPoLogo },
    { id: "paris-cite", name: "Université Paris Cité", src: parisCiteLogo },
    { id: "grenoble-alpes", name: "Université Grenoble Alpes", src: grenobleAlpesLogo },
    { id: "aix-marseille", name: "Aix-Marseille University", src: aixMarseilleLogo },
  ],
  "netherlands": [
    { id: "tudelft", name: "TU Delft", src: tudelftLogo },
    { id: "amsterdam", name: "University of Amsterdam", src: amsterdamLogo },
    { id: "utrecht", name: "Utrecht University", src: utrechtLogo },
    { id: "leiden", name: "Leiden University", src: leidenLogo },
    { id: "erasmus", name: "Erasmus University Rotterdam", src: erasmusLogo },
    { id: "wageningen", name: "Wageningen University & Research", src: wageningenLogo },
    { id: "tue", name: "Eindhoven University of Technology", src: tueLogo },
    { id: "groningen", name: "University of Groningen", src: groningenLogo },
    { id: "vu-amsterdam", name: "Vrije Universiteit Amsterdam", src: vuAmsterdamLogo },
    { id: "twente", name: "University of Twente", src: twenteLogo },
  ],
  "singapore": [
    { id: "nus", name: "National University of Singapore", src: nusLogo },
    { id: "ntu", name: "Nanyang Technological University", src: ntuLogo },
    { id: "smu", name: "Singapore Management University", src: smuLogo },
    { id: "sutd", name: "Singapore University of Technology and Design", src: sutdLogo },
    { id: "sit", name: "Singapore Institute of Technology", src: sitLogo },
    { id: "suss", name: "Singapore University of Social Sciences", src: sussLogo },
    { id: "uas", name: "University of the Arts Singapore", src: uasLogo },
    { id: "insead", name: "INSEAD", src: inseadLogo },
    { id: "essec", name: "ESSEC Business School", src: essecLogo },
    { id: "jcu-singapore", name: "James Cook University Singapore", src: jcuSingaporeLogo },
  ],
};

export function getInstitutionsForCountry(slug: string): DestinationInstitute[] {
  return countryInstitutionsData[slug] || [];
}
