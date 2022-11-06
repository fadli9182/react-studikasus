import React from "react";
import alazharbsd from "../../../asset/img/alazharbsd.png";
import sejarah1 from "../../../asset/img/sejarah1.png";
import sejarah2 from "../../../asset/img/sejarah2.png";

function Sejarah() {
  return (
    <>
      <div className="card my-5 justify-content-center " id="sejarah">
        <div className="container sejarah">
          <h1 className="my-5" style={{ textAlign: "center", color: "#479242" }}>
            Sejarah
            <br />
            <span>TK Al-Muhajirin</span>
          </h1>
          <div className="row mt-3 align-items-center">
            <div className="col-md-6 col-sm-12">
              <p style={{ color: "#479242", textShadow: "-1px 0 white, 0 1px white, 1px 0 white, 0 -1px white", fontWeight: "700" }}>
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
              <p style={{ color: "#479242", textShadow: "-1px 0 white, 0 1px white, 1px 0 white, 0 -1px white", fontWeight: "700" }}>
                Perguruan Al-Muhajirin didirikan pada Tahun 1992, melalui pendirian Yayasan Muslim yang bekerja sama dengan Yayasan sebagai pengelola Perguruan Al-Muhajirin Bekasi – Jawa Barat pimpinan Bapak. H. Agus Priyono.
              </p>
            </div>
          </div>
          <div className="row mt-5 align-items-center">
            <div className="col-md-6 col-sm-12">
              <p style={{ color: "#479242", textShadow: "-1px 0 white, 0 1px white, 1px 0 white, 0 -1px white", fontWeight: "700" }}>
                Perguruan Al-Muhajirin didirikan pada Tahun 1992, melalui pendirian Yayasan Muslim yang bekerja sama dengan Yayasan sebagai pengelola Perguruan Al-Muhajirin Bekasi – Jawa Barat pimpinan Bapak. H. Agus Priyono.
              </p>
            </div>
            <div className="col-md-6 col-sm-12 mb-5">
              <img className="img-fluid" src={sejarah2} alt="foto tampak atas al-azhar" width="500px" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sejarah;
