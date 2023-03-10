import { styled } from "@mui/material";
import React from "react";

import checkinCS from "../../../../assets/case-studies/checkin-web.png";
import checkinMb from "../../../../assets/case-studies/checkin-mobile.png";
import stoovoMb from "../../../../assets/case-studies/stoovoMb.png";
import ethaMb from "../../../../assets/case-studies/ethaMb.png";
import mamiMb from "../../../../assets/case-studies/mamiMb.png";
import majestyMb from "../../../../assets/case-studies/majestyMb.png";
import remitMb from "../../../../assets/case-studies/remitMb.png";
import vorroMb from "../../../../assets/case-studies/vorroMb.png";
import stovooCS from "../../../../assets/case-studies/stovoo-web.png";
import ethaCS from "../../../../assets/case-studies/etha-web.png";
import mamiCS from "../../../../assets/case-studies/mami-web.png";
import majestyCS from "../../../../assets/case-studies/majesty-web.png";
import remitCS from "../../../../assets/case-studies/remit-web.png";
import vorroCS from "../../../../assets/case-studies/vorro-web.png";
import Image from "next/image";
import Button from "@/components/Button";

interface indexProps {
  isMobile: boolean;
}

export const Projects: React.FC<indexProps> = ({ isMobile }) => {
  const projects = [
    {
      name: "CheckIn",
      description:
        "See how affordable booking process have been optimized. Vacation now made easy!",
      image: isMobile ? checkinMb : checkinCS,
      url: "https://usecheckin.com",
    },
    {
      name: "StoVoo",
      description:
        "A food delivery revolution in an app. Binge, order and learn from seasoned vendors!",
      image: isMobile ? stoovoMb : stovooCS,
      url: "https://stovoo.com",
    },
    {
      name: "Etha",
      description:
        "Introducing Etha – your new favorite interactive social news platform, which helps you hold politicians accountable.",
      image: isMobile ? ethaMb : ethaCS,
      url: "https://etha.one",
    },
    {
      name: "mamiMarkets",
      description:
        "One-stop grocery delivery e-commerce platform, connects you with unlimited vendors.",
      image: isMobile ? mamiMb : mamiCS,
      url: null,
    },
    {
      name: "His Majesty",
      description:
        "The Royal Website for Ògíamẹ̀ Atúwàtse III - The Olú of Warri - Nigeria.",
      image: isMobile ? majestyMb : majestyCS,
      url: "https://atuwatseiii.com/",
    },
    {
      name: "Remitafrika",
      description:
        "A seamless fintech App that allows you to convert fiat currencies to friends and more.",
      image: isMobile ? remitMb : remitCS,
      url: "https://xd.adobe.com/view/9b1e67ed-841f-4600-82a3-44fb77d271cb-ce4d/",
    },
    {
      name: "Vorro",
      description:
        "An open, scalable any-to-any integration and workflow platform that enables secure communication",
      image: isMobile ? vorroMb : vorroCS,
      url: "https://vorroconnect.com/",
    },
  ];

  return (
    <ProjectWrapper style={{ paddingTop: isMobile ? "7rem" : "10rem" }}>
      <ProjectsHeader>
        <h1
          style={{
            fontSize: isMobile ? "4rem" : "4.8rem",
            // width: isMobile ? "60%" : "100%",
            margin: "0 auto",
          }}
        >
          Projects and case study
        </h1>
        <p
          style={{
            maxWidth: isMobile ? "90%" : "50%",
            lineHeight: "2.3rem",
          }}
        >
          We design compelling Brand Identities and impactful Digital
          Experiences for innovative companies around the world. Using the
          industry-proven methods Jobs to be Done and Design Sprint, we have
          developed a highly optimised design delivery process that brings
          results in just a few weeks. Sounds like what you’re looking for?
        </p>
      </ProjectsHeader>
      <CaseStudies
        style={{ width: isMobile ? "95%" : "80%", margin: "0 auto" }}
      >
        {projects.map((project, index) => (
          <CaseStudy
            key={index}
            style={{
              flexDirection: isMobile ? "column" : "row",
              height: isMobile ? "70rem" : "55rem",
            }}
            data-aos='fade-up'
            >
            <section
              style={{
                width: isMobile ? "100%" : "35%",
                marginTop: isMobile ? "5rem" : "0",
                padding: isMobile ? "0 2rem" : "0 9rem",
              }}
            >
              <h1>{project.name}</h1>
              <p>{project.description}</p>
              <Button
                text={project?.url ? "View live project" : "No case study yet"}
                background={project?.url ? "#0A0A0A" : "#C4DBEC"}
                border={"none"}
                color={project?.url ? "#fff" : "#0A0A0A"}
                borderRadius="28px"
                onSubmit={() =>
                  project?.url ? window.open(project.url, "_blank") : null
                }
                fontSize={isMobile ? "1.6rem" : "2rem"}
                width={isMobile ? "21rem" : "245px"}
                height={isMobile ? "4.8rem" : "56px"}
                fontFamily="'Avenir', sans-serif"
              />
            </section>
            <Image
              src={project.image}
              alt={project.name}
              style={{
                width: isMobile ? "100%" : "65%",
                marginTop: isMobile ? "2rem" : 0,
              }}
            />
          </CaseStudy>
        ))}
      </CaseStudies>
    </ProjectWrapper>
  );
};

const ProjectWrapper = styled("div")(() => ({
  marginTop: "12rem",
  background: "#0A0A0A",

  paddingBottom: "2rem",
}));

const ProjectsHeader = styled("div")(() => ({
  textAlign: "center",
  "& h1": {
    color: "#fff",

    fontWeight: 700,
  },
  "& p": {
    color: "#fff",
    fontSize: "2rem",
    fontWeight: 300,

    letterSpacing: "0px",
    margin: "3rem auto",
  },
}));

const CaseStudies = styled("div")(() => ({
  marginTop: "7rem",
}));

const CaseStudy = styled("div")(() => ({
  display: "flex",
  borderRadius: "16px",
  alignItems: "center",
  margin: "10rem auto",
  overflow: "hidden",
  background: "#F8F8F8",
  "& section": {
    "& h1": {
      color: "#0A0A0A",
      fontSize: "4.8rem",
      fontWeight: 700,
      lineHeight: "4.5rem",
    },
    "& p": {
      color: "#0A0A0A",
      fontSize: "2rem",
      fontWeight: 300,
      //   maxWidth: "70%",
      paddingTop: "3rem",
      paddingBottom: "4rem",
    },
  },
  "& img": {
    height: "100%",
  },
}));

export default Projects;
