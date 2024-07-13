import { Routes, Route, BrowserRouter } from "react-router-dom"
import Inicial from "./pages/Inicial"
import NovoVideo from "./pages/NovoVideo"
import Header from "./componentes/Header"
import Footer from "./componentes/Footer"
import RolarPraCima from "./componentes/RolarPraCima"
import NaoEncontrado from "./pages/NaoEncontrado"

const AppRoutes = () => {
  
  return(
    <>
    <BrowserRouter>
    <RolarPraCima />
      <Routes>
        <Route path="/" element={<><Header/> <Inicial/> <Footer/></>}></Route>
        <Route path="/novo-video" element={<><Header/><NovoVideo /><Footer/></>}></Route>
        {/* <Route path="/video/:id" element={<><Header/><AssistirVideo/><Footer/></>}></Route> */}
        <Route path="*" element={<NaoEncontrado/>}></Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default AppRoutes