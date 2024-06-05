import { Navigate, Route, Routes } from "react-router-dom"
import Bloques from "./Components/bloques"
import Button from "./Components/button"
import Layout from "./Components/layout"
import NavBar from "./Components/navbar"

import Inicio from "./pages/inicio"
import Cursos from "./pages/cursos"
import Login from "./pages/login"
import Registro from "./pages/registro"
import Footer from "./Components/footer"
import Sistemas from "./pages/sistemas"
import Industrial from "./pages/industrial"
import Gestion from "./pages/gestion"
function App() {

  return (
    <>
      <div className="bg-green-50				  min-h-screen	">
        <NavBar></NavBar>
        <Layout>
          <Routes>
            <Route path='/' element={<Inicio></Inicio>}></Route>
            <Route path="/cursos" element={<Cursos></Cursos>}></Route>
            <Route path="/login" element={<Login></Login>}></Route>
            <Route path="/registro" element={<Registro></Registro>}></Route>
            <Route path="/cursos/sistemas" element={<Sistemas></Sistemas>}></Route>
            <Route path="/cursos/industrial" element={<Industrial></Industrial>}></Route>
            <Route path="/cursos/gestion" element={<Gestion></Gestion>}></Route>
            <Route path="*" element={<Navigate to="/"></Navigate>}></Route>
          </Routes>
        </Layout>
        <Footer></Footer>
        {/* <Bloques></Bloques> */}
      </div>

    </>
  )
}


export default App
