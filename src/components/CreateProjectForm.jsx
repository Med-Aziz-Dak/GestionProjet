import React, { useState } from 'react';
 import './CreateProjectForm.css'

function CreateProjectForm({ onClose }) {
  const [project, setProject] = useState({
    title: '',
    description: '',
    dueDate: ''
  });

  const handleChange = (e) => {
    setProject({ ...project, [e.target.name]: e.target.value });
  };

  return (
    <div className="form-modal">
      <div className="form-content">
        <h1>TITLE</h1>
        <input
          type="text"
          name="title"
          value={project.title}
          onChange={handleChange}
          placeholder="Entrez le titre" />

        <h2>DESCRIPTION</h2>
        <textarea
          name="description"
          value={project.description}
          onChange={handleChange}
          placeholder="Décrivez le projet" />

        <h3>DUE DATE</h3>
        <input
          type="date"
          name="dueDate"
          value={project.dueDate}
          onChange={handleChange} />

        <div className="form-footer">
          <button type="button" onClick={onClose}>Cancel</button>
          <button type="submit">Save</button>
        </div>
      </div>
    </div>
  );
}

export default CreateProjectForm;