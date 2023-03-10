import Flex from "@/components/Flex";
import { styled } from "@mui/material";
import React from "react";
import DeliverCard from "./DeliverCard";
import checkMark from "../../../assets/images/check.png";
import checkWhite from "../../../assets/images/checkwhite.svg";

interface indexProps {
  isMobile: boolean;
}

export const WhatWeDeliver: React.FC<indexProps> = ({ isMobile }) => {
  const items = [
    {
      title: "Branding",
      description:
        "Strategic brand identity, head-turning visuals, practical execution.",
      features: [
        "2-3 weeks lead time",
        "Brand Strategy Workshop",
        "Research and Positioning",
        "Personality & Tone of Voice",
        "Logo exploration",
        "Color palette",
        "Typography",
        "Custom illustrations & icons",
        "Brand Collateral",
        "Brand Identity Guidelines",
      ],
    },
    {
      title: "Experience",
      description:
        "Digital products, websites and experiences for startups and iconic companies.",
      features: [
        "3-4 weeks lead time",
        "JTBD Workshop",
        "UX & Market Research",
        "Information Architecture",
        "Wireframes (full UX design)",
        "Usability Testing",
        "UI Mockups (full product design)",
        "UI Toolkit",
        "Design System",
      ],
    },
    {
      title: "Development",
      description:
        "Digital products, websites and experiences for startups and iconic companies.",
      features: [
        "3-4 weeks lead time",
        "JTBD Workshop",
        "UI implementation",
        "Content organisation",
        "Coding",
        "Q and A",
        "Review you idea",
        "Launch your product",
        "Maintenance",
      ],
    },
  ];
  return (
    <WhatWeDeliverWrapper>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: "4rem",
          alignItems: "flex-start",
          margin: "0 auto",
          width: isMobile ? "95%" : "80%",
          flexDirection: isMobile ? "column" : "row",
        }}
      >
        {items.map((item, index) => (
          <DeliverCard
            title={item.title}
            description={item.description}
            features={item.features}
            bg={index === 2 ? "#0A0A0A" : "#fff"}
            key={index}
            isMobile={isMobile}
            check={index === 2 ? checkWhite : checkMark}
            aos={"fade-up"}
          />
        ))}
      </div>
    </WhatWeDeliverWrapper>
  );
};

const WhatWeDeliverWrapper = styled("div")(() => ({
  width: "100%",
  marginTop: "10rem",
  // overflowX: "hidden",
}));

export default WhatWeDeliver;
