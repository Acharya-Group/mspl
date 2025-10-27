import React from "react";
import SubHeading from "../common/SubHeading";
import Para from "../common/Para";

const AboutAyush = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      <div className="space-y-6">
        {/* Main Heading */}
        <SubHeading content="About Ministry of Ayush (MoA)" />

        {/* Paragraphs */}
        <Para content={`The Ministry of Ayush was established on November 9, 2014, with the vision of reviving and promoting the profound knowledge of India’s ancient systems of medicine. It aims to ensure the holistic development and global propagation of Ayush systems of healthcare, which include Ayurveda, Yoga & Naturopathy, Unani, Siddha, and Homoeopathy.`} />

        <Para content={`Before its formation, these traditional systems were managed under the Department of Indian Systems of Medicine and Homoeopathy (ISM&H), which was created in 1995. In November 2003, the department was renamed as the Department of Ayurveda, Yoga & Naturopathy, Unani, Siddha, and Homoeopathy (AYUSH) to emphasize focused attention on education and research in these ancient disciplines. The establishment of a dedicated Ministry of Ayush in 2014 was a major step toward integrating these holistic health practices into mainstream healthcare and education.`} />

        {/* Objectives Section */}
        <SubHeading content="Salient Objectives" />

        <ul className="list-disc pl-8 space-y-2 text-gray-700">
          <li>
            To upgrade the educational standards of colleges and universities
            offering courses in the Indian Systems of Medicine and Homoeopathy.
          </li>
          <li>
            To strengthen existing research institutions and ensure
            time-bound research programs on diseases for which these systems
            have effective treatments.
          </li>
          <li>
            To develop and implement schemes for cultivating, promoting, and
            regenerating medicinal plants that are essential for these systems.
          </li>
          <li>
            To evolve and establish Pharmacopoeial standards for Indian Systems
            of Medicine and Homoeopathy drugs, ensuring safety, quality, and efficacy.
          </li>
          <li>
            To promote global recognition of the Ayush systems through academic
            collaboration, certification, and standardization of practices.
          </li>
          <li>
            To integrate Ayush systems into public healthcare, promoting a
            holistic approach toward wellness and preventive care.
          </li>
        </ul>

        <Para content={`Through these initiatives, the Ministry of Ayush continues to work toward positioning India as a global leader in traditional healthcare systems, integrating the timeless wisdom of Yoga and Ayurveda with modern scientific advancements for the well-being of humanity.`} />
      </div>
    </div>
  );
};

export default AboutAyush;
