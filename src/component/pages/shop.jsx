import React from "react";
import Footer from "../navigasi/footer";
import Header from "../navigasi/header";
import image31 from "../../asset/img/image31.png";
import seragam1 from "../../asset/img/seragam1.png";
import seragam2 from "../../asset/img/seragam2.png";
import seragam3 from "../../asset/img/seragam3.png";
import { Link } from "react-router-dom";

export default function Shop() {
  return (
    <>
      <Header />
      <main>
        <div className="container text-center mt-5">
          <h1>Keperluan Murid</h1>
          <section className="search">
            <form className="col-md-4 col-sm-12 offset-sm-4 text-center d-flex" style={{ margin: "30px auto" }}>
              <input className="form-control me-2 text-center" type="search" placeholder="Nama Barang" aria-label="Nama Barang" />
              <button className="btn btn-outline-success" type="submit">
                Cari
              </button>
            </form>
            <div className="col offset-10 mb-3">
              <a href="/" className="btn btn-outline-success">
                <i className="bi bi-cart-check-fill"></i> Cart
              </a>
            </div>
            <hr />
          </section>
          <section className="shop" style={{ marginBottom: "30px" }}>
            <div className="row">
              <div className="col-xl-3 col-md-4 col-sm-6 mb-5">
                <div
                  className="card"
                  style={{
                    borderRadius: "30px",
                    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.25)",
                    padding: "5px",
                  }}
                >
                  <img src={seragam1} className="card-img-top img-fluid" alt="seragam" />
                  <div className="card-body">
                    <h5 className="card-title">Seragam</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <p className=" text-start">Rp. 150.000</p>
                    <a href="/" className="btn btn-outline-success" data-bs-toggle="modal" data-bs-target="#detailShop" style={{ textShadow: "none" }}>
                      Beli Sekarang
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-md-4 col-sm-6 mb-5">
                <div
                  className="card"
                  style={{
                    borderRadius: "30px",
                    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.25)",
                    padding: "5px",
                  }}
                >
                  <img src={seragam1} className="card-img-top img-fluid" alt="seragam" />
                  <div className="card-body">
                    <h5 className="card-title">Seragam</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <p className=" text-start">Rp. 150.000</p>
                    <a href="/" className="btn btn-outline-success" data-bs-toggle="modal" data-bs-target="#detailShop" style={{ textShadow: "none" }}>
                      Beli Sekarang
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-md-4 col-sm-6 mb-5">
                <div
                  className="card"
                  style={{
                    borderRadius: "30px",
                    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.25)",
                    padding: "5px",
                  }}
                >
                  <img src={seragam1} className="card-img-top img-fluid" alt="seragam" />
                  <div className="card-body">
                    <h5 className="card-title">Seragam</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <p className=" text-start">Rp. 150.000</p>
                    <a href="/" className="btn btn-outline-success" data-bs-toggle="modal" data-bs-target="#detailShop" style={{ textShadow: "none" }}>
                      Beli Sekarang
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-md-4 col-sm-6 mb-5">
                <div
                  className="card"
                  style={{
                    borderRadius: "30px",
                    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.25)",
                    padding: "5px",
                  }}
                >
                  <img src={seragam1} className="card-img-top img-fluid" alt="seragam" />
                  <div className="card-body">
                    <h5 className="card-title">Seragam</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <p className=" text-start">Rp. 150.000</p>
                    <a href="/" className="btn btn-outline-success" data-bs-toggle="modal" data-bs-target="#detailShop" style={{ textShadow: "none" }}>
                      Beli Sekarang
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* <!-- Modal --> */}
          <div className="modal fade" id="detailShop" tabindex="-1" aria-labelledby="detailShop" aria-hidden="true">
            <div className="modal-dialog modal-xl">
              <div className="modal-content">
                <div className="modal-header">
                  <h5
                    className="modal-title"
                    id="detailShop"
                    style={{
                      color: "#479242",
                      fontWeight: "700",
                      fontSize: "32px",
                    }}
                  >
                    Detail Produk
                  </h5>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div
                  className="modal-body"
                  style={{
                    padding: "30px",
                    backgroundImage: `url('${image31}')`,
                  }}
                >
                  <div className="container" style={{ marginBottom: "40px" }}>
                    <div className="row">
                      <div
                        className="card col-xl-3 col-md-12 col-sm-12 text-center mb-3"
                        style={{
                          paddingBottom: "10px",
                          alignItems: "center",
                          gap: "10px",
                        }}
                      >
                        <img src={seragam1} width="200px" alt="seragam1" />
                        <img src={seragam2} width="200px" alt="seragam2" />
                        <img src={seragam3} width="200px" alt="seragam3" />
                      </div>
                      <div className="col-xl-6 col-md-12 col-sm-7 text-center align-self-center mb-3">
                        <img className="img-fluid" src={seragam1} width="263px" height="284px" border="1px" alt="seragam1" />
                      </div>
                      <div className="col-xl-3 text-start align-self-center mb-3">
                        <div className="card" style={{ padding: "30px", gap: "10px" }}>
                          <h1>Seragam</h1>
                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto quidem dicta similique cum exercitationem non expedita impedit explicabo distinctio ad!</p>
                          <h2>Rp. 150.000</h2>
                          <select className="form-select w-75" aria-label="Default select example" style={{ marginBottom: "50px" }}>
                            <option value={"selected"}>Jumlah</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                          </select>
                          <Link
                            to="/keranjang"
                            className="btn btn-primary"
                            style={{
                              backgroundColor: "#479242",
                              textShadow: "none",
                            }}
                          >
                            Masukan Ke keranjang
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
