import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../asset/img/Logo.png";

function Admin() {
  return (
    <>
      <header class="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
        <Link class="navbar-brand col-md-3 col-lg-2 me-0 px-3" to="/">
          <img src={Logo} alt="Logo TK Al-Muhajirin" />
        </Link>
        <button class="navbar-toggler position-absolute d-md-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="navbar-nav">
          <div class="nav-item text-nowrap">
            <Link class="nav-link px-3" to="/">
              Sign out
            </Link>
          </div>
        </div>
      </header>

      <div class="container-fluid">
        <div class="row">
          <nav id="sidebarMenu" class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
            <div class="position-sticky pt-3">
              <ul class="nav flex-column">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="/">
                    <span data-feather="home"></span>
                    Dashboard
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/">
                    Product
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/">
                    Pengajar
                  </a>
                </li>
              </ul>
            </div>
          </nav>

          <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
              <h1 class="h2">Dashboard</h1>
              <div class="btn-toolbar mb-2 mb-md-0">
                <div class="btn-group me-2">
                  <button type="button" class="btn btn-sm btn-outline-secondary">
                    Share
                  </button>
                  <button type="button" class="btn btn-sm btn-outline-secondary">
                    Export
                  </button>
                </div>
                <button type="button" class="btn btn-sm btn-outline-secondary dropdown-toggle">
                  <span data-feather="calendar"></span>
                  This week
                </button>
              </div>
            </div>
            <h2>Produk</h2>
            <div className="table-responsive text-center">
              <table class="table table-hover table-sm">
                <thead>
                  <tr>
                    <th scope="col">No</th>
                    <th scope="col">Thumbnail</th>
                    <th scope="col">Galeri</th>
                    <th scope="col">Nama Item</th>
                    <th scope="col">Harga</th>
                    <th scope="col">Stock</th>
                    <th scope="col">Keterangan</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>seragam1.png</td>
                    <td>
                      <ul>
                        <li>seragam1.png</li>
                        <li>seragam2.png</li>
                        <li>seragam3.png</li>
                      </ul>
                    </td>
                    <td>Seragam</td>
                    <td>Rp. 150.000</td>
                    <td>1000</td>
                    <td style={{ width: "200px" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus tempora nemo vitae quae odit assumenda dolores quas, odio explicabo quasi.</td>
                    <td className="">
                      <button className="btn btn-danger me-2">Hapus</button>
                      <button className="btn btn-warning">Edit</button>
                    </td>
                  </tr>
                  <tr>
                    <td>1,002</td>
                    <td>placeholder</td>
                    <td>irrelevant</td>
                    <td>visual</td>
                    <td>layout</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <h2>Pengajar</h2>
            <div className="table-responsive text-center">
              <table class="table table-hover table-sm">
                <thead>
                  <tr>
                    <th scope="col">No</th>
                    <th scope="col">Profil</th>
                    <th scope="col">Nama Lengkap</th>
                    <th scope="col">Tempat & Tanggal Lahir</th>
                    <th scope="col">Jabatan</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>fotoprofil.png</td>
                    <td>Agus Priyono</td>
                    <td>Bekasi, 15 Agustus 1980</td>
                    <td>Guru</td>
                    <td className="gap-2 justify-content-center">
                      <button className="btn btn-danger me-2">Hapus</button>
                      <button className="btn btn-warning">Edit</button>
                    </td>
                  </tr>
                  <tr>
                    <td>1,002</td>
                    <td>placeholder</td>
                    <td>irrelevant</td>
                    <td>visual</td>
                    <td>layout</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}

export default Admin;
