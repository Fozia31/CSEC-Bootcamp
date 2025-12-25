import TaskInput from "./TaskInput";
import TaskItem from "./TaskItem";

const TaskList = ({ tasks, setTasks }) => {

  const addTask = (taskText) => {
    setTasks([
      ...tasks,
      { id: Date.now(), text: taskText, completed: false }
    ]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map(task =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  };

  return (
    <div className="max-w-3xl mx-auto mt-6">
      <TaskInput onAddTask={addTask} />

      <div className="mt-8 flex justify-between items-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg shadow">
        <h1 className="font-bold text-2xl text-white">Your Tasks</h1>
        <p className="text-sm text-gray-500 dark:text-gray-300">All Active Tasks</p>
      </div>

      <ul className="mt-4">
        {tasks.map(task => (
          <TaskItem
            key={task.id}
            task={task}
            onToggle={toggleTask}
            onDelete={deleteTask}
          />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
