import { ROUTES } from "@/lib/constants/routes.constant";
import { FaWhatsapp } from "react-icons/fa";
import { FiFacebook, FiInstagram, FiTwitter } from "react-icons/fi";
import type { NavDropdown } from "../types/types";

export const navDropdowns: NavDropdown[] = [
  {
    title: "About Us",
    links: [
      { name: "About Us", href: ROUTES.ABOUT_US, type: "link" },
      { name: "Mission & Vision", href: ROUTES.MISSION_VISION, type: "link" },
      { name: "About Ycb", href: ROUTES.ABOUT_YCB, type: "link" },
      { name: "About Ayush", href: ROUTES.ABOUT_AYUSH, type: "link" },
    ],
  },
  {
    title: "Academics",
    links: [
      { name: "Syllabus for (YV) Yoga Volunteer", href: "files/YV-Syllabus.pdf", type: "download" },
      { name: "Syllabus for (YPI) Yoga Protocol Instructor", href: "files/YPI-Syllabus.pdf", type: "download" },
      { name: "Syllabus for (YWI) Yoga Wellness Instructor", href: "files/YWI-Syllabus.pdf", type: "download" },
      { name: "Syllabus for (YTE) Yoga Teacher and Evaluator", href: "files/YTE-Syllabus.pdf", type: "download" },
      { name: "Syllabus for (YM) Yoga Master", href: "files/YM-Syllabus.pdf", type: "download" },
      { name: "Syllabus for (AYT) Assistant Yoga Therapist", href: "files/AYT-Syllabus.pdf", type: "download" },
      { name: "Syllabus for (YT) Yoga Therapist", href: ROUTES.YT_SYLLABUS, type: "link" },
      { name: "Syllabus for (TYC) Therapeutic Yoga Consultant", href: "files/TYC-Syllabus.pdf", type: "download" },
      { name: "Primary School Yoga Teacher", href: "files/Primary-School-Yoga.pdf", type: "download" },
      { name: "Higher Secondary School Yoga & Teacher", href: "files/Higher-School-Yoga.pdf", type: "download" },
      { name: "Syllabus for Primary School Yoga Certification", href: "files/Primary-Certification.pdf", type: "download" },
      { name: "Syllabus for Higher School Yoga Certification", href: "files/Higher-Certification.pdf", type: "download" },
      { name: "Yoga Education Goals", href: "files/Yoga-Education-Goals.pdf", type: "download" },
    ],
  },
  {
    title: "Student Corner",
    links: [
      { name: "Registration Form", href: ROUTES.REGISTRATION_FORM, type: "link" },
      { name: "PRE-MEDICAL Form", href: ROUTES.PRE_MEDICAL_FORM, type: "link" },
      {
        name: "Sample Paper",
        type: "submenu",
        sublinks: [
          { name: "Ref Book : Yogic Sukshma Vyayam", href: "files/yogic-sukshma-vyayam.pdf", type: "download" },
          { name: "Yoga Sample Paper-I", href: "files/sample_paper_yoga.pdf", type: "download" },
          { name: "Yoga Sample Paper-II", href: "files/sample_paper_yoga1.pdf", type: "download" },
          { name: "Yoga Sample Paper-III", href: "files/sample_paper_yoga2.pdf", type: "download" },
        ],
      },
      {
        name: "Fee Structure",
        type: "submenu",
        sublinks: [
          { name: "Indian Candidates", href: "/", type: "link" },
          { name: "Foreign Candidates", href: "/", type: "link" },
        ],
      },
      {
        name: "Yoga Certificate Sample",
        type: "submenu",
        sublinks: [
          { name: "Yoga Volunteer", href: "files/yogavolunteercertificatesam.pdf", type: "download" },
          { name: "Yoga Protocol Instructor", href: "files/yogprotocolinstructor-certi.pdf", type: "download" },
          { name: "Yoga Wellness Instructor", href: "files/yogawellnesscertificatecopy.pdf", type: "download" },
          { name: "Yoga Teacher & Evaluator", href: "files/yogateachercertificatecopy.pdf", type: "download" },
        ],
      },
      {
        name: "Yoga Volunteer",
        type: "submenu",
        sublinks: [
          { name: "Sample Certificate for Yoga Volunteer", href: "files/8930300615.pdf", type: "download" },
          { name: "Yoga Volunteer Book in Hindi", href: "files/YogaBook.pdf", type: "download" },
          { name: "Yoga Volunteer Book in English", href: "files/YogaBookEnglish.pdf", type: "download" },
          { name: "Syllabus for Yoga Volunteer", href: "files/Syllabus-YV-1.pdf", type: "download" },
          { name: "Live Classes (Ministry of AYUSH)", href: "https://www.youtube.com/c/MinistryofAYUSHofficial", type: "link" },
          { name: "Live Classes (Yoga Certification Body)", href: "https://www.youtube.com/c/YogaCertificationBodyMSPL", type: "link" },
        ],
      },
      { name: "Yoga Professionals Guideline", href: "files/Guideline-for-Yoga-Professionals.pdf", type: "download" },
      { name: "Result", href: ROUTES.RESULT, type: "link" },
      { name: "Complaints & Appeals", href: ROUTES.COMPLAINTS_APPEALS, type: "link" },
      { name: "Complaint & Appeal Process", href: "files/COMPLAINT-AND-APPEAL-FORMAT.pdf", type: "download" },
      { name: "Impartiality Statement", href: "files/Impartiality_Statement.pdf", type: "download" },
    ],
  },
  {
    title: "Candidates",
    links: [
      { name: "Indian Candidates", href: "/", type: "link" },
      { name: "Foreign Candidates", href: "/", type: "link" },
    ],
  },
  {
    title: "Activities",
    links: [
      { name: "Gallery", href: ROUTES.GALLERY, type: "link" },
      { name: "Videos", href: ROUTES.VIDEOS, type: "link" },
      { name: "News", href: ROUTES.NEWS, type: "link" },
      { name: "Environment", href: ROUTES.ENVIRONMENT, type: "link" },
      { name: "Benefits", href: ROUTES.BENEFITS, type: "link" },
      { name: "Faqs", href: ROUTES.FAQS, type: "link" },
    ],
  },
];


export const faqs = [
  {
    question: "What is MSPL Yoga Certification?",
    answer:
      "MSPL Yoga Certification is an authorized platform that conducts Yoga Certification Board (YCB) verified exams for yoga professionals, trainers, and practitioners. We ensure that every candidate receives a nationally recognized yoga certification approved by the Ministry of AYUSH, Government of India.",
  },
  {
    question: "What is YCB and why is it important?",
    answer:
      "The Yoga Certification Board (YCB) is established under the Ministry of AYUSH, Government of India, to promote and standardize yoga education and certification. Being YCB-certified ensures credibility, professional recognition, and eligibility for teaching yoga in India and abroad.",
  },
  {
    question: "Who can apply for the MSPL Yoga Certification exam?",
    answer:
      "Anyone interested in pursuing yoga professionally or deepening their understanding of yoga can apply. We offer certification exams for different levels — Yoga Volunteer, Yoga Protocol Instructor, Yoga Wellness Instructor, Yoga Teacher, and Yoga Therapist.",
  },
  {
    question: "How do I register for the YCB Yoga exam through MSPL?",
    answer:
      "You can register directly through our official website by filling out the online application form. After submission, our team will verify your details and guide you through the payment, training, and exam process. You can also contact our support team for assistance.",
  },
  {
    question: "What documents are required for registration?",
    answer:
      "You will need a valid ID proof (Aadhaar, PAN, or Passport), a recent photograph, educational qualification documents, and proof of yoga training (if applicable). Our support team will guide you through the document upload process.",
  },
  {
    question: "What are the levels of YCB certification available?",
    answer:
      "MSPL conducts exams for multiple YCB levels, including Yoga Volunteer (Level 1), Yoga Protocol Instructor (Level 2), Yoga Wellness Instructor (Level 3), Yoga Teacher and Evaluator (Level 4), and Yoga Therapist (Level 5).",
  },
  {
    question: "Is the certification recognized nationally and internationally?",
    answer:
      "Yes, YCB certifications issued through MSPL are recognized by the Ministry of AYUSH, Government of India, and accepted globally, helping you build a professional yoga career both in India and abroad.",
  },
  {
    question: "Do you provide training before the certification exam?",
    answer:
      "Yes, MSPL offers comprehensive training programs by certified yoga instructors to prepare candidates for YCB exams. The training includes theory, practical sessions, and mock tests to ensure you are fully ready for the certification.",
  },
  {
    question: "How can I contact MSPL for more information?",
    answer:
      "You can reach us through our official website’s contact form, email us at info@msplyogacertification.com, or call our support team for registration and training-related queries.",
  },
];



export const socialLinks = [
  { href: "https://www.facebook.com/OnlineYogaExam", icon: FiFacebook },
  { href: "https://twitter.com/MsplYoga", icon: FiTwitter },
  { href: "http://api.whatsapp.com/send?phone=918930300615", icon: FaWhatsapp },
  { href: "https://www.instagram.com/msplyoga?igsh=MXA3YXZzY3RrYmk3dg", icon: FiInstagram },
];

export const footerLinks = [
  {
    title: "About Us",
    links: [
      { name: "About Us", href: ROUTES.ABOUT_US },
      { name: "Mission & Vision", href: ROUTES.MISSION_VISION },
      { name: "About YCB", href: ROUTES.ABOUT_YCB },
      { name: "About AYUSH", href: ROUTES.ABOUT_AYUSH },
      { name: "Indian Candidates", href: ROUTES.CANDIDATES },
      { name: "Foreign Candidates", href: ROUTES.CANDIDATES },
    ],
  },
  {
    title: "Academics",
    links: [
      { name: "Yoga Volunteer (YV)", href: ROUTES.HOME },
      { name: "Yoga Protocol Instructor (YPI)", href: ROUTES.HOME },
      { name: "Yoga Wellness Instructor (YWI)", href: ROUTES.HOME },
      { name: "Yoga Teacher & Evaluator (YTE)", href: ROUTES.HOME },
      { name: "Yoga Master (YM)", href: ROUTES.HOME },
      { name: "Assistant Yoga Therapist (AYT)", href: ROUTES.HOME },
      { name: "Yoga Therapist (YT)", href: ROUTES.YT_SYLLABUS },
      { name: "Therapeutic Yoga Consultant (TYC)", href: ROUTES.HOME },
    ],
  },
  {
    title: "Activities",
    links: [
      { name: "Gallery", href: ROUTES.GALLERY },
      { name: "Videos", href: ROUTES.VIDEOS },
      { name: "News", href: ROUTES.NEWS },
      { name: "Environment", href: ROUTES.ENVIRONMENT },
      { name: "Benefits", href: ROUTES.BENEFITS },
      { name: "FAQs", href: ROUTES.FAQS },
    ],
  },
  {
    title: "Student Corner",
    links: [
      { name: "Registration Form", href: ROUTES.REGISTRATION_FORM },
      { name: "PRE-MEDICAL Form", href: ROUTES.PRE_MEDICAL_FORM },
      { name: "Sample Paper", href: "images/sample_paper_yoga.pdf" }, 
      { name: "Fee Structure", href: ROUTES.HOME },
      { name: "Yoga Certificate Samples", href: "images/yogateachercertificatecopy-converted.pdf" }, 
      { name: "Yoga Professionals Guideline", href: "images/Guideline-for-Yoga-Professionals.pdf" }, 
      { name: "Result", href: ROUTES.RESULT },
      { name: "Complaints & Appeals", href: ROUTES.COMPLAINTS_APPEALS },
    ],
  },
];



export const support = [
  { title: "+91 893-030-0615", url: "tel:+918930300615", type: "tel" },
  { title: "+91 999-177-7717", url: "tel:+919991777717", type: "tel" },
  { title: "yogacertificationbody@gmail.com", url: "mailto:yogacertificationbody@gmail.com", type: "email" },
];


