import {
  Pill, Scissors, Baby, Flower2, Microscope, Brain, FlaskConical, Activity,
  type LucideIcon,
} from "lucide-react";
import medicineImg from "@/assets/dept-medicine.jpg";
import surgeryImg from "@/assets/dept-surgery.jpg";
import paediatricsImg from "@/assets/dept-paediatrics.jpg";
import gynaecologyImg from "@/assets/dept-gynaecology.jpg";
import laparoscopicImg from "@/assets/dept-laparoscopic.jpg";
import neurorehabImg from "@/assets/dept-neurorehab.jpg";
import pharmacyImg from "@/assets/dept-pharmacy.jpg";
import diagnosticsImg from "@/assets/dept-diagnostics.jpg";

export type Department = {
  slug: string;
  name: string;
  tagline: string;
  desc: string;
  icon: LucideIcon;
  image: string;
  about: string;
  services: string[];
  conditions: string[];
  highlights: { title: string; desc: string }[];
};

export const departments: Department[] = [
  {
    slug: "medicine",
    name: "Medicine",
    tagline: "Internal Medicine & Allied Subspecialties",
    desc: "Expert internal medicine & allied subspecialty care.",
    icon: Pill,
    image: medicineImg,
    about:
      "Our Department of Medicine offers comprehensive diagnosis and treatment for adults across a wide range of acute and chronic conditions, led by board-certified internists with decades of combined expertise.",
    services: [
      "General medical consultation",
      "Chronic disease management (diabetes, hypertension)",
      "Preventive health screenings",
      "Infectious disease care",
      "Cardiology & pulmonology referrals",
      "Geriatric medicine",
    ],
    conditions: ["Diabetes", "Hypertension", "Asthma", "Thyroid disorders", "Anaemia", "Liver disease"],
    highlights: [
      { title: "Board-Certified", desc: "FCPS & MRCP qualified specialists" },
      { title: "Same-Day Slots", desc: "Urgent consultation available" },
      { title: "Holistic Plans", desc: "Lifestyle + medication guidance" },
    ],
  },
  {
    slug: "surgery",
    name: "Surgery",
    tagline: "Advanced Surgical Care",
    desc: "Advanced surgical procedures with modern techniques.",
    icon: Scissors,
    image: surgeryImg,
    about:
      "Our surgical department delivers world-class procedures using the latest techniques and equipment, with dedicated pre- and post-operative care for the safest outcomes.",
    services: [
      "General surgery",
      "Emergency surgical care",
      "Day-care procedures",
      "Trauma & accident management",
      "Hernia & gallbladder surgery",
      "Wound care & follow-up",
    ],
    conditions: ["Appendicitis", "Hernia", "Gallstones", "Trauma", "Abscess", "Lipoma"],
    highlights: [
      { title: "Modern OT", desc: "Fully equipped operating theatres" },
      { title: "Expert Surgeons", desc: "Years of experience across specialties" },
      { title: "Safe Recovery", desc: "Dedicated post-op monitoring" },
    ],
  },
  {
    slug: "paediatrics",
    name: "Paediatrics",
    tagline: "Compassionate Child & Neonatal Care",
    desc: "Compassionate child & neonatal healthcare.",
    icon: Baby,
    image: paediatricsImg,
    about:
      "From newborns to teenagers, our paediatric team provides gentle, expert care in a child-friendly environment — covering everything from routine check-ups to specialised neonatal treatment.",
    services: [
      "Newborn & neonatal care",
      "Vaccinations & immunisation",
      "Growth & development monitoring",
      "Childhood illness treatment",
      "Nutrition counselling",
      "Adolescent health",
    ],
    conditions: ["Fever & flu", "Asthma", "Allergies", "Ear infections", "Growth issues", "Nutritional deficiency"],
    highlights: [
      { title: "Child-Friendly", desc: "Designed for kids' comfort" },
      { title: "Neonatal Unit", desc: "Specialised newborn care" },
      { title: "Vaccine Tracker", desc: "Reminders for every dose" },
    ],
  },
  {
    slug: "gynaecology",
    name: "Gynaecology",
    tagline: "Comprehensive Women's Health",
    desc: "Comprehensive women's health & maternity care.",
    icon: Flower2,
    image: gynaecologyImg,
    about:
      "We offer compassionate and confidential care for women at every stage of life — from adolescence and pregnancy to menopause — with a focus on dignity, comfort and clinical excellence.",
    services: [
      "Antenatal & postnatal care",
      "Normal & C-section deliveries",
      "Ultrasound & fetal monitoring",
      "Family planning & counselling",
      "Menstrual disorder treatment",
      "Menopause management",
    ],
    conditions: ["Pregnancy care", "PCOS", "Fibroids", "Infertility", "Menstrual issues", "Menopause"],
    highlights: [
      { title: "Female Specialists", desc: "Expert women doctors on staff" },
      { title: "Maternity Suite", desc: "Comfortable delivery rooms" },
      { title: "4D Ultrasound", desc: "Advanced fetal imaging" },
    ],
  },
  {
    slug: "laparoscopic",
    name: "Laparoscopic",
    tagline: "Minimally Invasive Surgery",
    desc: "Minimally invasive surgery for faster recovery.",
    icon: Microscope,
    image: laparoscopicImg,
    about:
      "Laparoscopic — or 'keyhole' — surgery uses tiny incisions and high-definition cameras for precise procedures, meaning less pain, smaller scars and dramatically faster recovery times.",
    services: [
      "Laparoscopic gallbladder removal",
      "Hernia repair (keyhole)",
      "Diagnostic laparoscopy",
      "Appendectomy",
      "Gynae-laparoscopy",
      "Adhesion removal",
    ],
    conditions: ["Gallstones", "Hernia", "Endometriosis", "Ovarian cysts", "Appendicitis", "Adhesions"],
    highlights: [
      { title: "HD Imaging", desc: "4K laparoscopic vision systems" },
      { title: "Less Pain", desc: "Tiny incisions, minimal scarring" },
      { title: "Quick Discharge", desc: "Most patients home in 24h" },
    ],
  },
  {
    slug: "neurorehab",
    name: "Neurorehab",
    tagline: "Neurological Rehabilitation",
    desc: "Specialized neurological rehabilitation programs.",
    icon: Brain,
    image: neurorehabImg,
    about:
      "Our Neurorehabilitation programme helps patients recover function and independence after stroke, brain injury or neurological disease — combining physiotherapy, occupational therapy and speech therapy.",
    services: [
      "Post-stroke rehabilitation",
      "Spinal injury recovery",
      "Physiotherapy",
      "Speech & language therapy",
      "Occupational therapy",
      "Neuro-cognitive training",
    ],
    conditions: ["Stroke", "Parkinson's", "Spinal injury", "Brain injury", "Multiple sclerosis", "Cerebral palsy"],
    highlights: [
      { title: "Multi-Disciplinary", desc: "Doctors, therapists & psychologists" },
      { title: "Custom Programmes", desc: "Tailored to each patient" },
      { title: "Family Support", desc: "Caregiver training included" },
    ],
  },
  {
    slug: "pharmacy",
    name: "Pharmacy",
    tagline: "24/7 In-House Pharmacy",
    desc: "24/7 in-house pharmacy with verified medicines.",
    icon: FlaskConical,
    image: pharmacyImg,
    about:
      "Our on-site pharmacy is open round the clock and stocks a complete range of prescription medications, OTC products and medical consumables — all sourced from verified manufacturers.",
    services: [
      "24/7 prescription dispensing",
      "Verified branded medicines",
      "Medication counselling",
      "Home delivery (selected areas)",
      "Insurance billing",
      "Medical equipment & consumables",
    ],
    conditions: ["All prescriptions", "OTC needs", "Chronic refills", "Vitamins & supplements", "Medical devices", "First-aid supplies"],
    highlights: [
      { title: "Always Open", desc: "24 hours, 7 days a week" },
      { title: "Verified Stock", desc: "Genuine, well-stored medicines" },
      { title: "Pharmacist On-Call", desc: "Free medication advice" },
    ],
  },
  {
    slug: "diagnostics",
    name: "Diagnostics",
    tagline: "State-of-the-Art Labs & Imaging",
    desc: "State-of-the-art labs & imaging diagnostics.",
    icon: Activity,
    image: diagnosticsImg,
    about:
      "Accurate diagnosis is the foundation of great care. Our diagnostic centre combines advanced imaging, automated lab analysers and expert radiologists to deliver fast, reliable results.",
    services: [
      "MRI & CT scan",
      "Ultrasound & 4D imaging",
      "Digital X-ray",
      "Full blood pathology",
      "ECG & echocardiography",
      "Same-day reporting",
    ],
    conditions: ["Pre-op workup", "Cancer screening", "Cardiac evaluation", "Pregnancy scans", "Bone & joint imaging", "Routine health checks"],
    highlights: [
      { title: "Fast Reports", desc: "Most results within hours" },
      { title: "Expert Radiologists", desc: "Reviewed by specialists" },
      { title: "Modern Equipment", desc: "Latest imaging technology" },
    ],
  },
];

export const getDepartmentBySlug = (slug?: string) =>
  departments.find((d) => d.slug === slug);
