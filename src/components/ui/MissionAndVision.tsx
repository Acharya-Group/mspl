"use client";

import React, { useState } from "react";
import { Tabs, Tab, Box } from "@mui/material";
import SubHeading from "../common/SubHeading";
import Para from "../common/Para";

const MissionAndVision = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };

  return (
    <div className="container py-10 lg:py-12">
      

      {/* Material UI Tabs */}
      <Box className="w-full">
        <Tabs
          value={activeTab}
          onChange={handleChange}
          centered
          textColor="primary"
          indicatorColor="primary"
          sx={{
            "& .MuiTab-root": {
              fontWeight: 600,
              fontSize: "1rem",
              textTransform: "none",
            },
            "& .MuiTabs-indicator": {
              height: "3px",
              borderRadius: "3px",
            },
          }}
        >
          <Tab label="Mission" />
          <Tab label="Vision" />
        </Tabs>
      </Box>

{/* Mission Content */}
{activeTab === 0 && (
  <div className="mt-8 space-y-4">
    <SubHeading content="Mission of MSPL PRCB" />
    <Para content={`The mission of MSPL Personnel Registration and Certification Body (PRCB) is to conduct fair, transparent, and standardized examinations in alignment with the guidelines of the Yoga Certification Board (YCB). MSPL PRCB is dedicated to promoting excellence in Yoga education, and professional competency by certifying individuals who meet the highest national and international standards. The organization aims to uphold integrity, accountability, and ethical practices in all its certification processes while ensuring inclusivity and equal opportunities for all Yoga aspirants. Through the use of modern technology and efficient systems, MSPL PRCB strives to maintain credibility and accuracy in registration, assessment, and result declaration. It is committed to fostering continuous professional development, evidence-based Yoga practices, and collaboration with recognized institutions for quality enhancement. By integrating traditional Yoga wisdom with contemporary learning methods, MSPL PRCB seeks to empower qualified Yoga professionals to contribute meaningfully to society. Ultimately, the mission of MSPL PRCB is to support the vision of the Ministry of AYUSH and YCB, contributing to the national initiative of “Healthy India, Fit India” through authentic, skilled, and certified Yoga professionals dedicated to holistic well-being.`} />
  </div>
)}

{/* Vision Content */}
{activeTab === 1 && (
  <div className="mt-8 space-y-4">
    <SubHeading content="Vision of MSPL PRCB"/>
    <Para content={`The vision of MSPL Personnel Registration and Certification Body (PRCB) is to be a nationally and globally recognized authority in the certification of Yoga professionals, known for its integrity, excellence, and commitment to quality. MSPL PRCB envisions creating a robust framework that ensures every certified Yoga professional embodies authentic knowledge, ethical practice, and professional competence as prescribed by the Yoga Certification Board (YCB). The organization aspires to uphold the rich heritage of Indian Yoga while integrating modern scientific approaches to enhance its global acceptance and relevance. By fostering trust, transparency, and professionalism, MSPL PRCB aims to elevate the standards of Yoga education and certification in India and beyond. The vision extends to empowering a vibrant community of certified Yoga practitioners who contribute to physical, mental, and spiritual well-being across society. Through its continuous pursuit of excellence, MSPL PRCB seeks to support the mission of the Ministry of AYUSH and play a pivotal role in achieving the national objective of “Healthy India, Fit India,” thereby promoting Yoga as a holistic path to harmony, health, and sustainable living.`} />
  </div>
)}

    </div>
  );
};

export default MissionAndVision;
