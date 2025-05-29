// components/Navbar.jsx
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/add", label: "Add Spot" },
    { path: "/todos", label: "Assignments" },
    { path: "/profile", label: "Profile" },
    { path: "/login", label: "Login" },
  ];

  return (
    <nav className="bg-[#b2d2c3] text-[#3d6969] mx-[100px] px-[6px] py-[3px] flex justify-center gap-[24px] shadow-md rounded-[10px] position-fixed">
      {navItems.map(({ path, label }) => (
        <Link
          key={path}
          to={path}
          className={`text-[16px] px-[5px] py-[10px] rounded-md transition duration-200 no-underline font-[lexend] 
    ${isActive(path) ? "bg-tan font-semibold" : "hover:bg-[#3d6969]"} 
    text-[#242526] visited:text-[#242526] focus:text-[#242526]`}
        >
          {label}
        </Link>
      ))}
    </nav>
  );
}
