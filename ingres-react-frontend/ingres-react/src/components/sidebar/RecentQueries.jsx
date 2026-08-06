import { FaRegClock } from "react-icons/fa";

export default function RecentQueries() {
  const recentQueries = [
    "Groundwater level prediction",
    "Show rainfall trend",
    "Generate water quality report",
    "Population vs Water Demand",
    "Export analysis PDF",
  ];

  return (
    <div className="mt-6">
      <h3 className="text-xs uppercase text-slate-400 font-semibold tracking-wider mb-3">
        Recent Queries
      </h3>

      <div className="space-y-2">
        {recentQueries.map((query, index) => (
          <button
            key={index}
            className="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-800 transition"
          >
            <FaRegClock className="text-slate-400 text-sm" />

            <span className="text-sm truncate text-left">
              {query}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}