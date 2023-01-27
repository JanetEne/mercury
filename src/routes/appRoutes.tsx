import Layout from "components/layout";
import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Login from "views/login";
import Dashboard from "views/main";
import UserDetails from "views/main/userDetails";
import Users from "views/main/users";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/app" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="users" element={<Users />} />
        <Route path="user-details" element={<UserDetails />} />
      </Route>
      <Route path="/" element={<Login />} />
      <Route path="*" element={<Navigate to="/app" replace />} />
      <Route path="/*" element={<Navigate to="/app" replace />} />
    </Routes>
  );
};

export default AppRoutes;
