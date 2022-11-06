import React from "react";
import Logo from "../../asset/img/Logo.png";
import "../../asset/css/login.css";
import loginBg from "../../asset/img/loginBg.png";
import { Link } from "react-router-dom";

export default function Login() {
  function handleChange(e) {
    console.log(e.target.value);
  }

  function submit() {
    const emailUser = document.getElementById("email").value;
    const pwdUser = document.getElementById("pwd").value;
    console.log(emailUser);
  }

  return (
    <>
      <div style={{ backgroundImage: `url("${loginBg}")`, height: "900px" }}>
        <div className="container">
          <div className="row d-flex justify-content-center text-center" style={{ padding: "10px 180px" }}>
            <div className="col-12 col-sm-12">
              <Link to="/">
                <img className="logo" src={Logo} alt="logo" />
              </Link>
              <h1 className="title">Login</h1>
              <div className="form">
                <form action="">
                  <h2 style={{ fontSize: "24px", margin: "20px 0", textAlign: "initial" }}>
                    <a href="bs-tk copy.html" className="justify-content-start">
                      <i className="bi bi-reply-fill"></i>Kembali Ke Home
                    </a>
                  </h2>
                  <label htmlFor="email" className="label">
                    Email
                  </label>
                  <br />
                  <input type="email" className="input form-control" id="email" onChange={handleChange} />
                  <br />
                  <label htmlFor="password" className="label">
                    Kata Sandi
                  </label>
                  <br />
                  <input type="password" className="input form-control" id="password" />
                  <br />
                  <div className="link">
                    <a href="lupaPw.html">Lupa Kata Sandi</a>
                    <Link to="/register">Daftar Sekarang</Link>
                  </div>
                  <Link onClick={submit} className="btn btn-success" to="" style={{ marginTop: "30px", color: "white", textShadow: "none", fontSize: "24px", padding: "10px 200px" }}>
                    Submit
                  </Link>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
