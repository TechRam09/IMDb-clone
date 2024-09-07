import React from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../assets/IMDB_Logo.png";

function Header() {
  return (
    <header className="h-[70px] flex justify-between items-center">
      <nav className="px-4 lg:px-10">
        <div className="flex items-center">
          <Link to="/">
            <img
              src={Logo}
              alt="Logo"
              className="w-[60px] lg:w-[80px] cursor-pointer"
            />
          </Link>
          <ul className="flex  lg:space-x-8 lg:mt-0 mx-2 lg:mx-6">
            <li>
              <NavLink
                to="/movies/popular"
                className={({ isActive }) =>
                  `mx-[15px] lg:mx-[30px] ${
                    isActive ? "text-red-700" : "text-white"
                  } cursor-pointer text-sm lg:text-xl hover:text-red-700`
                }
              >
                Popular
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/movies/top_rated"
                className={({ isActive }) =>
                  `mx-[15px] lg:mx-[30px] ${
                    isActive ? "text-red-700" : "text-white"
                  } cursor-pointer text-sm lg:text-xl hover:text-red-700`
                }
              >
                Top Rated
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/movies/upcoming"
                className={({ isActive }) =>
                  `mx-[15px] lg:mx-[30px] ${
                    isActive ? "text-red-700" : "text-white"
                  } cursor-pointer text-sm lg:text-xl hover:text-red-700`
                }
              >
                Upcoming
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
