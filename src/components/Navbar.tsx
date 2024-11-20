import { NavLink } from "react-router-dom";

const Navbar = () => {
  const getNavLinkStyle = ({ isActive }: { isActive: boolean }) =>
    isActive ? { color: "red", fontWeight: "bold" } : undefined;

  return (
    <ul style={{ display: "flex", listStyleType: "none", gap: "20px" }}>
      <NavLink to={"/"} style={getNavLinkStyle}>
        <li>Home</li>
      </NavLink>
      <NavLink to={"/about"} style={getNavLinkStyle}>
        <li>About</li>
      </NavLink>
      <NavLink to={"/contact"} style={getNavLinkStyle}>
        <li>Contact</li>
      </NavLink>
    </ul>
  );
};

export default Navbar;
