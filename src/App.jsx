import React from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebase'; 
import Sidebar from './components/Sidebar';
import HomePage from './components/HomePage';
import './App.css';

class App extends React.Component {
  state = {
    projects: [],
    loading: true,
    activeProject: null
  }

  async refreshProjects() {
    try {
      const projectsCol = collection(db, 'projects');
      const projectsSnapshot = await getDocs(projectsCol);
      const projectsList = [];

      projectsSnapshot.forEach(doc => {
        let project = doc.data();
        project.id = doc.id;
        projectsList.push(project);
      });

      this.setState({ 
        projects: projectsList,
        loading: false
      });
    } catch (error) {
      console.error("Error fetching projects:", error);
      this.setState({ loading: false });
    }
  }

  componentDidMount() {
    this.refreshProjects();
  }

  handleProjectSelect = (projectId) => {
    this.setState({ activeProject: projectId });
  }

  render() {
    const { projects, loading, activeProject } = this.state;

    if (loading) {
      return <div className="loading">Chargement des projets...</div>;
    }

    return (
      <div className="app">
        <Sidebar 
          projects={projects}
          activeProject={activeProject}
          onProjectSelect={this.handleProjectSelect}
          onAddProject={this.handleAddProject}
        />
        
        {activeProject ? (
          <div className="project-details">
            <h2>{projects.find(p => p.id === activeProject).name}</h2>
          </div>
        ) : (
          <HomePage 
           />
                  
        )}
      </div>
    );
  }
  
}

export default App;