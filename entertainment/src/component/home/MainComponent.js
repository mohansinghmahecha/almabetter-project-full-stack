import React from "react";
import "./MainComponent.css";
import { MdMovie, MdLocalMovies, MdWindow } from "react-icons/md";
import { CiBookmark } from "react-icons/ci";
import { PiTelevisionBold } from "react-icons/pi";
import { CgProfile } from "react-icons/cg";
import { Link, Outlet } from "react-router-dom";
// MainComponent is the primary layout component for the application
export const MainComponent = () => {
  const token = localStorage.getItem("token"); // Get token from localStorage

  const handleLogout = () => {
    // Handle user logout
    localStorage.removeItem("token"); // Remove token from localStorage
    localStorage.removeItem("userInfo"); // Remove userInfo from localStorage
    window.location.reload(); // Optionally reload the page to reflect changes
  };

  return (
    <div className="main-component custom-container">
      <div className="item-menu">
        <div className="default-menu">
            {/* Navigation links for various sections */}
          <div>
            {/* main logo */}
            <Link to="/">
              <MdMovie className="item-size" />
            </Link>
          </div>
          <div className="mid-items mt-2">
            <div>
              <Link to="/">
                <MdWindow className="item-size-2" />
              </Link>
            </div>
            <div>
              <Link to="/movies">
                <MdLocalMovies className="item-size-2" />
              </Link>
            </div>
            <div>
              <Link to="/tv-serials">
                <PiTelevisionBold className="item-size-2" />
              </Link>
            </div>
            <div>
              <Link to="/bookmarks">
                <CiBookmark className="item-size-2" />
              </Link>
            </div>
          </div>
          <div>
            {token ? (
              <button onClick={handleLogout} className="logout-button">
                <CgProfile className="item-size-2 text-green-500" />
                <small>Out</small>
              </button>
            ) : (
              <Link to="/login">
                <CgProfile className="item-size-2 text-red-500" />
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Mobile menu */}
        {/* Navigation links for various sections */}
      <div className="m-menu">
        <div className="m-menu-items">
          <div>
            {/* main logo */}
            <Link to="/">
              <MdMovie className="item-size-2 logo-text" />
            </Link>
          </div>
          <div className="flex gap-4 mid">
            <div>
              <Link to="/">
                <MdWindow className="item-size-2" />
              </Link>
            </div>
            <div>
              <Link to="/movies">
                <MdLocalMovies className="item-size-2" />
              </Link>
            </div>
            <div>
              <Link to="/tv-serials">
                <PiTelevisionBold className="item-size-2" />
              </Link>
            </div>
            <div>
              <Link to="/bookmarks">
                <CiBookmark className="item-size-2" />
              </Link>
            </div>
          </div>
          <div>
            {token ? (
              <button onClick={handleLogout} className="logout-button">
                <CgProfile className="item-size-2 text-green-500" />
                <small className="overflow-hidden">LogOut</small>
              </button>
            ) : (
              <Link to="/login">
                <CgProfile className="item-size-2 text-red-500" />
              </Link>
            )}
          </div>
        </div>
      </div>

      <div className="component-main">
        <Outlet />
      </div>
    </div>
  );
};
//  component is exported
export default MainComponent;
