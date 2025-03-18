import { Routes, Route } from "react-router";
import {Header} from "../Components/Pages/Header"
import {AboutPage} from "../Components/Pages/AboutPage"
import {MixesPage} from "../Components/Pages/MixesPage"
import {PressPack} from "../Components/Pages/PressPack"
import {ContactPage} from "../Components/Pages/Contact"
import {EventsPage} from "../Components/Pages/Events"
import {Synth} from "../Components/Pages/Synth"
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
