import { FaStar } from "react-icons/fa";
// import axios from "axios";


export default function Starred() {
    
  const starredChats = [
    "Groundwater Analysis",
    "Rainfall Prediction",
    "Water Quality Report",
  ];
  // const { data } = await axios.get("/api/starred");

  return (
    <div className="mt-6">
      <h3 className="text-xs uppercase text-slate-400 font-semibold mb-3 tracking-wider">
        Starred
      </h3>

      <div className="space-y-2">
        {starredChats.map((chat, index) => (
          <button
            key={index}
            className="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-800 transition"
          >
            <FaStar className="text-yellow-400 text-sm" />

            <span className="text-sm truncate">
              {chat}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}