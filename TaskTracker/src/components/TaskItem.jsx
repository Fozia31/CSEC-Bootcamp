const TaskItem = ({ task, onDelete, onToggle }) => {
  return (
    <li className={`flex justify-between items-center p-4 rounded-lg shadow mb-3 transition
      ${task.completed 
        ? "bg-gray-300 dark:bg-gray-700 line-through text-gray-600 dark:text-gray-300" 
        : "bg-white dark:bg-gray-800 text-gray-900 dark:text-white"}`}>
      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggle(task.id)}
          className="w-5 h-5"
        />
        <span className="text-lg">{task.text}</span>
      </div>

      <button onClick={() => onDelete(task.id)}>
        <img src="/delete.png" alt="Delete" className="w-6 h-6" />
      </button>
    </li>
  );
};

export default TaskItem;
