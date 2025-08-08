const ProjectCard = ({ project, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="bg-white p-4 rounded shadow hover:shadow-md transition cursor-pointer border border-transparent hover:border-indigo-500"
    >
      <h3 className="text-xl font-semibold">{project.name}</h3>
      <p className="text-gray-600">{project.description}</p>
    </div>
  );
};

export default ProjectCard;
