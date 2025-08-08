import { useState } from 'react';
import ProjectCard from './ProjectCard';
import NewProjectModal from './NewProject';

const ProjectsView = ({ projects, setProjects, onSelectProject }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddProject = (project) => {
    setProjects([...projects, project]);
    setIsModalOpen(false);
  };

  const handleDeleteProject = (id) => {
    setProjects(projects.filter((p) => p.id !== id));
  };

  return (
    <main className="p-6 min-h-screen bg-pink-100 flex flex-col items-center justify-center">
      {projects.length === 0 ? (
        <div className="flex flex-col items-center gap-4">
          <h2 className="text-2xl font-bold">Tus Proyectos</h2>
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
          >
            + Nuevo Proyecto
          </button>
          <p className="text-gray-500">Aún no tienes proyectos creados.</p>
        </div>
      ) : (
        <>
          <div className="flex justify-between items-center w-full max-w-5xl mb-6">
            <h2 className="text-2xl font-bold">Tus Proyectos</h2>
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
            >
              + Nuevo Proyecto
            </button>
          </div>
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full max-w-5xl">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                project={project}
                onClick={() => onSelectProject(project)}
                onDelete={handleDeleteProject} // 👈 Pasamos la función
              />
            ))}
          </div>
        </>
      )}

      {isModalOpen && (
        <NewProjectModal
          onClose={() => setIsModalOpen(false)}
          onSave={handleAddProject}
        />
      )}
    </main>
  );
};

export default ProjectsView;
