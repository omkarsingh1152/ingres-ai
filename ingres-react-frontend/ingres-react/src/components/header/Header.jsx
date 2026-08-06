import Notification from "./Notification.jsx";
import Accessibility from "./Accessibility.jsx";
import ThemeButton from "./ThemeButton.jsx";
import { FaBars } from "react-icons/fa";

export default function Header({ open, setOpen }) {
  return (
    <header className="h-16 bg-[#101828] border-b border-slate-700 flex items-center justify-between px-6">

      <button
        onClick={() => setOpen(!open)}
        className="text-white text-xl hover:text-cyan-400 transition"
      >
        <FaBars />
      </button>
      
      <div className="flex items-center gap-3">
        <Notification />
        <Accessibility />
        <ThemeButton />
      </div>

    </header>
  );
}