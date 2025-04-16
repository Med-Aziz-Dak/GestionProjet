import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebase'; 
import Sidebar from './components/Sidebar';
import HomePage from './components/HomePage';
import './App.css';

function App() {
  // Déclaration de l'état avec useState
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeProject, setActiveProject] = useState(null);

  // Fonction pour récupérer les projets depuis Firebase
  const refreshProjects = async () => {
    try {
      const projectsCol = collection(db, 'projects');
      const projectsSnapshot = await getDocs(projectsCol);
      const projectsList = [];

      projectsSnapshot.forEach((doc) => {
        let project = doc.data();
        project.id = doc.id;
        projectsList.push(project);
      });

      setProjects(projectsList);
      setLoading(false);
    } catch (error) {
      console.error("Erreur lors de la récupération des projets :", error);
      setLoading(false);
    }
  };

  // useEffect pour appeler refreshProjects au montage du composant
  useEffect(() => {
    refreshProjects();
  }, []);

  // Gestion de la sélection d'un projet
  const handleProjectSelect = (projectId) => {
    setActiveProject(projectId);
  };

  // Affichage du chargement
  if (loading) {
    return <div className="loading">Chargement des projets...</div>;
  }

  return (
    <div className="app">
      {/* Barre latérale */}
      <Sidebar 
        projects={projects}
        activeProject={activeProject}
        onProjectSelect={handleProjectSelect}
      />
      
       
      {activeProject ? (
        <div className="project-details">
          <h2>{projects.find(p => p.id === activeProject)?.title || "Projet non trouvé"}</h2>
        </div>
      ) : (
        <HomePage />
      )}
    </div>
  );
}

export default App;