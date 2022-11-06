import React from "react";
import Footer from "../navigasi/footer";
import Header from "../navigasi/header";
import Hero from "../content/homeContent/hero";
import PrevFasilitas from "../content/homeContent/prevFasilitas";
import PrevShop from "../content/homeContent/prevShop";
import Sejarah from "../content/homeContent/sejarah";
import Lokasi from "../content/homeContent/lokasi";
import navBg from "../../asset/img/navBg.png";

export default function Home() {
  return (
    <>
      <div className="shadow-lg" id="heroImg" style={{ backgroundImage: `url('${navBg}')`, borderRadius: "0px 0px 250px 50px", boxShadow: "(0px 24px 20px #5A6359)" }}>
        <Header />
        <Hero />
      </div>
      <PrevFasilitas />
      <PrevShop />
      <Sejarah />
      <Lokasi />
      <Footer />
    </>
  );
}
