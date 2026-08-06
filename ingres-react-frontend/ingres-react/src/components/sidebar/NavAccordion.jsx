import { useState } from "react";
import { FaChevronDown } from "react-icons/fa6";

export default function NavAccordion({
  title,
  icon,
  defaultOpen = false,
  children,
}) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="mb-2">

      <button
        onClick={() => setOpen(!open)}
        className="w-full
        flex
        items-center
        justify-between
        px-3
        py-3
        rounded-lg
        hover:bg-slate-800"
      >
        <div className="flex items-center gap-3">

          {icon}

          <span>{title}</span>

        </div>

        <FaChevronDown
          className={`transition duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? "max-h-96 mt-2" : "max-h-0"
        }`}
      >
        <div 
        className="pl-8
        space-y-1
        text-xs
        text-gray-400
        hover:bg-slate-800 rounded-l transition-colors duration-150 cursor-pointer
        hover:text-white
        p-2"
        >
          {children}
        </div>
      </div>

    </div>
  );
}