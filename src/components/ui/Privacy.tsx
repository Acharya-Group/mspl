"use client";

import React from "react";
import SubHeading from "../common/SubHeading";
import Para from "../common/Para";

const Privacy = () => {
  return (
    <section className="max-w-5xl mx-auto px-4 py-10 text-gray-800">
      {/* Organization Info */}
      <div className="mb-8 text-center">
        <Para content="<strong>Organization:</strong> MSPL Personnel Registration and Certification Body (PRCB)" />
        <Para content={`<strong>Website:</strong> <a href="https://www.msplyoga.com" target="_blank" rel="noopener noreferrer" class="text-blue-600 underline">www.msplyoga.com</a>`} />
      </div>

      <Para
        content={`At <strong>MSPL PRCB</strong>, your privacy is of utmost importance to us. We are committed to protecting the confidentiality,
        integrity, and security of all personal information collected from our candidates, trainers, examiners, and website visitors.
        This Privacy Policy explains how we collect, use, store, process, and protect your data in accordance with applicable
        regulations and the ethical standards prescribed by the Yoga Certification Board (YCB) and the Ministry of AYUSH,
        Government of India.`}
      />

      {/* Sections */}
      <Section
        number="1"
        title="Purpose of this Policy"
        content={[
          "This Privacy Policy ensures transparency in how MSPL PRCB manages your personal information.",
          "It aims to help you understand what information we collect, how we safeguard it, and what rights you have.",
          "By registering with MSPL PRCB or using our website, you consent to the collection and use of your personal data as outlined here.",
        ]}
      />

      <Section
        number="2"
        title="Information We Collect"
        content={[
          "We collect information through registration forms, examination applications, and communication channels.",
        ]}
      >
        <h3 className="font-semibold text-lg lg:text-xl mt-4">A. Personal Information</h3>
        <ul className="list-disc ml-6 space-y-1">
          <li>Full name, gender, date of birth</li>
          <li>Contact details (email, phone, address)</li>
          <li>Educational qualifications, training details</li>
          <li>Identity proofs (Aadhaar, PAN, or valid ID)</li>
          <li>Photograph and signature</li>
          <li>Exam details (level, batch, etc.)</li>
        </ul>

        <h3 className="font-semibold text-lg lg:text-xl mb-0 mt-4">B. Sensitive Personal Data (if applicable)</h3>
        
        <ul className="list-disc ml-6 space-y-1">
          <li>
            Medical or health information (only when voluntarily provided or required for Yoga Therapy examinations)
          </li>
        </ul>
      </Section>

      <Section
        number="3"
        title="How We Use Your Information"
        content={[
          "We use collected data only for legitimate and authorized purposes such as registration, communication, and certification.",
        ]}
      >
        <ul className="list-disc ml-6 space-y-1">
          <li>Verification and eligibility assessment for YCB exams</li>
          <li>Issuing and validating certificates</li>
          <li>Maintaining candidate and certification records</li>
          <li>Compliance with YCB and AYUSH requirements</li>
          <li>Improving services and responding to inquiries</li>
          <li>We never use your data for marketing without explicit consent</li>
        </ul>
      </Section>

      <Section
        number="4"
        title="Data Storage and Retention"
        content={[
          "Your data is stored securely using encryption and access control.",
          "We retain it as long as required for certification, legal, and audit purposes.",
          "After the retention period, data is deleted or anonymized safely.",
        ]}
      />

      <Section
        number="5"
        title="Data Protection and Security Measures"
        content={[
          "We employ administrative, technical, and physical measures to protect your data, including firewalls, encryption, access control, and regular audits.",
          "Despite strong protections, no digital system is 100% secure — but we take all reasonable precautions to minimize risks.",
        ]}
      />

      <Section
        number="6"
        title="Sharing and Disclosure of Information"
        content={[
          "We do not sell, rent, or trade personal data. Sharing occurs only when required:",
        ]}
      >
        <ul className="list-disc ml-6 space-y-1">
          <li>With YCB & AYUSH for verification or compliance</li>
          <li>With authorized partners for exam conduct (under confidentiality)</li>
          <li>With government authorities when required by law</li>
          <li>With IT providers for hosting or data management</li>
        </ul>
      </Section>

      <Section
        number="7"
        title="Use of Cookies"
        content={[
          "Our website may use cookies to enhance experience and analyze traffic.",
          "You can disable cookies in your browser, though some features may not work properly.",
        ]}
      />

      <Section
        number="8"
        title="Your Rights"
        content={[
          "You have rights to access, correct, delete, or restrict processing of your data, and to withdraw consent.",
          "You may contact us to exercise these rights.",
        ]}
      />

      <Section
        number="9"
        title="Children’s Privacy"
        content={[
          "We do not knowingly collect data from individuals under 18 without guardian consent.",
          "If found, such data will be deleted immediately upon verification.",
        ]}
      />

      <Section
        number="10"
        title="Data Transfer"
        content={[
          "All personal data is processed within India. Any transfer outside India will follow legal safeguards.",
        ]}
      />

      <Section
        number="11"
        title="Links to External Websites"
        content={[
          "Our website may contain third-party links. We are not responsible for their content or privacy practices.",
          "Please review their privacy policies before sharing any data.",
        ]}
      />

      <Section
        number="12"
        title="Policy Updates"
        content={[
          "MSPL PRCB reserves the right to modify this policy as needed.",
          "The latest version will always be available on our website with a revision date.",
        ]}
      />

      <Section number="13" title="Contact Us">
        <address className="not-italic leading-relaxed">
          <Para content="<strong>MSPL Personnel Registration and Certification Body (PRCB)</strong>" />
          <Para content="#107, Shiv Vihar AB, Near Maharani Bagh Palace," />
          <Para content="Lalarpura, Gandhi Path (West), Vaishali Nagar, Jaipur (Rajasthan) - 302021" />
          <Para content='📧 <a href="mailto:yogacertificationbody@gmail.com" class="text-blue-600 underline">yogacertificationbody@gmail.com</a>' />
          <Para content='📞 <a href="tel:+918930300615" class="text-blue-600 underline">8930300615</a>' />
          <Para content='🌐 <a href="https://www.msplyoga.com" class="text-blue-600 underline">www.msplyoga.com</a>' />
        </address>
      </Section>

      <Section
        number="14"
        title="Consent"
        content={[
          "By registering or interacting with MSPL PRCB, you acknowledge that you have read and agreed to this Privacy Policy.",
        ]}
      />
    </section>
  );
};

export default Privacy;

// Reusable Section Component
const Section = ({
  number,
  title,
  content,
  children,
}: {
  number: string;
  title: string;
  content?: string[];
  children?: React.ReactNode;
}) => (
  <div className="mb-8">
    <h2 className="text-xl font-semibold text-gray-900 mb-2">
      {number}. {title}
    </h2>
    {content?.map((para, i) => (
      <Para  key={i} content={para} />
    ))}
    {children}
  </div>
);
