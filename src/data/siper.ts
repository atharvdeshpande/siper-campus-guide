export const college = {
  name: "Sun Institute of Pharmaceutical Education & Research",
  short: "SIPER",
  tagline: "Pharmacy education rooted in practice, since 2002.",
  established: 2002,
  affiliation: "Rajiv Gandhi Proudyogiki Vishwavidyalaya (RGPV), Bhopal",
  approvals: ["Pharmacy Council of India (PCI)", "AICTE", "Government of Madhya Pradesh"],
  address: "SIPER Campus, Bhatpura Road, Lahar, District Bhind, Madhya Pradesh 477445",
  phones: ["+91 77730 05190", "+91 93294 31725"],
  email: "info@siper.ac.in",
  website: "www.siper.ac.in",
  mapQuery:
    "Sun+Institute+of+Pharmaceutical+Education+%26+Research+SIPER+Lahar+Bhind+Madhya+Pradesh",
};

export type Course = {
  code: string;
  title: string;
  duration: string;
  seats: number;
  eligibility: string;
  since: number;
  blurb: string;
};

export const courses: Course[] = [
  {
    code: "B.Pharm",
    title: "Bachelor of Pharmacy",
    duration: "4 years, full time",
    seats: 100,
    eligibility: "10+2 with Physics, Chemistry and Biology / Mathematics",
    since: 2002,
    blurb:
      "The flagship degree: eight semesters covering pharmaceutics, pharmacology, pharmaceutical chemistry and pharmacognosy, with laboratory work every semester.",
  },
  {
    code: "D.Pharm",
    title: "Diploma in Pharmacy",
    duration: "2 years, full time",
    seats: 60,
    eligibility: "10+2 with Physics, Chemistry and Biology / Mathematics",
    since: 2018,
    blurb:
      "A practice-focused diploma that prepares students for registration as a pharmacist and for work in hospital and community pharmacy.",
  },
  {
    code: "M.Pharm (Pharmaceutics)",
    title: "Master of Pharmacy — Pharmaceutics",
    duration: "2 years, full time",
    seats: 15,
    eligibility: "B.Pharm from a PCI-approved institution",
    since: 2018,
    blurb:
      "Advanced formulation design, drug delivery systems and dissertation research under faculty supervision.",
  },
  {
    code: "M.Pharm (Pharmaceutical Chemistry)",
    title: "Master of Pharmacy — Pharmaceutical Chemistry",
    duration: "2 years, full time",
    seats: 15,
    eligibility: "B.Pharm from a PCI-approved institution",
    since: 2018,
    blurb:
      "Synthesis, analysis and quality control of drug molecules, with instrumentation-led project work.",
  },
];

export const facilities = [
  {
    title: "16 teaching laboratories",
    text: "Dedicated labs for pharmaceutics, pharmacology, pharmaceutical chemistry, pharmacognosy and instrumental analysis.",
  },
  {
    title: "Library & reading room",
    text: "Over 8,400 books and 20 national and international journals, with quiet reading space for individual and group study.",
  },
  {
    title: "Hostels on campus",
    text: "Separate boys' and girls' hostels with a combined capacity of about 100 beds, close to the academic block.",
  },
  {
    title: "Sports & gymnasium",
    text: "Playing fields and a gym so students keep a healthy routine alongside a demanding academic timetable.",
  },
  {
    title: "Auditorium",
    text: "Venue for seminars, guest lectures by practising pharmacists, cultural events and Pharmacist Day programmes.",
  },
  {
    title: "Canteen & medical support",
    text: "On-campus canteen and first-aid / medical support for resident and day-scholar students.",
  },
];

export const stats = [
  { value: "2002", label: "Established" },
  { value: "190", label: "Sanctioned seats" },
  { value: "16", label: "Laboratories" },
  { value: "34", label: "Faculty & staff" },
];
