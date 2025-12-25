import Header from "../components/Header";
import Status from "../components/Status";
import { Link } from "react-router-dom";

const StatusPage = ({ tasks, darkMode, setDarkMode }) => {
  const total = tasks.length;
  const completed = tasks.filter(t => t.completed).length;
  const remaining = total - completed;

  return (
    <div className="min-h-screen">
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />

      <div className="flex justify-end max-w-3xl mx-auto mt-4">
        <Link to="/" className="text-blue-500 underline hover:text-blue-700">
          Back to Home
        </Link>
      </div>

      <Status TotalCount={total} CompletedCount={completed} RemainingCount={remaining} />
    </div>
  );
};

export default StatusPage;
