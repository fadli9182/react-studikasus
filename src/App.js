import { Route, Routes } from "react-router-dom";
import Home from "./component/pages/home";
import Pengajar from "./component/pages/pengajar";
import Fasilitas from "./component/pages/fasilitas";
import Profil from "./component/pages/profil";
import Contact from "./component/pages/contact";
import Shop from "./component/pages/shop";
import Pendaftaran from "./component/pages/pendaftaran";
import Login from "./component/pages/login";
import Register from "./component/pages/register";
import Keranjang from "./component/pages/keranjang";
import Checkout from "./component/pages/checkout";
import ProfileUser from "./component/pages/profileuser";
import Admin from "./component/pages/admin";
import EditProduk from "./component/pages/editProduk";
import EditPengajar from "./component/pages/editPengajar";
import RiwayatTransaksi from "./component/pages/riwayatTransaksi";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pengajar" element={<Pengajar />} />
        <Route path="/fasilitas" element={<Fasilitas />} />
        <Route path="/profil" element={<Profil />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/pendaftaran" element={<Pendaftaran />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/keranjang" element={<Keranjang />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/user" element={<ProfileUser />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/editproduk" element={<EditProduk />} />
        <Route path="/editpengajar" element={<EditPengajar />} />
        <Route path="/riwayat" element={<RiwayatTransaksi />} />
      </Routes>
    </>
  );
}

export default App;
