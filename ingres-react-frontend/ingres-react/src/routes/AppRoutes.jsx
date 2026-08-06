import { Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import Home from "../pages/Home";
import Chat from "../pages/Chat";
import Map from "../pages/Map";
import Admin from "../pages/Admin";

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/map" element={<Map />} />
        <Route path="/admin" element={<Admin />} />
      </Route>
    </Routes>
  );
}