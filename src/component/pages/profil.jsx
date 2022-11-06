import React from "react";
import Footer from "../navigasi/footer";
import Header from "../navigasi/header";
import profilBg from "../../asset/img/profilBg.png";
import alazharbsd from "../../asset/img/alazharbsd.png";
import sejarah1 from "../../asset/img/sejarah1.png";
import sejarah2 from "../../asset/img/sejarah2.png";
import { Link } from "react-router-dom";

export default function Profil() {
  const pStyle = {
    color: "#479242",
    textShadow: "-1px 0 white, 0 1px white, 1px 0 white, 0 -1px white",
    fontWeight: "700",
  };
  return (
    <div style={{ backgroundImage: `url('${profilBg}')` }}>
      <Header />
      <main>
        <hr />
        <div className="container">
          <div className="card mt-5" id="cardProfile">
            <section className="profilTK mx-5 my-3" id="visi">
              <h1 style={{ textAlign: "center", marginBottom: "20px", color: "#479242" }}>
                Profil
                <br />
                <span>TK Al-Muhajirin</span>
              </h1>
              <p style={{ textAlign: "justify", color: "#479242", textShadow: "-1px 0 white, 0 1px white, 1px 0 white, 0 -1px white", fontWeight: "700" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pulvinar eget sed non libero. Odio urna urna semper ipsum. Lectus nibh odio in vestibulum nec aliquet et. Malesuada mi viverra lorem viverra. Mauris nisi, vitae risus
                mauris ullamcorper arcu. Ultrices condimentum ultrices diam cursus in massa urna, tincidunt. Risus, vitae a elementum, viverra sollicitudin non dictum facilisis pellentesque. Montes, ut dictum dolor egestas dolor convallis.
                Aenean mollis dictum cursus quam felis laoreet. Arcu est turpis neque leo lectus ac. Scelerisque dictum in eros, et turpis porttitor integer sodales orci. Amet viverra velit in at adipiscing lacus, id viverra morbi.
              </p>
              <h2>Visi</h2>
              <p style={pStyle}>“Membentuk Generasi Muslim Berakhlak Mulia, Berwawasan Luas, Terampil, dan Mandiri”.</p>
              <h2>Misi</h2>
              <p style={pStyle}>
                Untuk mewujudkan visi TK Islam Al-Muhajirin tersebut, diperlukan suatu misi berupa kegiatan jangka panjang dengan arah yang jelas. Misi sekolah TK Islam Al-Muhajirin yang disusun berdasarkan visi diatas, yaitu:
              </p>
              <ul style={pStyle}>
                <li>Menyelenggarakan pendidikan umum yang bernafaskan Islam (Integrated Curriculum).</li>
                <li>Memfasilitasi kegiatan belajar yang aktif dan menyenangkan sesuai dengan tahapan perkembangan anak. </li>
                <li>Membangun pembiasaan perilaku hidup bersih, sehat dan berakhlak mulia secara mandiri.</li>
              </ul>
              <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                <Link className="btn btn-primary btn-lg px-4 gap-3 mb-3" to="/pendaftaran" style={{ backgroundColor: "#479242" }}>
                  Mari Bergabung :)
                </Link>
              </div>
            </section>
          </div>
          <div className="card my-5 justify-content-center " id="sejarah">
            adwadajwhjahwkda
            <div className="container sejarah">
              <h1 className="my-5" style={{ textAlign: "center", color: "#479242" }}>
                Sejarah
                <br />
                <span>TK Al-Muhajirin</span>
              </h1>
              <div className="row mt-3 align-items-center">
                <div className="col-md-6 col-sm-12">
                  <p style={pStyle}>
                    Perguruan Al-Muhajirin didirikan pada Tahun 1992, melalui pendirian Yayasan Muslim yang bekerja sama dengan Yayasan sebagai pengelola Perguruan Al-Muhajirin Bekasi – Jawa Barat pimpinan Bapak. H. Agus Priyono.
                  </p>
                </div>
                <div className="col-md-6 col-sm-12">
                  <img className="img-fluid" src={alazharbsd} alt="foto tampak atas al-azhar" width="500px" />
                </div>
              </div>
              <div className="row mt-5 align-items-center">
                <div className="col-md-6 col-sm-12">
                  <img className="img-fluid" src={sejarah1} alt="foto tampak atas al-azhar" width="500px" />
                </div>
                <div className="col-md-6 col-sm-12">
                  <p style={pStyle}>
                    Perguruan Al-Muhajirin didirikan pada Tahun 1992, melalui pendirian Yayasan Muslim yang bekerja sama dengan Yayasan sebagai pengelola Perguruan Al-Muhajirin Bekasi – Jawa Barat pimpinan Bapak. H. Agus Priyono.
                  </p>
                </div>
              </div>
              <div className="row mt-5 align-items-center">
                <div className="col-md-6 col-sm-12">
                  <p style={pStyle}>
                    Perguruan Al-Muhajirin didirikan pada Tahun 1992, melalui pendirian Yayasan Muslim yang bekerja sama dengan Yayasan sebagai pengelola Perguruan Al-Muhajirin Bekasi – Jawa Barat pimpinan Bapak. H. Agus Priyono.
                  </p>
                </div>
                <div className="col-md-6 col-sm-12 mb-5">
                  <img className="img-fluid" src={sejarah2} alt="foto tampak atas al-azhar" width="500px" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
