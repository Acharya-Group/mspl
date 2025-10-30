"use client";
import React from "react";
import Para from "../common/Para";
import SubHeading from "../common/SubHeading";

const goals = [
  {
    title: "1. Promotion of Holistic Health",
    points: [
      "To promote physical, mental, emotional, and spiritual well-being through systematic Yoga education and practices.",
      "To encourage the integration of Yoga into daily life for disease prevention, health promotion, and overall wellness.",
      "To uphold Yoga as a scientifically valid and holistic discipline contributing to national and global health.",
    ],
  },
  {
    title: "2. Development of Competent Yoga Professionals",
    points: [
      "To ensure the development of Yoga professionals with sound theoretical knowledge and practical expertise in Yoga philosophy, āsanas, prāṇāyāma, kriyās, mudrās, meditation, and Yogic lifestyle.",
      "To create competent instructors, teachers, and evaluators capable of teaching Yoga safely, ethically, and effectively in diverse settings.",
      "To align all training and evaluation standards with the Yoga Certification Board’s National Occupational Standards (NOS).",
    ],
  },
  {
    title: "3. Upholding Professional and Ethical Standards",
    points: [
      "To instill ethical conduct, discipline, and values as per the principles of Yama and Niyama.",
      "To ensure that certified professionals demonstrate integrity, compassion, and social responsibility in their practice.",
      "To promote Yoga as a service-oriented profession aimed at individual and societal well-being.",
    ],
  },
  {
    title: "4. Fostering Mental and Emotional Balance",
    points: [
      "To cultivate mental hygiene, concentration, and emotional stability through structured Yoga practices.",
      "To help candidates understand the mind–body connection and manage stress through Yogic techniques.",
      "To encourage emotional resilience, self-awareness, and inner peace among Yoga practitioners and teachers.",
    ],
  },
  {
    title: "5. Integration of Moral and Cultural Values",
    points: [
      "To preserve and promote the traditional wisdom and cultural heritage of Yoga while embracing scientific validation.",
      "To guide learners in integrating moral, spiritual, and social values into their personal and professional lives.",
      "To encourage respect for all cultures, traditions, and philosophies that align with Yogic principles.",
    ],
  },
  {
    title: "6. Advancement of Yogic Knowledge and Research",
    points: [
      "To promote evidence-based understanding of Yoga through education, assessment, and research collaboration.",
      "To encourage continuous professional development and self-study (Svādhyāya) among certified Yoga professionals.",
      "To contribute to the global recognition of India’s Yoga heritage through standardized certification and excellence in training.",
    ],
  },
  {
    title: "7. Ensuring Quality and Standardization in Yoga Education",
    points: [
      "To maintain transparency, objectivity, and fairness in examination and certification processes.",
      "To ensure that all Yoga institutions and individuals under MSPL PrCB follow YCB-approved curricula and assessment criteria.",
      "To promote continuous quality improvement in Yoga teaching and certification through monitoring, evaluation, and feedback.",
    ],
  },
  {
    title: "8. Realization of Higher Consciousness",
    points: [
      "To guide practitioners towards self-realization and higher states of awareness, transcending the physical and mental dimensions.",
      "To uphold Yoga as a pathway to inner harmony, universal brotherhood, and peace.",
    ],
  },
  {
    title: "9. Promotion of Inclusivity and Accessibility in Yoga",
    points: [
      "To ensure that Yoga education is accessible and inclusive to people of all ages, genders, abilities, and socio-economic backgrounds.",
      "To encourage the adaptation of Yoga practices for differently-abled individuals, senior citizens, and those with specific health challenges.",
      "To promote Yoga as a universal discipline that transcends barriers of caste, creed, religion, and nationality, fostering unity in diversity.",
    ],
  },
  {
    title: "10. Environmental Awareness and Sustainable Living",
    points: [
      "To educate Yoga professionals and practitioners about the interconnectedness between human life and the environment.",
      "To inspire ecological awareness and sustainable living in alignment with Yogic values of non-violence (Ahimsa) and harmony with nature.",
      "To support eco-friendly practices in Yoga institutions — such as the use of natural materials, waste reduction, and environmental stewardship — as part of Yogic living.",
    ],
  },
  {
    title: "11. Integration of Technology and Innovation in Yoga Education",
    points: [
      "To leverage modern technology for enhancing the quality and reach of Yoga education through online learning, digital resources, and e-assessments.",
      "To develop digital competency among Yoga professionals to ensure accessibility, transparency, and global connectivity.",
      "To balance the use of technology with traditional Yogic wisdom, ensuring that innovation serves as a tool for knowledge dissemination and community building.",
    ],
  },
  {
    title: "12. Global Collaboration and Promotion of Indian Yoga Heritage",
    points: [
      "To promote international collaboration in Yoga education, research, and practice in alignment with India’s leadership in traditional wellness.",
      "To strengthen Yoga’s global presence by upholding its authentic roots while adapting to contemporary needs.",
      "To foster partnerships with international organizations, Yoga institutions, and wellness bodies to spread the message of peace, health, and harmony across borders.",
    ],
  },
];

const YogaGoals = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      <SubHeading className="lg:!text-2xl text-xl" content="🕉 Modish Services Pvt. Ltd. (MSPL) – PrCB of Yoga Certification Board" />

      <Para content="<strong>Yoga Education Goals</strong>" />

      <div className="mt-6 space-y-8">
        {goals.map((goal, index) => (
          <div key={index}>
            <SubHeading className="lg:!text-2xl text-xl" content={goal.title} />
            <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-1 mt-2">
              {goal.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-10">
        <SubHeading content="✨ Conclusion" />
        <Para
          content={`As an accredited Personnel Certification Body under the Yoga Certification Board, Modish Services Pvt. Ltd. (MSPL) is dedicated to setting the highest benchmarks of excellence, authenticity, and professionalism in Yoga education and certification.`}
        />
        <Para
          content={`Through these twelve comprehensive goals, MSPL strives to nurture competent, ethical, and enlightened Yoga professionals who embody the true essence of Yoga — unity, awareness, and service to humanity.`}
        />
        <Para
          content={`By integrating ancient wisdom with modern standards, MSPL continues to uphold India’s timeless Yogic heritage while advancing global wellness and spiritual growth.`}
        />
      </div>
    </div>
  );
};

export default YogaGoals;
