import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div>
      <section className="hero m-0">
        <div className="px-4 py-4 text-center" style={{ marginBottom: "100px" }}>
          <h1 className="display-5 fw-bold mb-4">
            Mari Menjadi Keluarga
            <br /> <span style={{ color: "#2de90f" }}>TK Al-Muhajirin</span>
          </h1>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <Link className="btn btn-success btn-lg px-4 gap-3 mb-3" to="/pendaftaran">
              Mari Bergabung :)
            </Link>
          </div>
          <div className="col-lg-6 mx-auto">
            <p className="lead mb-4 text">
              Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and
              powerful JavaScript...
              <br />
              <Link style={{ marginTop: "30px" }} className="btn btn-success" to="/profil">
                Lihat Selengkapnya
              </Link>
              .
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
