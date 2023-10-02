// App.js
import React, { useState } from "react";
import "./App.css";
import Table from "./components/Author_table";
import ProjectTable from "./components/ProjectTable";
import Head from "./components/Head";

function App() {
  const [activeTab, setActiveTab] = useState("Table"); // Track the active tab

  const changeTab = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="app-container">
      <div className="sidebar">
        <Head activeTab={activeTab} changeTab={changeTab} />
      </div>

      <main className="main-content">
        {activeTab === "Table" && (
          <>
            <Table />
            <ProjectTable />
          </>
        )}
      </main>
    </div>
  );
}

export default App;
