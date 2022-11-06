import React from 'react'
import Footer from '../navigasi/footer'
import Header from '../navigasi/header'
import unsplashsJuDgtkUyYs from '../../asset/img/unsplashsJuDgtkUyYs.png'
import HeroDaftar from '../content/pendaftaranContent/heroDaftar'
import Ekskul from '../content/pendaftaranContent/ekskul'
import FormDaftarAnak from '../content/pendaftaranContent/formDaftarAnak'
import ('../../asset/css/pendaftaran.css')

export default function Pendaftaran() {
    return (
        <div style={{backgroundImage: `url('${unsplashsJuDgtkUyYs}')`, backgroundRepeat: "no-repeat"}}>
            <Header />
            <main style={{paddingBottom: "30px"}}>
                <div class="container">
                    <HeroDaftar />
                    <hr />
                    <Ekskul />
                    <hr />
                    <FormDaftarAnak />
                </div>
            </main>
            <Footer />
        </div>
    )
}
