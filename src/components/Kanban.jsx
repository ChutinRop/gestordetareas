import { useState } from 'react';
import TaskCard from './TaskCard';
import Newmodal from './Newmodal';
import Edmodal from './Edmodal';

const Kanban = ({ project, onBack }) => {
  const [columns, setColumns] = useState([
    { id: 'todo', title: 'Pendiente', tasks: [] },
    { id: 'in-progress', title: 'En Proceso', tasks: [] },
    { id: 'done', title: 'Completado', tasks: [] },
  ]);

  const [isNewmodalOpen, setIsNewmodalOpen] = useState(false);
  const [activeColumnId, setActiveColumnId] = useState(null);

  const [isEdmodalOpen, setIsEdmodalOpen] = useState(false);
  const [taskToEdit, setTaskToEdit] = useState(null);
  const [taskColumnId, setTaskColumnId] = useState(null);

  const openNewmodal = (columnId) => {
    setActiveColumnId(columnId);
    setIsNewmodalOpen(true);
  };

  const handleSaveNewTask = (task) => {
    setColumns((cols) =>
      cols.map((col) =>
        col.id === activeColumnId
          ? { ...col, tasks: [...col.tasks, task] }
          : col
      )
    );
    setIsNewmodalOpen(false);
    setActiveColumnId(null);
  };

  const handleDeleteTask = (columnId, taskToDelete) => {
    setColumns((cols) =>
      cols.map((col) =>
        col.id === columnId
          ? {
              ...col,
              tasks: col.tasks.filter((task) => task !== taskToDelete),
            }
          : col
      )
    );
  };

  const openEdmodal = (columnId, task) => {
    setTaskColumnId(columnId);
    setTaskToEdit(task);
    setIsEdmodalOpen(true);
  };

  const handleSaveEditedTask = (updatedTask) => {
    setColumns((cols) =>
      cols.map((col) =>
        col.id === taskColumnId
          ? {
              ...col,
              tasks: col.tasks.map((task) =>
                task === taskToEdit ? updatedTask : task
              ),
            }
          : col
      )
    );
    setIsEdmodalOpen(false);
    setTaskToEdit(null);
    setTaskColumnId(null);
  };

  return (
    <main className="p-6 min-h-screen bg-gradient-to-br from-pink-100 via-white to-pink-300">
      <button
        onClick={onBack}
        className="inline-flex items-center gap-2 mb-6 px-4 py-2 text-sm font-medium text-green-600 border border-green-300 rounded hover:bg-green-50 transition"
      >
        <span className="text-lg">←</span>
        Volver a proyectos
      </button>

      <h2 className="text-2xl font-bold mb-2">{project.name}</h2>
      <p className="text-gray-600 mb-6">{project.description}</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {columns.map((column) => (
          <div
            key={column.id}
            className="bg-white p-4 rounded-sm shadow min-h-[300px] flex flex-col"
          >
            <h3 className="text-lg font-semibold mb-4">{column.title}</h3>

            <div className="space-y-2 flex-1">
              {column.tasks.length === 0 && (
                <p className="text-gray-400 italic">Sin tareas</p>
              )}
              {column.tasks.map((task) => (
                <TaskCard
                  key={task.id}
                  task={task}
                  onEdit={() => openEdmodal(column.id, task)}
                  onDelete={() => handleDeleteTask(column.id, task)}
                />
              ))}
            </div>

            <button
              className="mt-4 w-full bg-green-500 text-white text-sm py-2 rounded hover:bg-green-600 transition"
              onClick={() => openNewmodal(column.id)}
            >
              + Agregar Tarea
            </button>
          </div>
        ))}
      </div>

      {isNewmodalOpen && (
        <Newmodal
          columnTitle={columns.find((c) => c.id === activeColumnId)?.title || ''}
          onClose={() => setIsNewmodalOpen(false)}
          onSave={handleSaveNewTask}
        />
      )}

      {isEdmodalOpen && taskToEdit && (
        <Edmodal
          task={taskToEdit}
          onClose={() => setIsEdmodalOpen(false)}
          onSave={handleSaveEditedTask}
        />
      )}
    </main>
  );
};

export default Kanban;