import React from "react";
import Footer from "../navigasi/footer";
import Header from "../navigasi/header";

export default function RiwayatTransaksi() {
  return (
    <>
      <Header />
      <div className="container">
        <main>
          <h1>Riwayat Transaksi</h1>
          <table class="table">
            <thead>
              <tr>
                <th scope="col">No</th>
                <th scope="col">Kode Transaksi</th>
                <th scope="col">Item</th>
                <th scope="col">Biaya</th>
                <th scope="col">Status Pemesanan</th>
                <th scope="col">Contact</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>12312312</td>
                <td>Seragam</td>
                <td>Rp. 150.000</td>
                <td>Dikirim</td>
                <td>
                  <button className="btn btn-success">
                    <i class="bi bi-whatsapp"></i> Hubungi
                  </button>
                </td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td colspan="2">Larry the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </table>
        </main>
      </div>
      <Footer />
    </>
  );
}
