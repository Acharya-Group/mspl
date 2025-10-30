"use client";

import React from "react";
import Para from "../common/Para";

const TermsConditions = () => {
  return (
    <section className="max-w-5xl mx-auto px-4 py-10 text-gray-800">

      {/* Effective Date & Info */}
      <div className="text-center mb-8">
         <Para content="<strong>Effective Date:</strong>25/11/2015"/>
          <Para content="<strong>Organization:</strong> MSPL Personnel Registration and
          Certification Body (PRCB)"/>
        <p>
          <strong>Website:</strong>{" "}
          <a
            href="https://www.msplyoga.com"
            className="text-blue-600 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            www.msplyoga.com
          </a>
        </p>
      </div>
      <Para className="my-5" content=" Welcome to <strong>MSPL PRCB</strong>. By accessing our website,
        registering for examinations, applying for certification, or using any
        of our services, you agree to abide by the following Terms and
        Conditions. Please read them carefully, as they constitute a legally
        binding agreement between you (“User,” “Candidate,” or “Applicant”) and
        MSPL PRCB (“We,” “Our,” or “Us”)."/>

      {/* Sections */}
      <Section
        number="1"
        title="Purpose"
        content={[
          "These Terms and Conditions govern the use of MSPL PRCB’s website, online services, examination processes, registration systems, and all other activities conducted under the authorization of the Yoga Certification Board (YCB), Ministry of AYUSH, Government of India.",
        ]}
      />

      <Section
        number="2"
        title="Acceptance of Terms"
        content={[
          "By registering with MSPL PRCB, submitting forms, or accessing our platforms, you acknowledge that you have read, understood, and accepted these Terms and Conditions along with our Privacy Policy.",
          "If you do not agree to any part of these terms, you are advised not to use our services or website.",
        ]}
      />

      <Section
        number="3"
        title="Eligibility"
        content={[
          "To register or appear for any YCB examination through MSPL PRCB, you must:",
        ]}
      >
        <ul className="list-disc ml-6 space-y-1">
          <li>Fulfill the eligibility criteria prescribed by the YCB.</li>
          <li>Provide accurate and verifiable information in your application.</li>
          <li>Agree to abide by examination and certification regulations.</li>
          <li>Be at least 18 years of age (or as specified for the chosen level).</li>
        </ul>
        <p className="mt-3">
          Any false information or misrepresentation may result in rejection, suspension, or cancellation of certification.
        </p>
      </Section>

      <Section
        number="4"
        title="Registration and Examination"
        content={[
          "All applications must be submitted through the official MSPL PRCB website or authorized registration portal.",
          "Candidates must ensure that all information provided is accurate and up to date.",
          "Examination schedules, venues, and procedures follow YCB guidelines and may change with prior notice.",
          "MSPL PRCB reserves the right to verify all documents and candidate information.",
          "Candidates must adhere to examination rules and ethical conduct at all times.",
        ]}
      />

      <Section
        number="5"
        title="Certification"
        content={[
          "Certifications are awarded only after successful completion of all required examinations, assessments, and verifications.",
          "The decision of the examiner and YCB, as conveyed through MSPL PRCB, is final and binding.",
          "Any misconduct, unfair means, or ethical violations may lead to revocation of certification.",
          "Certificates remain the property of YCB and can be verified or withdrawn as per regulatory norms.",
        ]}
      />

      <Section
        number="6"
        title="Payment Terms"
        content={[
          "All examination and registration fees must be paid online through secure payment gateways or authorized transfers.",
          "Fees once paid are non-refundable and non-transferable, except in cases of technical errors or cancellations by MSPL PRCB.",
          "Candidates are responsible for ensuring successful payment transactions.",
          "MSPL PRCB is not responsible for issues caused by third-party payment systems or banking delays.",
        ]}
      />

      <Section
        number="7"
        title="Code of Conduct"
        content={[
          "All candidates, trainers, and evaluators must maintain professional integrity and discipline.",
          "Misbehavior, harassment, or cheating during exams or communication will lead to disciplinary action.",
          "Respect examination staff, invigilators, and administrative authorities.",
          "Digital impersonation or fraudulent activity will be reported to the YCB and may lead to legal action.",
        ]}
      />

      <Section
        number="8"
        title="Intellectual Property Rights"
        content={[
          "All website content, materials, logos, and documents are protected by intellectual property laws.",
          "No part may be reproduced or distributed without written permission from MSPL PRCB.",
          "YCB name, logo, and trademarks belong to the Yoga Certification Board and are used under authorization.",
        ]}
      />

      <Section
        number="9"
        title="Data Protection"
        content={[
          "MSPL PRCB collects and processes personal data in accordance with its Privacy Policy.",
          "By using our website and services, you consent to the lawful use of your data for registration, certification, and related purposes.",
        ]}
      />

      <Section
        number="10"
        title="Limitation of Liability"
        content={[
          "MSPL PRCB will not be liable for any damages arising out of the use of our website or services.",
          "We make every effort to maintain accuracy but do not guarantee completeness or freedom from errors.",
          "We are not responsible for delays caused by technical issues, natural calamities, or force majeure events.",
        ]}
      />

      <Section
        number="11"
        title="Suspension or Termination"
        content={[
          "MSPL PRCB reserves the right to suspend or terminate a candidate’s registration or certification in case of:",
        ]}
      >
        <ul className="list-disc ml-6 space-y-1">
          <li>Violation of these Terms and Conditions.</li>
          <li>Misuse of certification or impersonation.</li>
          <li>Submission of false information or documents.</li>
          <li>Misconduct during examinations or communication.</li>
        </ul>
      </Section>

      <Section
        number="12"
        title="Third-Party Links and Services"
        content={[
          "Our website may contain links to third-party sites for convenience.",
          "MSPL PRCB is not responsible for their content, policies, or reliability. Accessing them is at your own risk.",
        ]}
      />

      <Section
        number="13"
        title="Changes and Updates"
        content={[
          "MSPL PRCB reserves the right to update these Terms and Conditions at any time.",
          "The latest version will be available on our official website with the effective date.",
          "Continued use of our site or services implies acceptance of the updated terms.",
        ]}
      />

      <Section
        number="14"
        title="Governing Law and Jurisdiction"
        content={[
          "These Terms and Conditions are governed by the laws of India.",
          "Any disputes shall be subject to the exclusive jurisdiction of the courts located in Jaipur, India.",
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
        number="16"
        title="Acknowledgment and Consent"
        content={[
          "By registering, applying, or participating in any examination through MSPL PRCB, you acknowledge that you have read, understood, and agreed to abide by these Terms and Conditions in their entirety.",
        ]}
      />
    </section>
  );
};

export default TermsConditions;

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
