import React, { useState } from 'react';
import { FiPlusCircle } from 'react-icons/fi';
import CreateProjectForm from './CreateProjectForm';
import './HomePage.css';

function HomePage() {
  const [showForm, setShowForm] = useState(false);

  const handleSaveSuccess = () => {
    setShowForm(false); // Masquer le formulaire après sauvegarde
  };

  const handleCancel = () => {
    setShowForm(false); // Masquer le formulaire en cas d'annulation
  };

  return (
    <div className="home-page">
      <div className="welcome-container">
        <h1 className="welcome-title">Select a project or get started with a new one</h1>

        <button
          className="create-project-btn"
          onClick={() => setShowForm(true)} // Afficher le formulaire
        >
          <FiPlusCircle className="btn-icon" />
          Create New Project
        </button>
      </div>

      {showForm && (
        <CreateProjectForm
          onClose={handleCancel} // Annuler la création
          onSaveSuccess={handleSaveSuccess} // Sauvegarder le projet
        />
      )}
    </div>
  );
}

export default HomePage;