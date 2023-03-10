import Button from "@/components/Button";
import Flex from "@/components/Flex";
import { useScreenResolution } from "@/hooks/useScreenResolution";
// import { useScreenResolution } from "@/hooks/useScreenResolution";
import { styled } from "@mui/material";
import Image from "next/image";
import React from "react";
import richocoSmBlack from "../../../assets/images/logo-sm-black.svg";

interface StickyHeaderProps {
  sticky: boolean;
}

export const StickyHeader: React.FC<StickyHeaderProps> = ({ sticky }) => {
  const { isMobile } = useScreenResolution();
  if (!sticky) return null;
  return (
    <StickyHeaderWrapper
      style={{
        overflow: isMobile ? "initial" : "hidden",
        height: isMobile ? "8rem" : "auto",
        padding: isMobile ? "1rem" : "1.5rem 0",
        display: "flex",
      }}
    >
      <div
        style={{
          width: isMobile ? "100%" : "80%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          margin: "0 auto",
        }}
      >
        <div
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          style={{ cursor: "pointer" }}
        >
          <Image src={richocoSmBlack} alt="logo" />
        </div>
        <Flex align="center" gap={isMobile ? "1.2rem" : "4rem"}>
          <p
            onClick={() =>
              window.open(
                "https://us10.list-manage.com/contact-form?u=72b160a86172e5fd4e66a28c5&form_id=1980ff014ed6ea7ec3dffbe211a3f143",
                "_blank"
              )
            }
            style={{ fontSize: isMobile ? "1.3rem" : "2rem", whiteSpace: 'nowrap' }}
          >
            Contact us
          </p>
          <Button
            text="Go bespoke!"
            color="#0A0A0A"
            borderRadius="28px"
            width={isMobile ? "100px" : "245px"}
            height={isMobile ? "40px" : "56px"}
            fontSize={isMobile ? "1.3rem" : "2rem"}
            onSubmit={() =>
              window.open(
                "https://web.whatsapp.com/send?phone=2348060771255&text=Richoco%20Studio%3A%20Tell%20us%20your%20bespoke%20idea%21",
                "_blank"
              )
            }
          />
        </Flex>
      </div>
    </StickyHeaderWrapper>
  );
};

const StickyHeaderWrapper = styled("div")(({}) => ({
  width: "100%",

  position: "sticky",
  top: 0,
  background: "#FFFFFF",
  zIndex: 100,

  boxShadow: "-1px 10px 22px -23px rgba(0,0,0,0.7)",
  WebkitBoxShadow: "-1px 10px 22px -23px rgba(0,0,0,0.7)",
  MozBoxShadow: "-1px 10px 22px -23px rgba(0,0,0,0.7)",

  // "& > div": {
  "&  p": {
    fontFamily: "'Avenir', roboto",
    fontWeight: "500",
    cursor: "pointer",
    // },
  },
  '& img': {
    width: '90%'
  }
}));

export default StickyHeader;
