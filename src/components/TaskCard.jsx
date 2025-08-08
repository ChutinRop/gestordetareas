const TaskCard = ({ task, onEdit, onDelete }) => {
  return (
    <div className="bg-white p-4 rounded shadow border border-gray-300 mb-3">
      <h4 className="font-semibold text-lg">{task.title}</h4>
      {task.description && (
        <p className="text-gray-600 text-sm mt-1">{task.description}</p>
      )}
      {task.assignedTo && (
        <p className="text-gray-500 text-xs mt-2 italic">Asignado a: {task.assignedTo}</p>
      )}
      <div className="mt-3 flex justify-end gap-3">
        <button
          onClick={onEdit}
          className="px-3 py-1.5 bg-blue-600 text-white rounded-md text-sm font-semibold hover:bg-blue-700 transition duration-200 shadow-md"
        >
          Editar tarea
        </button>
        <button
          onClick={onDelete}
          className="px-3 py-1.5 bg-red-600 text-white rounded-md text-sm font-semibold hover:bg-red-700 transition duration-200 shadow-md"
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default TaskCard;
