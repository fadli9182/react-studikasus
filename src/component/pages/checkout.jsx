import React from "react";
import Footer from "../navigasi/footer";
import Header from "../navigasi/header";
import alfamart from "../../asset/img/alfamart.png";
import indomaret from "../../asset/img/indomaret.png";
import ovo from "../../asset/img/ovo.png";
import dana from "../../asset/img/dana.png";
import mandiri from "../../asset/img/mandiri.png";
import bri from "../../asset/img/bri.png";
import { Link } from "react-router-dom";

export default function Checkout() {
  return (
    <>
      <Header />
      <main>
        <div class="container">
          <section>
            <div class="row">
              <div class="col-md-6 my-5">
                <div class="table-responsive">
                  <table class="table table-primary">
                    <thead>
                      <tr></tr>
                    </thead>
                    <tbody>
                      <tr class="">
                        <td>Nama</td>
                        <td>:</td>
                        <td>Fadli</td>
                      </tr>
                      <tr class="">
                        <td>Alamat</td>
                        <td>:</td>
                        <td>Jl. Arteri Jorr Jatiwarna No.15, RT.001/RW.009, Jatiwarna, Kec. Pd. Melati, Kota Bekasi, Jawa Barat 17415</td>
                      </tr>
                      <tr class="">
                        <td>Nomer Telepon</td>
                        <td>:</td>
                        <td>082626262</td>
                      </tr>
                      <tr class="">
                        <td>Email</td>
                        <td>:</td>
                        <td>fadli@gmail.com</td>
                      </tr>
                      <tr class="">
                        <td>Pesan</td>
                        <td>:</td>
                        <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, libero. Labore dicta quaerat commodi iste, non reprehenderit! Inventore, tempora corporis.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div class="col-md-6 my-5">
                <h5>Subtotal</h5>
                <hr />
                <h5>Ongkos Kirim</h5>
                <hr />
                <h5>Total</h5>
                <hr />
                <h5>Metode Pembayaran</h5>
                <div class="row">
                  <div class="col-md-4 d-grid gap-2">
                    <button>
                      <img src={alfamart} alt="logo alfamart" />
                    </button>
                    <button>
                      <img src={indomaret} alt="logo alfamart" />
                    </button>
                  </div>
                  <div class="col-md-4 d-grid gap-2">
                    <button>
                      <img src={ovo} alt="logo alfamart" />
                    </button>
                    <button>
                      <img src={dana} alt="logo alfamart" />
                    </button>
                  </div>
                  <div class="col-md-4 d-grid gap-2">
                    <button>
                      <img src={mandiri} alt="logo alfamart" />
                    </button>
                    <button>
                      <img src={bri} alt="logo alfamart" />
                    </button>
                  </div>
                </div>
                <Link to="/keranjang" class="btn btn-danger" style={{ textShadow: "none", marginRight: "10px" }}>
                  Batal
                </Link>
                <Link to="/" class="btn btn-success my-3" style={{ textShadow: "none" }}>
                  Bayar
                </Link>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
