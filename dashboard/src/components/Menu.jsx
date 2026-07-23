import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const [user, setUser] = useState(null);

  const handleClick = (index) => {
    setSelectedMenu(index);
  };

  const handleProfileClick = () => {
    setProfileDropdownOpen(!profileDropdownOpen);
  };

  const handleLogout = async () => {
    try {
      await axios.post(
        "http://localhost:8080/logout",
        {},
        {
          withCredentials: true,
        },
      );
      window.location.href = "http://localhost:5173";
    } catch (error) {
      console.log("Logout error:", error);
    }
  };

  useEffect(() => {
    axios
      .get("http://localhost:8080/current-user", {
        withCredentials: true,
      })
      .then((res) => {
        setUser(res.data);
      })
      .catch((error) => {
        console.log("Error fetching user:", error);
      });
  }, []);

  const menuClass = "menu";
  const activeMenuClass = "menu selected";

  return (
    <div className="menu-container">
      <Link to="/" onClick={() => handleClick(0)}>
        <img
          src="./logo.png"
          alt="Logo"
          style={{ width: "30px", cursor: "pointer" }}
        />
      </Link>

      <div className="menus">
        <ul>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/"
              onClick={() => handleClick(0)}
            >
              <p className={selectedMenu === 0 ? activeMenuClass : menuClass}>
                Dashboard
              </p>
            </Link>
          </li>

          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/orders"
              onClick={() => handleClick(1)}
            >
              <p className={selectedMenu === 1 ? activeMenuClass : menuClass}>
                Orders
              </p>
            </Link>
          </li>

          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/holdings"
              onClick={() => handleClick(2)}
            >
              <p className={selectedMenu === 2 ? activeMenuClass : menuClass}>
                Holdings
              </p>
            </Link>
          </li>

          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/positions"
              onClick={() => handleClick(3)}
            >
              <p className={selectedMenu === 3 ? activeMenuClass : menuClass}>
                Positions
              </p>
            </Link>
          </li>

          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/funds"
              onClick={() => handleClick(4)}
            >
              <p className={selectedMenu === 4 ? activeMenuClass : menuClass}>
                Funds
              </p>
            </Link>
          </li>

          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/apps"
              onClick={() => handleClick(5)}
            >
              <p className={selectedMenu === 5 ? activeMenuClass : menuClass}>
                Apps
              </p>
            </Link>
          </li>
        </ul>

        <hr />

        <div className="profile-wrapper">
          <div className="profile" onClick={handleProfileClick}>
            <div className="avatar">
              {user?.username?.charAt(0).toUpperCase()}
            </div>

            <p className="username">{user?.username}</p>
          </div>

          {profileDropdownOpen && (
            <div className="profile-dropdown">
              <div className="profile-info">
                <h4>{user?.username}</h4>
                <p>{user?.email}</p>
              </div>

              <div className="dropdown-item">
                <i className="fa-regular fa-user"></i>
                <span>My profile</span>
                <span>/ Settings</span>
              </div>

              <div className="dropdown-item">
                <i className="fa-solid fa-circle-dot"></i>
                <span>Console</span>
              </div>

              <div className="dropdown-item">
                <i className="fa-solid fa-circle-dot"></i>
                <span>Coin</span>
              </div>

              <div className="dropdown-item">
                <i className="fa-regular fa-comments"></i>
                <span>Support</span>
              </div>

              <div className="dropdown-item">
                <i className="fa-solid fa-user-plus"></i>
                <span>Invite friends</span>
              </div>

              <hr />

              <div className="dropdown-item">
                <i className="fa-solid fa-user-plus"></i>
                <span>Tour Kite</span>
              </div>

              <div className="dropdown-item">
                <i className="fa-solid fa-keyboard"></i>
                <span>Keyboard shortcuts</span>
              </div>

              <div className="dropdown-item">
                <i className="fa-solid fa-circle-question"></i>
                <span>Help</span>
              </div>

              <div className="dropdown-item logout" onClick={handleLogout}>
                <i className="fa-solid fa-arrow-right-from-bracket"></i>
                <span>Logout</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Menu;
