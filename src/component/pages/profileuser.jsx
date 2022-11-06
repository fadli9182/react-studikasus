import React from "react";
import foto from "../../asset/img/foto.jpg";
import Footer from "../navigasi/footer";
import Header from "../navigasi/header";

export default function ProfileUser() {
  return (
    <>
      <Header />
      <section>
        <div className="container text-center my-5 w-50">
          <h1 className="mb-3">Profile</h1>
          <img className="mb-3" src={foto} alt="foto profil" style={{ width: "90px", borderRadius: "50%" }} />
          <br />
          <form>
            <div className="row">
              <div className="col-md-12">
                <input className="form-control-sm mb-3" type="file" id="formFile" />
              </div>
              <div className="col-md-12 mb-4">
                <div className="form-outline">
                  <label className="form-label" for="firstName">
                    Nama Lengkap
                  </label>
                  <input type="text" id="firstName" className="form-control form-control-lg" />
                </div>
              </div>
              <div className="col-md-12 mb-4">
                <div className="form-outline">
                  <label className="form-label" for="email">
                    Email
                  </label>
                  <input type="email" id="email" className="form-control form-control-lg" />
                </div>
              </div>
              <div className="col-md-12 mb-4">
                <div className="form-outline">
                  <label className="form-label" for="waNumber">
                    Nomer Whatsapp
                  </label>
                  <input type="number" id="waNumber" className="form-control form-control-lg" />
                </div>
              </div>
              <div className="col-md-12 mb-4">
                <div className="form-outline">
                  <label className="form-label" for="alamat">
                    Alamat
                  </label>
                  <textarea className="form-control" name="alamat" id="alamat" cols="30" rows="6"></textarea>
                </div>
              </div>
              <div className="col-md-12 mb-4"></div>
              <div className="mt-4 pt-2">
                <input className="btn btn-success btn-lg" type="submit" value="Perbarui Data" />
              </div>
            </div>
          </form>
        </div>
      </section>
      <Footer />
    </>
  );
}
