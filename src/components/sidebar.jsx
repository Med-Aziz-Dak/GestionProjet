import AddProject from './createButton';
import ProjectFormModal from './ProjectFormModal';
const Sidebar = ( ) => {
    onst [projects, setProjects] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const handleSaveProject = (newProject) => {
    setProjects([...projects, { ...newProject, id: Date.now() }]);
    setShowModal(false);
  };

  return (
    <div className="sidebar">
      <h1>YOUR<br />PROJECTS</h1>
      
      <AddProject onClick={() => setShowModal(true)} />
      
      {projects.length === 0 && <EmptyState />}

      {showModal && (
        <ProjectFormModal 
          onSave={handleSaveProject} 
          onClose={() => setShowModal(false)} 
        />
      )}
    </div>
  );
}

export default Sidebar