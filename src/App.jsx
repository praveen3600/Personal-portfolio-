import Footer from "./components/Footer";
import HeaderComponent from "./components/HeaderComponent";
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from "./pages/Home";
import Services from "./pages/Services";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
function App(){
  return(
    <>
       <BrowserRouter>
          <HeaderComponent/>
            <Routes>
              <Route path="/" element={<Home/>}></Route>
              <Route path="/services" element={<Services/>}></Route>
              <Route path="/about" element={<AboutUs/>}></Route>
              <Route path="/contact" element={<ContactUs/>}></Route>
            </Routes>
          <Footer/>
       </BrowserRouter>
       
       
       
    </>
  )
}
export default App;