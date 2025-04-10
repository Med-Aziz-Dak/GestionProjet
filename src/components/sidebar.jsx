import React , { useState } from 'react';
import { FiPlus, FiFolder } from 'react-icons/fi';
import CreateProjectForm from './CreateProjectForm';
import './form.css'
import './Sidebar.css';

const Sidebar = ({ projects, activeProject, onProjectSelect, onProjectDetails }) => {
    const [showForm, setShowForm] = useState(false);
  
    const handleSaveSuccess = () => {
      setShowForm(false);
    
    };
  
    const handleCancel = () => {
      setShowForm(false);
    
    };
  
  return (
    <div className="sidebar">
      <h2 className="sidebar-title">YOUR PROJECTS</h2>
      
      <button 
        className="add-project-btn"
        onClick={() => setShowForm(true)}      >

        <FiPlus className="btn-icon" />
        Add Project
      </button>

      <div className="projects-list">
        {projects.length > 0 ? (
          projects.map(project => (
            <div 
            
              key={project.id} 
              className={`project-item ${activeProject === project.id ? 'active' : ''}`}
              onClick={() => onProjectSelect(project.id)

                
                
                
              }
            >
              <FiFolder className="project-icon" />
              <span 
        onClick={onProjectDetails}>{project.title}
                
              </span>
            </div>
          ))
        ) : (
          <div className="empty-message">No projects yet</div>
        )}
      </div>
    
    </div>
  );
};

export default Sidebar;