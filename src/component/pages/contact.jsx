import React from "react";
import Footer from "../navigasi/footer";
import Header from "../navigasi/header";
import image24 from "../../asset/img/image24.png"

export default function Contact() {
  return (
    <>
      <Header />
      <main>
        <div className="container">
          <hr />
          <section className="bg-body" style={{ margin: "30px 30px" }}>
            <div
              className="row"
              style={{
                backgroundImage: `url('${image24}')`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                padding: "200px 50px",
              }}>
              <div className="col-md-6 col-sm-12">
                <h2 style={{ textAlign: "center" }}>Hubungi Kami</h2>
                <p>
                  Silahkan isi form disamping jika ada masukan dan saran, kami
                  sangat menerima semua saran dan masukan anda. Silahkan Kirim
                  Pesan ke kami
                </p>
              </div>
              <div className="col-md-6 col-sm-12">
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="floatingInput"
                    placeholder="nama"
                  />
                  <label htmlFor="floatingInput">Nama</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="email"
                    className="form-control"
                    id="floatingPassword"
                    placeholder="email"
                  />
                  <label htmlFor="floatingPassword">Email</label>
                </div>
                <div className="form-floating mb-3">
                  <textarea
                    className="form-control"
                    placeholder="Leave a comment here"
                    id="floatingTextarea"
                  ></textarea>
                  <label htmlFor="floatingTextarea">Pesan</label>
                </div>
                <a
                  href="/"
                  className="btn btn-primary"
                  style={{ backgroundColor: "#479242", textShadow: "none" }}>
                  Kirim
                </a>
              </div>
            </div>
          </section>
          <section>
            <div className="container Lokasi">
              <hr />
              <h1 className="pb-3 text-center mt-5">Lokasi Kami</h1>
              <div
                className="row align-items-center"
                style={{ textAlign: "justify" }}
              >
                <div className="col-md-6 my-3" style={{ padding: "0 20px" }}>
                  <p>
                    <i className="bi bi-browser-safari"></i> Jl. Arteri Jorr
                    Jatiwarna No.15, RT.001/RW.009, Jatiwarna, Kec. Pd. Melati,
                    Kota Bekasi, Jawa Barat 17415
                  </p>
                  <p>
                    <i className="bi bi-telephone"></i> 0208208102801
                  </p>
                  <a href="/">
                    <span>
                      <i className="bi bi-rss"></i>
                    </span>{" "}
                    tkalmuhajirin@gmail.com
                  </a>
                </div>
                <div className="col-md-6 col-sm-12 text-center mb-5">
                  <iframe
                    title="map"
                    width="320"
                    height="268"
                    frameBorder="0"
                    scrolling="no"
                    marginHeight="0"
                    marginWidth="0"
                    src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=bekasi+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                  >
                    <a href="https://www.maps.ie/distance-area-calculator.html">
                      distance maps
                    </a>
                  </iframe>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
