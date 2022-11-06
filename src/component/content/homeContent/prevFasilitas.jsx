import React, { useEffect } from "react";
import sentrasains from "../../../asset/img/sentrasains.jpg";
import sentrabalok from "../../../asset/img/sentrabalok.jpg";
import sentraimtaq from "../../../asset/img/sentraimtaq.jpg";
import Aos from "aos";
import { Link } from "react-router-dom";

export default function PrevFasilitas() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div>
      <section data-aos="fade-left" className="fasilitas" style={{ marginBottom: "100px" }}>
        <div className="container fasilitas">
          <div className="row align-items-center">
            <div className="col-6 align-content-center">
              <h2>Fasilitas Kita Lengkap Dong</h2>
              <ul>
                <li>Taman Bermain Terbuka</li>
                <li>Taman Bermain Tertutup</li>
                <li>Ruang Kelas</li>
                <li>Toilet</li>
              </ul>
              <Link to="/fasilitas" className="btn btn-primary" style={{ background: "#479242" }}>
                Lihat Selengkapnya
              </Link>
            </div>
            <div className="col-md-6 col-sm-12">
              <div id="fasilitas" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src={sentrasains} className="d-block w-100" alt="sentra sains" />
                  </div>
                  <div className="carousel-item">
                    <img src={sentraimtaq} className="d-block w-100" alt="sentra inggris" />
                  </div>
                  <div className="carousel-item">
                    <img src={sentrabalok} className="d-block w-100" alt="sentra imtaq" />
                  </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#fasilitas" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="false"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#fasilitas" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="false"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
