import { FaRobot } from "react-icons/fa";
import GroundwaterChart from "./charts/GroundwaterChart";


export default function AssistantMessage({ message }) {
  return (
    <div className="flex items-start gap-4">

      {/* AI Avatar */}
      <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0">
        <FaRobot className="text-white" />
      </div>

      {/* Message */}
      <div className="max-w-[80%] bg-[#182133] rounded-2xl px-5 py-4 text-slate-200 shadow-lg">

        <p className="leading-7 whitespace-pre-wrap">
          {message.content}
        </p>

        {message.records?.length > 0 && (
          <GroundwaterChart
            records={message.records}
          />
        )}

        {/* Chart Placeholder */}
        {message.chart && (
          <div className="mt-5 p-4 rounded-xl bg-[#222c42] border border-slate-700">
            📈 Chart will be displayed here
          </div>
        )}

        {/* Records Placeholder */}
        {message.records?.length > 0 && (
          <div className="mt-5 p-4 rounded-xl bg-[#222c42] border border-slate-700">
            📋 {message.records.length} groundwater records received
          </div>
        )}

        {/* Crop Advisory Placeholder */}
        {message.cropAdvisory && (
          <div className="mt-5 p-4 rounded-xl bg-[#1f3b2d] border border-green-700">
            🌱 Crop Advisory Available
          </div>
        )}

      </div>

    </div>
  );
}