import { FaUniversalAccess } from "react-icons/fa";

export default function Accessibility() {
  return (
    <button className="w-10 h-10 rounded-lg flex items-center justify-center hover:bg-slate-700 transition">
      <FaUniversalAccess className="text-gray-300 text-lg" />
    </button>
  );
}