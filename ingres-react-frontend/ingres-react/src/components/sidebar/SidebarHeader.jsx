import { FaDroplet, FaXmark } from "react-icons/fa6";

export default function SidebarHeader({ toggleSidebar }) {
  return (
    <div className="h-16 flex items-center justify-between px-4 border-b border-slate-800">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white">
          <FaDroplet />
        </div>

        <div>
          <h2 className="font-bold text-white">
            INGRES-AI
          </h2>

          <p className="text-[10px] text-slate-400">
            Ministry of Jal Shakti
          </p>
        </div>
      </div>

      <button onClick={toggleSidebar}>
        <FaXmark />
      </button>
    </div>
  );
}