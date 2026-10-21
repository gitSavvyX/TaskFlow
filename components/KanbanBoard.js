import React from 'react';

export default function KanbanBoard({ tasks, onMoveTask }) {
  const columns = ['todo', 'in-progress', 'done'];

  return (
    <div className="flex gap-4 p-4 overflow-x-auto">
      {columns.map(column => (
        <div key={column} className="bg-gray-100 p-4 rounded-lg w-80 flex-shrink-0">
          <h2 className="font-bold text-lg capitalize mb-4 text-gray-700">{column.replace('-', ' ')}</h2>
          <div className="flex flex-col gap-2">
            {tasks.filter(task => task.status === column).map(task => (
              <div key={task._id} className="bg-white p-3 rounded shadow border border-gray-200 cursor-grab">
                <h3 className="font-semibold">{task.title}</h3>
                <p className="text-sm text-gray-500">{task.description}</p>
                <select 
                  value={task.status} 
                  onChange={(e) => onMoveTask(task._id, e.target.value)}
                  className="mt-2 text-xs border rounded p-1"
                >
                  <option value="todo">To Do</option>
                  <option value="in-progress">In Progress</option>
                  <option value="done">Done</option>
                </select>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
