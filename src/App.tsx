
import './App.css'
import {Route, Routes} from "react-router";
import ContactPage from "./pages/ContactPage.tsx";
import WelcomePage from "./pages/WelcomePage.tsx";
import Headers from "./components/Headers.tsx";
import Properties from "./pages/Properties.tsx";
import About from "./pages/About.tsx";
import Faqs from './pages/Faqs.tsx';
import DescriptionPage from "./pages/DescriptionPage.tsx";
import LoginPage from "./pages/LoginPage.tsx";



function App() {

  return (
    <div className={"app"}>
        <Headers/>
      <Routes>
          <Route path={"/contact"} element={<ContactPage/>}/>
          <Route path={"/"} element={<WelcomePage/>}/>
          <Route path={"/properties"} element={<Properties/>}/>
          <Route path={"/about"} element={<About/>}/>
          <Route path={"/faqs"} element={<Faqs/>}/>
          <Route path={"/login"} element={<LoginPage/>}/>
          <Route path={"*"} element={<LoginPage/>}/>
          <Route path={"/signup"} element={<Faqs/>}/>
          <Route path={"/description/:id"} element={<DescriptionPage/>}/>
      </Routes>
    </div>
  )
}

export default App
