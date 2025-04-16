import React, { useState } from 'react';
import { FiPlus, FiFolder } from 'react-icons/fi';
import CreateProjectForm from './CreateProjectForm';
import './form.css';
import './Sidebar.css';

function Sidebar({ projects, activeProject, onProjectSelect, onProjectDetails }) {
  const [showForm, setShowForm] = useState(false);

  const handleSaveSuccess = () => {
    setShowForm(false); // Masquer le formulaire après sauvegarde
  };

  const handleCancel = () => {
    setShowForm(false); // Masquer le formulaire en cas d'annulation
  };

  const handleProjectClick = (projectId, projectTitle) => {
    onProjectSelect(projectId); // Sélectionner le projet
    onProjectDetails(projectTitle); // Afficher les détails du projet
  };

  return (
    <div className="sidebar">
      <h2 className="sidebar-title">YOUR PROJECTS</h2>

      <button
        className="add-project-btn"
        onClick={() => setShowForm(true)} // Afficher le formulaire
      >
        <FiPlus className="btn-icon" />
        Add Project
      </button>

      {/* Liste des projets */}
      <div className="projects-list">
        {projects.length > 0 ? (
          projects.map((project) => (
            <div
              key={project.id}
              className={`project-item ${activeProject === project.id ? 'active' : ''}`}
              onClick={() => handleProjectClick(project.id, project.title)} // Gérer le clic sur un projet
            >
              <FiFolder className="project-icon" />
              <span>{project.title}</span>
            </div>
          ))
        ) : (
          <div className="empty-message">No projects yet</div>
        )}
      </div>

      {/* Formulaire de création de projet */}
      {showForm && (
        <div className="custom-form-style">
          <CreateProjectForm
            onClose={handleCancel} // Annuler la création
            onSaveSuccess={handleSaveSuccess} // Sauvegarder le projet
          />
        </div>
      )}
    </div>
  );
}

export default Sidebar;