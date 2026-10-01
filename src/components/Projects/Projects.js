import React, { useState, useMemo } from "react";
import { Container, Row, Col, Button, Modal, Badge, Form, InputGroup } from "react-bootstrap";
import Particle from "../Particle";
import { BsGithub, BsSearch, BsInfoCircle, BsCheckCircleFill } from "react-icons/bs";
import { AiOutlineCalendar, AiOutlineProject } from "react-icons/ai";
import { HiOutlineExternalLink } from "react-icons/hi";
import { projects, projectDomains, projectYears } from "../../data/projects";

function Projects() {
  const [selectedDomain, setSelectedDomain] = useState("All");
  const [selectedYear, setSelectedYear] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeModalProject, setActiveModalProject] = useState(null);

  // Filtered projects for the "All Projects" library
  const filteredProjects = useMemo(() => {
    return projects.filter((p) => {
      // Domain filter
      const matchesDomain =
        selectedDomain === "All" ||
        p.domain === selectedDomain ||
        (p.domains && p.domains.includes(selectedDomain));

      // Year filter
      const matchesYear = selectedYear === "All" || p.year === selectedYear;

      // Search query
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !query ||
        p.title.toLowerCase().includes(query) ||
        p.shortDescription.toLowerCase().includes(query) ||
        (p.technologies && p.technologies.some((t) => t.toLowerCase().includes(query))) ||
        (p.context && p.context.toLowerCase().includes(query));

      return matchesDomain && matchesYear && matchesSearch;
    });
  }, [selectedDomain, selectedYear, searchQuery]);

  const featuredProjects = useMemo(() => {
    return projects.filter((p) => p.featured);
  }, []);

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        {/* Header Section */}
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <h1 className="project-heading" style={{ fontSize: "2.8em", fontWeight: 800 }}>
            My Journey & <strong className="purple">Projects</strong>
          </h1>
          <p style={{ color: "#a3a0b0", fontSize: "1.15em", maxWidth: "800px", margin: "0 auto" }}>
            Explore all my technical work across 4 years of engineering studies at ESPRIT,
            internships, my Final Year Project at SEGULA Technologies and personal Data Science & AI projects.
          </p>
        </div>

        {/* ======================================================== */}
        {/* SECTION 1: FEATURED PROJECTS (NIVEAU 1)                   */}
        {/* ======================================================== */}
        <div style={{ marginBottom: "60px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              marginBottom: "25px",
              borderBottom: "1px solid rgba(124, 58, 237, 0.2)",
              paddingBottom: "12px",
            }}
          >
            <span
              style={{
                fontSize: "1.4em",
                background: "rgba(124, 58, 237, 0.15)",
                padding: "8px 14px",
                borderRadius: "12px",
                color: "#c084fc",
              }}
            >
              ⭐
            </span>
            <div>
              <h2 style={{ fontSize: "1.8em", fontWeight: 700, margin: 0, color: "#ffffff" }}>
                Featured Projects <span className="purple">— Highlights</span>
              </h2>
              <span style={{ fontSize: "0.9em", color: "#9ca3af" }}>
                The most representative projects showcasing my skills in AI, Data Science & MLOps
              </span>
            </div>
          </div>

          <Row style={{ justifyContent: "center" }}>
            {featuredProjects.map((project) => (
              <Col key={project.id} lg={4} md={6} style={{ marginBottom: "30px" }}>
                <div
                  className="project-card-view"
                  style={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    position: "relative",
                    background: "rgba(22, 11, 41, 0.75)",
                    border: "1px solid rgba(124, 58, 237, 0.25)",
                    borderRadius: "16px",
                    overflow: "hidden",
                    transition: "all 0.3s ease",
                  }}
                >
                  {/* Card Image */}
                  <div style={{ position: "relative", height: "200px", overflow: "hidden", background: "#110726" }}>
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={project.title}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          transition: "transform 0.4s ease",
                        }}
                      />
                    ) : (
                      <div
                        style={{
                          height: "100%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          background: "linear-gradient(135deg, #2e1065, #0f172a)",
                          color: "#c084fc",
                        }}
                      >
                        <AiOutlineProject style={{ fontSize: "3rem" }} />
                      </div>
                    )}
                    <span
                      style={{
                        position: "absolute",
                        top: "12px",
                        left: "12px",
                        background: "rgba(15, 23, 42, 0.85)",
                        backdropFilter: "blur(8px)",
                        border: "1px solid rgba(124, 58, 237, 0.4)",
                        color: "#a78bfa",
                        fontSize: "0.75em",
                        fontWeight: 600,
                        padding: "4px 10px",
                        borderRadius: "20px",
                      }}
                    >
                      {project.domain} • {project.year}
                    </span>
                  </div>

                  {/* Card Body */}
                  <div style={{ padding: "20px", display: "flex", flexDirection: "column", flexGrow: 1 }}>
                    <h3
                      style={{
                        fontSize: "1.25em",
                        fontWeight: 700,
                        color: "#ffffff",
                        marginBottom: "10px",
                        lineHeight: 1.4,
                      }}
                    >
                      {project.title}
                    </h3>

                    <p
                      style={{
                        color: "#a3a0b0",
                        fontSize: "0.92em",
                        lineHeight: 1.6,
                        flexGrow: 1,
                        marginBottom: "15px",
                        textAlign: "justify",
                      }}
                    >
                      {project.shortDescription}
                    </p>

                    {/* Technologies tags */}
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "20px" }}>
                      {project.technologies.slice(0, 5).map((tech, i) => (
                        <span
                          key={i}
                          style={{
                            background: "rgba(124, 58, 237, 0.12)",
                            border: "1px solid rgba(124, 58, 237, 0.3)",
                            color: "#c084fc",
                            fontSize: "0.75em",
                            padding: "2px 8px",
                            borderRadius: "6px",
                            fontFamily: "'JetBrains Mono', monospace",
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 5 && (
                        <span
                          style={{
                            color: "#818cf8",
                            fontSize: "0.75em",
                            padding: "2px 6px",
                            alignSelf: "center",
                          }}
                        >
                          +{project.technologies.length - 5}
                        </span>
                      )}
                    </div>

                    {/* Actions */}
                    <div style={{ display: "flex", gap: "10px", marginTop: "auto" }}>
                      <Button
                        variant="primary"
                        size="sm"
                        onClick={() => setActiveModalProject(project)}
                        style={{
                          flex: 1,
                          background: "linear-gradient(135deg, #7c3aed, #4c1d95)",
                          border: "none",
                          fontWeight: 600,
                          padding: "8px 12px",
                        }}
                      >
                        <BsInfoCircle style={{ marginRight: "6px" }} /> Details
                      </Button>
                      {project.ghLink && (
                        <Button
                          variant="outline-light"
                          size="sm"
                          href={project.ghLink}
                          target="_blank"
                          rel="noreferrer"
                          style={{
                            borderColor: "rgba(255, 255, 255, 0.2)",
                            padding: "8px 12px",
                          }}
                        >
                          <BsGithub />
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </div>

        {/* ======================================================== */}
        {/* SECTION 2: ALL PROJECTS / BIBLIOTHÈQUE (NIVEAU 2)         */}
        {/* ======================================================== */}
        <div style={{ marginTop: "40px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "15px",
              marginBottom: "25px",
              borderBottom: "1px solid rgba(124, 58, 237, 0.2)",
              paddingBottom: "12px",
            }}
          >
            <div>
              <h2 style={{ fontSize: "1.8em", fontWeight: 700, margin: 0, color: "#ffffff" }}>
                All Projects <span className="purple">— Complete Library</span>
              </h2>
              <span style={{ fontSize: "0.9em", color: "#9ca3af" }}>
                Browse my complete project library filtered by domain and year
              </span>
            </div>
            <Badge
              bg="dark"
              style={{
                fontSize: "0.9em",
                padding: "8px 14px",
                border: "1px solid rgba(124, 58, 237, 0.4)",
                color: "#c084fc",
              }}
            >
              {filteredProjects.length} {filteredProjects.length > 1 ? "projects found" : "project found"}
            </Badge>
          </div>

          {/* Controls: Search + Domain Filters + Year Filters */}
          <div
            style={{
              background: "rgba(18, 9, 36, 0.7)",
              border: "1px solid rgba(124, 58, 237, 0.2)",
              borderRadius: "16px",
              padding: "20px",
              marginBottom: "35px",
              backdropFilter: "blur(10px)",
            }}
          >
            {/* Search input */}
            <div style={{ marginBottom: "20px" }}>
              <InputGroup>
                <InputGroup.Text
                  style={{
                    background: "rgba(255, 255, 255, 0.05)",
                    border: "1px solid rgba(124, 58, 237, 0.3)",
                    borderRight: "none",
                    color: "#a78bfa",
                  }}
                >
                  <BsSearch />
                </InputGroup.Text>
                <Form.Control
                  type="text"
                  placeholder="Search by title, technology (FastAPI, React, LangGraph...), or keyword..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  style={{
                    background: "rgba(255, 255, 255, 0.05)",
                    border: "1px solid rgba(124, 58, 237, 0.3)",
                    borderLeft: "none",
                    color: "#ffffff",
                    boxShadow: "none",
                  }}
                />
                {searchQuery && (
                  <Button
                    variant="outline-secondary"
                    onClick={() => setSearchQuery("")}
                    style={{ borderColor: "rgba(124, 58, 237, 0.3)" }}
                  >
                    Clear
                  </Button>
                )}
              </InputGroup>
            </div>

            {/* Filter by Domain */}
            <div style={{ marginBottom: "15px" }}>
              <div style={{ fontSize: "0.85em", color: "#9ca3af", marginBottom: "8px", fontWeight: 600 }}>
                FILTER BY DOMAIN:
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {projectDomains.map((dom) => {
                  const isActive = selectedDomain === dom;
                  return (
                    <button
                      key={dom}
                      onClick={() => setSelectedDomain(dom)}
                      style={{
                        background: isActive ? "linear-gradient(135deg, #7c3aed, #4c1d95)" : "rgba(255, 255, 255, 0.04)",
                        border: isActive ? "1px solid #a855f7" : "1px solid rgba(255, 255, 255, 0.1)",
                        color: isActive ? "#ffffff" : "#cbd5e1",
                        borderRadius: "20px",
                        padding: "5px 14px",
                        fontSize: "0.82em",
                        fontWeight: isActive ? 600 : 400,
                        cursor: "pointer",
                        transition: "all 0.2s ease",
                      }}
                    >
                      {dom}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Filter by Year */}
            <div>
              <div style={{ fontSize: "0.85em", color: "#9ca3af", marginBottom: "8px", fontWeight: 600 }}>
                FILTER BY YEAR:
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {projectYears.map((yr) => {
                  const isActive = selectedYear === yr;
                  return (
                    <button
                      key={yr}
                      onClick={() => setSelectedYear(yr)}
                      style={{
                        background: isActive ? "linear-gradient(135deg, #38bdf8, #0284c7)" : "rgba(255, 255, 255, 0.04)",
                        border: isActive ? "1px solid #38bdf8" : "1px solid rgba(255, 255, 255, 0.1)",
                        color: isActive ? "#ffffff" : "#cbd5e1",
                        borderRadius: "20px",
                        padding: "4px 12px",
                        fontSize: "0.8em",
                        fontWeight: isActive ? 600 : 400,
                        cursor: "pointer",
                        transition: "all 0.2s ease",
                      }}
                    >
                      {yr === "All" ? "All years" : yr}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Grid of Filtered Projects */}
          {filteredProjects.length === 0 ? (
            <div
              style={{
                textAlign: "center",
                padding: "60px 20px",
                background: "rgba(255, 255, 255, 0.02)",
                borderRadius: "16px",
                border: "1px dashed rgba(124, 58, 237, 0.3)",
              }}
            >
              <h4 style={{ color: "#ffffff", marginBottom: "10px" }}>No projects found</h4>
              <p style={{ color: "#9ca3af" }}>
                No projects match your current filters. Try resetting them.
              </p>
              <Button
                variant="outline-primary"
                onClick={() => {
                  setSelectedDomain("All");
                  setSelectedYear("All");
                  setSearchQuery("");
                }}
              >
                Reset filters
              </Button>
            </div>
          ) : (
            <Row>
              {filteredProjects.map((project) => (
                <Col key={project.id} lg={4} md={6} style={{ marginBottom: "25px" }}>
                  <div
                    className="project-card-view"
                    style={{
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      background: "rgba(18, 9, 36, 0.7)",
                      border: project.status === "to_complete" 
                        ? "1px dashed rgba(234, 179, 8, 0.5)" 
                        : "1px solid rgba(124, 58, 237, 0.2)",
                      borderRadius: "14px",
                      overflow: "hidden",
                      transition: "all 0.3s ease",
                    }}
                  >
                    {/* Header Image or Gradient Banner */}
                    <div style={{ position: "relative", height: "160px", overflow: "hidden", background: "#0c0517" }}>
                      {project.image ? (
                        <img
                          src={project.image}
                          alt={project.title}
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                          }}
                        />
                      ) : (
                        <div
                          style={{
                            height: "100%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            background: project.status === "to_complete"
                              ? "linear-gradient(135deg, rgba(234, 179, 8, 0.15), rgba(15, 23, 42, 0.9))"
                              : "linear-gradient(135deg, rgba(124, 58, 237, 0.2), rgba(15, 23, 42, 0.9))",
                            color: project.status === "to_complete" ? "#facc15" : "#c084fc",
                            textAlign: "center",
                            padding: "15px",
                          }}
                        >
                          <div>
                            <AiOutlineProject style={{ fontSize: "2.5rem", marginBottom: "6px" }} />
                            <div style={{ fontSize: "0.85em", fontWeight: 600 }}>
                              {project.title}
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Status Badges */}
                      <div
                        style={{
                          position: "absolute",
                          top: "10px",
                          left: "10px",
                          display: "flex",
                          gap: "6px",
                          flexWrap: "wrap",
                        }}
                      >
                        <span
                          style={{
                            background: "rgba(15, 23, 42, 0.85)",
                            backdropFilter: "blur(6px)",
                            border: "1px solid rgba(124, 58, 237, 0.4)",
                            color: "#e2e8f0",
                            fontSize: "0.72em",
                            fontWeight: 600,
                            padding: "3px 8px",
                            borderRadius: "12px",
                          }}
                        >
                          {project.year}
                        </span>
                        {project.status === "to_complete" ? (
                          <span
                            style={{
                              background: "rgba(234, 179, 8, 0.2)",
                              border: "1px solid rgba(234, 179, 8, 0.5)",
                              color: "#facc15",
                              fontSize: "0.72em",
                              fontWeight: 600,
                              padding: "3px 8px",
                              borderRadius: "12px",
                            }}
                          >
                            ⚠️ In Progress
                          </span>
                        ) : project.featured ? (
                          <span
                            style={{
                              background: "rgba(124, 58, 237, 0.3)",
                              border: "1px solid rgba(168, 85, 247, 0.5)",
                              color: "#d8b4fe",
                              fontSize: "0.72em",
                              fontWeight: 600,
                              padding: "3px 8px",
                              borderRadius: "12px",
                            }}
                          >
                            ⭐ Featured
                          </span>
                        ) : null}
                      </div>
                    </div>

                    {/* Card Content */}
                    <div style={{ padding: "18px", display: "flex", flexDirection: "column", flexGrow: 1 }}>
                      <h4
                        style={{
                          fontSize: "1.15em",
                          fontWeight: 700,
                          color: "#ffffff",
                          marginBottom: "8px",
                          lineHeight: 1.4,
                        }}
                      >
                        {project.title}
                      </h4>

                      <p
                        style={{
                          color: "#9ca3af",
                          fontSize: "0.88em",
                          lineHeight: 1.5,
                          flexGrow: 1,
                          marginBottom: "14px",
                          textAlign: "justify",
                        }}
                      >
                        {project.shortDescription}
                      </p>

                      {/* Tech badges */}
                      <div style={{ display: "flex", flexWrap: "wrap", gap: "5px", marginBottom: "15px" }}>
                        {project.technologies.slice(0, 4).map((tech, i) => (
                          <span
                            key={i}
                            style={{
                              background: "rgba(124, 58, 237, 0.12)",
                              border: "1px solid rgba(124, 58, 237, 0.25)",
                              color: "#c084fc",
                              fontSize: "0.72em",
                              padding: "2px 7px",
                              borderRadius: "5px",
                              fontFamily: "'JetBrains Mono', monospace",
                            }}
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 4 && (
                          <span style={{ color: "#a5b4fc", fontSize: "0.72em", alignSelf: "center" }}>
                            +{project.technologies.length - 4}
                          </span>
                        )}
                      </div>

                      {/* Card Button */}
                      <div style={{ display: "flex", gap: "8px", marginTop: "auto" }}>
                        <Button
                          variant="primary"
                          size="sm"
                          onClick={() => setActiveModalProject(project)}
                          style={{
                            flex: 1,
                            background: "linear-gradient(135deg, #7c3aed, #4c1d95)",
                            border: "none",
                            fontWeight: 600,
                            padding: "7px 10px",
                            fontSize: "0.85em",
                          }}
                        >
                          <BsInfoCircle style={{ marginRight: "5px" }} /> Details
                        </Button>
                        {project.ghLink && (
                          <Button
                            variant="outline-light"
                            size="sm"
                            href={project.ghLink}
                            target="_blank"
                            rel="noreferrer"
                            style={{ borderColor: "rgba(255, 255, 255, 0.2)", padding: "7px 10px" }}
                          >
                            <BsGithub />
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          )}
        </div>

        {/* ======================================================== */}
        {/* MODAL FICHE DÉTAILLÉE DU PROJET                          */}
        {/* ======================================================== */}
        {activeModalProject && (
          <Modal
            show={!!activeModalProject}
            onHide={() => setActiveModalProject(null)}
            size="lg"
            centered
            contentClassName="project-detail-modal"
          >
            <Modal.Header
              closeButton
              closeVariant="white"
              style={{
                background: "#130924",
                borderBottom: "1px solid rgba(124, 58, 237, 0.3)",
                color: "#ffffff",
              }}
            >
              <Modal.Title style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap" }}>
                <span style={{ fontWeight: 800, fontSize: "1.25em" }}>{activeModalProject.title}</span>
                <span
                  style={{
                    background: "rgba(124, 58, 237, 0.2)",
                    border: "1px solid #7c3aed",
                    color: "#c084fc",
                    fontSize: "0.65em",
                    padding: "3px 10px",
                    borderRadius: "12px",
                  }}
                >
                  <AiOutlineCalendar style={{ marginRight: "4px" }} /> {activeModalProject.year}
                </span>
                <span
                  style={{
                    background: "rgba(56, 189, 248, 0.15)",
                    border: "1px solid #38bdf8",
                    color: "#38bdf8",
                    fontSize: "0.65em",
                    padding: "3px 10px",
                    borderRadius: "12px",
                  }}
                >
                  {activeModalProject.domain}
                </span>
                {activeModalProject.status === "to_complete" && (
                  <span
                    style={{
                      background: "rgba(234, 179, 8, 0.2)",
                      border: "1px solid #eab308",
                      color: "#facc15",
                      fontSize: "0.65em",
                      padding: "3px 10px",
                      borderRadius: "12px",
                    }}
                  >
                    ⚠️ Details to be completed
                  </span>
                )}
              </Modal.Title>
            </Modal.Header>

            <Modal.Body
              style={{
                background: "#0e051c",
                color: "#e2e8f0",
                maxHeight: "75vh",
                overflowY: "auto",
                padding: "25px",
              }}
            >
              {/* Project Image Preview if exists */}
              {activeModalProject.image && (
                <div style={{ marginBottom: "25px", borderRadius: "12px", overflow: "hidden" }}>
                  <img
                    src={activeModalProject.image}
                    alt={activeModalProject.title}
                    style={{ width: "100%", maxHeight: "350px", objectFit: "cover" }}
                  />
                </div>
              )}

              {/* Status Note (e.g. for Assurancy) */}
              {activeModalProject.note && (
                <div
                  style={{
                    background: "rgba(234, 179, 8, 0.1)",
                    border: "1px solid rgba(234, 179, 8, 0.35)",
                    borderRadius: "10px",
                    padding: "12px 16px",
                    marginBottom: "20px",
                    color: "#fde047",
                    fontSize: "0.95em",
                  }}
                >
                  {activeModalProject.note}
                </div>
              )}

              {/* Description */}
              {activeModalProject.shortDescription && (
                <div style={{ marginBottom: "20px" }}>
                  <h5 style={{ color: "#c084fc", fontWeight: 700, fontSize: "1.05em" }}>📌 Overview</h5>
                  <p style={{ color: "#cbd5e1", lineHeight: 1.7, fontSize: "0.98em" }}>
                    {activeModalProject.shortDescription}
                  </p>
                </div>
              )}

              {/* Contexte & Problématique */}
              {(activeModalProject.context || activeModalProject.problem) && (
                <div
                  style={{
                    background: "rgba(255, 255, 255, 0.03)",
                    border: "1px solid rgba(124, 58, 237, 0.15)",
                    borderRadius: "12px",
                    padding: "18px",
                    marginBottom: "20px",
                  }}
                >
                  {activeModalProject.context && (
                    <div style={{ marginBottom: activeModalProject.problem ? "15px" : "0" }}>
                      <h5 style={{ color: "#38bdf8", fontWeight: 700, fontSize: "1em", marginBottom: "6px" }}>
                        🎯 Context
                      </h5>
                      <p style={{ margin: 0, color: "#94a3b8", lineHeight: 1.6 }}>
                        {activeModalProject.context}
                      </p>
                    </div>
                  )}
                  {activeModalProject.problem && (
                    <div>
                      <h5 style={{ color: "#f87171", fontWeight: 700, fontSize: "1em", marginBottom: "6px" }}>
                        ⚡ Problem Statement
                      </h5>
                      <p style={{ margin: 0, color: "#94a3b8", lineHeight: 1.6 }}>
                        {activeModalProject.problem}
                      </p>
                    </div>
                  )}
                </div>
              )}

              {/* Solution & Architecture */}
              {(activeModalProject.solution || activeModalProject.architecture) && (
                <div
                  style={{
                    background: "rgba(255, 255, 255, 0.03)",
                    border: "1px solid rgba(124, 58, 237, 0.15)",
                    borderRadius: "12px",
                    padding: "18px",
                    marginBottom: "20px",
                  }}
                >
                  {activeModalProject.solution && (
                    <div style={{ marginBottom: activeModalProject.architecture ? "15px" : "0" }}>
                      <h5 style={{ color: "#4ade80", fontWeight: 700, fontSize: "1em", marginBottom: "6px" }}>
                        💡 Solution
                      </h5>
                      <p style={{ margin: 0, color: "#94a3b8", lineHeight: 1.6 }}>
                        {activeModalProject.solution}
                      </p>
                    </div>
                  )}
                  {activeModalProject.architecture && (
                    <div>
                      <h5 style={{ color: "#a78bfa", fontWeight: 700, fontSize: "1em", marginBottom: "6px" }}>
                        🏗️ Technical Architecture
                      </h5>
                      <p style={{ margin: 0, color: "#94a3b8", lineHeight: 1.6 }}>
                        {activeModalProject.architecture}
                      </p>
                    </div>
                  )}
                </div>
              )}

              {/* Features list */}
              {activeModalProject.features && activeModalProject.features.length > 0 && (
                <div style={{ marginBottom: "20px" }}>
                  <h5 style={{ color: "#c084fc", fontWeight: 700, fontSize: "1.05em", marginBottom: "10px" }}>
                    🚀 Key Features
                  </h5>
                  <ul style={{ listStyle: "none", paddingLeft: 0, margin: 0 }}>
                    {activeModalProject.features.map((feat, idx) => (
                      <li
                        key={idx}
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: "8px",
                          marginBottom: "8px",
                          color: "#cbd5e1",
                          fontSize: "0.95em",
                          lineHeight: 1.5,
                        }}
                      >
                        <BsCheckCircleFill style={{ color: "#38bdf8", marginTop: "4px", flexShrink: 0 }} />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Technologies */}
              {activeModalProject.technologies && activeModalProject.technologies.length > 0 && (
                <div style={{ marginBottom: "20px" }}>
                  <h5 style={{ color: "#c084fc", fontWeight: 700, fontSize: "1.05em", marginBottom: "10px" }}>
                    🛠️ Technologies & Tools
                  </h5>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                    {activeModalProject.technologies.map((t, idx) => (
                      <span
                        key={idx}
                        style={{
                          background: "rgba(124, 58, 237, 0.15)",
                          border: "1px solid rgba(124, 58, 237, 0.4)",
                          color: "#d8b4fe",
                          fontSize: "0.82em",
                          fontWeight: 500,
                          padding: "4px 10px",
                          borderRadius: "8px",
                          fontFamily: "'JetBrains Mono', monospace",
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Personal Contribution */}
              {activeModalProject.contribution && (
                <div style={{ marginBottom: "20px" }}>
                  <h5 style={{ color: "#38bdf8", fontWeight: 700, fontSize: "1.05em", marginBottom: "6px" }}>
                    👤 Role & Personal Contribution
                  </h5>
                  <p style={{ color: "#94a3b8", lineHeight: 1.6, margin: 0, fontSize: "0.95em" }}>
                    {activeModalProject.contribution}
                  </p>
                </div>
              )}

              {/* Results & Impact */}
              {activeModalProject.results && (
                <div style={{ marginBottom: "15px" }}>
                  <h5 style={{ color: "#4ade80", fontWeight: 700, fontSize: "1.05em", marginBottom: "6px" }}>
                    📈 Results & Impact
                  </h5>
                  <p style={{ color: "#94a3b8", lineHeight: 1.6, margin: 0, fontSize: "0.95em" }}>
                    {activeModalProject.results}
                  </p>
                </div>
              )}
            </Modal.Body>

            <Modal.Footer
              style={{
                background: "#130924",
                borderTop: "1px solid rgba(124, 58, 237, 0.3)",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <div style={{ display: "flex", gap: "10px" }}>
                {activeModalProject.ghLink && (
                  <Button
                    variant="outline-light"
                    href={activeModalProject.ghLink}
                    target="_blank"
                    rel="noreferrer"
                    style={{ borderColor: "rgba(124, 58, 237, 0.5)", color: "#e2e8f0" }}
                  >
                    <BsGithub style={{ marginRight: "6px" }} /> View on GitHub
                  </Button>
                )}
                {activeModalProject.demoLink && (
                  <Button
                    variant="primary"
                    href={activeModalProject.demoLink}
                    target="_blank"
                    rel="noreferrer"
                    style={{ background: "#7c3aed", border: "none" }}
                  >
                    <HiOutlineExternalLink style={{ marginRight: "6px" }} /> Live Demo
                  </Button>
                )}
              </div>
              <Button variant="secondary" onClick={() => setActiveModalProject(null)}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        )}
      </Container>
    </Container>
  );
}

export default Projects;
