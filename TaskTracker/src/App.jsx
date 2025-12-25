import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import StatusPage from "./pages/StatusPage";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "bg-gray-900 text-white min-h-screen" : "bg-blue-50 text-gray-900 min-h-screen"}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Home tasks={tasks} setTasks={setTasks} darkMode={darkMode} setDarkMode={setDarkMode} />}
          />
          <Route
            path="/status"
            element={<StatusPage tasks={tasks} darkMode={darkMode} setDarkMode={setDarkMode} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
