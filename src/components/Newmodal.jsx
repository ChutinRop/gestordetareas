import { useState } from 'react';

const Newmodal = ({ onClose, onSave, columnTitle }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [assignedTo, setAssignedTo] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim()) return;

    onSave({
      id: Date.now().toString(),
      title,
      description,
      assignedTo,
    });

    setTitle('');
    setDescription('');
    setAssignedTo('');
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-pink-100/30 backdrop-blur-sm">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md border border-pink-200">
        <h2 className="text-xl font-bold mb-4 text-green-700">
          Nueva tarea para: {columnTitle}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Título"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border border-pink-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
            required
          />
          <textarea
            placeholder="Descripción"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full border border-pink-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
            rows={3}
          />
          <input
            type="text"
            placeholder="Asignado a"
            value={assignedTo}
            onChange={(e) => setAssignedTo(e.target.value)}
            className="w-full border border-pink-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <div className="flex justify-end gap-2 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border border-green-300 text-green-700 rounded hover:bg-green-100 transition"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
            >
              Guardar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Newmodal;