import { FaWhatsapp } from "react-icons/fa";
import { FiFacebook, FiInstagram, FiTwitter } from "react-icons/fi";

export const navDropdowns = [
  {
    title: "About Us",
    links: [
      { name: "About Us", href: "/about", type: "link" },
      { name: "Mission & Vision", href: "/mission-vision", type: "link" },
      { name: "About Ycb", href: "/about-ycb", type: "link" },
      { name: "About Ayush", href: "/about-ayush", type: "link" },
    ],
  },
  {
    title: "Academics",
    links: [
      { name: "Syllabus for (YV) Yoga Volunteer", href: "/", type: "download" },
      { name: "Syllabus for (YPI) Yoga Protocol Instructor", href: "/", type: "download" },
      { name: "Syllabus for (YWI) Yoga Wellness Instructor", href: "/", type: "download" },
      { name: "Syllabus for (YTE) Yoga Teacher and Evaluator", href: "/", type: "download" },
      { name: "Syllabus for (YM) Yoga Master", href: "/", type: "download" },
      { name: "Syllabus for (AYT) Assistant Yoga Therapist", href: "/", type: "download" },
      { name: "Syllabus for (YT) Yoga Therapist", href: "/demo", type: "link" },
      { name: "Syllabus for (TYC) Therapeutic Yoga Consultant", href: "/", type: "link" },
      { name: "Primary School Yoga Teacher", href: "/", type: "download" },
      { name: "Higher Secondary School Yoga & Teacher", href: "/", type: "download" },
      { name: "Syllabus for Primary School Yoga Certification", href: "/", type: "download" },
      { name: "Syllabus for Higher School Yoga Certification", href: "/", type: "download" },
      { name: "Yoga Education Goals", href: "/", type: "download" },
    ],
  },
  {
    title: "Centers",
    links: [
      { name: "Apply for Exam Centre", href: "/", type: "link" },
      { name: "Exam Centre List", href: "/", type: "link" },
      { name: "Centre Criteria", href: "/", type: "link" },
      { name: "Centre Checklist", href: "/", type: "link" },
      { name: "Consent Form", href: "/", type: "link" },
      { name: "Counselling Centre", href: "/", type: "link" },
      { name: "Guidelines for Online Exam", href: "/", type: "link" },
    ],
  },
  {
    title: "Student Corner",
    links: [
      { name: "Registration Form", href: "/", type: "link" },
      { name: "PRE-MEDICAL Form", href: "/", type: "link" },
      {
        name: "Sample Paper",
        type: "submenu",
        sublinks: [
          { name: "Ref Book : Yogic Sukshma Vyayam", href: "images/yogic-sukshma-vyayam.pdf", type: "download" },
          { name: "Yoga Sample Paper-I", href: "images/sample_paper_yoga.pdf", type: "download" },
          { name: "Yoga Sample Paper-II", href: "images/sample_paper_yoga1.pdf", type: "download" },
          { name: "Yoga Sample Paper-III", href: "images/sample_paper_yoga2.pdf", type: "download" },
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
          { name: "Yoga Volunteer", href: "images/yogavolunteercertificatesam-converted.pdf", type: "download" },
          { name: "Yoga Protocol Instructor", href: "images/yogprotocolinstructor-certi-converted.pdf", type: "download" },
          { name: "Yoga Wellness Instructor", href: "images/yogawellnesscertificatecopy-converted.pdf", type: "download" },
          { name: "Yoga Teacher & Evaluator", href: "images/yogateachercertificatecopy-converted.pdf", type: "download" },
        ],
      },
      {
        name: "Yoga Volunteer",
        type: "submenu",
        sublinks: [
          { name: "Sample Certificate for Yoga Volunteer", href: "images/8930300615.pdf", type: "download" },
          { name: "Yoga Volunteer Book in Hindi", href: "images/YogaBook.pdf", type: "download" },
          { name: "Yoga Volunteer Book in English", href: "images/YogaBookEnglish.pdf", type: "download" },
          { name: "Syllabus for Yoga Volunteer", href: "images/Syllabus-YV-1.pdf", type: "download" },
          { name: "Live Classes (Ministry of AYUSH)", href: "https://www.youtube.com/c/MinistryofAYUSHofficial", type: "link" },
          { name: "Live Classes (Yoga Certification Body)", href: "https://www.youtube.com/c/YogaCertificationBodyMSPL", type: "link" },
        ],
      },
      { name: "Yoga Professionals Guideline", href: "images/Guideline-for-Yoga-Professionals.pdf", type: "download" },
      { name: "Result", href: "result.aspx", type: "link" },
      { name: "Complaints & Appeals", href: "complaintsAndAppeals.aspx", type: "link" },
      { name: "Complaint & Appel Process", href: "images/COMPLAINT-AND-APPEAL-FORMAT.pdf", type: "download" },
      { name: "Impartiality Statement", href: "images/Impartiality_Statement.pdf", type: "download" },
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
      { name: "Gallery", href: "/", type: "link" },
      { name: "Videos", href: "/", type: "link" },
      { name: "News", href: "/", type: "link" },
      { name: "Environment", href: "/", type: "link" },
      { name: "Benefits", href: "/", type: "link" },
      { name: "Faqs", href: "/", type: "link" },
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

export const pages = [
  { title: "Home", url: "/" }, 
  { title: "Home", url: "/" }, 
  { title: "Home", url: "/" }, 
  { title: "Home", url: "/" }, 
  { title: "Home", url: "/" }, 
];

export const projectsLink = [
  { title: "demo", url: "/" },
  { title: "demo", url: "/" },
  { title: "demo", url: "/" },
  { title: "demo", url: "/" },
  { title: "demo", url: "/" },
];

export const downloads = [
  { title: "demo", url: "/downloads/application-form.pdf" },
  { title: "demo", url: "/downloads/application-form.pdf" },
  { title: "demo", url: "/downloads/application-form.pdf" },
  { title: "demo", url: "/downloads/application-form.pdf" },
  { title: "demo", url: "/downloads/application-form.pdf" },
  
];

export const support = [
  { title: "+91 893-030-0615", url: "tel:+918930300615", type: "tel" },
  { title: "+91 999-177-7717", url: "tel:+919991777717", type: "tel" },
  { title: "yogacertificationbody@gmail.com", url: "mailto:yogacertificationbody@gmail.com", type: "email" },
];


