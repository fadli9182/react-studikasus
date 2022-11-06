import React from "react";
import { useEffect } from "react";
import pengajarBg from "../../asset/img/pengajarBg.png";
import frameFoto from "../../asset/img/frameFoto.png";
import Header from "../navigasi/header";
import Footer from "../navigasi/footer";
import Aos from "aos";
import("../../asset/css/pengajar.css");

export default function Pengajar() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div>
      <Header />
      <main>
        <section>
          <div className="container text-center">
            <hr />
            <img src={pengajarBg} alt="bg" className="bgImg" />
            <h1 style={{ margin: "10px 50px" }}>
              Guru dan Karyawan
              <br />
              <span>TK Al-Muhajirin</span>
            </h1>
            <div className="card-pengajar text-center shadow-lg">
              <div className="row align-item-center">
                <div className="col-md-4">
                  <img src={frameFoto} alt="foto-pengajar" />
                </div>
                <div className="col-md-8 align-item-center" id="nama">
                  <h4>Nama Lengkap</h4>
                  <h4>Tempat dan Tanggal Lahir</h4>
                  <h4>Jabatan</h4>
                </div>
              </div>
            </div>
            <hr style={{ margin: "40px 0" }} />
            <div className="card-pengajar text-center shadow-lg">
              <div className="row">
                <div className="col-md-4">
                  <img src={frameFoto} alt="foto-pengajar" />
                </div>
                <div className="col-md-8" id="nama">
                  <h4>Nama Lengkap</h4>
                  <h4>Tempat dan Tanggal Lahir</h4>
                  <h4>Jabatan</h4>
                </div>
              </div>
            </div>
            <hr style={{ margin: "40px 0" }} />
            <div data-aos="fade-right" className="card-pengajar text-center shadow-lg">
              <div className="row">
                <div className="col-md-4">
                  <img src={frameFoto} alt="foto-pengajar" />
                </div>
                <div className="col-md-8" id="nama">
                  <h4>Nama Lengkap</h4>
                  <h4>Tempat dan Tanggal Lahir</h4>
                  <h4>Jabatan</h4>
                </div>
              </div>
            </div>
            <hr style={{ margin: "40px 0" }} />
            <div data-aos="fade-left" className="card-pengajar text-center shadow-lg">
              <div className="row">
                <div className="col-md-4">
                  <img src={frameFoto} alt="foto-pengajar" />
                </div>
                <div className="col-md-8" id="nama">
                  <h4>Nama Lengkap</h4>
                  <h4>Tempat dan Tanggal Lahir</h4>
                  <h4>Jabatan</h4>
                </div>
              </div>
            </div>
            <hr style={{ margin: "40px 0" }} />
            <div data-aos="fade-right" className="card-pengajar text-center shadow-lg">
              <div className="row">
                <div className="col-md-4">
                  <img src={frameFoto} alt="foto-pengajar" />
                </div>
                <div className="col-md-8" id="nama">
                  <h4>Nama Lengkap</h4>
                  <h4>Tempat dan Tanggal Lahir</h4>
                  <h4>Jabatan</h4>
                </div>
              </div>
            </div>
            <hr style={{ margin: "40px 0" }} />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
