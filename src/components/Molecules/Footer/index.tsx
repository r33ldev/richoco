import { styled } from "@mui/material";
import Image from "next/image";
import React from "react";
import logoLgWhite from "../../../assets/images/logo-lg-white.svg";
import phone from "../../../assets/images/phone.svg";
import ig from "../../../assets/images/ig.svg";
import linkedin from "../../../assets/images/linkedin.svg";
import instalogo from "../../../assets/images/instalogo.png";
import tree from "../../../assets/images/tree.svg";
import Button from "@/components/Button";
import Flex from "@/components/Flex";

interface indexProps {
  isMobile: boolean;
}

export const Footer: React.FC<indexProps> = ({ isMobile }) => {
  return (
    <FooterWrapper>
      <Tips
        style={{
          flexDirection: isMobile ? "column" : "row",
          padding: isMobile ? '10rem 0' : "10rem",
        }}
      >
        <div>
          <Image
            src={tree}
            alt="design tips and case studies"
            width={isMobile ? "350" : "400"}
            data-aos="fade-up"
          />
        </div>
        <div data-aos="fade-up" style={{ paddingLeft: isMobile ? "1rem" : 0 }}>
          <Image
            src={instalogo}
            alt="design tips and case studies"
            width="120"
          />
          <TipsContentTitle>Design tips and case studies</TipsContentTitle>
          <TipsText>
            Follow us on Instagram to get tips to help you grow your products
            learn more about our design process
          </TipsText>
          <Button
            text="Go to instagram"
            border="1px solid #FFFFFF"
            borderRadius="28px"
            onSubmit={() =>
              window.open("https://www.instagram.com/richocostudio/", "_blank")
            }
          />
        </div>
      </Tips>
      <MainFooter
        style={{ padding: isMobile ? "7rem 4rem 0" : "20rem 20rem 2rem" }}
      >
        <div data-aos="fade-up">
          <Image
            src={logoLgWhite}
            alt="logo"
            width={isMobile ? 350 : 600}
            style={{
              marginBottom: isMobile ? "5rem" : "10rem",
              width: isMobile ? "100%" : "auto",
            }}
          />
          <p style={{ marginBottom: isMobile ? "6rem" : "0" }}>
            © 2022 Richoco Studio · Branding & Creative Design Agency · Chaina
            Avenue Jaba, kano Nigeria.
          </p>

          <Flex align={"center"} direction={isMobile ? "column" : "row"}>
            <p
              style={{
                borderRight: isMobile ? "none" : "1px solid #fff",
                borderBottom: isMobile ? "1px solid #fff" : "none",
                paddingBottom: isMobile ? "20px" : "0",
                whiteSpace: "nowrap",
              }}
            >
              <Image
                src={phone}
                alt="logo"
                width={15}
                style={{ marginRight: "12px", marginBottom: "-4px" }}
              />
              <a href="tel:+234 80 6077 1255">Nigeria +234 80 6077 1255</a>
            </p>
            <div
              style={{
                margin: isMobile ? "30px 30px 0" : "0 20px",
                flexDirection: "row",
                justifyContent: "inherit",
                marginTop: "2.5rem",
              }}
            >
              <div
                style={{
                  cursor: "pointer",
                  marginRight: isMobile ? "20px" : 0,
                }}
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/company/richocostudio/",
                    "_blank"
                  )
                }
              >
                <Image src={linkedin} alt="logo" width={90} style={{}} />
              </div>
              <div
                style={{
                  cursor: "pointer",
                }}
                onClick={() =>
                  window.open(
                    "https://www.instagram.com/richocostudio/",
                    "_blank"
                  )
                }
              >
                <Image src={ig} alt="logo" width={90} />
              </div>
            </div>
          </Flex>
        </div>
      </MainFooter>
    </FooterWrapper>
  );
};

const FooterWrapper = styled("div")(() => ({
  background: "#2A2A2A",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  overflow: "hidden",
}));

const Tips = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
  gap: "10rem",
  maxWidth: "90%",
}));
const MainFooter = styled("div")(() => ({
  background: "#0A0A0A",
  width: "100%",

  "& div": {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",

    paddingBottom: "1rem",

    "& p": {
      color: "#fff",
      fontSize: "1.6rem",
      fontWeight: "400",
      padding: ".4rem 1rem",
      textAlign: "center",
      lineHeight: "2.5rem",
      // "&:first-of-type": {
      //   marginBottom: "2rem",
      // },
    },

    "& div": {
      "& div": {
        display: "flex",
        width: "100%",
        height: "100%",

        "& img": {
          height: "2rem",
          paddingLeft: "1rem",
          cursor: "pointer",
        },
        "&:first-of-type": {
          width: "4rem",
        },
      },
      // }
      //   display: "flex",
      //   justifyContent: "center",
      //   height: "2rem",
      //   marginTop: "2rem",
    },
  },
}));

const TipsContentTitle = styled("h1")(() => ({
  fontSize: "4.8rem",
  fontWeight: 700,
  color: "#fff",
  margin: "2rem 0",
}));
const TipsText = styled("h1")(() => ({
  fontSize: "2rem",
  fontWeight: 300,
  color: "#fff",
  margin: "4rem 0",
  // maxWidth: "70%",
}));

// const TipsContent = styled("div")(() => ({
//   paddingLeft: "10rem",
// }));

export default Footer;
