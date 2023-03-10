import { styled } from "@mui/material";
import Image, { StaticImageData } from "next/image";
import React from "react";
interface DeliverCardProps {
  title: string;
  description: string;
  features: string[];
  bg?: string;
  check: StaticImageData;
  isMobile: boolean;
  aos?: string;
}

export const DeliverCard: React.FC<DeliverCardProps> = ({
  title,
  description,
  features,
  check,
  isMobile,
  bg = "#FFFFFF",
  aos,
}) => {
  const textColor = bg === "#0A0A0A" ? "#F6F6F6" : "#0A0A0A";
  return (
    <DeliverCardWrapper
      data-aos={aos}
      style={{
        background: bg,
        padding: "3rem",
        borderRadius: "20px",
        color: textColor,
        width: isMobile ? '100%' : "30%",
      }}
    >
      <CardTitle style={{
        color: textColor,
        fontSize: isMobile ? "3.2rem" : "4.8rem",
      }}>{title}</CardTitle>
      <p>{description}</p>

      <ul>
        {features.map((feature, index) => (
          <li key={index}>
            <Image src={check} alt="check-mark" width={20} />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </DeliverCardWrapper>
  );
};

const DeliverCardWrapper = styled("div")(({}) => ({
  
  "& p": {
    fontSize: "1.8rem",
    fontWeight: 400,
    marginTop: "2rem",
  },
  "& ul": {
    listStyle: "none",
    padding: "1rem 0",

    "& li": {
      display: "flex",
      alignItems: "center",
      gap: "1rem",
      marginTop: "1rem",
      cursor: "pointer",
      padding: ".5rem 0",
      "& span": {
        fontSize: "2rem",
        fontWeight: 400,
      },
    },
  },
}));
const CardTitle = styled("h1")(() => ({
  fontFamily: "'Avenir', sans-serif",
  fontSize: "4.8rem",
  fontWeight: 700,
    // color: "#0A0A0A",
}));

export default DeliverCard;
