import React from 'react'
import { FaCompass, FaMailBulk, FaPhone } from 'react-icons/fa'

function Lokasi() {
    return (
        <div>
            <section className="lokasi text-center" style={{marginBottom: "50px"}}>
                <div className="container Lokasi">
                    <h1 className="pb-3">Lokasi Kami</h1>
                    <div data-aos='fade-left' className="row align-items-center" style={{textAlign: "justify"}}>
                        <div className="col-md-6 my-3" style={{padding: "0 20px"}}>
                            <p><FaCompass/> Jl. Arteri Jorr Jatiwarna No.15, RT.001/RW.009, Jatiwarna, Kec. Pd. Melati, Kota Bekasi, Jawa Barat 17415</p>
                            <p><FaPhone /> 0208208102801</p>
                            <a href="/"><FaMailBulk/> tkalmuhajirin@gmail.com</a>
                        </div>
                        <div className="col-md-6 col-sm-12 ps-3 text-center mb-5">
                            <iframe
                                width="440"
                                title='biji'
                                height="268"
                                frameBorder="0"
                                scrolling="no"
                                marginHeight="0"
                                marginWidth="0"
                                src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=bekasi+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
                                    <a href="https://www.maps.ie/distance-area-calculator.html">distance maps</a>
                                    </iframe>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Lokasi
