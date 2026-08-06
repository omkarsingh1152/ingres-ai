import {
  FaBars,
  FaBell,
  FaMoon,
  FaUserCircle,
  FaUniversalAccess,
} from "react-icons/fa";

export default function Header({ open, setOpen }) {
  return (
    <header className="h-20 border-b border-slate-800 bg-[#0b0f19] flex items-center justify-between px-6">

      {/* Left */}
      <div className="flex items-center gap-6">

        <button
          onClick={() => setOpen(!open)}
          className="text-2xl text-gray-300 hover:text-white transition"
        >
          <FaBars />
        </button>

        <h2 className="text-slate-400 text-lg">Home</h2>

      </div>

      {/* Right */}
      <div className="flex items-center gap-6">

        {/* Live Badge */}
        <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-emerald-500 bg-emerald-500/10">

          <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse"></div>

          <span className="text-emerald-400 font-semibold">
            Live - CGWB 2026
          </span>

        </div>

        {/* Icons */}

        <button className="relative text-2xl text-slate-300 hover:text-white">

          <FaBell />

          <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-amber-400"></span>

        </button>

        <button className="text-2xl text-slate-300 hover:text-white">
          <FaUniversalAccess />
        </button>

        <button className="text-2xl text-slate-300 hover:text-white">
          <FaMoon />
        </button>

        <button className="text-4xl text-blue-500 hover:scale-105 transition">
          <FaUserCircle />
        </button>

      </div>
    </header>
  );
}