import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import leaf from "../../Assets/Projects/nftapps.PNG";
import emotion from "../../Assets/home-main.svg";
import editor from "../../Assets/Projects/Astrozen-LandingPage.PNG";
import chatify from "../../Assets/Projects/Astrozen-MintingPage.PNG";
import suicide from "../../Assets/home-main.svg";
import solana from "../../Assets/SolanaDex.PNG";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="NFT App"
              description="Staking and Claiming Website"
              link="https://nfa-v1.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={solana}
              isBlog={false}
              title="Solana Decentralized Exchange"
              description="Cryptocurrency exchange on the Solana blockchain."
              link="https://rsalmn.github.io/SolSwap/#/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Astrozen Minting Page"
              description="Astrozens is a collection of 1,111 Astrozen NFTs"
              link="https://astro-minting-example.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Astrozen Landing Page"
              description="Astrozens is a collection of 1,111 Astrozen NFTs"
              link="https://astrozen.art"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Crown Chaser Moderator"
              link="https://discord.gg/QDX9QcjAJu"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Astrozens Developer/Moderator/Collabs Manager"
              link="https://discord.gg/GJEuF2mYSr"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="RebelSols Moderator/Collab Manager"
              link="https://discord.gg/NbJuCNx9XF"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
