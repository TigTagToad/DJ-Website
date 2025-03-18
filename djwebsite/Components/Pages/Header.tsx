
import {Link} from "react-router-dom"

export const Header =() =>{
    return (
        <header id="nav-header">
        <h1>YYRE</h1>
        <nav>
            <Link to="/about" className="nav-link"> About </Link>
            <Link to="/mixes" className="nav-link"> Mixes </Link>
            <Link to="/press-pack" className="nav-link"> Press Pack </Link>
            <Link to="/contact" className="nav-link"> Contact </Link>
            <Link to="/events" className="nav-link"> Events </Link>
            <Link to="/synth" className="nav-link"> Synth </Link>
        </nav>
    </header>
    )
    
    }