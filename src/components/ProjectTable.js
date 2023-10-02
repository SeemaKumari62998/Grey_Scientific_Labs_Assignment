import React from "react";

const ProjectTable = () => {
  const data = [
    {
      id: 1,
      project: "Chakra Vision Ui Version",
      budget: 14000,
      status: "In Progress",
      completion: 60,
    },
    {
      id: 2,
      project: "AddProgress Track",
      budget: 15000,
      status: "Completed",
      completion: 100,
    },
    {
      id: 3,
      project: "FixPlatform Error",
      budget: 8000,
      status: "In Progress",
      completion: 40,
    },
    {
      id: 4,
      project: "Launch our Mobile App",
      budget: 32000,
      status: "Canceled",
      completion: 0,
    },
    {
      id: 5,
      project: "Another Project",
      budget: 2300,
      status: "Done",
      completion: 100,
    },
  ];

  return (
    <div>
      <h2>Project Table</h2>
      <table>
        <thead>
          <tr>
            <th>PROJECT</th>
            <th>BUDGET</th>
            <th>STATUS</th>
            <th>COMPLETION</th>
            <th>ACTION</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>
                <div className="project-icon">
                  <img
                    src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt={`Icon for ${item.project}`}
                    width="32"
                    height="32"
                  />
                  <span>{item.project}</span>
                </div>
              </td>
              <td>${item.budget}</td>
              <td>{item.status}</td>
              <td>
                <div className="progress-bar">
                  <div
                    className="progress-bar-fill"
                    style={{ width: `${item.completion}%` }}
                  >
                    {item.completion}%
                  </div>
                </div>
              </td>
              <td>
                <div className="ellipsis-menu">
                  <div className="ellipsis-dot"></div>
                  <div className="ellipsis-dot"></div>
                  <div className="ellipsis-dot"></div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProjectTable;
