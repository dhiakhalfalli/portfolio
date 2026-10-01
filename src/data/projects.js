/**
 * FICHIER DE DONNÉES DES PROJETS - MOHAMED DHIA KHALFALLI
 * 
 * Ce fichier regroupe l'ensemble des projets réalisés (PFE, stages, projets d'études, projets personnels).
 * Pour ajouter ou mettre à jour un projet (comme Assurancy), modifiez directement cet objet.
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
    title: "Chatbot RH Intelligent — SEGULA Technologies",
    year: "2026",
    domain: "AI",
    domains: ["AI", "Generative AI", "Backend"],
    featured: true,
    status: "completed",
    image: recruitmentImg,
    shortDescription: "Plateforme IA de recrutement multi-agents basée sur LangGraph, RAG local (LLaMA 3.2), OCR et scoring explicable (XAI).",
    context: "Projet de Fin d'Études (PFE) d'Ingénieur chez SEGULA Technologies Tunisie.",
    problem: "Les processus RH conventionnels sont lents, manuels et sujets aux biais cognitifs lors du filtrage de gros volumes de CVs. De plus, les chatbots FAQ classiques manquent de compréhension contextuelle et de respect strict du RGPD.",
    solution: "Conception d'une architecture multi-agents orchestrée par LangGraph avec RAG, pipeline OCR pour la lecture automatique de documents, génération augmentée de questions d'entretien, et tableau de bord complet.",
    features: [
      "Agent CV : Extraction automatique de texte via OCR, analyse sémantique et matching offre/candidat",
      "Agent HR Copilot : Assistant documentaire en langage naturel basé sur RAG",
      "Agent Entretien : Génération de questions contextuelles adaptées au profil",
      "Agent Privacy (RGPD) : Gestion stricte des consentements et de la conformité des données",
      "Tableau de bord recruteur avec historique, métriques et contrôle d'accès basé sur les rôles (RBAC)"
    ],
    architecture: "Architecture modulaire multi-agents orchestrée par LangGraph, API REST FastAPI, frontend React, base vectorielle FAISS / MongoDB, et LLM LLaMA 3.2 déployé localement via Ollama / Groq.",
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
    contribution: "Conception de l'architecture de bout en bout : pipeline de traitement des données, orchestration des agents LangGraph, développement de l'API FastAPI et intégration frontend.",
    results: "Accélération significative du tri initial des candidatures et garantie de conformité RGPD.",
    ghLink: "https://github.com/dhiakhalfalli",
    demoLink: ""
  },
  {
    id: "hirebridge",
    title: "HireBridge — Explainable AI Recruitment",
    year: "2025",
    domain: "AI",
    domains: ["AI", "Machine Learning", "Data Science"],
    featured: true,
    status: "completed",
    image: hirebridgeImg,
    shortDescription: "Plateforme de recrutement assistée par IA conversationnelle et modèles d'IA explicable (XAI) pour des décisions d'embauche transparentes.",
    context: "Projet centré sur la transparence algorithmique et l'évaluation équitable des compétences techniques.",
    problem: "L'effet 'boîte noire' des algorithmes de matching en recrutement crée de la méfiance chez les recruteurs et empêche de comprendre les raisons objectives d'un score de matching.",
    solution: "Intégration de techniques d'Explainable AI (XAI) permettant de visualiser l'impact de chaque critère (expériences, compétences, projets) sur le score global avec un chatbot d'assistance interactive.",
    features: [
      "Parsing et extraction automatique des compétences depuis les CV",
      "Décomposition visuelle du score de matching par composantes clés (XAI)",
      "Assistant conversationnel interactif pour interroger les dossiers candidats",
      "Recherche sémantique haute performance avec FAISS"
    ],
    architecture: "Interface Streamlit connectée à un moteur d'inférence Python / Scikit-Learn, vectorisation sémantique FAISS et couches d'explicabilité XAI.",
    technologies: [
      "Python",
      "Streamlit",
      "FAISS",
      "Explainable AI (XAI)",
      "LLM",
      "Chatbot",
      "Scikit-Learn"
    ],
    contribution: "Développement du pipeline de scoring explicable, intégration de la recherche sémantique vectorielle FAISS et conception de l'interface utilisateur.",
    results: "Matching objectif et explicable avec réduction des biais de sélection.",
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
    shortDescription: "Système d'analyse tactique et de recommandation de profils de footballeurs combinant Computer Vision (CNN) et réseaux récurrents (RNN).",
    context: "Projet de Data Science et Computer Vision appliqué au secteur du sport professionnel et du recrutement footballistique.",
    problem: "Les clubs et recruteurs manquent d'outils automatisés pour capturer les trajectoires, analyser les choix tactiques et recommander les recrues idéales correspondant à un style de jeu précis.",
    solution: "Modélisation hybride associant des réseaux convolutifs (CNN) pour l'analyse spatiale et des réseaux récurrents (RNN) pour les séquences temporelles, couplés à un système de recommandation intelligent.",
    features: [
      "Extraction et analyse de métriques de performance spatio-temporelles",
      "Détection des schémas tactiques et du positionnement",
      "Moteur de recommandation basé sur la similarité stylistique des joueurs",
      "Plateforme orientée mise en relation clubs — joueurs — agents"
    ],
    architecture: "Pipeline de traitement vidéo en Computer Vision, extraction de features via CNN/RNN, moteur de scoring et système de recommandation en Python.",
    technologies: [
      "Python",
      "CNN",
      "RNN",
      "Computer Vision",
      "Deep Learning",
      "Système de Recommandation"
    ],
    contribution: "Conception et entraînement des architectures neuronales, développement de la logique d'appariement et analyse des performances.",
    results: "Recommandations tactiques cohérentes et appariement précis des profils sportifs.",
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
    shortDescription: "Pipeline complet de prédiction d'attrition client, du feature engineering au déploiement d'API REST conteneurisée avec suivi MLflow.",
    context: "Projet d'ingénierie Data Science & MLOps pour la rétention client en entreprise.",
    problem: "Perte de revenus due au départ imprévu de clients sans détection précoce des signaux faibles de désengagement.",
    solution: "Mise en place d'un pipeline d'apprentissage supervisé avec suivi d'expériences sous MLflow, exposition des prédictions en temps réel via une API FastAPI sécurisée et conteneurisation Docker.",
    features: [
      "Exploration, nettoyage et feature engineering des données clients",
      "Entraînement et comparaison de modèles supervisés (XGBoost, Random Forest)",
      "Tracking des hyperparamètres, métriques et artefacts avec MLflow",
      "API REST FastAPI d'inférence en temps réel",
      "Conteneurisation complète avec Docker pour un déploiement fiable"
    ],
    architecture: "Pipeline Python pour l'ETL et l'entraînement, MLflow Model Registry, serveur d'inférence FastAPI et conteneur Docker prêt pour le déploiement.",
    technologies: [
      "Python",
      "Machine Learning",
      "MLflow",
      "FastAPI",
      "Docker",
      "Scikit-Learn",
      "Pandas"
    ],
    contribution: "Développement du pipeline complet de modélisation, tracking MLflow, création des endpoints d'inférence FastAPI et conteneurisation.",
    results: "Haute précision prédictive permettant d'anticiper le churn avant la résiliation effective.",
    ghLink: "https://github.com/dhiakhalfalli",
    demoLink: ""
  },
  {
    id: "sotrapil-maintenance",
    title: "Dashboard de Maintenance Prédictive — SOTRAPIL",
    year: "2025",
    domain: "Power BI",
    domains: ["Power BI", "Data Analytics"],
    featured: true,
    status: "completed",
    image: sotrapilImg,
    shortDescription: "Tableau de bord décisionnel Power BI pour la surveillance des stations de pompage, le suivi des indicateurs et l'analyse d'anomalies.",
    context: "Stage / Projet d'analyse de données réalisé pour la SOTRAPIL (Société de Transport des Hydrocarbures par Pipelines).",
    problem: "Difficulté de centraliser les relevés d'équipements industriels et de détecter rapidement les dérives critiques sur les stations de pompage.",
    solution: "Modélisation relationnelle des données de maintenance et création d'un rapport interactif Power BI avec indicateurs de performance clés (KPIs) et suivi des anomalies.",
    features: [
      "Centralisation et modélisation des données des stations de pompage",
      "Visualisation interactive des indicateurs clés (pressions, débits, pannes)",
      "Identification des tendances d'usure et détection d'anomalies opérationnelles",
      "Rapports décisionnels et calcul de métriques avancées avec DAX"
    ],
    architecture: "Pipeline de transformation de données ETL, modèle de données en étoile et tableaux de bord interactifs Power BI.",
    technologies: [
      "Power BI",
      "DAX",
      "Data Analytics",
      "Modélisation de Données",
      "Business Intelligence",
      "ETL"
    ],
    contribution: "Nettoyage et structuration des données industrielles, écriture des formules DAX, et conception ergonomique des tableaux de bord pour les équipes techniques.",
    results: "Visibilité accrue en temps réel sur la disponibilité des équipements et gain de temps sur la maintenance.",
    ghLink: "https://github.com/dhiakhalfalli",
    demoLink: ""
  },
  {
    id: "sentiment-analysis-finance",
    title: "Analyse de Sentiments Financiers — Marché Tunisien",
    year: "2024",
    domain: "Data Science",
    domains: ["Data Science", "AI", "Machine Learning"],
    featured: false,
    status: "completed",
    image: sentimentImg,
    shortDescription: "Système de traitement du langage naturel (NLP) pour analyser le sentiment des actualités financières du marché boursier tunisien.",
    context: "Projet universitaire de recherche et application en NLP et Deep Learning.",
    problem: "Comprendre et quantifier automatiquement l'impact des actualités économiques sur le comportement du marché et des investisseurs.",
    solution: "Pipeline de collecte de données, extraction de caractéristiques (TF-IDF, embeddings) et classification de sentiments par Deep Learning et Transformers.",
    features: [
      "Collecte et prétraitement de textes d'actualités financières",
      "Vectorisation et modélisation via PyTorch et Transformers",
      "Classification des polarités de sentiment (positif, neutre, négatif)",
      "Évaluation des performances et matrices de confusion"
    ],
    architecture: "Scripts Python de prétraitement NLP, modèles de deep learning PyTorch, et scripts d'inférence de polarité.",
    technologies: [
      "Python",
      "NLP",
      "PyTorch",
      "Transformers",
      "TF-IDF",
      "Deep Learning",
      "Scikit-Learn"
    ],
    contribution: "Développement du pipeline de NLP, fine-tuning des modèles et validation expérimentale des résultats.",
    results: "Classification robuste du sentiment textuel sur des articles financiers en français.",
    ghLink: "https://github.com/dhiakhalfalli",
    demoLink: ""
  },
  {
    id: "assurancy",
    title: "Assurancy",
    year: "2024",
    domain: "Software Engineering",
    domains: ["Software Engineering", "Web Development", "Other"],
    featured: false,
    status: "to_complete",
    image: null,
    shortDescription: "Projet académique réalisé dans le domaine de l'assurance pendant le cursus d'ingénieur.",
    context: "Projet universitaire dans le domaine de l'assurance développé à ESPRIT.",
    problem: "Gestion et optimisation des processus métier dans le secteur de l'assurance.",
    solution: "Application dédiée à la gestion d'assurance (informations en cours de consolidation).",
    features: [
      "Module de gestion des dossiers d'assurance (à préciser)",
      "Traitement et suivi des demandes clients (à préciser)"
    ],
    architecture: "Architecture applicative (à compléter dans src/data/projects.js)",
    technologies: [
      "Génie Logiciel",
      "Bases de Données",
      "Développement Applicatif"
    ],
    contribution: "Participation à la conception et au développement du projet (détails à compléter).",
    results: "",
    ghLink: "https://github.com/dhiakhalfalli",
    demoLink: "",
    note: "ℹ️ Ce projet fait partie intégrante de mon parcours d'études. Les spécifications techniques détaillées seront complétées prochainement."
  },
  {
    id: "pidev-esprit",
    title: "Projet Intégré de Développement (PIDEV) — ESPRIT",
    year: "2023",
    domain: "Software Engineering",
    domains: ["Software Engineering", "Web Development", "Backend"],
    featured: false,
    status: "completed",
    image: null,
    shortDescription: "Projet collaboratif de génie logiciel mené en équipe selon les méthodologies agiles Scrum, couvrant la conception complète d'un système d'information.",
    context: "Projet académique intégré réalisé au sein d'ESPRIT (École Supérieure Privée d'Ingénierie et de Technologies).",
    problem: "Concevoir et livrer une solution logicielle complète et robuste répondant à un cahier des charges d'entreprise, en équipe pluridisciplinaire.",
    solution: "Développement full-stack complet : modélisation UML, conception de la base de données relationnelle, mise en place des APIs et de l'interface utilisateur, avec gestion de versions collaborative Git.",
    features: [
      "Gestion des utilisateurs, authentification et gestion des permissions",
      "CRUD complet pour les entités métier",
      "Tableau de bord et génération de rapports",
      "Intégration d'APIs tierces et communication asynchrone"
    ],
    architecture: "Architecture en couches (MVC / n-tiers), séparation frontend/backend, base de données relationnelle MySQL, et contrôle de versions Git/GitHub.",
    technologies: [
      "Génie Logiciel",
      "Java",
      "Bases de Données (MySQL)",
      "Agile / Scrum",
      "Git",
      "UML",
      "Backend"
    ],
    contribution: "Modélisation de données, développement des modules backend, tests unitaires et intégration continue au sein de l'équipe de projet.",
    results: "Validation réussie du projet devant le jury académique d'ESPRIT.",
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
