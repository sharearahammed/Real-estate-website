import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Authconfiguration/Authconfiguration";
import { GrLogin } from "react-icons/gr";
import { SlLogout } from "react-icons/sl";
import { CgProfile } from "react-icons/cg";
import { MdBrowserUpdated } from "react-icons/md";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const logout = () => {
    logOut()
      .then()
      .catch((error) => {
        console.log(error.message);
      });
  };
  const links = (
    <>
      <li className="text-[#BC986B]">
        <NavLink
          className={({ isActive, isPending }) =>
            isActive
              ? "text-gray-400 border border-[#BC986B]"
              : isPending
              ? "pending"
              : ""
          }
          to={"./"}
        >
          Home
        </NavLink>
      </li>
      <li className="text-[#BC986B]">
        <NavLink
          className={({ isActive, isPending }) =>
            isActive
              ? "text-gray-400 border border-[#BC986B]"
              : isPending
              ? "pending"
              : ""
          }
          to={"./about"}
        >
          About
        </NavLink>
      </li>
      <li className="text-[#BC986B]">
        <NavLink
          className={({ isActive, isPending }) =>
            isActive
              ? "text-gray-400 border border-[#BC986B]"
              : isPending
              ? "pending"
              : ""
          }
          to={"./contact"}
        >
          Contact
        </NavLink>
      </li>

      {user && (
        <>
          <li className="text-[#BC986B]">
            <NavLink
              className={({ isActive, isPending }) =>
                isActive
                  ? "text-gray-300 border border-[#BC986B]"
                  : isPending
                  ? "pending"
                  : ""
              }
              to={"./userprofile"}
            >
              User Profile
            </NavLink>
          </li>
          <li className="text-[#BC986B]">
            <NavLink
              className={({ isActive, isPending }) =>
                isActive
                  ? "text-gray-700 border border-[#BC986B]"
                  : isPending
                  ? "pending"
                  : ""
              }
              to={"./updateprofile"}
            >
              Update Profile{" "}
            </NavLink>
          </li>
          <li className="text-[#BC986B]">
            <NavLink
              className={({ isActive, isPending }) =>
                isActive
                  ? "text-gray-700 border border-[#BC986B]"
                  : isPending
                  ? "pending"
                  : ""
              }
              to={"./portal"}
            >
              Portal
            </NavLink>
          </li>
        </>
      )}
    </>
  );
  return (
    <div className="md:bg-gradient-to-r md:from-black md:to-white shadow-5-strong lg:bg-gradient-to-r from-black to-white shadow-5-strong lg:px-[120px] navbar bg-base-100 flex-no-wrap fixed top-0 right-0 left-0 z-10 flex">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="md:text-white btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[2] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {links}
          </ul>
        </div>
        <div className=" md:text-whitelg:text-white flex">
          <Link
            to={"/"}
            className="btn btn-ghost hover:bg-stone-500 text-[10px] md:text-2xl lg:text-2xl lg:font-bold mr-20"
          >
            Opulent <span className="text-[#BC986B]">Escapes</span>
          </Link>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end md:navbar-end lg:navbar-end lg:flex lg:gap-4">
        {user ? (
          <div
            className="dropdown dropdown-end hover:tooltip hover:tooltip-open hover:tooltip-bottom"
            data-tip={user.displayName}
          >
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-20 rounded-full">
                <img alt="Tailwind CSS Navbar component" src={user.photoURL} />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {user && (
                <li>
                  <Link to={"/userprofile"} className="justify-between">
                  <CgProfile />Profile
                    <span className="badge">New</span>
                  </Link>
                </li>
              )}
              {user && (
                <li>
                  <Link to={"/updateprofile"}><MdBrowserUpdated />Update Profile</Link>
                </li>
              )}
              <li>
                {user ? (
                  <div className="flex items-center hover:text-red-600 hover:font-bold">
                    <p>
                    <button onClick={logout}><div className="flex items-center gap-2">
                        <div><SlLogout /></div>
                        <div>Sign Out</div>
                        </div></button>
                    </p>
                  </div>
                ) : (
                  <Link to={"/login"}><GrLogin /> Sign In</Link>
                )}
              </li>
            </ul>
          </div>
        ) : (
          <div className="dropdown dropdown-end">
            
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {user && (
                <li>
                  <Link to={"/userprofile"} className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </Link>
                </li>
              )}
              {user && (
                <li>
                  <Link to={"/updateprofile"}>Update Profile</Link>
                </li>
              )}
              <li>
                {user ? (
                  <div className="flex items-center hover:text-red-600 hover:font-bold">
                    <p>
                      <button onClick={logout}><div className="flex">
                        <div><SlLogout /></div>
                        <div>Sign Out</div>
                        </div></button>
                    </p>
                  </div>
                ) : (
                  <Link to={"/login"}><GrLogin />Sign In</Link>
                )}
              </li>
            </ul>
          </div>
        )}

        <div className="flex items-center">
          {
            user ? <div onClick={logout} className="btn bg-red-600 text-white text-[8px] lg:text-[14px]">
              Sign Out
          </div>
          :
          <div>
            <Link
              className="btn bg-[#BC986B] hover:bg-slate-400 text-white text-[8px] lg:text-[14px]"
              to={"/login"}
            >
              Sign In
            </Link>
          </div>
          }
        </div>
      </div>
    </div>
  );
};

export default Navbar;
