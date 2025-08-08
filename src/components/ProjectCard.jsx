const ProjectCard = ({ project, onClick, onDelete }) => {
  return (
    <div
      className="bg-white p-4 rounded shadow hover:shadow-md transition border border-transparent hover:border-indigo-500 flex flex-col justify-between"
    >
      <div onClick={onClick} className="cursor-pointer">
        <h3 className="text-xl font-semibold">{project.name}</h3>
        <p className="text-gray-600">{project.description}</p>
      </div>

      <button
        onClick={() => onDelete(project.id)}
        className="mt-4 bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
      >
        Eliminar
      </button>
    </div>
  );
};

export default ProjectCard;
