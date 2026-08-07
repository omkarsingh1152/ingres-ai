import { FaRobot } from "react-icons/fa";

export default function AssistantMessage({ message }) {
  return (
    <div className="flex items-start gap-4 mb-8">

      {/* AI Avatar */}
      <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center">
        <FaRobot className="text-white" />
      </div>

      {/* Message */}
      <div className="max-w-[80%] bg-[#182133] rounded-2xl px-5 py-4 text-slate-200 shadow-lg">
        <p className="leading-7">
          {message}
        </p>
      </div>

    </div>
  );
}