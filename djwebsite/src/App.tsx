import { Routes, Route } from "react-router";
import {Header} from "../Pages/Header"
import {AboutPage} from "../Pages/AboutPage"
import {MixesPage} from "../Pages/MixesPage"
import {PressPack} from "../Pages/PressPack"
import {ContactPage} from "../Pages/Contact"
import {EventsPage} from "../Pages/Events"
import {Synth} from "../Pages/Synth"
import './App.css'

function App() {
  

  return (
    <>
    <div>
      <Header/>

    </div>
    <Routes>
      <Route path="/about" element={<AboutPage />} />
      <Route path="/mixes" element={<MixesPage />} />
      <Route path="/press-pack" element={<PressPack />}/>
      <Route path="/contact" element={<ContactPage />}/>
      <Route path="/events" element={<EventsPage />}/>
      <Route path="/synth" element={<Synth />}/>
    </Routes>
    </>
  )
}

export default App
