import { FaMoon } from "react-icons/fa";

export default function ThemeButton() {
  return (
    <button className="w-10 h-10 rounded-lg flex items-center justify-center hover:bg-slate-700 transition">
      <FaMoon className="text-gray-300 text-lg" />
    </button>
  );
}