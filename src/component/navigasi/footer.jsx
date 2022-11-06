import React from 'react'
import Group99 from '../../asset/img/Group99.png'
import Logowhite from '../../asset/img/Logowhite.png'
import '../../asset/css/footer.css'
import fb from '../../asset/img/fb.png'
import twit from '../../asset/img/twit.png'
import instagram from '../../asset/img/instagram.png'
import whatsapp from '../../asset/img/whatsapp.png'
import gmail from '../../asset/img/gmail.png'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <div>
            <footer style={{backgroundImage: `url(${Group99})`}}>
                <div className="row align-items-center px-5 py-3 pt-4" id="footer">
                    <div className="col-md-4 m-0">
                        <div className="row">
                            <div className="col-md-12 col-sm-12">
                                <ul style={{listStyleType: "none"}}>
                                    <div className="li-kiri">
                                        <h3 style={{fontWeight: "700"}}>Content</h3>
                                    </div>
                                </ul>
                            </div>
                            <div className="col-md-6 col-sm-6">
                                <ul style={{listStyleType: "none"}}>
                                        <li><Link style={{textDecoration: "none", color: "white", fontWeight: "700"}} to="/">Home</Link></li>
                                        <li><Link style={{textDecoration: "none", color: "white", fontWeight: "700"}} to="/pengajar">Pengajar</Link></li>
                                        <li><Link style={{textDecoration: "none", color: "white", fontWeight: "700"}} to="/fasilitas">Fasilitas</Link></li>
                                </ul>
                            </div>
                            <div className="col-md-6 col-sm-6">
                                <ul style={{listStyleType: "none", textDecoration: "none"}}>
                                    <div className="li-kanan">
                                        <li><Link style={{textDecoration: "none", color: "white", fontWeight: "700"}} to="/">Shop</Link></li>
                                        <li><Link style={{textDecoration: "none", color: "white", fontWeight: "700"}} to="/profil">Profil</Link></li>
                                        <li><Link style={{textDecoration: "none", color: "white", fontWeight: "700"}} to="/">Contact</Link></li>
                                    </div>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 align-items-center">
                        <div className="foot-tengah" style={{textAlign: "center"}}>
                            <a href="/"><img src={fb} alt="" /></a>
                            <a href="/"><img src={twit} alt="" /></a>
                            <a href="/"><img src={instagram} alt="" /></a>
                            <a href="/"><img src={whatsapp} alt="" /></a>
                            <a href="/"><img src={gmail} alt="" /></a>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="foot-kanan">
                            <img src={Logowhite} alt="logo" height="90px" />
                            <p>©TK Al-Muhajirin 2022</p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}
