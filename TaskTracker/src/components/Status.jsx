const Status = ({ TotalCount, CompletedCount, RemainingCount }) => {
  return (
    <div className="flex flex-wrap justify-center gap-6 mt-10">
      <div className="w-64 h-32 rounded-lg p-4 flex flex-col justify-between shadow-md
        bg-blue-100 dark:bg-blue-900 text-blue-900 dark:text-white border border-blue-300 dark:border-blue-700">
        <img src="/check.png" alt="Total" className="w-6 h-6" />
        <p className="text-sm font-medium">Total Tasks</p>
        <h1 className="text-2xl font-bold">{TotalCount}</h1>
      </div>

      <div className="w-64 h-32 rounded-lg p-4 flex flex-col justify-between shadow-md
        bg-green-100 dark:bg-green-900 text-green-900 dark:text-white border border-green-300 dark:border-green-700">
        <img src="/checked.png" alt="Completed" className="w-6 h-6" />
        <p className="text-sm font-medium">Completed Tasks</p>
        <h1 className="text-2xl font-bold">{CompletedCount}</h1>
      </div>

      <div className="w-64 h-32 rounded-lg p-4 flex flex-col justify-between shadow-md
        bg-red-100 dark:bg-red-900 text-red-900 dark:text-white border border-red-300 dark:border-red-700">
        <img src="/countdown.png" alt="Remaining" className="w-6 h-6" />
        <p className="text-sm font-medium">Remaining Tasks</p>
        <h1 className="text-2xl font-bold">{RemainingCount}</h1>
      </div>
    </div>
  );
};

export default Status;
