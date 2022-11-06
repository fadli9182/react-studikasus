import React from "react";
import Header from "../navigasi/header";

function EditProduk() {
  return (
    <>
      <Header />
      <div className="container my-5">
        <form>
          <div className="row">
            <div className="col-md-12">
              <input className="form-control-sm mb-3" type="file" id="fotoProduk" />
            </div>
            <div className="col-md-12">
              <input className="form-control-sm mb-3" type="file" id="galeri" multiple />
            </div>
            <div className="col-md-12 mb-4">
              <div className="form-outline">
                <label className="form-label" for="firstName">
                  Nama Item
                </label>
                <input type="text" id="firstName" className="form-control form-control-lg" />
              </div>
            </div>
            <div className="col-md-12 mb-4">
              <div className="form-outline">
                <label className="form-label" for="lastName">
                  Harga
                </label>
                <input type="number" id="harga" className="form-control form-control-lg" />
              </div>
            </div>
            <div className="col-md-12 mb-4">
              <div className="form-outline">
                <label className="form-label" for="emailAddress">
                  Stock
                </label>
                <input type="number" id="stock" className="form-control form-control-lg" />
              </div>
            </div>
            <div className="col-md-12 mb-4">
              <div className="form-outline">
                <label className="form-label" for="emailAddress">
                  Keterangan
                </label>
                <textarea className="form-control" name="" id="alamat" cols="30" rows="6"></textarea>
              </div>
            </div>
            <div className="col-md-12"></div>
            <div className="mt-4 pt-2">
              <input className="btn btn-success btn-lg" type="submit" value="Perbarui Data" />
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default EditProduk;
