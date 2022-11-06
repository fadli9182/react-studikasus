import React from "react";
import footbg from "../../../asset/img/footbg.png";
import seragam from "../../../asset/img/seragam.png";
import bukutulis from "../../../asset/img/bukutulis.png";
import pensil from "../../../asset/img/pensil.png";
import image31 from "../../../asset/img/image31.png";
import seragam1 from "../../../asset/img/seragam1.png";
import seragam2 from "../../../asset/img/seragam2.png";
import seragam3 from "../../../asset/img/seragam3.png";
import { Link } from "react-router-dom";

export default function PrevShop() {
  return (
    <div>
      <section data-aos="fade-up-right" className="shop text-center" style={{ background: `url('${footbg}')`, borderRadius: "30px", backgroundSize: "cover", boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px", marginBottom: "100px" }}>
        <div id="carouselExampleControls" className="container carousel slide pb-3 " data-bs-ride="carousel">
          <h1 style={{ textAlign: "center", margin: "30px" }}>
            Rekomendasi <br />
            <span>Keperluan Anak</span>
          </h1>
          <div className="row">
            <div className="col-md-4 col-sm-12 text-center" style={{ alignItems: "center" }}>
              <div className="card">
                <img src={seragam} className="card-img-top img-fluid" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Seragam</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <p className="card-footer m-0 text-start">Rp. 150.000</p>
                  <a href="/" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#detailShop" style={{ backgroundColor: "#479242" }}>
                    Beli Sekarang
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-12">
              <div className="card">
                <img src={bukutulis} className="card-img-top img-fluid" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Buku Tulis</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <p className="card-footer m-0 text-start">Rp. 150.000</p>
                  <a href="/" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#detailShop" style={{ backgroundColor: "#479242" }}>
                    Beli Sekarang
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-12">
              <div className="card">
                <img src={pensil} className="card-img-top img-fluid" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Pensil</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <p className="card-footer m-0 text-start">Rp. 150.000</p>
                  <a href="/" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#detailShop" style={{ backgroundColor: "#479242" }}>
                    Beli Sekarang
                  </a>
                </div>
              </div>
            </div>
          </div>
          <Link to="/shop" className="btn btn-success" style={{ margin: "30px 10px" }}>
            Mari Berbelanja :)
          </Link>
        </div>
      </section>
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
  );
}
