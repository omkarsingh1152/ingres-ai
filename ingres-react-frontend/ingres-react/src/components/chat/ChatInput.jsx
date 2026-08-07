import { useState } from "react";
import { FaArrowUp, FaMicrophone } from "react-icons/fa";

export default function ChatInput({ onSend }) {
  const [text, setText] = useState("");

  const handleSend = () => {
    if (!text.trim()) return;

    onSend(text);
    setText("");
  };

  return (
    <div className="border-t border-slate-800 bg-[#0b0f19] px-8 py-5">
      <div className="max-w-5xl mx-auto">

        <div className="flex items-center bg-[#1b2436] rounded-3xl px-5 py-3">

          <textarea
            rows={1}
            value={text}
            onChange={(e) => setText(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                handleSend();
              }
            }}
            placeholder="Ask about groundwater..."
            className="flex-1 bg-transparent resize-none outline-none text-white placeholder:text-slate-400"
          />

          <button className="mr-4 text-slate-400 hover:text-white">
            <FaMicrophone size={18} />
          </button>

          <button
            onClick={handleSend}
            className="w-10 h-10 rounded-full bg-blue-600 hover:bg-blue-700 flex items-center justify-center transition"
          >
            <FaArrowUp className="text-white" />
          </button>

        </div>

      </div>
    </div>
  );
}