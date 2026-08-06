import Starred from "./Starred";
import SidebarHeader from "./SidebarHeader";
import SidebarFooter from "./SidebarFooter";
import NavAccordion from "./NavAccordion";
import RecentQueries from "./RecentQueries";

import {
    FaQuestionCircle,
    FaMap,
    FaShieldAlt,
    FaSlidersH,
} from "react-icons/fa";


import { Link } from "react-router-dom";

export default function Sidebar({ open, setOpen }) {


    return (

        <aside
            className={`h-screen flex flex-col bg-[#0b0f19] text-white transition-all duration-300 ${open ? "w-72" : "w-0 overflow-hidden"
                }`}
        >
            <SidebarHeader
                toggleSidebar={() => setOpen(false)}
            />

            <div className="flex-1 overflow-y-auto p-3 custom-scrollbar">
                
                <NavAccordion
                    title="Ask a Question"
                    icon={<FaQuestionCircle className="text-blue-400" />}
                >
                    <Link to="/">
                        New Conversation
                    </Link>
                </NavAccordion>

                <NavAccordion
                    title="Explore Map"
                    icon={<FaMap className="text-emerald-500" />}
                >
                    <Link to="/map">
                        Open Map
                    </Link>
                </NavAccordion>

                <NavAccordion
                    title="Simulation"
                    icon={<FaSlidersH className="text-amber-300" />}
                >
                    <Link to="/chat">
                        Run Simulation
                    </Link>
                </NavAccordion>

                <NavAccordion
                    title="Administration"
                    icon={<FaShieldAlt className="text-fuchsia-400" />}
                >
                    <Link to="/admin">
                        Dashboard
                    </Link>
                </NavAccordion>

                <Starred />
                <RecentQueries />

            </div>

            <SidebarFooter />

        </aside>

    )

}