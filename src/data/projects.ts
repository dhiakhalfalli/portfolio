/**
 * FICHIER DE DONNÉES DES PROJETS (TypeScript) - MOHAMED DHIA KHALFALLI
 * 
 * Fichier miroire pour modifications directes.
 */

export interface Project {
  id: string;
  title: string;
  year: string;
  domain: string;
  domains: string[];
  featured: boolean;
  status: "completed" | "to_complete";
  image?: any;
  shortDescription: string;
  context?: string;
  problem?: string;
  solution?: string;
  features?: string[];
  architecture?: string;
  technologies: string[];
  contribution?: string;
  results?: string;
  ghLink?: string;
  demoLink?: string;
  note?: string;
}

export { projects, projectDomains, projectYears } from "./projects.js";
