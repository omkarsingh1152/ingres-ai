import { FaArrowRight, FaMicrophone } from "react-icons/fa";
import { useState } from "react";

export default function SearchBar() {
  const [text, setText] = useState("");

  return (
    <div className="w-full max-w-6xl mx-auto px-6 mt-12 ">

      <div className="mx-auto flex items-center w-full max-w-5xl bg-[#20293d] rounded-3xl border border-slate-700 p-2">

        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          type="text"
          placeholder="Ask about any district, block, or state in India..."
          className="flex-1 bg-transparent outline-none px-4 py-2 text-sm text-white placeholder:text-slate-400"
        />

        <button className="mr-3 text-slate-400 hover:text-white">
          <FaMicrophone size={20} />
        </button>

        <button
          className="bg-blue-600 hover:bg-blue-700 transition px-4 py-2 rounded-2xl flex items-center gap-3 text-white font-semibold"
        >
          Ask
          <FaArrowRight />
        </button>

      </div>

      <p className="text-center text-slate-400 mt-5 text-sm">
        Data source: CGWB 2026 - Ministry of Jal Shakti - Updated quarterly
      </p>

    </div>
  );
}