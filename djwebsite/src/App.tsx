import { Routes, Route } from "react-router";
import {Header} from "../Pages/Header"
import {AboutPage} from "../Pages/AboutPage"
import {MixesPage} from "../Pages/MixesPage"
import {PressPack} from "../Pages/PressPack"
import {ContactPage} from "../Pages/Contact"
import {EventsPage} from "../Pages/Events"
import './App.css'

function App() {
  

  return (
    <>
    <div>
      <Header/>

    </div>
    <Routes>
      <Route path="/About" element={<AboutPage />} />
      <Route path="/Mixes" element={<MixesPage />} />
      <Route path="/PressPack" element={<PressPack />}/>
      <Route path="/Contact" element={<ContactPage />}/>
      <Route path="/Events" element={<EventsPage />}/>
    </Routes>
    </>
  )
}

export default App
