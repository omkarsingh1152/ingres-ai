import { FaChevronRight } from "react-icons/fa";

export default function ChatHeader() {
  return (
    <div className="border-b border-slate-800 px-8 py-5 flex items-center justify-between">

      {/* Breadcrumb */}
      <div className="flex items-center text-sm text-slate-400">

        <span className="font-semibold text-white">
          Home
        </span>

        <FaChevronRight
          className="mx-2 text-xs"
        />

        <span>
          Ask India Groundwater
        </span>

      </div>

      {/* Language Switch */}
      <div className="flex bg-[#1c2435] rounded-xl p-1">

        <button
          className="px-5 py-2 rounded-lg bg-blue-600 text-white font-medium"
        >
          EN
        </button>

        <button
          className="px-5 py-2 rounded-lg text-slate-400 hover:text-white transition"
        >
          HI
        </button>

      </div>

    </div>
  );
}