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
                <span><MdLocationOn style={{ color: "#7c3aed" }} /> Tunis, Tunisie</span>
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
                Ingénieur en Data Science spécialisé en Machine Learning, Deep Learning et LLM Engineering.
                Expérience dans la conception de systèmes IA avancés incluant RAG, architectures multi-agents,
                NLP et déploiement de solutions full-stack. Capable de concevoir des solutions IA de bout en bout,
                de l'analyse du besoin jusqu'à l'intégration et l'évaluation.
              </p>
            </Col>
          </Row>

          {/* Experience */}
          <Row className="justify-content-center">
            <Col md={10}>
              <h2 className="project-heading" style={{ paddingBottom: "20px" }}>
                <strong className="purple">Expériences</strong>
              </h2>

              <div className="experience-card">
                <h3>PFE — Plateforme Intelligente de Recrutement Multi-Agents</h3>
                <div className="company">SEGULA Technologies</div>
                <div className="date">
                  <AiOutlineCalendar /> Déc. 2025 — Juin 2026
                </div>
                <ul>
                  <li>Développement d'une plateforme RH intelligente basée sur une architecture multi-agents : CV Agent, Copilot RH, Interview Agent et Privacy Agent.</li>
                  <li>Développement d'un pipeline CV : OCR → NLP → scoring explicable (XAI).</li>
                  <li>Mise en place d'un système RAG pour un assistant RH basé sur des documents internes.</li>
                  <li>Développement d'un agent d'entretien vocal avec STT/TTS via Whisper et Groq.</li>
                  <li>Backend avec FastAPI et LangGraph, frontend avec React.js.</li>
                  <li>Utilisation de MongoDB et Docker pour la gestion des données et le déploiement.</li>
                  <li>Mise en place d'un module RGPD avec audit d'équité algorithmique.</li>
                </ul>
              </div>

              <div className="experience-card">
                <h3>Stagiaire Data Scientist</h3>
                <div className="company">SOTRAPIL — Tunis</div>
                <div className="date">
                  <AiOutlineCalendar /> Juin 2025 — Juil. 2025
                </div>
                <ul>
                  <li>Développement de modèles de maintenance prédictive pour l'analyse industrielle.</li>
                  <li>Mise en place de techniques de détection d'anomalies sur des données issues de capteurs.</li>
                  <li>Création de dashboards Power BI pour le suivi des performances opérationnelles.</li>
                </ul>
              </div>

              <div className="experience-card">
                <h3>Stage d'Immersion en Développement Applicatif</h3>
                <div className="company">ESPRIT DSI</div>
                <div className="date">
                  <AiOutlineCalendar /> Juil. 2024 — Sep. 2024
                </div>
                <ul>
                  <li>Développement d'une application de gestion de stock.</li>
                  <li>Stack : Spring Boot, Angular, MySQL.</li>
                  <li>Implémentation des fonctionnalités CRUD et amélioration de l'interface utilisateur.</li>
                </ul>
              </div>
            </Col>
          </Row>

          {/* Education */}
          <Row className="justify-content-center" style={{ paddingTop: "30px" }}>
            <Col md={10}>
              <h2 className="project-heading" style={{ paddingBottom: "20px" }}>
                <strong className="purple">Formation</strong>
              </h2>

              <div className="experience-card">
                <h3>Diplôme d'Ingénieur Informatique — Data Science</h3>
                <div className="company">ESPRIT — École Supérieure Privée d'Ingénierie et de Technologie</div>
                <div className="date">
                  <AiOutlineCalendar /> 2022 — 2026
                </div>
              </div>

              <div className="experience-card">
                <h3>Classes Préparatoires Mathématiques — Physique</h3>
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
                <strong className="purple">Langues</strong>
              </h2>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
                <span className="cert-badge">🇹🇳 Arabe (Maternelle)</span>
                <span className="cert-badge">🇫🇷 Français (B2)</span>
                <span className="cert-badge">🇬🇧 Anglais (B2)</span>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
}

export default ResumeNew;
