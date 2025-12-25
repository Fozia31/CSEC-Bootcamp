
const Header = ({ darkMode, setDarkMode }) => {
  return (
    <div className="flex justify-between items-center p-4 shadow-md border-b border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900">
      <img src="/task.png" alt="Task" className="w-12 h-12" />
      <h1 className="text-3xl font-bold text-white">Task Tracker</h1>
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="p-2 rounded-full hover:bg-gray-300 dark:hover:bg-gray-700 transition"
      >
        <img src={darkMode ? "../../public/moon (2).png" : "../../public/day-mode.png" } alt="Toggle Dark Mode" className="w-8 h-8" />
      </button>
    </div>
  );
};

export default Header;
