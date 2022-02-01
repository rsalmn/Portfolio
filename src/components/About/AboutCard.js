import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Raden Salman </span>
            from <span className="purple"> Indonesia.</span>
            <br />I am a senior SmartContract Development and Frontend Web Developer
            <br />
            <br />
            Also, I am a Senior Developer, Moderator and Staff Manager on Discord Server
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
