import React from "react";
import Group146 from "../../asset/img/Group146.png";
import Footer from "../navigasi/footer";
import Header from "../navigasi/header";

export default function Register() {
  return (
    <>
      <Header />
      <main style={{ paddingBottom: "30px" }}>
        <div className="container" style={{ width: "627px" }}>
          <section id="body">
            <div className="row text-center biji">
              <div className="col-12">
                <h1 style={{ fontSize: "64px", fontWeight: "700", margin: "30px auto" }}>Daftar</h1>
                <div className="mb-2 text-start fs-4">
                  <a href="Login.html">
                    <i className="bi bi-reply-fill"></i> Kembali Ke Halaman Login
                  </a>
                </div>
                <div className="form-floating mb-5">
                  <input type="email" className="form-control" id="floatingEmail" placeholder="name@example.com" />
                  <label for="floatingEmail">Email</label>
                </div>
                <div className="form-floating mb-5">
                  <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                  <label for="floatingPassword">Kata Sandi</label>
                </div>
                <div className="form-floating mb-5">
                  <input type="password" className="form-control" id="floatingPassconfirm" placeholder="Password" />
                  <label for="floatingPassconfirm">Konfirmasi Kata Sandi</label>
                </div>
                <div className="form-floating mb-5">
                  <input type="text" className="form-control" id="floatingName" placeholder="Nama Lengkap" />
                  <label for="floatingName" style={{ fontWeight: "700" }}>
                    Nama Lengkap
                  </label>
                </div>
                <div className="form-floating mb-2">
                  <input type="number" className="form-control" id="floatingNumber" placeholder="Number" />
                  <label for="floatingNumber">Nomer Whatsapp</label>
                </div>
                <div className="text-start mb-4 fs-5">
                  <input type="checkbox" style={{ cursor: "pointer" }} />
                  <label for="terms">
                    <a href="/" id="terms">
                      Accept Terms and Agreement
                    </a>
                  </label>
                </div>
                <button className="btn-lg btn-primary daftar m-auto">
                  <a href="Login.html">Daftar</a>
                </button>
              </div>
            </div>
          </section>
          <img src={Group146} alt="" width="800px" height="700px" style={{ position: "absolute", zIndex: "-1", top: "100px", left: "292px" }} />
        </div>
      </main>
      <Footer />
    </>
  );
}
