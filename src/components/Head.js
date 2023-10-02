import React from "react";

function Head({ activeTab, changeTab }) {
  return (
    <aside className="app-header">
      <div>
        <h1>
          <span style={{ textDecoration: "underline", color: "darkblue" }}>
            Intern-Task
          </span>
        </h1>

        <div className="sty">
          <div className="font">
            <button>Dashboard</button>
            <button
              onClick={() => changeTab("Table")}
              className={activeTab === "Table" ? "active" : ""}
            >
              Table
            </button>
            <button>Billing</button>
            <button
              onClick={() => changeTab("Table")}
              className={activeTab === "RTL" ? "active" : ""}
            >
              RTL
            </button>
          </div>
          <h3>ACCOUNT PAGES</h3>

          <div className="sty">
            <div className="font">
              <button>
                <h3
                  onClick={() => changeTab("Table")}
                  className={activeTab === "Profile" ? "active" : ""}
                >
                  Profile
                </h3>
              </button>

              <button>
                <h3
                  onClick={() => changeTab("Table")}
                  className={activeTab === "Sign In" ? "active" : ""}
                >
                  Sign In
                </h3>
              </button>

              <button>
                <h3
                  onClick={() => changeTab("Table")}
                  className={activeTab === "Sign Up" ? "active" : ""}
                >
                  Sign Up
                </h3>
              </button>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default Head;
