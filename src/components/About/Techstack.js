import React from "react";
import { Col, Row } from "react-bootstrap";
import Python from "../../Assets/TechIcons/Python.svg";
import Java from "../../Assets/TechIcons/Java.svg";
import Javascript from "../../Assets/TechIcons/Javascript.svg";
import SQL from "../../Assets/TechIcons/SQL.svg";
import ReactIcon from "../../Assets/TechIcons/React.svg";
import Mongo from "../../Assets/TechIcons/Mongo.svg";
import Docker from "../../Assets/TechIcons/Docker.svg";
import Git from "../../Assets/TechIcons/Git.svg";
import Redis from "../../Assets/TechIcons/Redis.svg";
import AWS from "../../Assets/TechIcons/AWS.svg";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Python} alt="Python" />
        <div className="tech-icons-text">Python</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Java} alt="Java" />
        <div className="tech-icons-text">Java</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Javascript} alt="javascript" />
        <div className="tech-icons-text">JavaScript</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={SQL} alt="SQL" />
        <div className="tech-icons-text">SQL</div>
      </Col>

      {/* AI / LLM */}
      <Col xs={4} md={2} className="tech-icons">
        <span role="img" aria-label="brain" style={{ fontSize: "1.4rem" }}>🧠</span>
        <div className="tech-icons-text">LangChain</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <span role="img" aria-label="robot" style={{ fontSize: "1.4rem" }}>🤖</span>
        <div className="tech-icons-text">LangGraph</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <span role="img" aria-label="search" style={{ fontSize: "1.4rem" }}>🔍</span>
        <div className="tech-icons-text">RAG / FAISS</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <span role="img" aria-label="llama" style={{ fontSize: "1.4rem" }}>🦙</span>
        <div className="tech-icons-text">Llama 3</div>
      </Col>

      {/* ML / DL */}
      <Col xs={4} md={2} className="tech-icons">
        <span role="img" aria-label="chart" style={{ fontSize: "1.4rem" }}>📊</span>
        <div className="tech-icons-text">Scikit-Learn</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <span role="img" aria-label="fire" style={{ fontSize: "1.4rem" }}>🔥</span>
        <div className="tech-icons-text">PyTorch</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <span role="img" aria-label="transformer" style={{ fontSize: "1.4rem" }}>⚡</span>
        <div className="tech-icons-text">Transformers</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <span role="img" aria-label="nlp" style={{ fontSize: "1.4rem" }}>💬</span>
        <div className="tech-icons-text">NLP</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <span role="img" aria-label="vision" style={{ fontSize: "1.4rem" }}>👁️</span>
        <div className="tech-icons-text">Computer Vision</div>
      </Col>

      {/* Backend */}
      <Col xs={4} md={2} className="tech-icons">
        <span role="img" aria-label="api" style={{ fontSize: "1.4rem" }}>⚙️</span>
        <div className="tech-icons-text">FastAPI</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <span role="img" aria-label="flask" style={{ fontSize: "1.4rem" }}>🧪</span>
        <div className="tech-icons-text">Flask</div>
      </Col>

      {/* Frontend */}
      <Col xs={4} md={2} className="tech-icons">
        <img src={ReactIcon} alt="react" />
        <div className="tech-icons-text">React.js</div>
      </Col>

      {/* Data / DevOps */}
      <Col xs={4} md={2} className="tech-icons">
        <img src={Mongo} alt="mongoDb" />
        <div className="tech-icons-text">MongoDB</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Redis} alt="redis" />
        <div className="tech-icons-text">Redis</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Docker} alt="docker" />
        <div className="tech-icons-text">Docker</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Git} alt="git" />
        <div className="tech-icons-text">Git</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={AWS} alt="AWS" className="tech-icon-images" />
        <div className="tech-icons-text">AWS</div>
      </Col>
    </Row>
  );
}

export default Techstack;
