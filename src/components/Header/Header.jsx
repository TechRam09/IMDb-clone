import React from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../assets/IMDB_Logo.png";

function Header() {
  return (
    <header className=" h-[70px] flex justify-between items-center">
      <nav className="px-10">
        <div className="flex items-center">
          <Link to="/">
            <img src={Logo} alt="Logo" className=" w-[80px] cursor-pointer" />
          </Link>
          <ul className="lg:flex-row lg:space-x-8 lg:mt-0 flex mx-6">
            <li>
              <NavLink
                to="/movies/popular"
                className={({ isActive }) =>
                  `mx-[30px] ${
                    isActive ? "text-red-700" : " text-white"
                  }  cursor-pointer text-xl hover:text-red-700`
                }
              >
                Popular
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/movies/top_rated"
                className={({ isActive }) =>
                  `mx-[30px] ${
                    isActive ? "text-red-700" : " text-white"
                  } cursor-pointer text-xl hover:text-red-700`
                }
              >
                Top Rated
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/movies/upcoming"
                className={({ isActive }) =>
                  `mx-[30px] ${
                    isActive ? "text-red-700" : " text-white"
                  }  cursor-pointer text-xl hover:text-red-700`
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
