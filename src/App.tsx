
import './App.css'
import {Route, Routes, useNavigate} from "react-router";
import ContactPage from "./pages/ContactPage.tsx";
import WelcomePage from "./pages/WelcomePage.tsx";
import Headers from "./components/Headers.tsx";
import Properties from "./pages/Properties.tsx";
import About from "./pages/About.tsx";
import Faqs from './pages/Faqs.tsx';
import DescriptionPage from "./pages/DescriptionPage.tsx";
import LoginPage from "./pages/LoginPage.tsx";
import Register from "./pages/Register.tsx";
import TermsAndConditions from "./pages/TermsAndConditions.tsx";

import CreateListing from './pages/ADMIN/CreateListing.tsx';
import {useContext} from "react";
import {AuthContext} from "./context/AuthContext.tsx";
function App() {
    const isAuthenticated =useContext(AuthContext)
    const navigate =useNavigate()

    console.log(isAuthenticated)
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
            <Route path={"/create"} element={<CreateListing/>}/>
      </Routes>
    </div>
  )
}

export default App
