import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I'm <span className="purple">Mohamed Dhia Khalfalli</span>{" "}
            from <span className="purple">Tunis, Tunisia</span>.
            <br />
            I'm a <span className="purple">Data Science Engineer</span> specializing in{" "}
            <span className="purple">Machine Learning, Deep Learning & LLM Engineering</span>.
            <br />
            I hold an Engineering degree in{" "}
            <span className="purple">Computer Science — Data Science</span> from{" "}
            <span className="purple">ESPRIT</span>.
            <br />
            <br />
            I have hands-on experience designing advanced AI systems including RAG, multi-agent
            architectures, NLP pipelines, and deploying full-stack AI solutions. I'm capable of
            building end-to-end AI projects from requirements analysis to integration and evaluation.
            <br />
            <br />
            Beyond coding, here's what keeps me going:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Building intelligent AI agents 🤖
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring new ML research papers 📄
            </li>
            <li className="about-activity">
              <ImPointRight /> Contributing to open-source projects 🌍
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Turning data into intelligence, one model at a time."{" "}
          </p>
          <footer className="blockquote-footer">Mohamed Dhia Khalfalli</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
