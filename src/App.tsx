import React from "react";
import "./App.css";
import AppRoutes from "./routes/appRoutes";
import { BrowserRouter } from "react-router-dom";
import { UserProviderContainer } from "context/userContext";

const App = () => {
  return (
    <UserProviderContainer>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </UserProviderContainer>
  );
};

export default App;
