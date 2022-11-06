import React from 'react'

export default function HeroDaftar() {
    return (
        <div>
            <h1 style={{ textAlign: "center", margin: "30px auto", fontWeight: "700" }}>Pendaftaran<span style={{ color: "#2de90f" }}><br />TK Al-Muhajirin</span></h1>
            <section className="card reguler" id="card">
                <div className="row">
                    <div className="col-md-6 ">
                        <input type="checkbox" name="reguler" id="regClass" style={{ marginRight: "10px" }} />
                        <label for="regClass" style={{ fontSize: "32px", fontWeight: "700" }}>Kelas Reguler</label>
                        <hr />
                        <p style={{ marginTop: "30px" }}>Kegiatan</p>
                        <ul style={{ color: "black" }}>
                            <li>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus totam reprehenderit porro dolore dolorum ullam eveniet ex, sed, reiciendis dolor, suscipit quaerat ducimus hic aliquam iusto consectetur dolores
                                necessitatibus laudantium?
                            </li>
                            <li>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora inventore cumque molestias quia minus quibusdam explicabo est saepe vero ipsum, veritatis animi aliquid esse voluptatibus labore expedita odit libero
                                accusamus.
                            </li>
                            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi saepe accusantium minus, unde praesentium alias iure consequatur, nostrum illo officia vel vero atque quis, nihil magnam odio esse harum sunt.</li>
                        </ul>
                        <a className="btn btn-info" href="/" style={{ backgroundColor: "#479242", color: "white", fontWeight: "400", textShadow: "none" }}>Download Kurikulum TK Al-Muhajirin</a>
                    </div>
                    <div className="col-md-6 text-center d-flex align-items-center" >
                        <div className="row mt-3">
                            <h2 style={{ fontSize: "32px", fontWeight: "700" }}>Kelas Reguler</h2>
                            <h2 style={{ fontSize: "32px", fontWeight: "700" }}>Rp. 2.000.000</h2>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- Modal --> */}
            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-lg">
                    <div className="modal-content" style={{ backgroundImage: `url('./image/unsplash_Xh6BpT-1tXo.png')` }}>
                        <div className="modal-header justify-content-center">
                            <h1 className="modal-title text-center" id="exampleModalLabel">Kelas Seni</h1>
                        </div>
                        <div className="modal-body">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-6">
                                        <h2>Kegiatan</h2>
                                        <ol>
                                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                                        </ol>
                                        <h3>Rp.300.000</h3>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="card">
                                            <div className="card-body">
                                                <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                                                    <div className="carousel-indicators">
                                                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                                    </div>
                                                    <div className="carousel-inner">
                                                        <div className="carousel-item active">
                                                            <img src="./image/sentra-seni-dan-kreativitas.jpg" width="400px" height="200px" className="d-block w-100" alt="kelas seni" />
                                                        </div>
                                                        <div className="carousel-item">
                                                            <img src="./image/sentra-balok.jpg" width="400px" height="200px" className="d-block w-100" alt="kelas seni" />
                                                        </div>
                                                        <div className="carousel-item">
                                                            <img src="./image/sentra-persiapan.jpg" width="400px" height="200px" className="d-block w-100" alt="kelas seni" />
                                                        </div>
                                                    </div>
                                                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                                        <span className="visually-hidden">Previous</span>
                                                    </button>
                                                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                                        <span className="visually-hidden">Next</span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Tutup</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
