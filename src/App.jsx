import { useState } from 'react';
import Header from './components/Header/Header';
import ProjectsView from './components/ProjectsView';
import Kanban from './components/Kanban';

function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [projects, setProjects] = useState([]);

  return (
    <div className="flex h-screen">
      {}
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="p-4 flex-1 overflow-auto">
          {selectedProject ? (
            <Kanban
              project={selectedProject}
              onBack={() => setSelectedProject(null)}
            />
          ) : (
            <ProjectsView
              projects={projects}
              setProjects={setProjects}
              onSelectProject={setSelectedProject}
            />
          )}
        </main>
      </div>
    </div>
  );
}

export default App;
