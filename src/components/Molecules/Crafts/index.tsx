import Button from "@/components/Button";
import { styled } from "@mui/material";
import Image from "next/image";
import React from "react";
import elephant from "../../../assets/images/craft-elephant.png";

interface indexProps {
  isMobile: boolean;
}

export const Crafts: React.FC<indexProps> = ({ isMobile }) => {
  return (
    <CraftWrapper
      style={{
        flexDirection: isMobile ? "column" : "row",
        overflow: "hidden!important",
        // width: '100vw!important',
      }}
    >
      <SectionImage data-aos="fade-up">
        <Image src={elephant} alt="We craft growth-driven experience" />
      </SectionImage>
      <div
        style={{
          width: isMobile ? "90%" : "50%",
        }}
        data-aos="fade-up"
      >
        <SectionTitle>We craft growth-driven experience</SectionTitle>
        <SectionDescription style={{ maxWidth: isMobile ? '100%' : "70%" }} >
          Follow us on Instagram to get tips to help you grow your products
          learn more about our design process
        </SectionDescription>
        <div style={{ display: "flex", gap: "2rem" }}>
          <Button
            text="Go bespoke!"
            background="#0A0A0A"
            borderRadius="28px"
            fontSize={isMobile ? "1.6rem" : "2rem"}
            width={isMobile ? "16rem" : "245px"}
            height={isMobile ? "4.8rem" : "56px"}
            onSubmit={() =>
              window.open(
                "https://web.whatsapp.com/send?phone=2348060771255&text=Richoco%20Studio%3A%20Tell%20us%20your%20bespoke%20idea%21",
                "_blank"
              )
            }
          />
          <Button
            text="Contact us"
            background="#FFFFFF"
            color="#0A0A0A"
            borderRadius="28px"
            fontSize={isMobile ? "1.6rem" : "2rem"}
            width={isMobile ? "16rem" : "245px"}
            height={isMobile ? "4.8rem" : "56px"}
            onSubmit={() =>
              window.open(
                "https://us10.list-manage.com/contact-form?u=72b160a86172e5fd4e66a28c5&form_id=1980ff014ed6ea7ec3dffbe211a3f143",
                "_blank"
              )
            }
          />
        </div>
        <SubTitleText
          style={{
            fontSize: "1.4rem",
            width: isMobile ? "90%" : "auto",
          }}
        >
          Avg response time: 10mins
        </SubTitleText>
      </div>
    </CraftWrapper>
  );
};

const CraftWrapper = styled("div")(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "9rem",
  //   width: "70%",
  margin: "10rem auto",
  // marginTop: "15rem",
}));
const SectionImage = styled("div")(() => ({
  "& img": {
    width: "370px",
    height: "280px",
  },
}));

// const SectionContent = styled("div")(() => ({

// }));
const SectionTitle = styled("div")(() => ({
  fontFamily: "'Avenir' sans-serif",
  fontWeight: 700,
  fontSize: "4.8rem",
}));
const SectionDescription = styled("div")(() => ({
  margin: "4rem 0",
  fontFamily: "'Avenir' sans-serif",
  fontWeight: 400,
  color: "#505050",
  fontSize: "1.8rem",
  
}));
const SubTitleText = styled("h4")(() => ({
  fontSize: "1.6rem",
  textAlign: "left",
  width: "100%",
  marginTop: "1rem",
}));
export default Crafts;
