import { useState } from "react";

const TaskInput = ({ onAddTask }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    onAddTask(text);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex justify-center mt-6">
      <input
      
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter a new task..."
        className="w-130 relative p-3 rounded-4xl border border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        type="submit"
        // className="bg-blue-500 text-white px-6 rounded-r-lg hover:bg-blue-600 transition"
      >
        <img src="../../public/add.png" alt="Add Task" className="w-13 h-13 relative right-13 " />
      </button>
    </form>
  );
};

export default TaskInput;
