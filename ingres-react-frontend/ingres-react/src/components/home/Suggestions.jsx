import {
  FaWater,
  FaCloudRain,
  FaChartLine,
  FaGlobe,
} from "react-icons/fa";

export default function Suggestions() {
  const suggestions = [
    {
      title: "Groundwater Analysis",
      icon: <FaWater className="text-cyan-400 text-2xl" />,
    },
    {
      title: "Rainfall Prediction",
      icon: <FaCloudRain className="text-blue-400 text-2xl" />,
    },
    {
      title: "Water Quality Report",
      icon: <FaChartLine className="text-green-400 text-2xl" />,
    },
    {
      title: "Regional Insights",
      icon: <FaGlobe className="text-amber-400 text-2xl" />,
    },
  ];

  return (
    <section className="max-w-5xl mx-auto mt-12 px-4">
      <h2 className="text-white text-xl font-semibold mb-6">
        Suggested Prompts
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {suggestions.map((item, index) => (
          <button
            key={index}
            className="bg-slate-800 hover:bg-slate-700 transition rounded-xl p-6 text-left"
          >
            <div className="mb-4">
              {item.icon}
            </div>

            <p className="text-white font-medium">
              {item.title}
            </p>
          </button>
        ))}
      </div>
    </section>
  );
}