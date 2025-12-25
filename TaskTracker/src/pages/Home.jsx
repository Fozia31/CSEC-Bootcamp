import Header from "../components/Header";
import TaskList from "../components/TaskList";
import { Link } from "react-router-dom";

const Home = ({ tasks, setTasks, darkMode, setDarkMode }) => {
  return (
    <div className="min-h-screen">
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />

      <div className="flex justify-end max-w-3xl mx-auto mt-4">
        <Link to="/status" className="text-blue-500 underline hover:text-blue-700">
          View Status
        </Link>
      </div>

      <TaskList tasks={tasks} setTasks={setTasks} />
    </div>
  );
};

export default Home;
