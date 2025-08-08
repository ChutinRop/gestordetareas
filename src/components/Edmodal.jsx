import { useState, useEffect } from 'react';

const Edmodal = ({ task, onClose, onSave }) => {
  const [title, setTitle] = useState(task.title || '');
  const [description, setDescription] = useState(task.description || '');
  const [assignedTo, setAssignedTo] = useState(task.assignedTo || '');

  
  useEffect(() => {
    setTitle(task.title || '');
    setDescription(task.description || '');
    setAssignedTo(task.assignedTo || '');
  }, [task]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim()) return;

    onSave({
      ...task,
      title,
      description,
      assignedTo,
    });
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-white/10 backdrop-blur-sm">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-md">
        <h2 className="text-xl font-bold mb-4">Editar tarea</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Título"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border border-gray-300 px-3 py-2 rounded"
            required
          />
          <textarea
            placeholder="Descripción"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full border border-gray-300 px-3 py-2 rounded"
            rows={3}
          />
          <input
            type="text"
            placeholder="Asignado a"
            value={assignedTo}
            onChange={(e) => setAssignedTo(e.target.value)}
            className="w-full border border-gray-300 px-3 py-2 rounded"
          />
          <div className="flex justify-end gap-2 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-100"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600"
            >
              Editar tarea
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Edmodal;
