import React from 'react'

export default function Ekskul() {
    return (
        <div>
            <section className="card ekskul">
                <div className="row text-center">
                    <h2 style={{fontSize: '38px', fontWeight: '700'}}>Ekstrakurikuler</h2>
                    <div className="col-md-4">
                        <input type="radio" name="ekstra" id="seni" style={{marginRight: "10px"}} />
                        <label for="seni" style={{ fontSize: "28px", fontWeight: "700" }}> Kelas Seni </label>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur magnam voluptatem nobis eligendi debitis temporibus, aut, sit in obcaecati dolorum ducimus reprehenderit neque vel distinctio quisquam eius quo architecto
                            fugit.
                        </p>
                        <a className="btn btn-info" data-bs-toggle="modal" data-bs-target="#exampleModal" href="/" style={{ backgroundColor: "#479242", color: "white", fontWeight: "400 !important", textShadow: "none" }}>Detail</a>
                        <h4>Rp. 300.000</h4>
                    </div>
                    <div className="col-md-4">
                        <input type="radio" name="ekstra" id="coding" style={{marginRight: "10px"}} />
                        <label for="coding" style={{ fontSize: "28px", fontWeight: "700" }}> Kelas Coding </label>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur magnam voluptatem nobis eligendi debitis temporibus, aut, sit in obcaecati dolorum ducimus reprehenderit neque vel distinctio quisquam eius quo architecto
                            fugit.
                        </p>
                        <a className="btn btn-info" data-bs-toggle="modal" data-bs-target="#exampleModal" href="/" style={{ backgroundColor: "#479242", color: "white", fontWeight: "400 !important", textShadow: "none" }}>Detail</a>
                        <h4>Rp. 300.000</h4>
                    </div>
                    <div className="col-md-4">
                        <input type="radio" name="ekstra" id="piano" style={{marginRight: "10px"}} />
                        <label for="piano" style={{ fontSize: "28px", fontWeight: "700" }}> Kelas Piano </label>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur magnam voluptatem nobis eligendi debitis temporibus, aut, sit in obcaecati dolorum ducimus reprehenderit neque vel distinctio quisquam eius quo architecto
                            fugit.
                        </p>
                        <a className="btn btn-info" data-bs-toggle="modal" data-bs-target="#exampleModal" href="/" style={{ backgroundColor: "#479242", color: "white", fontWeight: "400 !important", textShadow: "none" }}>Detail</a>
                        <h4>Rp. 300.000</h4>
                    </div>
                </div>
            </section>
        </div>
    )
}
