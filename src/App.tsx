
import './App.css'
import {Route, Routes, useNavigate} from "react-router";
import ContactPage from "./pages/ContactPage.tsx";
import WelcomePage from "./pages/WelcomePage.tsx";
import Headers from "./components/Headers.tsx";
import Properties from "./pages/Properties.jsx";
import About from "./pages/About.tsx";
import Faqs from './pages/Faqs.tsx';
import DescriptionPage from "./pages/DescriptionPage.tsx";
import LoginPage from "./pages/LoginPage.tsx";
import Register from "./pages/Register.tsx";
import TermsAndConditions from "./pages/TermsAndConditions.tsx";



function App() {
    const jwt=sessionStorage.getItem("token")
    const navigate =useNavigate()
    if(jwt ===""){
        navigate("/login")
        return
    }

  return (
    <div className={"app"}>
        <Headers/>
        <Routes>
            <Route path={"/contact"} element={<ContactPage/>}/>
            <Route path={"/"} element={<WelcomePage/>}/>
            <Route path={"/terms-and-conditions"} element={<TermsAndConditions/>}/>
            <Route path={"/properties"} element={<Properties/>}/>
            <Route path={"/about"} element={<About/>}/>
            <Route path={"/faqs"} element={<Faqs/>}/>
            <Route path={"*"} element={<LoginPage/>}/>
            <Route path={"/signup"} element={<Faqs/>}/>
            <Route path={"/description/:id"} element={<DescriptionPage/>}/>
            <Route path={"/login"} element={<LoginPage/>}/>
            <Route path={"/register"} element={<Register/>}/>
      </Routes>
    </div>
  )
}

export default App
