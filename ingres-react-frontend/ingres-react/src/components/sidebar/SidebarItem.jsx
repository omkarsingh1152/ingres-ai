import { Link } from "react-router-dom";

export default function SidebarItem({
  to = "/",
  icon,
  text,
  active = false,
}) {
  return (
    <Link
      to={to}
      className={`
        flex items-center gap-3
        px-3 py-2
        rounded-lg
        transition-all
        text-sm

        ${
          active
            ? "bg-slate-800 text-white"
            : "text-slate-400 hover:bg-slate-800 hover:text-white"
        }
      `}
    >
      {icon}

      <span>{text}</span>
    </Link>
  );
}