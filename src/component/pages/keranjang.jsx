import React from "react";
import { Link } from "react-router-dom";
import Footer from "../navigasi/footer";
import Header from "../navigasi/header";
import seragam1 from "../../asset/img/seragam1.png";

export default function Keranjang() {
  return (
    <>
      <Header />
      <section>
        <div className="container">
          <Link to="/shop" style={{ textDecoration: "none", display: "block", margin: "20px 0", fontWeight: "700", fontSize: "20px" }}>
            <i className="bi bi-reply-fill"></i> Lanjut Berbelanja
          </Link>
          <h1 style={{ marginBottom: "15px" }}>Keranjang Kamu</h1>
          <div className="row">
            <div className="col-md-9">
              <div className="table-responsive mb-5">
                <table className="table table-primary table-light table-hover align-middle">
                  <thead>
                    <tr></tr>
                  </thead>
                  <tbody>
                    <tr className="">
                      <td>
                        <img src={seragam1} alt="seragam" width="100px" height="100px" />
                      </td>
                      <td>Seragam</td>
                      <td>
                        <select name="jumlah" id="jumlah" value={"selected"}>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                        </select>
                      </td>
                      <td>Rp. 150.000</td>
                      <td>
                        <button className="btn btn-danger">
                          <i className="bi bi-trash" />
                        </button>
                      </td>
                    </tr>
                    <tr className="">
                      <td>
                        <img src={seragam1} alt="seragam" width="100px" height="100px" />
                      </td>
                      <td>Seragam</td>
                      <td>
                        <select name="jumlah" id="jumlah">
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                        </select>
                      </td>
                      <td>Rp. 150.000</td>
                      <td>
                        <button className="btn btn-danger">
                          <i className="bi bi-trash" />
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div class="col-md-3">
              <h5>Subtotal</h5>
              <hr />
              <h5>Ongkos Kirim</h5>
              <hr />
              <h5>Total</h5>
              <hr />
              <a href="/" style={{ textDecoration: "none", fontSize: "18px", color: "black", fontWeight: "700" }} data-bs-toggle="modal" data-bs-target="#detailPesan">
                Lengkapi Data Pemesananan
              </a>
              <Link to="/checkout" class="btn btn-success my-3" style={{ textDecoration: "none" }}>
                Konfirmasi
              </Link>
            </div>
          </div>
        </div>
        <div className="modal fade" id="detailPesan" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="detailPesan" aria-hidden="true">
          <div className="modal-dialog modal-lg">
            <div className="modal-content" style={{ backgroundColor: "beige" }}>
              <div className="modal-header">
                <h5 className="modal-title" id="detailPesan" style={{ color: "#479242", fontWeight: "700", fontSize: "32px" }}>
                  Detail Data Pemesan
                </h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body" style={{ padding: "30px", backgroundImage: `url("./image/Group 149.png")`, backgroundRepeat: "no-repeat", backgroundPosition: "top right" }}>
                <div className="container" style={{ marginBottom: "30px" }}>
                  <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="floatingName" placeholder="Nama Lengkap" />
                    <label htmlFor="floatingName" style={{ fontWeight: "700" }}>
                      Nama Lengkap
                    </label>
                  </div>
                  <div className="form-floating mb-3">
                    <textarea className="form-control" placeholder="Masukan Almat" id="alamatTextarea" style={{ height: "100px" }}></textarea>
                    <label htmlFor="alamatTextarea" style={{ fontWeight: "700" }}>
                      Alamat
                    </label>
                  </div>
                  <div className="form-floating mb-3">
                    <input type="number" className="form-control" id="floatingName" placeholder="Nomer Telepon" />
                    <label htmlFor="floatingName" style={{ fontWeight: "700" }}>
                      Nomer Telepon
                    </label>
                  </div>
                  <div className="form-floating mb-3">
                    <input type="email" className="form-control" id="floatingName" placeholder="Email" />
                    <label htmlFor="floatingName" style={{ fontWeight: "700" }}>
                      Email
                    </label>
                  </div>
                  <div className="form-floating mb-3">
                    <textarea className="form-control" placeholder="Masukan Alamat" id="pesanTextarea" style={{ height: "100px" }}></textarea>
                    <label htmlFor="pesanTextarea" style={{ fontWeight: "700" }}>
                      Pesan
                    </label>
                  </div>
                  <div className="d-grid">
                    <button className="btn btn-success" data-bs-dismiss="modal">
                      Selesai
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Modal --> */}
      <Footer />
    </>
  );
}
