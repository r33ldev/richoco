import Button from "@/components/Button";
import { styled } from "@mui/material";
import Image from "next/image";
import React from "react";
import elephant from "../../../assets/images/deliver-elephant.svg";
interface indexProps {
  isMobile: boolean;
}

export const HowWeDeliver: React.FC<indexProps> = ({ isMobile }) => {
  return (
    <>
      <ScrollTarget id="how-we-deliver" />
      <HowWeDeliverWrapper
        style={{
          flexDirection: isMobile ? "column" : "row",
          justifyContent: "space-between",
          width: isMobile ? "100%" : "75%",
          marginTop: isMobile ? "4rem" : "0",
        }}
      >
        <div>
          <Image
            src={elephant}
            alt="how we deliver"
            style={{
              width: isMobile ? "100%" : "90%",
            }}
            data-aos="fade-up"
            data-aos-duration="1500"
          />
        </div>
        <div
          style={{
            width: isMobile ? "90%" : "50%",
          }}
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          <p
            style={{
              fontWeight: 700,
              fontSize: isMobile ? "3.7rem" : "4.8rem",
            }}
          >
            How We Deliver
          </p>
          <p
            style={{
              margin: isMobile ? "2rem 0 4rem 0" : "4rem 0",
              fontFamily: "'Avenir' sans-serif",
              fontWeight: 400,
              color: "#505050",
              fontSize: isMobile ? "1.6rem" : "2rem",
              lineHeight: "2.6rem",
            }}
          >
            We design and develop captivating Brand Identities and influential
            Digital Products for innovative companies around the world. Using
            the industry-proven Standards and Design Sprint, with our reliant
            remote team, we have developed a highly optimized design delivery
            process that brings results in just a few weeks. Sounds like what
            you’re looking for?
          </p>
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
          <SubTitleText
            style={{
              fontSize: "1.4rem",
              width: isMobile ? "90%" : "auto",
            }}
          >
            Avg response time: 10mins
          </SubTitleText>
        </div>
      </HowWeDeliverWrapper>
    </>
  );
};

const HowWeDeliverWrapper = styled("div")(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  margin: "0 auto",
}));
// const SectionImage = styled("div")(() => ({
//   "& img": {
//    ,
//   },
// }));
const ScrollTarget = styled("div")(() => ({
  marginBottom: "-2rem",
}));

// const SectionContent = styled("div")(() => ({

// }));
// const SectionTitle = styled("div")(() => ({
//   // fontFamily: "'Avenir' sans-serif",
//  ,
// }));
// const SectionDescription = styled("div")(() => ({

// }));
const SubTitleText = styled("h4")(() => ({
  fontSize: "1.6rem",
  textAlign: "left",
  width: "100%",
  marginTop: "1rem",
}));
export default HowWeDeliver;
