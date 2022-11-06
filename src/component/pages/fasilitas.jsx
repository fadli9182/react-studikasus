import React from "react";
import circle from "../../asset/img/circle.png";
import Footer from "../navigasi/footer";
import Header from "../navigasi/header";
import tamanbermain from "../../asset/img/tamanbermain.jpeg";
import tamanterbuka from "../../asset/img/tamanterbuka.jpeg";
import sentrainggris from "../../asset/img/sentrainggris.jpg";
import sentraimtaq from "../../asset/img/sentraimtaq.jpg";
import sentrasains from "../../asset/img/sentrasains.jpg";
import toilet2 from "../../asset/img/toilet2.jpeg";

export default function Fasilitas() {
  return (
    <>
      <div style={{ backgroundImage: `url('${circle}')`, backgroundRepeat: "no-repeat", backgroundPosition: "right top" }}>
        <Header />
        <main>
          <section className="fasilitas mb-5">
            <div className="container mb-3">
              <hr />
              <h1 className="text-center" style={{ marginBottom: "50px" }}>
                <span className="title">Fasilitas</span> TK Al-Muhajirin
              </h1>
              <div className="row mb-3">
                <div className="col-6 col-md-6 col-sm-12 mb-5">
                  <img className="img-fluid" src={tamanbermain} width="500px" height="326px" alt="taman bermain terbuka" />
                </div>
                <div className="col-6 col-md-6 col-sm-12">
                  <h2>Taman Bermain Terbuka</h2>
                  <hr />
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores consequatur cumque ratione, mollitia cupiditate animi veniam incidunt quidem, tempora maiores minima doloremque aliquid distinctio error?</p>
                </div>
                <div className="col-6 col-md-6 col-sm-12 mb-5">
                  <h2>Halaman Bermain</h2>
                  <hr className="style-three" />
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores consequatur cumque ratione, mollitia cupiditate animi veniam incidunt quidem, tempora maiores minima doloremque aliquid distinctio error?</p>
                </div>
                <div className="col-6 col-md-6 col-sm-12 mb-5">
                  <img className="img-fluid" src={tamanterbuka} width="500px" height="326px" alt="Halaman Bermain" />
                </div>
                <div className="col-6 col-md-6 col-sm-12 mb-5">
                  <img className="img-fluid" src={sentrainggris} width="500px" alt="sentra bahasa inggris" />
                </div>
                <div className="col-6 col-md-6 col-sm-12">
                  <h2>Ruang Bahasa Inggris</h2>
                  <hr />
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores consequatur cumque ratione, mollitia cupiditate animi veniam incidunt quidem, tempora maiores minima doloremque aliquid distinctio error?</p>
                </div>
                <div className="col-6 col-md-6 col-sm-12">
                  <h2>Ruang Imtaq</h2>
                  <hr />
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores consequatur cumque ratione, mollitia cupiditate animi veniam incidunt quidem, tempora maiores minima doloremque aliquid distinctio error?</p>
                </div>
                <div className="col-6 col-md-6 col-sm-12 mb-5">
                  <img className="img-fluid" src={sentraimtaq} width="500px" alt="" />
                </div>
                <div className="col-6 col-md-6 col-sm-12 mb-5">
                  <img className="img-fluid" src={sentrasains} width="500px" alt="" />
                </div>
                <div className="col-6 col-md-6 col-sm-12">
                  <h2>Ruang Sains</h2>
                  <hr />
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores consequatur cumque ratione, mollitia cupiditate animi veniam incidunt quidem, tempora maiores minima doloremque aliquid distinctio error?</p>
                </div>
                <div className="col-6 col-md-6 col-sm-12">
                  <h2>Toilet</h2>
                  <hr />
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores consequatur cumque ratione, mollitia cupiditate animi veniam incidunt quidem, tempora maiores minima doloremque aliquid distinctio error?</p>
                </div>
                <div className="col-6 col-md-6 col-sm-12 mb-5">
                  <img className="img-fluid" src={toilet2} width="500px" height="326px" alt="" />
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
      <Footer />
    </>
  );
}
