import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title style={{ fontWeight: 700, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "8px" }}>
          <span>{props.title}</span>
          {props.isTeam && (
            <span
              style={{
                fontSize: "0.65em",
                fontWeight: 600,
                color: "#38bdf8",
                background: "rgba(56, 189, 248, 0.15)",
                border: "1px solid rgba(56, 189, 248, 0.35)",
                borderRadius: "20px",
                padding: "2px 8px",
              }}
            >
              👥 Projet Collaboratif
            </span>
          )}
        </Card.Title>
        {props.role && (
          <div style={{ fontSize: "0.85em", color: "#c084fc", marginBottom: "8px", fontWeight: 500 }}>
            📌 <em>Rôle : {props.role}</em>
          </div>
        )}
        <Card.Text style={{ textAlign: "justify", color: "#a3a0b0" }}>
          {props.description}
        </Card.Text>
        {props.tags && (
          <div style={{ marginBottom: "1rem", display: "flex", flexWrap: "wrap", gap: "6px" }}>
            {props.tags.map((tag, index) => (
              <span
                key={index}
                style={{
                  background: "rgba(124, 58, 237, 0.15)",
                  border: "1px solid rgba(124, 58, 237, 0.3)",
                  borderRadius: "6px",
                  padding: "2px 10px",
                  fontSize: "0.8em",
                  color: "#a78bfa",
                  fontFamily: "'JetBrains Mono', monospace",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        )}
        <Button variant="primary" href={props.ghLink} target="_blank">
          <BsGithub /> &nbsp;
          {props.isBlog ? "Blog" : "GitHub"}
        </Button>
        {"\n"}
        {"\n"}

        {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}

        {!props.isBlog && props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            🌐 &nbsp;
            {"Demo"}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
