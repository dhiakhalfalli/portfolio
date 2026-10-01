/**
 * PROJECTS DATA FILE - MOHAMED DHIA KHALFALLI
 * 
 * Comprehensive dataset containing all projects (Graduation project, internships, academic projects, and personal work).
 */

import recruitmentImg from "../Assets/Projects/recruitment.jpg";
import hirebridgeImg from "../Assets/Projects/hirebridge.jpg";
import footballImg from "../Assets/Projects/football.jpg";
import churnImg from "../Assets/Projects/churn.jpg";
import sotrapilImg from "../Assets/Projects/sotrapil.jpg";
import sentimentImg from "../Assets/Projects/sentiment.jpg";

export const projects = [
  {
    id: "segula-chatbot-rh",
    title: "Intelligent HR Agent & Recruitment Platform — SEGULA Technologies",
    year: "2026",
    domain: "AI",
    domains: ["AI", "Generative AI", "Backend"],
    featured: true,
    status: "completed",
    image: recruitmentImg,
    shortDescription: "Multi-agent AI recruitment platform powered by LangGraph, local RAG (LLaMA 3.2), OCR pipeline, and explainable scoring (XAI).",
    context: "Master's Graduation Thesis (PFE) as Data Science & AI Engineer at SEGULA Technologies Tunisia.",
    problem: "Conventional HR screening processes are time-consuming, manual, and prone to cognitive bias when processing large volumes of resumes. Standard FAQ chatbots lack deep contextual comprehension and GDPR compliance guarantees.",
    solution: "Designed and implemented an end-to-end multi-agent system orchestrated by LangGraph with local RAG, automated OCR document ingestion, profile-tailored interview question generation, and an interactive recruiter dashboard.",
    features: [
      "Resume Agent: Automated OCR text extraction, semantic analysis, and candidate-job matching",
      "HR Copilot Agent: Natural language document-grounded assistant based on local RAG",
      "Interview Agent: Dynamic generation of technical and contextual interview questions tailored to candidate profiles",
      "Privacy Agent (GDPR): Strict consent management, data anonymization, and regulatory compliance",
      "Recruiter Dashboard: Complete candidate tracking, history analytics, and Role-Based Access Control (RBAC)"
    ],
    architecture: "Modular multi-agent architecture orchestrated by LangGraph, FastAPI REST backend, React frontend, FAISS vector store / MongoDB, and LLaMA 3.2 LLM running locally via Ollama / Groq.",
    technologies: [
      "FastAPI",
      "React.js",
      "LangChain",
      "LangGraph",
      "LLM (LLaMA 3.2)",
      "Ollama",
      "Groq",
      "MongoDB",
      "FAISS",
      "RAG",
      "OCR",
      "Docker",
      "RBAC"
    ],
    contribution: "End-to-end architecture design and implementation: data processing pipelines, LangGraph agent workflows, FastAPI endpoints, and full frontend integration.",
    results: "Substantial reduction in initial screening turnaround time and guaranteed strict GDPR compliance.",
    ghLink: "https://github.com/dhiakhalfalli",
    demoLink: ""
  },
  {
    id: "hirebridge",
    title: "HireBridge — Explainable AI Recruitment Platform",
    year: "2025",
    domain: "AI",
    domains: ["AI", "Machine Learning", "Data Science"],
    featured: true,
    status: "completed",
    image: hirebridgeImg,
    shortDescription: "Conversational AI and Explainable AI (XAI) recruitment platform designed for transparent, bias-free hiring decisions.",
    context: "Engineering project focused on algorithmic transparency and fair evaluation of candidate technical competencies.",
    problem: "The black-box nature of conventional matching algorithms creates mistrust among recruiters and obscures the objective criteria underlying candidate scores.",
    solution: "Integrated Explainable AI (XAI) techniques to provide visual breakdowns of how specific qualifications (experience, skills, projects) contribute to overall scores, alongside an interactive assistant.",
    features: [
      "Automated resume parsing and semantic skill extraction",
      "Visual XAI breakdown of candidate-job matching scores across core criteria",
      "Interactive conversational assistant to query candidate dossiers",
      "High-performance vector similarity search using FAISS"
    ],
    architecture: "Streamlit UI coupled with a Python inference engine, Scikit-Learn pipelines, FAISS vector embeddings, and XAI explainability layers.",
    technologies: [
      "Python",
      "Streamlit",
      "FAISS",
      "Explainable AI (XAI)",
      "LLM",
      "Chatbot",
      "Scikit-Learn"
    ],
    contribution: "Developed the explainable scoring pipeline, integrated FAISS semantic search, and designed the interactive recruiter dashboard.",
    results: "Objective, interpretable candidate evaluation that significantly reduces screening bias.",
    ghLink: "https://github.com/dhiakhalfalli",
    demoLink: ""
  },
  {
    id: "tactic-sense",
    title: "Tactic Sense — Football Analytics & Computer Vision",
    year: "2025",
    domain: "Machine Learning",
    domains: ["Machine Learning", "AI", "Data Science"],
    featured: true,
    status: "completed",
    image: footballImg,
    shortDescription: "Tactical analysis and player recommendation system combining Computer Vision (CNN) with Recurrent Neural Networks (RNN).",
    context: "Data Science and Computer Vision project applied to professional sports analytics and recruitment.",
    problem: "Clubs and scouts often lack automated tools to track player movements, analyze spatial-tactical decisions, and identify prospects matching specific tactical styles.",
    solution: "Hybrid deep learning model pairing Convolutional Neural Networks (CNN) for spatial feature extraction with Recurrent Neural Networks (RNN) for sequence modeling, connected to a recommendation engine.",
    features: [
      "Spatio-temporal performance metric extraction and analysis",
      "Automated tactical pattern detection and positional tracking",
      "Style-based recommendation engine for player matchmaking",
      "Platform connecting clubs, players, and scouting agencies"
    ],
    architecture: "Computer Vision video processing pipeline, CNN/RNN feature extraction models, scoring engine, and recommendation API in Python.",
    technologies: [
      "Python",
      "CNN",
      "RNN",
      "Computer Vision",
      "Deep Learning",
      "Recommendation Systems"
    ],
    contribution: "Designed and trained deep neural network architectures, developed player profiling and similarity algorithms, and evaluated model performance.",
    results: "Accurate tactical pattern recognition and highly coherent player matchmaking.",
    ghLink: "https://github.com/dhiakhalfalli",
    demoLink: ""
  },
  {
    id: "churn-prediction",
    title: "Customer Churn Prediction Pipeline — MLOps",
    year: "2025",
    domain: "Data Science",
    domains: ["Data Science", "Machine Learning", "Backend"],
    featured: true,
    status: "completed",
    image: churnImg,
    shortDescription: "End-to-end customer churn prediction pipeline from feature engineering to containerized REST API with MLflow experiment tracking.",
    context: "Data Science & MLOps engineering project aimed at corporate customer retention strategies.",
    problem: "Revenue loss caused by unanticipated customer attrition without early detection of disengagement warning signs.",
    solution: "Built a full supervised machine learning workflow with experiment tracking in MLflow, real-time prediction endpoints via FastAPI, and Docker containerization.",
    features: [
      "Data preprocessing, exploratory data analysis, and advanced feature engineering",
      "Comparative training of ensemble models (XGBoost, Random Forest, LightGBM)",
      "Tracking of hyperparameters, evaluation metrics, and model artifacts via MLflow",
      "Real-time inference via a production-grade FastAPI REST service",
      "Containerized deployment environment using Docker"
    ],
    architecture: "Python ETL and training pipeline, MLflow Model Registry, FastAPI inference server, and Docker deployment container.",
    technologies: [
      "Python",
      "Machine Learning",
      "MLflow",
      "FastAPI",
      "Docker",
      "Scikit-Learn",
      "Pandas"
    ],
    contribution: "Developed the end-to-end modeling pipeline, MLflow experiment tracking, FastAPI inference routes, and Docker build configuration.",
    results: "High predictive accuracy enabling proactive customer retention campaigns before contract termination.",
    ghLink: "https://github.com/dhiakhalfalli",
    demoLink: ""
  },
  {
    id: "sotrapil-maintenance",
    title: "Predictive Maintenance Dashboard — SOTRAPIL",
    year: "2025",
    domain: "Power BI",
    domains: ["Power BI", "Data Analytics"],
    featured: true,
    status: "completed",
    image: sotrapilImg,
    shortDescription: "Business Intelligence dashboard for monitoring pumping stations, tracking operational KPIs, and detecting equipment anomalies.",
    context: "Data analytics internship project conducted for SOTRAPIL (Société de Transport des Hydrocarbures par Pipelines).",
    problem: "Centralizing industrial equipment logs and swiftly detecting critical performance deviations across distributed pumping facilities.",
    solution: "Engineered a relational maintenance data model and designed an interactive Power BI dashboard featuring real-time KPIs and anomaly indicators.",
    features: [
      "Centralization and data modeling across multiple pumping station logs",
      "Interactive visualization of pressure levels, flow rates, and failure frequencies",
      "Equipment wear trend analysis and anomaly detection",
      "Advanced DAX performance measures and automated executive reporting"
    ],
    architecture: "ETL data transformation pipeline, star-schema data modeling, and interactive Power BI analytical reports.",
    technologies: [
      "Power BI",
      "DAX",
      "Data Analytics",
      "Data Modeling",
      "Business Intelligence",
      "ETL"
    ],
    contribution: "Cleaned and structured industrial datasets, wrote advanced DAX measures, and designed ergonomic dashboards for maintenance engineers.",
    results: "Significantly enhanced visibility over equipment uptime and streamlined maintenance planning.",
    ghLink: "https://github.com/dhiakhalfalli",
    demoLink: ""
  },
  {
    id: "sentiment-analysis-finance",
    title: "Financial Sentiment Analysis — Tunisian Market",
    year: "2024",
    domain: "Data Science",
    domains: ["Data Science", "AI", "Machine Learning"],
    featured: false,
    status: "completed",
    image: sentimentImg,
    shortDescription: "Natural Language Processing (NLP) system analyzing sentiment and polarity from financial news articles affecting the stock market.",
    context: "Academic research and development project in NLP and Deep Learning.",
    problem: "Quantifying and analyzing the impact of financial news releases on market sentiment and investor behavior.",
    solution: "Built a pipeline for article ingestion, text preprocessing (TF-IDF, contextual embeddings), and sentiment classification using Deep Learning and Transformer models.",
    features: [
      "Automated financial news collection and multilingual text cleaning",
      "Vectorization and fine-tuning with PyTorch and Transformers",
      "Three-class sentiment classification (Positive, Neutral, Negative)",
      "Evaluation metrics and confusion matrix visualization"
    ],
    architecture: "Python NLP preprocessing pipeline, PyTorch deep learning classification models, and sentiment inference scripts.",
    technologies: [
      "Python",
      "NLP",
      "PyTorch",
      "Transformers",
      "TF-IDF",
      "Deep Learning",
      "Scikit-Learn"
    ],
    contribution: "Developed the NLP pipeline, fine-tuned transformer models, and conducted rigorous benchmark evaluations.",
    results: "Robust classification performance on financial news text with high macro F1-score.",
    ghLink: "https://github.com/dhiakhalfalli",
    demoLink: ""
  },
  {
    id: "assurancy",
    title: "Assurancy — Insurance Management Application",
    year: "2024",
    domain: "Software Engineering",
    domains: ["Software Engineering", "Web Development", "Other"],
    featured: false,
    status: "completed",
    image: null,
    shortDescription: "Academic software engineering project developed for digital insurance management and customer claims processing.",
    context: "University software engineering project in the insurance sector developed at ESPRIT.",
    problem: "Streamlining policy management, client communications, and claim workflows in a unified platform.",
    solution: "Designed and implemented an application managing insurance records, claim tracking, and user interactions.",
    features: [
      "Insurance policy and client dossier management module",
      "Claims submission and processing workflow",
      "Customer interaction history and automated status tracking"
    ],
    architecture: "Full-stack application architecture with relational database storage and REST communication.",
    technologies: [
      "Software Engineering",
      "Database Design",
      "Full-Stack Development"
    ],
    contribution: "Participated in requirement analysis, database schema modeling, and backend service implementation.",
    results: "Successfully validated during academic reviews at ESPRIT.",
    ghLink: "https://github.com/dhiakhalfalli",
    demoLink: "",
    note: "ℹ️ Academic project completed as part of the engineering curriculum at ESPRIT."
  },
  {
    id: "pidev-esprit",
    title: "Integrated Development Project (PIDEV) — ESPRIT",
    year: "2023",
    domain: "Software Engineering",
    domains: ["Software Engineering", "Web Development", "Backend"],
    featured: false,
    status: "completed",
    image: null,
    shortDescription: "Team-based software engineering project executed using Agile Scrum, covering the end-to-end design of an enterprise information system.",
    context: "Integrated engineering project completed at ESPRIT (Private Higher School of Engineering and Technology).",
    problem: "Designing, building, and delivering a robust enterprise software solution satisfying strict industry-standard specifications in a multidisciplinary team.",
    solution: "Full-stack development: UML modeling, relational database design, REST API implementation, interactive UI, and collaborative Git workflow.",
    features: [
      "User management, secure authentication, and role-based permissions",
      "Full CRUD operations for domain business entities",
      "Interactive analytics dashboard and automated reporting",
      "Third-party API integration and asynchronous event handling"
    ],
    architecture: "Layered architecture (MVC / multi-tier), clear frontend/backend separation, MySQL relational database, and Git/GitHub version control.",
    technologies: [
      "Software Engineering",
      "Java",
      "MySQL",
      "Agile / Scrum",
      "Git",
      "UML",
      "Backend"
    ],
    contribution: "Database modeling, backend module implementation, unit test suites, and continuous integration within the project team.",
    results: "Successfully evaluated and validated before the ESPRIT academic examination board.",
    ghLink: "https://github.com/dhiakhalfalli",
    demoLink: ""
  }
];

export const projectDomains = [
  "All",
  "AI",
  "Data Science",
  "Machine Learning",
  "Data Analytics",
  "Power BI",
  "Web Development",
  "Backend",
  "Software Engineering",
  "Other"
];

export const projectYears = ["All", "2026", "2025", "2024", "2023"];
