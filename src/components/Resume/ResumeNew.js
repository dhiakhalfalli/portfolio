import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import { AiOutlineCalendar } from "react-icons/ai";
import { MdLocationOn, MdEmail, MdPhone } from "react-icons/md";
import { FaLinkedinIn, FaGithub, FaCertificate } from "react-icons/fa";
import profilePic from "../../Assets/profile.jpg";

function ResumeNew() {
  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Container>
          {/* Header */}
          <Row className="justify-content-center align-items-center" style={{ paddingBottom: "30px" }}>
            <Col md={3} className="text-center text-md-start mb-4 mb-md-0">
              <img
                src={profilePic}
                alt="Mohamed Dhia Khalfalli"
                style={{
                  width: "140px",
                  height: "140px",
                  borderRadius: "50%",
                  objectFit: "cover",
                  border: "3px solid #7c3aed",
                  boxShadow: "0 0 25px rgba(124, 58, 237, 0.4)",
                }}
              />
            </Col>
            <Col md={7}>
              <h1 style={{ fontSize: "2.6em", fontWeight: 800, marginBottom: "10px" }}>
                <span className="gradient-text">Mohamed Dhia KHALFALLI</span>
              </h1>
              <p className="section-subtitle" style={{ marginBottom: "1.5rem" }}>
                Data Science • Machine Learning • Deep Learning • LLM Engineering
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "1.5rem", color: "#a3a0b0" }}>
                <span><MdEmail style={{ color: "#7c3aed" }} /> dhiakhalfalli12@gmail.com</span>
                <span><MdPhone style={{ color: "#7c3aed" }} /> +216 96 412 991</span>
                <span><MdLocationOn style={{ color: "#7c3aed" }} /> Tunis, Tunisia</span>
                <a href="https://www.linkedin.com/in/dhiakhalfalli" target="_blank" rel="noreferrer" style={{ color: "#a3a0b0", textDecoration: "none" }}>
                  <FaLinkedinIn style={{ color: "#7c3aed" }} /> LinkedIn
                </a>
                <a href="https://github.com/dhiakhalfalli" target="_blank" rel="noreferrer" style={{ color: "#a3a0b0", textDecoration: "none" }}>
                  <FaGithub style={{ color: "#7c3aed" }} /> GitHub
                </a>
              </div>
            </Col>
          </Row>

          {/* Summary */}
          <Row className="justify-content-center" style={{ paddingBottom: "30px" }}>
            <Col md={10}>
              <p style={{ color: "#a3a0b0", lineHeight: "1.8", fontSize: "1.05em" }}>
                Data Science Engineer specializing in Machine Learning, Deep Learning and LLM Engineering.
                Experienced in designing advanced AI systems including RAG, multi-agent architectures,
                NLP and full-stack solution deployment. Capable of building end-to-end AI solutions,
                from requirements analysis through to integration and evaluation.
              </p>
            </Col>
          </Row>

          {/* Experience */}
          <Row className="justify-content-center">
            <Col md={10}>
              <h2 className="project-heading" style={{ paddingBottom: "20px" }}>
                <strong className="purple">Work Experience</strong>
              </h2>

              <div className="experience-card">
                <h3>Final Year Project (PFE) — Intelligent Multi-Agent HR Platform</h3>
                <div className="company">SEGULA Technologies</div>
                <div className="date">
                  <AiOutlineCalendar /> Dec. 2025 — Jun. 2026
                </div>
                <ul>
                  <li>Built an intelligent HR platform based on a multi-agent architecture: CV Agent, HR Copilot, Interview Agent and Privacy Agent.</li>
                  <li>Developed a CV pipeline: OCR → NLP → Explainable Scoring (XAI).</li>
                  <li>Implemented a RAG system for an HR assistant powered by internal documents.</li>
                  <li>Built a voice interview agent with STT/TTS using Whisper and Groq.</li>
                  <li>Backend with FastAPI and LangGraph, frontend with React.js.</li>
                  <li>Used MongoDB and Docker for data management and deployment.</li>
                  <li>Implemented a GDPR compliance module with algorithmic fairness auditing.</li>
                </ul>
              </div>

              <div className="experience-card">
                <h3>Data Scientist Intern</h3>
                <div className="company">SOTRAPIL — Tunis</div>
                <div className="date">
                  <AiOutlineCalendar /> Jun. 2025 — Jul. 2025
                </div>
                <ul>
                  <li>Developed predictive maintenance models for industrial data analysis.</li>
                  <li>Implemented anomaly detection techniques on sensor data streams.</li>
                  <li>Built Power BI dashboards to monitor operational performance KPIs.</li>
                </ul>
              </div>

              <div className="experience-card">
                <h3>Application Development Internship</h3>
                <div className="company">ESPRIT DSI</div>
                <div className="date">
                  <AiOutlineCalendar /> Jul. 2024 — Sep. 2024
                </div>
                <ul>
                  <li>Developed an inventory management application.</li>
                  <li>Tech stack: Spring Boot, Angular, MySQL.</li>
                  <li>Implemented CRUD features and improved the user interface.</li>
                </ul>
              </div>
            </Col>
          </Row>

          {/* Education */}
          <Row className="justify-content-center" style={{ paddingTop: "30px" }}>
            <Col md={10}>
              <h2 className="project-heading" style={{ paddingBottom: "20px" }}>
                <strong className="purple">Education</strong>
              </h2>

              <div className="experience-card">
                <h3>Engineering Degree in Computer Science — Data Science</h3>
                <div className="company">ESPRIT — École Supérieure Privée d'Ingénierie et de Technologie</div>
                <div className="date">
                  <AiOutlineCalendar /> 2022 — 2026
                </div>
              </div>

              <div className="experience-card">
                <h3>Preparatory Classes — Mathematics & Physics</h3>
                <div className="company">IPEIG</div>
                <div className="date">
                  <AiOutlineCalendar /> 2019 — 2022
                </div>
              </div>
            </Col>
          </Row>

          {/* Certifications */}
          <Row className="justify-content-center" style={{ paddingTop: "30px", paddingBottom: "30px" }}>
            <Col md={10}>
              <h2 className="project-heading" style={{ paddingBottom: "20px" }}>
                <strong className="purple">Certifications</strong>
              </h2>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                <span className="cert-badge"><FaCertificate style={{ color: "#7c3aed" }} /> AWS Fundamentals</span>
                <span className="cert-badge"><FaCertificate style={{ color: "#7c3aed" }} /> NVIDIA RAG Agents</span>
                <span className="cert-badge"><FaCertificate style={{ color: "#7c3aed" }} /> NLP Transformers</span>
                <span className="cert-badge"><FaCertificate style={{ color: "#7c3aed" }} /> Blockchain Fundamentals</span>
              </div>
            </Col>
          </Row>

          {/* Languages */}
          <Row className="justify-content-center" style={{ paddingBottom: "50px" }}>
            <Col md={10}>
              <h2 className="project-heading" style={{ paddingBottom: "20px" }}>
                <strong className="purple">Languages</strong>
              </h2>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
                <span className="cert-badge">🇹🇳 Arabic (Native)</span>
                <span className="cert-badge">🇫🇷 French (B2)</span>
                <span className="cert-badge">🇬🇧 English (B2)</span>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
}

export default ResumeNew;
