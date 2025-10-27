import React from "react";
import SubHeading from "../common/SubHeading";
import Para from "../common/Para";

const AboutYcb = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      <div className="space-y-6">
        <SubHeading content="About Yoga Certification Board" />

        <Para content={`With the growing popularity of Yoga across the world, the demand for institutionally trained Yoga Teachers, Instructors, and Therapists is increasing rapidly. The Yoga Certification Board (YCB) plays a crucial role in addressing this rising demand by setting standards for the certification and professional assessment of Yoga practitioners.`} />

        <Para content={`The Yoga Certification Board was established to certify Yoga professionals, accredit Yoga institutions, and prescribe standardized syllabi for various levels of Yoga trainers. It also undertakes activities that promote the authentic practice and teaching of Yoga across India and abroad. The primary goal is to ensure that Yoga professionals possess the required skills and knowledge to deliver high-quality Yoga education and training.`} />

        <SubHeading content="Establishment and Governance" />

        <Para content={`The Yoga Certification Board (YCB) was set up in March 2018 and began functioning in June 2018 under the aegis of the Morarji Desai National Institute of Yoga (MDNIY), Ministry of Ayush, Government of India. It operates with complete functional autonomy and serves as an independent certifying authority for Yoga professionals and institutions.`} />

        <Para content={`The Board is chaired by the Secretary, Ministry of Ayush, while the Joint Secretary, Ministry of Ayush, serves as the Vice Chairperson. It includes representation from the Ministry of Health & Family Welfare, Ministry of Education, as well as experts from accreditation, legal, and Yoga domains. The Secretariat of the Board is headed by the CEO of YCB, who is also the Director of MDNIY.`} />

        <SubHeading content="Organizational Structure" />

        <Para content={`To ensure effective functioning, the Yoga Certification Board has constituted four key committees, each headed by eminent Yoga Gurus or academicians. These committees oversee different operational and strategic aspects of the Board's activities:`} />

        <ul className="list-disc pl-8 space-y-1 text-gray-700">
          <li>Steering Committee</li>
          <li>Technical Committee</li>
          <li>Assessment Committee</li>
          <li>Standing Finance Committee</li>
        </ul>

        <SubHeading content="Objectives of the Yoga Certification Board" />

        <ul className="list-disc pl-8 space-y-2 text-gray-700">
          <li>To promote Yoga as a means to enhance holistic health and human values.</li>
          <li>To establish Yoga as a recognized and respected professional career skill.</li>
          <li>To develop standards, frameworks, and parameters for assessing and certifying Yoga professionals at different levels.</li>
          <li>To standardize and accredit Yoga institutions and training centers across India and abroad.</li>
          <li>To ensure uniformity and quality in Yoga education and teacher training programs globally.</li>
          <li>To collaborate with national and international organizations for the global promotion of Yoga.</li>
        </ul>

        <Para content={`Through these efforts, the Yoga Certification Board strives to uphold the authenticity and credibility of Yoga education, ensuring that it continues to serve as a transformative science for physical, mental, and spiritual wellbeing worldwide.`} />
      </div>
        {/* Official Website Section */}
        <div className="mt-8 pt-4 border-t border-gray-200">
          <SubHeading content="Official Website" />
          <Para content="For more detailed and updated information about the Yoga Certification Board, visit their official government website below." />
          <div className="flex items-center">
              <Para content="Visit Official Website : " className="font-semibold" />
              <a
                href="https://yogacertificationboard.nic.in"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block  rounded-full font-medium text-primary hover:underline transition-all"
              >
               www.yogacertificationboard.nic.in
              </a>
          </div>
        </div>
    </div>
  );
};

export default AboutYcb;
