


import React from 'react';
import { FaSearch, FaCog, FaUser } from 'react-icons/fa'; // Importing icons
import './HeaderIcon.css'; // Import your CSS styles for HeaderIcon

function HeaderIcon() {
  return (
    <div className="header-icons">
      <div className="search-bar">
        <input type="text" placeholder="Search" />
        <button className="search-button">
          <FaSearch />
        </button>
      </div>
      <div className="settings-icon">
        <FaCog />
      </div>
      <div className="profile-icon">
        <FaUser />
      </div>
    </div>
  );
}

export default HeaderIcon;
