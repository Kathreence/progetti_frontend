import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <Link to="/">Homepage</Link>
      <Link to="/stagioni">Stagioni</Link>
      <Link to="/contatti">Contatti</Link>
    </nav>
  );
};

export default Navbar;
