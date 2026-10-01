import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/profile.jpg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row className="align-items-center">
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I'm a Data Science Engineer passionate about building intelligent
              AI systems that solve real-world problems. I specialize in
              designing end-to-end AI solutions, from need analysis to
              deployment and evaluation.
              <br />
              <br />
              I'm proficient in
              <i>
                <b className="purple">
                  {" "}
                  Python, Machine Learning, Deep Learning, and LLM Engineering{" "}
                </b>
              </i>
              — with hands-on experience in NLP, Computer Vision, and
              Explainable AI (XAI).
              <br />
              <br />
              My key areas of expertise include
              <i>
                <b className="purple">
                  {" "}
                  RAG Systems, Multi-Agent Architectures, LangChain/LangGraph,{" "}
                </b>
              </i>
              and building intelligent pipelines for document processing,
              recruitment, and conversational AI.
              <br />
              <br />
              I build full-stack AI applications using
              <b className="purple"> FastAPI </b> and{" "}
              <i>
                <b className="purple">React.js</b>
              </i>
              , with deployment powered by{" "}
              <b className="purple">Docker</b>.
            </p>
          </Col>
          <Col md={4} className="myAvtar text-center" style={{ paddingTop: "20px" }}>
            <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} perspective={1000} scale={1.03}>
              <div className="profile-photo-wrapper">
                <img
                  src={myImg}
                  className="img-fluid profile-photo-img"
                  alt="Mohamed Dhia Khalfalli"
                />
              </div>
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
