import React from "react";
import Header from "../navigasi/header";

function EditPengajar() {
  return (
    <>
      <Header />
      <div className="container my-5">
        <form>
          <div className="row">
            <div className="col-md-12">
              <input className="form-control-sm mb-3" type="file" id="fotoPengajar" />
            </div>
            <div className="col-md-12 mb-4">
              <div className="form-outline">
                <label className="form-label" for="firstName">
                  Nama Lengkap
                </label>
                <input type="text" id="firstName" className="form-control form-control-lg" />
              </div>
            </div>
            <div className="col-md-12 mb-4">
              <div className="form-outline">
                <label className="form-label" for="tglLahir">
                  Tempat & Tanggal Lahir
                </label>
                <input type="date" id="tglLahir" className="form-control form-control-lg" />
              </div>
            </div>
            <div className="col-md-12 mb-4">
              <div className="form-outline">
                <label className="form-label" for="stock">
                  Jabatan
                </label>
                <input type="text" id="stock" className="form-control form-control-lg" />
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

export default EditPengajar;
