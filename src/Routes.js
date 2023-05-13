import React from "react";
import { Route, Routes } from "react-router-dom";
import TodoDetail from "./pages/toDoDetail";
import Dashboard from "./pages/dashboard";

function toDoRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/detail/:todoId" element={<TodoDetail />} />
    </Routes>
  );
}

export default toDoRoutes;
