
import './App.css'
import {Route, Routes} from "react-router";
import ContactPage from "./pages/ContactPage.tsx";
import WelcomePage from "./pages/WelcomePage.tsx";
import Headers from "./components/Headers.tsx";
import Properties from "./pages/Properties.tsx";

function App() {

  return (
    <div className={"app"}>
        <Headers/>
      <Routes>
          <Route path={"/contact"} element={<ContactPage/>}/>
          <Route path={"/"} element={<WelcomePage/>}/>
          <Route path={"/properties"} element={<Properties/>}/>
      </Routes>
    </div>
  )
}

export default App
