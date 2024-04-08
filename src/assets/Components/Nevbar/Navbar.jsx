import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Authconfiguration/Authconfiguration";

const Navbar = () => {
  const {user,logOut} = useContext(AuthContext);
  const logout = () =>{
    logOut()
    .then()
    .catch(error=>{
      console.log(error.message)
    })
  }
  const links = 
  <>
  <li><NavLink className={({ isActive, isPending }) =>
                    isActive
                      ? "text-[#BC986B] border border-[#BC986B]"
                      : isPending
                      ? "pending"
                      : ""
                  } to={"./"}>Home</NavLink></li>

{
  user && <>
      <li><NavLink className={({ isActive, isPending }) =>
                    isActive
                      ? "text-[#BC986B] border border-[#BC986B]"
                      : isPending
                      ? "pending"
                      : ""
                  } to={"./updateprofile"}>Update Profile </NavLink></li>
  <li><NavLink className={({ isActive, isPending }) =>
                    isActive
                      ? "text-[#BC986B] border border-[#BC986B]"
                      : isPending
                      ? "pending"
                      : ""
                  } to={"./userprofile"}>User Profile</NavLink></li>
  </>
}
                      <li><NavLink className={({ isActive, isPending }) =>
                      isActive
                        ? "text-[#BC986B] border border-[#BC986B]"
                        : isPending
                        ? "pending"
                        : ""
                    } to={"./about"}>About</NavLink></li>
    <li><NavLink className={({ isActive, isPending }) =>
                      isActive
                        ? "text-[#BC986B] border border-[#BC986B]"
                        : isPending
                        ? "pending"
                        : ""
                    } to={"./contact"}>Contact</NavLink></li>

  </>
  return (
    <div className="mb-7 navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[2] p-2 shadow bg-base-100 rounded-box w-52">
        {links}
      </ul>
    </div>
    <div>
    <Link to={'/'} className="btn btn-ghost text-[10px] lg:text-3xl lg:font-bold">Opulent Escapes</Link>
    </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {links}
    </ul>
  </div>
  <div className="navbar-end md:navbar-end lg:navbar-end lg:flex lg:gap-4">

  {
      user ? <div className="flex items-center">
        <p><button onClick={logout} className="btn bg-red-600 text-white text-[8px] lg:text-[14px]">Sign Out</button></p></div>
      : <Link className="btn bg-[#BC986B] hover:bg-yellow-400 text-white text-[8px] lg:text-[14px]" to={'/login'}>Sign In</Link>
    }
    <Link className="btn bg-[#BC986B] hover:bg-yellow-400 text-white text-[8px] lg:text-[14px]" to={'/register'}>Sign Up</Link>
  </div>
  {
    user ? <div className="hover:tooltip hover:tooltip-open hover:tooltip-bottom w-20 " data-tip={user.displayName}>
    <img className="rounded-full" alt="Tailwind CSS Navbar component" src={user.photoURL} />
  </div>
  :
  <div className="w-20 rounded-full">
    <img className="h-[40px] w-[40px]" alt="Tailwind CSS Navbar component" src="https://i.ibb.co/P1V0nsx/Frame-5.png" />
  </div>
  }
</div>
  );
};

export default Navbar;