import React from 'react'

export default function FormDaftarAnak() {
    return (
        <div>
            <div className="container py-5 h-100">
                <div className="row justify-content-center align-items-center h-100">
                    <div className="col-12 col-lg-9 col-xl-7">
                        <div className="card shadow-2-strong card-registration" style={{ borderRadius: "15px" }}>
                            <div className="card-body p-4 p-md-5">
                                <form>
                                    <div className="row">
                                        <div className="col-md-12 mb-4">
                                            <div className="form-outline">
                                                <label className="form-label" for="firstName">Nama Anak</label>
                                                <input type="text" id="firstName" className="form-control form-control-lg" />
                                            </div>
                                        </div>
                                        <div className="col-md-12 mb-4">
                                            <div className="form-outline">
                                                <label className="form-label" for="lastName">Tanggal Lahir Anak</label>
                                                <input type="text" id="lastName" className="form-control form-control-lg" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6 mb-4 d-flex align-items-center">
                                            <div className="form-outline datepicker w-100">
                                                <label for="birthdayDate" className="form-label">Tanggal Lahir</label>
                                                <input type="date" className="form-control form-control-lg" id="birthdayDate" />
                                            </div>
                                        </div>
                                        <div className="col-md-12 mb-4">
                                            <h6 className="mb-2 pb-1">Jenis Kelamin:</h6>
                                            <div className="form-check">
                                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="femaleGender" value="option1" checked />
                                                <label className="form-check-label" for="femaleGender">Laki-Laki</label>
                                            </div>

                                            <div className="form-check">
                                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="maleGender" value="option2" />
                                                <label className="form-check-label" for="maleGender">Perempuan</label>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-md-12 mb-4">
                                            <div className="form-outline">
                                                <label className="form-label" for="emailAddress">Alamat</label>
                                                <textarea className="form-control" name="" id="alamat" cols="30" rows="6"></textarea>
                                            </div>
                                        </div>
                                        <div className="col-md-12 mb-4">
                                            <div className="form-outline">
                                                <label className="form-label" for="emailAddress">Nama Ayah / Wali</label>
                                                <input type="email" id="emailAddress" className="form-control form-control-lg" />
                                            </div>
                                        </div>
                                        <div className="col-md-12 mb-4">
                                            <div className="form-outline">
                                                <label className="form-label" for="phoneNumber">Phone Number</label>
                                                <input type="tel" id="phoneNumber" className="form-control form-control-lg" />
                                            </div>
                                        </div>
                                        <div className="col-md-12 mb-3">
                                            <label for="formFile" className="form-label">Upload Foto Anak</label>
                                            <input className="form-control" type="file" id="formFile" />
                                        </div>
                                    </div>
                                    <div className="mt-4 pt-2">
                                        <input className="btn btn-primary btn-lg" type="submit" value="Konfirmasi" style={{ backgroundColor: "#479242", color: "white" }} />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
