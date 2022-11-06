import React from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../asset/img/Logo.png";

export default function Header() {
  const navStyle = {
    backgroundColor: "rgba(202, 228, 228, 0.75)",
    borderRadius: "30px",
    boxShadow: "4px 4px 4px rgba(0, 0, 0, 0.25)",
    padding: "5px 20px",
    margin: "0 8px",
  };
  const navNormal = {
    padding: "5px 20px",
  };

  return (
    <div>
      <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-transparent gap-2">
          <div className="container-fluid">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample10" aria-controls="navbarsExample10" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse align-items-center justify-content-md-center" id="navbarsExample10" style={{ marginLeft: "100px" }}>
              <ul className="navbar-nav align-items-center" style={{ fontWeight: "bold" }}>
                <li className="nav-item">
                  <NavLink className="nav-link" style={({ isActive }) => (isActive ? navStyle : navNormal)} aria-current="page" to="/">
                    Home
                  </NavLink>
                  {/* style={navStyle} */}
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" style={({ isActive }) => (isActive ? navStyle : navNormal)} to="/pengajar">
                    Pengajar
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" style={({ isActive }) => (isActive ? navStyle : navNormal)} to="/fasilitas">
                    Fasilitas
                  </NavLink>
                </li>
                <li className="nav-item">
                  <img src={Logo} alt="logo" height="60px" />
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" style={({ isActive }) => (isActive ? navStyle : navNormal)} to="/shop">
                    Shop
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" style={({ isActive }) => (isActive ? navStyle : navNormal)} to="/profil">
                    Profil
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" style={({ isActive }) => (isActive ? navStyle : navNormal)} to="/contact">
                    Contact
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="d-flex gap-2" style={{ paddingRight: "20px" }}>
              <div className="dropdown">
                <a className="btn btn-secondary dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ textShadow: "none" }}>
                  User
                </a>

                <ul className="dropdown-menu me-5" style={{ left: "-30px" }}>
                  <li>
                    <Link className="dropdown-item" to="/user">
                      <i class="bi bi-person"></i> Lihat Profile
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/riwayat">
                      <i class="bi bi-clock-history"></i> Riwayat Transaksi
                    </Link>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      <i class="bi bi-box-arrow-left"></i> Logout
                    </a>
                  </li>
                </ul>
              </div>
              <NavLink
                to="/login"
                className="btn btn-primary"
                style={{
                  backgroundColor: "#479242",
                  color: "white",
                  textShadow: "none",
                }}
              >
                Login
              </NavLink>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
