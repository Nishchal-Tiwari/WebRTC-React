import "./App.css";
import React, { useEffect, useState } from "react";
import { ConfigProvider } from "antd";
import Theme from "./theme";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Layout from "./components/layout";
import GlobalContextProvider from "./contexts/globalContextProvider";
function App() {
  const handleBeforeunload = (e) => {
    e.preventDefault();
    e.returnValue = "Do you want to leave ?";
  };
  useEffect(() => {
    window.addEventListener("beforeunload", handleBeforeunload);
    return () => {
      window.removeEventListener("beforeunload", handleBeforeunload);
    };
  });
  return (
    <ConfigProvider direction="ltr" theme={Theme}>
      <GlobalContextProvider>
        <Layout />
      </GlobalContextProvider>
    </ConfigProvider>
  );
}

export default App;
