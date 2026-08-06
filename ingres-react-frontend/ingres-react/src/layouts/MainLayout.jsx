import { useState } from "react";
import Sidebar from "../components/sidebar/Sidebar";
import Header from "../components/header/Header";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="flex h-screen bg-[#0b0f19]">

      <Sidebar
        open={sidebarOpen}
        setOpen={setSidebarOpen}
      />

      <div className="flex-1 flex flex-col">

        <Header
          open={sidebarOpen}
          setOpen={setSidebarOpen}
        />

        <main className="flex-1 overflow-hidden">
          <Outlet />
        </main>

      </div>

    </div>
  );
}