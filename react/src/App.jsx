import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
import MobilePlans from './Components/MobilePlans/MobilePlans';
import SmartphoneList from "./Components/Devices/SmartphoneList";
import CellPhoneList from './Components/Devices/CellPhoneList';
import SmartWatchList from './Components/Devices/SmartWatchList';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import Snowflakes from './Snowflakes';
import AboutUs from './Components/AboutUs/AboutUs'
import NotFound from './Components/NotFound/NotFound'

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
          <Route path="smartphones" element={<SmartphoneList />} />
          <Route path="cellphones" element={<CellPhoneList />} />
          <Route path="smartwatches" element={<SmartWatchList />} />
          <Route path="mobile-plans" element={<MobilePlans />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<Navigate to='/404'/>} />

      </Routes>
      <Footer />
      <Snowflakes />
    </>
  )
}

export default App
