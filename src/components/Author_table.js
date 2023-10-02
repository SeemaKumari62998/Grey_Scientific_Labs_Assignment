import React, { useState } from "react";

function Table() {
  const [data, setData] = useState([
    {
      id: 1,
      name: "John Doe",
      email: "john@gmail.com",
      isActive: true,
      function: "Manager",
      employed: "2021/05/15",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@gmail.com",
      isActive: true,
      function: "Programmer",
      employed: "2020/12/10",
    },
    {
      id: 3,
      name: "Anjith",
      email: "anjith@gmail.com",
      isActive: false,
      function: "Executive",
      employed: "2022/03/20",
    },
    {
      id: 4,
      name: "Divya",
      email: "divya@gmail.com",
      isActive: false,
      function: "Programmer",
      employed: "2019/09/28",
    },
    {
      id: 5,
      name: "Manisha kumari",
      email: "manisha@gmail.com",
      isActive: true,
      function: "Manager",
      employed: "2023/01/05",
    },
    // Add more data as needed
  ]);

  const toggleActivation = (id) => {
    setData((prevData) =>
      prevData.map((item) =>
        item.id === id ? { ...item, isActive: !item.isActive } : item
      )
    );
  };

  return (
    <div>
      <div>
        <div className="search-bar">
          <input type="text" placeholder="Search..." />
          <i className="fas fa-search"></i> {/* Search icon */}
        </div>

        {/* Profile and Settings icons */}
        <div className="profile-settings-icons">
          <i className="fas fa-user"></i> {/* Profile icon */}
          <i className="fas fa-cog"></i> {/* Settings icon */}
        </div>
      </div>

      <h2>Authors Table</h2>
      <table>
        <thead>
          <tr>
            <th>AUTHOR</th>
            <th>FUNCTION</th>
            <th>STATUS</th>
            <th>EMPLOYED</th>
            <th>ACTION</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={item.id}>
              <td className="author">
                <img
                  src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt={item.name}
                />
                <div className="authordiv">
                  <h2>{item.name}</h2>
                  <p>{item.email} </p>
                </div>
              </td>
              <td>{item.function}</td>
              <td>
                <button>
                  <span style={{ color: item.isActive ? "green" : "red" }}>
                    {item.isActive ? "Active" : "Inactive"}
                  </span>
                </button>
              </td>
              <td>{item.employed}</td>
              <td>
                <button>Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
